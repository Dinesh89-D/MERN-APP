import express from 'express';
import { test, updateUser } from '../api/controllers/user.controllers.js';
import { verifyToken } from '../api/utils/verify.js';

const router = express.Router();

router.get('/',test);
router.post("/update/:id",verifyToken,updateUser);


export default router;