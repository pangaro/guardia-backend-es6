import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const categoryGet = async (req, res = response) => {
  try {
      const pool = await getConnection();
  
      const result = await pool.request()
          .execute(queries.categoryGetAll);

      const { recordset } = result;
    console.log(result)
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

export const categoryNew = async(req, res = response) => {

  try {
      const { categoria, descripcion } = req.body;
  
      const pool = await getConnection();
    
      const result = await pool.request()
          .input("categoria", categoria)
          .input("descripcion", descripcion)
          .execute(queries.categoryAddNew);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado === 0) {
          res.status(303).json({
              ok: false,
              msg: 'La categoria ya existe'
          });
      } else {
          res.status(201).json({
              ok: true,
              msg: 'Datos guardados correctamente'
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

export const categoryUpdate = async(req, res = response) => {

  try {
      const { descripcion } = req.body;

      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("categoria", id)
          .input("descripcion", descripcion)
          .execute(queries.CategoryUpdateById);

      const { Resultado:resultado } = result.recordset[0];

      if ( resultado === 1) {
          res.status(201).json({
              ok: true,
              msg: 'Datos modificados correctamente'
          });
      } else {
          res.status(303).json({
              ok: false,
              msg: 'ocurrió un error al modificar'
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

export const categoryDeleteById = async(req, res = response) => {

  try {
      const { id } = req.params;

      const pool = await getConnection();
  
      const result = await pool.request()
          .input("categoria", id)
          .execute(queries.categoryDeleteById);

          const { Resultado:resultado } = result.recordset[0];

      if ( resultado === 1) {
          res.status(201).json({
              ok: true,
              msg: 'Datos eliminados correctamente'
          });
      } else {
          res.status(303).json({
              ok: false,
              msg: 'ocurrió un error al eliminar'
          });
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({
          ok: false,
          msg: 'Comuniquese con el Administrador'
      });
  }
};