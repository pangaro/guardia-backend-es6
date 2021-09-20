import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';
import { validatorService } from '../middlewares/validatorService'


export const serviceGetAll = async (req, res = response) => {

  try {

      const pool = await getConnection();
  
      const result = await pool.request()
          .execute(queries.serviceGetAll);

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
/*
export const categoryGetId = async(req, res = response) => {
  
  try {
      const id = req.params.id;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("categoria", id)
          .execute(queries.categoryGetById);
      
      const recordset  = result.recordset[0];
      
      if ( !recordset ) {
          res.status(404).json({
              ok: false,
              msg: 'La categoria no extiste'
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
*/
export const serviceAddNew = async(req, res = response) => {

  try {

      const { servicio, servicioDependenciaID, sinCronograma, permisoPosGuardia } = req.body;
  
      const pool = await getConnection();
    
      const result = await pool.request()
          .input("servicio", servicio)
          .input("servicioDependenciaID", servicioDependenciaID)
          .input("sinCronograma", sinCronograma)
          .input("permisoGuardia", permisoPosGuardia)
          .execute(queries.serviceAddNew);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado === 0) {
         return res.status(303).json({
              ok: false,
              msg: 'El servicio ya existe'
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

export const serviceUpdateById = async(req, res = response) => {

  try {

      const { servicio, servicioDependenciaID, sinCronograma, permisoPosGuardia } = req.body;

      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("servicioId", id)
          .input("servicio", servicio)
          .input("servicioDependenciaID", servicioDependenciaID)
          .input("sinCronograma", sinCronograma)
          .input("permisoGuardia", permisoPosGuardia)
          .execute(queries.serviceUpdateById);

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

export const serviceDeleteById = async(req, res = response) => {

  try {
      
      const { id } = req.params;

      const consult = await validatorService(id);

      if ( consult !== 0) {
        return res.status(303).json({
            ok: false,
            msg: 'ocurrió un error al eliminar, revise la configuración del servicio'
        });
      }

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("servicioId", id)
          .execute(queries.serviceDeleteById);

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