/**
 * Este modulo permite crear toda una
 * seccion de rutas  y colocarle un nombre
 * 
 */
import { Router } from "express";
import empleadosCtrl from "../controllers/employes.controller.js";
/**
 * creamos un enrutador que va a 
 * venir de se Router importado
 */
const router= Router();

router.get('/employes', empleadosCtrl.getEmpleados);

router.get('/employes/:id', empleadosCtrl.getUnEmpleado);

router.post('/employes', empleadosCtrl.createEmpleados);

/**
 * Put como indica express y para que sea representativo NADA MAS, es para una modificacion 
 * completa de un registro
 */
router.put('/employes/:id', empleadosCtrl.updateEmpleados);

/**
 * Patch como indica express y para que sea representativo NADA MAS, es para una modificacion
 * parcial de un registro
 */
router.patch('/employes/:id', empleadosCtrl.updatePacthEmpleados);


router.delete('/employes/:id', empleadosCtrl.deleteEmpleado);
/**
 * Este permite indicar que luego 
 * de haber colocado todas las rutas
 * vamos a exportarlo, siguiendo una secuencia,
 * siendo este el ultimo a ejecutar
 */
export default router;
