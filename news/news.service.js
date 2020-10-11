const db = require('_helpers/db');
const News = db.News;

async function getAll() {
    return await News.find();
}

module.exports = {
    getAll
};