const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    source: {
        id: { type: String },
        name: { type: String, required: true }
    },
    author: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    urlToImage: { type: String, required: true },
    publishedAt: { type: String, required: true },
    content: { type: String },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('News', schema);