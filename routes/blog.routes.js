const express = require('express');
const router = express.Router();
const controller = require('../controllers/blog.controller')

router.get('/', controller.blog_index);

router.get('/create', controller.blog_create_post);

router.get('/:id', controller.blog_details);

router.post('/', controller.blog_create_get);

router.delete('/:id', controller.blog_delete);

module.exports = router;