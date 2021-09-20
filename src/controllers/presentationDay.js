import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const presentationDayGetAll = async (req, res = response) => {
  try {
      const pool = await getConnection();
  
      const result = await pool.request()
          .execute(queries.presentationDayGetAll);

      const { recordset } = result;

      res.status(200).json({
          ok: true,
          recordset,
      });
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
};

export const presentationDayUpdateById = async(req, res = response) => {

  try {
      const { diaInicio, diaFin } = req.body;

      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("guardiaModalidadId", id)
          .input("diaInicio", diaInicio)
          .input("diaFin", diaFin)
          .execute(queries.presentationDayUpdateById);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado !== 1) {
          return res.status(303).json({
              ok: false,
              msg: 'ocurrió un error al modificar'
          });
        }

        res.status(201).json({
            ok: true,
            msg: 'Datos modificados correctamente'
        });
    
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
}
