const express = require('express');
const router = express.Router();
const newsService = require('./news.service');

// routes
router.get('/', getAll);
router.post('/', create);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    newsService.getAll()
        .then(news => res.json(news))
        .catch(err => next(err));
}

function create(req, res, next) {
    newsService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    newsService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}