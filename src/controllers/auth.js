import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';
import { encryptext, decryptext } from '../middlewares/userPassword';
import { generateJWT } from '../helpers/jwt';

export const userLogin = async(req, res = response) => {

    try {

        const { username, password:strText } = req.body;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("Usuario", username)
            .execute(queries.userValidate);
        
        const { Pass:pass, Resultado:resultado }  = result.recordset[0];

        if ( resultado !== '1' ) {
            return res.status(500).json({
                ok: false,
                msg: 'El usuario no extiste'
            });
        }

        if ( pass.length ) {

            const passInput = encryptext(strText);
            const passDB = decryptext(pass);

            if ( JSON.stringify(passInput) !== JSON.stringify(passDB)) {
                return res.status(500).json({
                    ok: false,
                    msg: 'Contraseña incorrecta'
                });
            }
            
            const token = await generateJWT(username);

            res.status(200).json({
                ok: true,
                username : username,
                token
            });         
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el Administrador'
        });
    }
}

export const userToken = async(req, res = response) => {

    const { username } = req;

    const token = await generateJWT(username);
    res.json({
        ok: true,
        username:username,
        token
    })
}