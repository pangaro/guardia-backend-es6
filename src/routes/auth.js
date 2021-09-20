/*
Rutas de auth
host + api/auth
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  userLogin,
  userToken,
} from "../controllers/auth";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();



router.post(
    '/login',
    [
        check('username', 'El usuario es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validatorField
    ],
    userLogin );


router.get(
    '/renew', validateJWT, userToken );

export default router;
