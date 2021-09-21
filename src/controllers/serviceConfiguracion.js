import { response } from 'express';
import { getConnection } from '../database/connection';
import { queries } from '../database/querys';


export const serviceConfigurationGetById = async(req, res = response) => {
  
    try {
        const id = req.params.id;
  
        const pool = await getConnection();
    
        const result = await pool.request()
            .input("servicioId", id)
            .execute(queries.serviceConfigurationGetById);
        
        const recordset  = result.recordset;
        
        if ( !recordset ) {
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

export const serviceConfigurationAddNew = async(req, res = response) => {

    try {

      const {
        servicioId,
        guardiaTipoId,
        diasServicioId,
        modalidadHorariaId,
        guardiasPorDia,
        porTurno,
        username
      } = req.body;

      const pool = await getConnection();
    
      await pool.request()
          .input("servicioId", servicioId)
          .input("guardiaTipoId", guardiaTipoId)
          .input("diasServicioId", diasServicioId)
          .input("modalidadHorariaId", modalidadHorariaId)
          .input("guardiasPorDia", guardiasPorDia)
          .input("porTurno", porTurno)
          .input("username", username)
          .execute(queries.serviceConfigurationAddNew);

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

export const serviceConfigurationUpdateById = async(req, res = response) => {
    
    try {
    
        const { id } = req.params;
    
        const {
            servicioId,
            guardiaTipoId,
            diasServicioId,
            modalidadHorariaId,
            guardiasPorDia,
            porTurno,
            username
        } = req.body;

        const pool = await getConnection();
    
        await pool.request()
            .input("servicioConfiguracionId", id)
            .input("servicioId", servicioId)
            .input("guardiaTipoId", guardiaTipoId)
            .input("diasServicioId", diasServicioId)
            .input("modalidadHorariaId", modalidadHorariaId)
            .input("guardiasPorDia", guardiasPorDia)
            .input("porTurno", porTurno)
            .input("username", username)
            .execute(queries.serviceConfigurationUpdateById);

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

export const serviceConfigurationDeleteById = async(req, res = response) => {

    try {
    
      const { id } = req.params;

      const pool = await getConnection();
  
      await pool.request()
          .input("servicioConfiguracionId", id)
          .execute(queries.serviceConfigurationDeleteById);

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