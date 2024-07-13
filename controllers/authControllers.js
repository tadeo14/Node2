const usuarioModel = require("../models/usuario-model");

const crearUsuario  =  async (req, res) => {
    
    const { name, edad, email, password } = req.body;

    //validaciones 
    if (name === "" || edad === "" || email === "" || password === "") {
        res.send('Todos los campos son obligatorios');
    }
			
    const usuario = new usuarioModel (req.body);

    //guardamos en la base de datos
    await usuario.save();


    res.send('usuario creado');
}

module.exports = { crearUsuario };