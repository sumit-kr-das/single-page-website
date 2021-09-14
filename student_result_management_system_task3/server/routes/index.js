import express from "express";
const router = express.Router();

import { registerAdmin, loginAdmin, addMarks, getMarks } from '../controllers';

router.post('/registerAdmin',registerAdmin.register);
router.post('/loginAdmin',loginAdmin.login);
router.post('/addMarks',addMarks.marks);
router.get('/getMarks',getMarks.marks);

export default router;