import { response, request } from 'express';
import jwt from 'jsonwebtoken';


export const validateJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).send({
            ok: false,
            msg: ' No se ha recibido el token para la autenticación'
        });
    }

    try {
        
        const { username } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED
        )

        req.username = username;
        
    } catch (error) {
        return res.status(401).send({
            ok: false,
            msg: 'Token no valido'
        });
    }

    next();    
}