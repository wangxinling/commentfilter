const axios = require("axios")

class aiController {
    // render page
    start(req, res) {
      res.render("layout/index",{template: 'ai',isLogined: true,});
    }
    prediction(req, res){
        const text = req.params.text;
        const options = {
            method: 'GET',
            url: `http://localhost:8080/prediction/${text}`
        };
        // the url for docker compose
        // url: `http://tensorflow:8080/prediction/${text}`
        try {
            axios.request(options).then((response) => {
                const predictionData =response.data;
                const isToxic = predictionData.predictions[6].results[0].match;
                //only check is a toxic message
                console.log(isToxic);
                res.write(isToxic.toString());
                res.end();
            }).catch((err) => {
                console.error(err);
            });
        } catch (err) {
            console.log(err);
            res.status(401).send();
    
        }

    }
}

module.exports = aiController;