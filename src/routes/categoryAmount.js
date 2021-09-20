/*
Rutas de categoryAmount
host + api/categoryAmount
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  categoryAmountGetAll,
  categoryAmountAddNew,
  categoryAmountUpdateById,
  categoryAmountDeleteById,
} from "../controllers/categoryAmount";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();

router.use( validateJWT );

router.get(
  "/categoryAmount",
  [
    check('anio', 'El año es obligatorio').not().isEmpty(),
    validatorField
  ],
  categoryAmountGetAll
);

router.post(
  "/categoryAmount/new",
  [
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validatorField
  ],
  categoryAmountAddNew
);

router.put(
  "/categoryAmount/:id",
  categoryAmountUpdateById
);

router.delete("/categoryAmount/:id", categoryAmountDeleteById);

export default router;
