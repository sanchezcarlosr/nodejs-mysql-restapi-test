import {Router} from "express";
/**
 * Cuando estemos usando modulos de tercero, no es necesario 
 * colocar el .js al final.
 * Si usamos los propios si si es SI
 */
import indexCtrl from "../controllers/index.controller.js";
const router= Router();

router.get('/ping', indexCtrl.getSuma);

export default router;
