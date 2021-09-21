export const queries = {
  /////Categorias////////////////
  categoryAddNew: 'SP_GUA_GuadiaCategoria_Alta',
  categoryGetById: 'SP_GUA_GuadiaCategoria_Cons',
  categoryGetAll: 'SP_GUA_GuadiaCategoria_Cons',
  CategoryUpdateById: 'SP_GUA_GuadiaCategoria_Modi',
  categoryDeleteById: 'SP_GUA_GuadiaCategoria_Baja',


  /////Categorias - Montos////////////////
  categoryAmountAddNew: 'SP_GUA_CategoriaMontos_Alta',
  //categoryAmountGetById: 'SP_GUA_CategoriaMontos_Cons',
  categoryAmountGetAll: 'SP_GUA_CategoriaMontos_Cons',
  CategoryAmountUpdateById: 'SP_GUA_CategoriaMontos_modi',
  categoryAmountDeleteById: 'SP_GUA_CategoriaMontos_baja',

  /////Login////////////////
  userValidate: 'GUA_USU_ValidarUsuario_Cons_sp',

  /////Servicio////////////////
  serviceAddNew: 'SP_GUA_Servicio_Alta',
  serviceGetAll: 'SP_GUA_Servicio_Cons',
  serviceUpdateById: 'SP_GUA_Servicio_Modi',
  serviceDeleteById: 'SP_GUA_Servicio_Baja',
  serviceQueryDeleteById: 'SP_GUA_ServicioConsultarBaja_Cons', 

  /////Servicio////////////////
  serviceEmployeeAddNew: 'SP_GUA_EmpleadoServicio_Alta',
  serviceEmployeeGetById: 'SP_GUA_EmpleadoServicio_DOS_Cons', //2do parametro false
  serviceEmployeeUpdateById: 'SP_GUA_EmpleadoServicio_Modi',
  serviceEmployeeDeleteById: 'SP_GUA_EmpleadoServicio_Baja',

  /////Servicio Seguridad////////////////
  securityServiceAddNew: 'SP_GUA_UsuarioServicio_Alta',
  securityServiceGetById: 'SP_GUA_UsuarioServicio_Cons',
  securityServiceUpdateById: 'SP_GUA_UsuarioServicio_Modi',
  securityServiceDeleteById: 'SP_GUA_UsuarioServicio_Baja',

  /////Servicio Configuracion////////////////
  serviceConfigurationAddNew: 'SP_GUA_ServicioConfiguracion_Alta',
  serviceConfigurationGetById: 'SP_GUA_ServicioConfiguracion_cons',
  serviceConfigurationUpdateById: 'SP_GUA_ServicioConfiguracion_Modi',
  serviceConfigurationDeleteById: 'SP_GUA_ServicioConfiguracion_Baja',
  serviceTurnAddNew: 'SP_GUA_TurnoServicio_Alta',
  serviceTurnGetById: 'SP_GUA_TurnoServicio_Cons',
  srviceTurnUpdateById: 'SP_GUA_TurnoServicio_Modi',
  serviceTurnDeleteById: 'SP_GUA_TurnoServicio_Baja',

  /////Feriado////////////////
  holidayAddNew: 'SP_GUA_Feriado_Alta',
  holidayGetAll: 'SP_GUA_Feriado_DOS_Cons',
  holidayUpdateById: 'SP_GUA_Feriado_Modi',
  holidayDeleteById: 'SP_GUA_Feriado_Baja',

  /////Dia Presentacion////////////////
  presentationDayGetAll: 'SP_GUA_GuardiaModalidad2_Cons',
  presentationDayUpdateById: 'SP_GUA_GuardiaModalidad_Modi',
};