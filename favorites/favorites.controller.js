const express = require('express');
const router = express.Router();
const faroriteService = require('./favorite.service');

// routes
router.get('/', getAllByUserId);
router.post('/save/:id', create);
router.delete('/:id', _delete);

module.exports = router;

function getAllByUserId(req, res, next) {
    faroriteService.getAllByUserId(req.user.sub)
        .then(favorites => res.json(favorites))
        .catch(err => next(err));
}

function create(req, res, next) {
    faroriteService.copy(req.params.id, req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    faroriteService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}