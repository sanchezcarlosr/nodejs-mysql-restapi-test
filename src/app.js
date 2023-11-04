import express from 'express';
import employesRoutes from './routes/employes.routes.js';
import indexRoutes from './routes/index.routes.js';

/**
 *  Mayúsculas+Alt+F Para identar el codigo
 */

const app= express();
/**
 * Integramos la funcion para que pueda
 * interpretar json
 * y luego sea utilizados en los EndPoint
 */
app.use(express.json());


app.use('/api/suma',indexRoutes);
app.use('/api/empleados',employesRoutes);

/**
 * Esto permite de una forma mas sencilla, "HAY OTRAS"
 * poder responder a rutas que no existen y que se solicitan 
 * por medio de peticiones HTTP
 */
app.use((req, res, next )=>{
    res.status(404).json({
        message:'endpoint not found'
    })
});

export default app;