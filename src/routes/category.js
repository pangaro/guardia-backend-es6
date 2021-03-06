/*
Rutas de category
host + api/category
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  categoryGetAll,
  categoryAddNew,
  categoryGetById,
  categoryUpdateById,
  categoryDeleteById,
} from "../controllers/category";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();

router.use( validateJWT );

router.get("/category", categoryGetAll);

router.get("/category/:id", categoryGetById);

router.post(
  "/category/new",
  [
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validatorField
  ],
  categoryAddNew
);

router.put(
  "/category/:id",
  [
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validatorField
],
  categoryUpdateById
);

router.delete("/category/:id", categoryDeleteById);

export default router;
