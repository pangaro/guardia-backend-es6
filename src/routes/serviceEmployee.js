import { Router } from "express";
import { check } from 'express-validator';
import {
  serviceEmployeeGetById,
  serviceEmployeeAddNew,
  serviceEmployeeUpdateById,
  serviceEmployeeDeleteById,
} from "../controllers/serviceEmployee";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField'

const router = Router();

router.use( validateJWT );

router.get("/serviceEmployee/:id", serviceEmployeeGetById);

router.post(
  "/serviceEmployee/new",
  [
    check('empleadoId', 'El empleado es obligatorio').not().isEmpty(),
    check('servicioId', 'El servicio es obligatorio').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    validatorField
  ],
  serviceEmployeeAddNew
);

router.put(
  "/serviceEmployee/:id",
  [
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    validatorField
],
serviceEmployeeUpdateById
);

router.delete("/serviceEmployee/:id", serviceEmployeeDeleteById);

export default router;
