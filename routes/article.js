const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const articleAdminController = require('../controllers/admin/articles');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);

router.post('/create', articleAdminController.createArticle);
router.get('/edit/:id', articleAdminController.updateArticle);
router.post('/edit/:id', articleAdminController.updateArticle);
router.post('/delete/:id', articleAdminController.deleteArticle)

module.exports = router;