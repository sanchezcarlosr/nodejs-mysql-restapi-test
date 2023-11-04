import { pool } from "../database.js";

const empleadosCtrl = {};

empleadosCtrl.getEmpleados = async (req, res) => {
    try {
        //Esto permite crear un error
        //throw new Error('BD Error');
        const result = await pool.query('SELECT * FROM employee');
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: 'Ocurrio un error' });
    }
}

empleadosCtrl.getUnEmpleado = async (req, res) => {
    try {
        console.log(req.params.id);//Este obtiene el id pasado por la URL, params almacena todo lo que se pasa por parametro
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ? ', [req.params.id]);
        rows.length <= 0 ? res.status(404).json({ message: 'Employee not found' }) : res.status(200).json({ message: 'Employee found', empleado: rows[0] });
    } catch (error) {
        return res.status(500).json({ message: 'Ocurrio un error' });
    }
}

empleadosCtrl.createEmpleados = async (req, res) => {
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?,?)', [req.body.name, req.body.salary]);
        res.json({
            id: rows.insertId,
            name: req.body.name,
            salary: req.body.salary
        });
        /**
        Se usa body para ver el contenido, porque si no trae algunas cosas
        que por el momento no se que es XD
        */
    } catch (error) {
        return res.status(500).json({ message: 'Ocurrio un error' });
    }
}
/**
 * Modificacion completa de un registro empleado
 * Se pasa un json para modificar todo un resgitro
 * @param {nombre, salario} req 
 * @param {*} res 
 */
empleadosCtrl.updateEmpleados = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    try {
        //Los datos que no son pasados se colocaran en NULL en la Base de Datos
        const result = await pool.query('UPDATE employee SET name = ? , salary = ? WHERE id = ?', [name, salary, id]);

        result[0].affectedRows === 0 ? res.status(404).json({ message: 'Empleado no encontrado' }) : res.status(200).json({ message: `Empleado id : ${id} name: ${name} modificado` });
        //Mirar siempre el tipo de respuesta el nro 200, 400, etc. Express los identifica al parecer y cumple con su definiciones 
        console.log(id, name, salary);
        console.log('Modificacion');
    } catch (error) {
        return res.status(500).json({ message: 'Ocurrio un error' });
    }
}

/**
 * Modificacion Parcial de un empleado
 * Es solo representativo
 * 
 * Se puede pasar todo los registro a algunos solamente
 * @param {?} req 
 * @param {*} res 
 */
empleadosCtrl.updatePacthEmpleados = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;

    try {
        /**
     * Comando para modificar parcial un registro
     * colocar IFNULL(?, NAME_COLUMN)
     * Si es NULL, se dejara el valor que estaba
     * Si no es NULL, se asignara el valor pasado por parametros
     */
        const result = await pool.query('UPDATE employee SET name = IFNULL(?, name) , salary = IFNULL(?, salary) WHERE id = ? ', [name, salary, id]);

        if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Empleado no encontrado' });
        } else {
            console.log("Modificacion realizada al empleado con id " + id);
            const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
            res.status(200).json(rows[0]);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Ocurrio un error' });
    }


}

empleadosCtrl.deleteEmpleado = async (req, res) => {
    /**
     * Recordar: primero siempre realiza una vista previa de lo
     * que devuelve las query, para ver que utilizar
     */
    try {
        const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        rows.affectedRows === 0 ? res.status(404).json({ message: 'Empleado no encontrado' }) : res.status(200).json({ message: 'Empleado eliminado' });
    } catch (error) {
        return res.status(500).json({ message: 'Ocurrio un error' });
    }
}

export default empleadosCtrl;