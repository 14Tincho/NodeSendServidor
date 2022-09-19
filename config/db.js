const mongoose = require('mongoose')
require('dotenv').config({path: 'variables.env'})

const conectarDB = async () => {
    try {
        await mongoose.connect( process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Tuve que sacarle los siguientes use pq daba error
            // useFindAndModify: false,
            // useCreateIndex: true
        } );
    } catch (error) {
        console.log('Hubo un error');
        console.error(error);
        process.exit(1)
    }
}

module.exports = conectarDB;