import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const securityServiceGetById = async(req, res = response) => {
  console.log(req.params.id)
  try {
      const id = req.params.id;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("servicioId", id)
          .execute(queries.securityServiceGetById);
      
      const recordset  = result.recordset;
      
      if ( recordset.length === 0 ) {
          res.status(404).json({
              ok: false,
              msg: 'No extisten registros'
          });
      } else {
          res.status(200).json({
              ok: true,
              recordset,
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

export const securityServiceAddNew = async(req, res = response) => {

  try {

      const { usuarioId, servicioId, presentar, username } = req.body;
  
      const pool = await getConnection();
    
      const result = await pool.request()
          .input("usuarioId", usuarioId)
          .input("servicioId", servicioId)
          .input("presentar", presentar)
          .input("usuario", username)
          .execute(queries.securityServiceAddNew);

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

export const securityServiceUpdateById = async(req, res = response) => {

  try {

      const { presentar, username } = req.body;

      const { id } = req.params;

      const pool = await getConnection();
  
      await pool.request()
          .input("usuarioServicioId", id)
          .input("presentar", presentar)
          .input("usuario", username)
          .execute(queries.securityServiceUpdateById);

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

export const securityServiceDeleteById = async(req, res = response) => {

  try {
      
      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("usuarioServicioId", id)
          .execute(queries.securityServiceDeleteById);

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