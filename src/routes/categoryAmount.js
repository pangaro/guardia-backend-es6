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
    check('anio', 'El año es obligatorio').not().isEmpty(),
    check('modalidadHorariaID', 'La modalidad horaria es obligatoria').not().isEmpty(),
    check('diasServicioID', 'El dia servicio es obligatorio').not().isEmpty(),
    check('guardiaTipoID', 'La guardia tipo es obligatoria').not().isEmpty(),
    check('monto', 'El monto es obligatorio').not().isEmpty(),
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
