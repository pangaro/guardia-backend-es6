import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const holidayGetAll = async (req, res = response) => {

    try {

        const { anio, mes } = req.body;

        const m = (typeof mes !== "undefined") ? mes : null;

        const pool = await getConnection();
    
        const result = await pool.request()
            .input("anio", anio)
            .input("mes", m)
            .execute(queries.holidayGetAll);
        
        const { recordset}   = result;

        if ( !recordset ) {
            return res.status(404).json({
                ok: false,
                msg: 'No extisten registros para este período'
            });
        }

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

export const holidayAddNew = async(req, res = response) => {

  try {

      const { fecha, descripcion, porServicio } = req.body;
  
      const pool = await getConnection();
    
      const result = await pool.request()
          .input("fecha", fecha)
          .input("descripcion", descripcion)
          .input("porServicio", porServicio)
          .execute(queries.holidayAddNew);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado === 0) {
          return res.status(303).json({
              ok: false,
              msg: 'El feriado ya existe'
          });
      }

      res.status(201).json({
        ok: true,
        msg: 'Datos guardados correctamente'
      });
      
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
}

export const holidayUpdateById = async(req, res = response) => {

  try {

      const { fecha, descripcion, porServicio } = req.body;

      const { id } = req.params;

      const pool = await getConnection();
  
      await pool.request()
          .input("feriadoId", id)
          .input("fecha", fecha)
          .input("descripcion", descripcion)
          .input("porServicio", porServicio)
          .execute(queries.holidayUpdateById);

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

export const holidayDeleteById = async(req, res = response) => {

  try {
      
      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("feriadoId", id)
          .execute(queries.holidayDeleteById);

          const { Resultado:resultado } = result.recordset[0];

      if ( resultado !== 1) {
          return res.status(303).json({
              ok: false,
              msg: 'ocurrió un error al eliminar'
          });
        }

        res.status(201).json({
            ok: true,
            msg: 'Datos eliminados correctamente'
        });

  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
};