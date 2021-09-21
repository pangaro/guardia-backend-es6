/*
Rutas de serviceConfiguration
host + api/serviceConfiguration
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  serviceConfigurationAddNew,
  serviceConfigurationGetById,
  serviceConfigurationUpdateById,
  serviceConfigurationDeleteById,
} from "../controllers/serviceConfiguracion";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();

router.use( validateJWT );

router.get("/serviceConfiguration/:id", serviceConfigurationGetById);

router.post(
  "/serviceConfiguration/new",
  [
    check('servicioId', 'servicio es obligatorio').not().isEmpty(),
    check('guardiaTipoId', 'guardia tipo es obligatorio').not().isEmpty(),
    check('diasServicioId', 'dia servicio es obligatorio').not().isEmpty(),
    check('modalidadHorariaId', 'modalidad horaria es obligatoria').not().isEmpty(),
    check('guardiasPorDia', 'guardias por dia es obligatorio').not().isEmpty(),
    check('username', 'username es obligatorio').not().isEmpty(),
    validatorField
  ],
  serviceConfigurationAddNew
);

router.put("/serviceConfiguration/:id", serviceConfigurationUpdateById);

router.delete("/serviceConfiguration/:id", serviceConfigurationDeleteById);

export default router;
