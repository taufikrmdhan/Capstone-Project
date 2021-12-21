import express from "express";

import { 
    getAllDht11,
    createDht,
    getDhtById,
    updateDht,
    deleteDht
} from "../controllers/Dht11.js";



const router = express.Router();

router.get('/', getAllDht11);
router.get('/:id', getDhtById);
router.post('/', createDht);
router.patch('/:id', updateDht);
router.delete('/:id', deleteDht);



export default router;