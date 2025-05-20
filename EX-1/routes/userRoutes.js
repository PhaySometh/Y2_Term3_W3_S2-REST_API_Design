import express from 'express';
import { getAllUsers, getUserById, createNewUser, updateUserById, deleteUserById } from '../controllers/userController.js';
import validateUser from '../middleware/validateUser.js';

const userRoutes = express.Router();

userRoutes.get('/users', getAllUsers);
userRoutes.get('/users/:id', getUserById);
userRoutes.post('/users',validateUser, createNewUser);
userRoutes.put('/users/:id', validateUser, updateUserById);
userRoutes.delete('/users/:id', deleteUserById);

export default userRoutes;