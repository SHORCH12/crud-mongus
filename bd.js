const monngoose = require('mongoose');

async function connect() {
    try {
        await monngoose.connect(
            process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}

module.exports = { connect };