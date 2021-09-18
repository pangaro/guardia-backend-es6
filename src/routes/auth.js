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
const { validatorField } = require('../middlewares/validatorField');

const router = Router();



router.post(
    '/login',
    [
        check('username', 'El usuario es obligatorio').not().isEmpty(),
        check('password', 'La contraseña es obligatoria').not().isEmpty(),
        validatorField
    ],
    userLogin );


router.post(
    '/renew',
    [],
    userToken );


export default router;
