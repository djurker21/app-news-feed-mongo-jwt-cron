const db = require('_helpers/db');
const Favorite = db.Favorite;
const News = db.News;

async function getAllByUserId(id) {
    return await Favorite.find({userId: id});
}

async function copy(newsId, userId) {
    let news = await News.findById(newsId);
    const favorite = new Favorite(
        {
            source: {
                id: news.source.id,
                name: news.source.name
            },
            author: news.author,
            title: news.title,
            description: news.description,
            url: news.url,
            urlToImage: news.urlToImage,
            publishedAt: news.publishedAt,
            content: news.content,
            userId: userId
        }
    );
    await favorite.save();
}

async function _delete(id) {
    await Favorite.findByIdAndRemove(id);
}

module.exports = {
    getAllByUserId,
    copy,
    delete: _delete
};