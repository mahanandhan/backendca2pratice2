import express from 'express'
import { delReq, getReq, postReq, putReq } from '../controller/bookController.js';

const router = express.Router();

router.post('/books', postReq);
router.get('/books', getReq);
router.delete('/books/:id', delReq)
router.put('/books/:id', putReq)

export default router