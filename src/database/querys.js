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

  /////Feriado////////////////
  holidayAddNew: 'SP_GUA_Feriado_Alta',
  holidayGetAll: 'SP_GUA_Feriado_DOS_Cons',
  holidayUpdateById: 'SP_GUA_Feriado_Modi',
  holidayDeleteById: 'SP_GUA_Feriado_Baja',

  /////Dia Presentacion////////////////
  presentationDayGetAll: 'SP_GUA_GuardiaModalidad2_Cons',
  presentationDayUpdateById: 'SP_GUA_GuardiaModalidad_Modi',
};