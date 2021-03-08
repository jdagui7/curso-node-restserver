const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const { generarJWT } = require('../helpers/generar-jwt');



const login = async(req = request, res = response) => {

    const { correo, password } = req.body;

    try {

        const usuario = await Usuario.findOne({ correo });

        //Verificar si el email existe

        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / password incorrectos -- correo'

            });
        }

        // Si el usuario esta activo

        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario/password no son correctos --false'
            });
        }

        //verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / password incorrectos -- pasword'
            });
        }

        //Generar JWT

        const token = await generarJWT(usuario.id);

        res.json({
            usuario,
            token
        })

    } catch (error) {
        console.log(error);
        return status(500).json({
            msg: 'Pongase en contacto con el admin'
        });
    }



}

module.exports = {
    login
};