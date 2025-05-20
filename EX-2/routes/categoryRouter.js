import express from 'express';
import {
    getAllCategories,
    getCategoryById,
    createNewCategory,
    updateCategoryInfo,
    deleteCategory,
    getArticlesByCategoryId,
} from '../controllers/categoryController.js';
import validateCategory from '../middleware/validateCategory.js';

const categoryRouter = express.Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategoryById);
categoryRouter.post('/', createNewCategory);
categoryRouter.put('/:id',validateCategory, updateCategoryInfo);
categoryRouter.delete('/:id',validateCategory, deleteCategory);
categoryRouter.get('/:id/articles', getArticlesByCategoryId);

export default categoryRouter;