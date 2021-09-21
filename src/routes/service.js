import { Router } from "express";
import { check } from 'express-validator';
import {
  serviceGetAll,
  serviceAddNew,
  serviceUpdateById,
  serviceDeleteById,
} from "../controllers/service";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField'

const router = Router();

router.use( validateJWT );

router.get("/service", serviceGetAll);

router.post(
  "/service/new",
  [
    check('servicio', 'El servicio es obligatorio').not().isEmpty(),
    check('servicioDependenciaID', 'La Dependencia es obligatoria').not().isEmpty(),
    check('username', 'El username es obligatorio').not().isEmpty(),
    validatorField
  ],
  serviceAddNew
);

router.put(
  "/service/:id",
  [
    check('servicio', 'El servicio es obligatorio').not().isEmpty(),
    check('servicioDependenciaID', 'La Dependencia es obligatoria').not().isEmpty(),
    check('username', 'El username es obligatorio').not().isEmpty(),
    validatorField
],
serviceUpdateById
);

router.delete("/service/:id", serviceDeleteById);

export default router;
