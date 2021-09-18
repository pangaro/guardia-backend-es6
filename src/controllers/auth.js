import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';
//import { decodeCP1252 } from '../helpers/userPassword';
// = require('windows-1252');

export const userLogin = async(req, res = response) => {
        console.log(req)
    try {

        const { username, password } = req.body;

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

            const text = 1//decodeCP1252(password);    

            if ( text !== pass ) {
                return res.status(500).json({
                    ok: false,
                    msg: 'Contraseña incorrecta'
                });
            } else {
                res.status(200).json({
                    ok: true,
                    msg: 'Contraseña Correcta'
                });
            }
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el Administrador'
        });
    }
}

export const userToken = (req, res = response) => {
    // res.send('Hello World')
    res.json({
        ok: true,
        msg: 'renew'
    })
}


//console.log(decodeCP1252('euge2504'));

//const encodedData = windows1252.encode();

//console.log(encodedData)
