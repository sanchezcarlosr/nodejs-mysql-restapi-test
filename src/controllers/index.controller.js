import { pool } from "../database.js";

const indexCtrl={};

indexCtrl.getSuma=async(req, res)=>{
    const result = await pool.query('SELECT 1 + 1 As result');
    res.json(result[0]);
};
 
export default indexCtrl;
