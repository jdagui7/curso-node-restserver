const express = require('express')
const cors = require('cors')

const { dbConnection } = require('../database/config');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.authPath = '/api/auth'
        this.usuariosPath = '/api/usuarios';

        //Conectar a Base de datos
        this.conectarDB();

        //Middlewares

        this.middlewares();

        //Rutas de mi app


        this.routes();
    }

    async conectarDB() {
        await dbConnection();

    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'));


    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        });
    }

}


module.exports = Server;