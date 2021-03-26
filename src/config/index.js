const dotenv = require('dotenv');

//Puede pasar que no haya un .env creado por eso la validación 
const envFound = dotenv.config();

if(!envFound) {
    throw new Error("Couldn't find .env file.");
}

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log: {
        level: process.env.LOG_LEVEL
    },
    swagger: {
        path: '/documentation'
    }
}