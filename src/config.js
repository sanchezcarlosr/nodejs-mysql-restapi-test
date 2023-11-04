/**
 * Con este archivo podemos leer variables de entorno
 */
import { config } from "dotenv";

config();

/**
 * Lectura e importar el valor de las variables de entorno 
 * si no esta las que ofrese el server nos devuelve las que estan definidas despues de || que
 * es como el OR
 */
export const PORT = process.env.PORT || 3000;
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'root';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;

/**
 * PROCESS es un objeto global de node
 * env almacena todas las variables de entorno de mi pc
 */

//Esto es solo para ver lo que puede leer de las variables de entorno
// console.log(process.env.PORT);
// console.log(process.env.DB_HOST);
// console.log(process.env.DB_PORT);
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD);
// console.log(process.env.DB_DATABASE);