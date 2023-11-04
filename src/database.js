/**
 * Esto es un modulo, para poder conectamer a la base de datos mysql
 * es la mas nueva, y utiliza promise para poder soportar
 * metodos async
 */
import {createPool} from 'mysql2/promise';
/**
 * createPool es una funcion y ademas tiene otras como
 * createConnection
 * este ultimo es como mantener un solo hilo de conexion, es decir no podras realizar otras
 * consultas si otros hayan hecho una consulta, es como un unico camino.
 * 
 * createPool una especio de conjunto de conexiones que podemos reutilizar
 * alamcena las conexiones y cuando solicite una se te entregara la que este libre
 */

/**
 * Importo todas las variables de entorno que el config.js lee y las importa
 */
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_PASSWORD,
    DB_USER
} from './config.js';

/**
 * Se crea la conexion, y se almacena en una 
 * variable que sera exportada para usar en otras
 * clases
 */
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});


