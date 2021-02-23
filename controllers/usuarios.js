const { response } = require('express');



const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'no name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get Api-Controlador',
        q,
        nombre,
        apikey
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;


    res.json({
        msg: 'post Api- Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'put Api-Controlador',
        id
    })
}

const usuariosPatch = (req, res = reponse) => {
    res.json({
        msg: 'Patch Api Controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api-Controlador'
    })
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete

}