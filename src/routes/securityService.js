import { Router } from "express";
import { check } from 'express-validator';
import {
  securityServiceGetById,
  securityServiceAddNew,
  securityServiceUpdateById,
  securityServiceDeleteById,
} from "../controllers/securityService";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField'

const router = Router();

router.use( validateJWT );

router.get("/securityService/:id", securityServiceGetById);

router.post(
  "/securityService/new",
  [
    check('usuarioId', 'El usuario es obligatorio').not().isEmpty(),
    check('servicioId', 'El servicio es obligatorio').not().isEmpty(),
    check('username', 'El username es obligatorio').not().isEmpty(),
    validatorField
  ],
  securityServiceAddNew
);

router.put(
  "/securityService/:id",
  [
    check('username', 'El username es obligatorio').not().isEmpty(),
    validatorField
],
securityServiceUpdateById
);

router.delete("/securityService/:id", securityServiceDeleteById);

export default router;
