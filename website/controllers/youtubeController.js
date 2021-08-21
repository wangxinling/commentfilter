const aiController = require("../controllers/aiController");

const { google } = require("googleapis");

const apiKey = "AIzaSyByTYdJ08pkI6LlHxKqIvy94mGiH7S7SDE";
const youtube = google.youtube({
    version: "v3",
    auth: apiKey,
})

class youtubeController {
    // render page
    start(req, res) {
        res.render("layout/index", { template: 'youtube', isLogined: true, });
    }
    async getcomments(req, res) {
        const videoID = req.params.videoID;

        try {
            const response = await youtube.commentThreads.list({
                part: "snippet",
                videoId: videoID
            });
            const comments = response.data.items.map((item) => ({ commentID: item.id, text: item.snippet.topLevelComment.snippet.textDisplay }));
            for (let key in comments) {
                const result = await aiController.predictComment(comments[key].text);
                comments[key]["isToxic"] = result;
            }

            res.send(comments);
        } catch (err) {
            console.log(err);
            res.status(401).send();

        }

    }

}

module.exports = youtubeController;