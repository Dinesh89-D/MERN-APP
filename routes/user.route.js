import express from 'express';
import { test } from '../api/controllers/user.controllers.js';

const router = express.Router();

router.get('/',test);


export default router;