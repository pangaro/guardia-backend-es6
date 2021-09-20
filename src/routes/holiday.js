/*
Rutas de holiday
host + api/holiday
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  holidayAddNew,
  holidayGetAll,
  //categoryGetById,
  holidayUpdateById,
  holidayDeleteById,
} from "../controllers/holiday";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();

router.use( validateJWT );

router.get(
  "/holiday",
  [
    check('anio', 'El año es obligatorio').not().isEmpty(),

    validatorField
  ],
  holidayGetAll
);

router.post(
  "/holiday/new",
  [
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validatorField
  ],
  holidayAddNew
);

router.put(
  "/holiday/:id",
  [
    check('fecha', 'La fecha es obligatoria').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validatorField
],
    holidayUpdateById
);

router.delete("/holiday/:id", holidayDeleteById);

export default router;
