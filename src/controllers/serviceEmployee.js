import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';
import { validatorService } from '../middlewares/validatorService'


export const serviceEmployeeGetById = async(req, res = response) => {
  
  try {
      const id = req.params.id;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("servicioId", id)
          .input("combo", false)
          .execute(queries.serviceEmployeeGetById);
      
      const recordset  = result.recordset;
      
      if ( recordset.length === 0 ) {
          return res.status(404).json({
              ok: false,
              msg: 'No extisten registros'
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
}

export const serviceEmployeeAddNew = async(req, res = response) => {

  try {

      const { empleadoId, servicioId, categoria, sinCronograma } = req.body;
  
      const pool = await getConnection();
    
      const result = await pool.request()
          .input("empleadoId", empleadoId)
          .input("servicioId", servicioId)
          .input("categoria", categoria)
          .input("sinCronograma", sinCronograma)
          .execute(queries.serviceEmployeeAddNew);

      const { ID:resultado } = result.recordset[0];

      res.status(201).json({
        ok: true,
        resultado: resultado,
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

export const serviceEmployeeUpdateById = async(req, res = response) => {

  try {

      const { categoria, sinCronograma } = req.body;

      const { id } = req.params;

      const pool = await getConnection();
  
      await pool.request()
          .input("empleadoServicioId", id)
          .input("categoria", categoria)
          .input("sinCronograma", sinCronograma)
          .execute(queries.serviceEmployeeUpdateById);

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

export const serviceEmployeeDeleteById = async(req, res = response) => {

  try {
      
      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("empleadoServicioId", id)
          .execute(queries.serviceEmployeeDeleteById);

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