import sql from "mssql";
import config from "../config";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: false, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    //const result = await pool.request().query("select 1")
    //console.log(result)
    return pool;
  } catch (error) {
    console.error(error);
  }
};

//getConnection()
//export { sql };
