import { Router } from "express";
import { check } from 'express-validator';
import {
  categoryGet,
  categoryNew,
  categoryGetId,
  categoryDeleteById,
  categoryUpdate,
} from "../controllers/category";


const router = Router();

router.get("/category", categoryGet);

router.post("/category/new", categoryNew);

router.get("/category/:id", categoryGetId);

router.delete("/category/:id", categoryDeleteById);

router.put("/category/:id", categoryUpdate);

export default router;
