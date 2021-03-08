const esAdminRole = (req, res = response, next) => {

    if (!req.usuario) {
        return res.status(500).json({
            msg: 'Se quiere verificar el role sin antes validar el token'
        });
    }

    const { rol, nombre } = req.usuario;

    if (rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${ nombre } no tiene rol de admin`
        })
    }

    next();

}

const tieneRole = (...roles) => {
    return (req, res = reponse, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: 'Se quiere verificar el role sin antes validar el token'
            });
        }

        if (!roles.includes(req.usuario.rol)) {
            return res.status(401).json({
                msg: `Èl servicio require uno de estos roles ${ roles}`
            })
        }

        next();

    }
}

module.exports = {
    esAdminRole,
    tieneRole
}