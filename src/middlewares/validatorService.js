import { response }from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';

export const validatorService = async( id, res = response ) => {

    try {

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("servicioId", id)
            .execute(queries.serviceQueryDeleteById);
  
        const { Resultado:resultado } = result.recordset[0];

        return resultado;

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el Administrador'
        });
    }
}