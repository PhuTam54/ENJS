const express = require('express');
const router = express.Router();

const blogController = require('../app/controllers/BlogController');

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);

router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);

router.delete('/:id', blogController.deleteBlog);

module.exports = router;
