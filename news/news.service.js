const db = require('_helpers/db');
const News = db.News;

async function getAll() {
    return await News.find();
}

async function create(newsParam) {
    const news = new News(newsParam);
    await news.save();
}

async function _delete(id) {
    await News.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    create,
    delete: _delete
};