import express from 'express';
import {
    getAllJournalists,
    getJournalistById,
    createNewJournalist,
    updateJournalistInfo,
    deleteJournalist,
    getArticlesByJournalistId,
} from '../controllers/journalistController.js';
import validateJournalist from '../middleware/validateJournalist.js';

const journalistRouter = express.Router();

journalistRouter.get('/', getAllJournalists);
journalistRouter.get('/:id', getJournalistById);
journalistRouter.post('/',validateJournalist, createNewJournalist);
journalistRouter.put('/:id',validateJournalist, updateJournalistInfo);
journalistRouter.delete('/:id', deleteJournalist);
journalistRouter.get('/:id/articles', getArticlesByJournalistId);

export default journalistRouter;