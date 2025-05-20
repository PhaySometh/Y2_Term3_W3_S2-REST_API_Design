import express from 'express';
import {
    getAllArticles,
    getArticleById,
    createNewArticle,
    updateArticleInfo,
    deleteArticle,
} from '../controllers/articleController.js';
import validateArticle from '../middleware/validateArticle.js';

const articleRouter = express.Router();

articleRouter.get('/', getAllArticles);
articleRouter.get('/:id', getArticleById);
articleRouter.post('/',validateArticle, createNewArticle);
articleRouter.put('/:id',validateArticle, updateArticleInfo);
articleRouter.delete('/:id', deleteArticle);

export default articleRouter;
