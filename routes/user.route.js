import express from 'express';
import { test, updateUser,deleteUser } from '../api/controllers/user.controllers.js';
import { verifyToken } from '../api/utils/verify.js';

const router = express.Router();

router.get('/',test);
router.post("/update/:id",verifyToken,updateUser);
router.delete("/delete/:id",verifyToken,deleteUser);



export default router;