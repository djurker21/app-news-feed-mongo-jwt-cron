const express = require('express');
const router = express.Router();
const newsService = require('./news.service');

// routes
router.get('/', getAll);

module.exports = router;

function getAll(req, res, next) {
    newsService.getAll()
        .then(news => res.json(news))
        .catch(err => next(err));
}