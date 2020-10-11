const db = require('../_helpers/db');
const News = db.News;

const axios = require('axios');
require('dotenv').config();

function run() {
    axios.get('http://newsapi.org' + 
            '/v2/top-headlines?' +
            'country=us&' +
            'apiKey=' + process.env.newsApiKey)
    .then(function (response) {
        for (let i = 0; i < response.data.articles.length; i++) {
            const element = response.data.articles[i];
            try {
                News.create(element);   
            } catch (error) {
                console.log(error);
            }
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    });
};

exports.run = run;