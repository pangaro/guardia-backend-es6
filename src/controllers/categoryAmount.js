import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const categoryAmountGetAll = async (req, res = response) => {

    const { anio, categoria } = req.body;
    
    try {

      const cat = (typeof categoria !== "undefined") ? categoria : null;

      const pool = await getConnection();
  
      const result = await pool.request()
        .input("anio", anio)
        .input("categoria", cat)
        .execute(queries.categoryAmountGetAll);

      const { recordset } = result;

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
};


export const categoryAmountAddNew = async(req, res = response) => {

    try {

      const { categoria, anio, modalidadHorariaID, diasServicioID, guardiaTipoID, monto, usuario } = req.body;

      const pool = await getConnection();
    
      await pool.request()
          .input("categoria", categoria)
          .input("anio", anio)
          .input("modalidadHorariaID", modalidadHorariaID)
          .input("diasServicioID", diasServicioID)
          .input("guardiaTipoID", guardiaTipoID)
          .input("monto", monto)
          .input("usuario", usuario)
          .execute(queries.categoryAmountAddNew);

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

export const categoryAmountUpdateById = async(req, res = response) => {
    
    try {
    
        const { id } = req.params;
    
        const { categoria, anio, modalidadHorariaID, diasServicioID, guardiaTipoID, monto } = req.body;
        
        const pool = await getConnection();
    
        await pool.request()
            .input("categoriaMontosID", id)
            .input("categoria", categoria)
            .input("anio", anio)
            .input("modalidadHorariaID", modalidadHorariaID)
            .input("diasServicioID", diasServicioID)
            .input("guardiaTipoID", guardiaTipoID)
            .input("monto", monto)
            .execute(queries.CategoryAmountUpdateById);

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

export const categoryAmountDeleteById = async(req, res = response) => {

    try {
    
      const { id } = req.params;

      const pool = await getConnection();
  
      await pool.request()
          .input("categoriaMontosId", id)
          .execute(queries.categoryAmountDeleteById);

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