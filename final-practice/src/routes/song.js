const express = require('express');
const router = express.Router();

const songController = require('../app/controllers/SongController');

router.get('/', songController.getAllSongs);
router.post('/', songController.createSong);

router.get('/:id', songController.getSongById);
router.put('/:id', songController.updateSong);

router.delete('/:id', songController.deleteSong);

module.exports = router;
