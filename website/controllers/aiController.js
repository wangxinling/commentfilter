const axios = require("axios")

class aiController {
    // render page
    start(req, res) {
        res.render("layout/index", { template: 'ai', isLogined: true, });
    }
    async prediction(req, res) {
        const text = req.params.text;
        try {
            const result = await this.predictComment(text);
            res.write(result);
            res.end();
        }
        catch (err) {
            console.log(err);
            res.status(401).send();
        }
    }
    async predictComment(text) {
        const options = {
            method: 'GET',
            url: `http://localhost:8080/prediction/${text}`
        };
        // the url for docker compose
        // url: `http://tensorflow:8080/prediction/${text}`
        try{
            let response = await axios.request(options)
            const predictionData = response.data;
            const isToxic = predictionData.predictions[6].results[0].match;
            //only check is a toxic message
            return isToxic.toString();

        }
        catch(err) {
            console.error(err);
            return err;
        };
    }
}

module.exports = new aiController();