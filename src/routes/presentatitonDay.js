/*
Rutas de presentationDay
host + api/presentationDay
*/
import { Router } from "express";
import { check } from 'express-validator';
import {
  presentationDayGetAll,
  presentationDayUpdateById,
} from "../controllers/presentationDay";
import { validateJWT } from '../middlewares/validateJWT';
import { validatorField } from '../middlewares/validatorField';

const router = Router();

router.use( validateJWT );

router.get("/presentationDay", presentationDayGetAll);

router.put(
  "/presentationDay/:id",
  [
    check('diaInicio', 'El dia de inicio es obligatorio').not().isEmpty(),
    check('diaFin', 'El dia de fin es obligatorio').not().isEmpty(),
    validatorField
],
presentationDayUpdateById
);

export default router;
