const express = require('express');
const conectarDB = require('./config/db')
const cors = require('cors')


// Crear el Servidor
const app = express()

//Conectar a la Base de Datos
conectarDB();

//Habilitar cors
const opcionesCors ={
    origin: process.env.FRONTEND_URL
}
app.use( cors(opcionesCors));

// Puerto de la app
const port = process.env.PORT || 4000;

//Habilitar leer los valores de un body
app.use( express.json() );

// Habilitar carpeta pública
app.use( express.static('uploads') )

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enlaces', require('./routes/enlaces'));
app.use('/api/archivos', require('./routes/archivos'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})



// Dependencias
//npm i bcrypt                  bcrypt: "^5.0.1",
//npm i dotenv                  dotenv: "^16.0.1",
//npm i express                 express: "^4.18.1",
//npm i express-validator       express-validator: "^6.14.2",
//npm i mongoose                mongoose: "^6.5.3",
//npm i nodemone                nodemon: "^2.0.19"
//npm i jsonwebtoken            jsonwebtoken: "^8.5.1"
//npm i shortid                 shortid: "^2.2.16"
//npm i multer                  multer: "^1.4.5-lts.1"                      Para subir un archivo
//npm i cors                    cors: "^2.8.5"                              Conectarse con el frontend


// devDependencies
//npm i nodemone                nodemon: "^2.0.4"