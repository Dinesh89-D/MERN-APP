import express from 'express';
import { google, signin, signup,signout } from '../api/controllers/auth.controllers.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google);
router.get("/signout", signout);
export default router;
