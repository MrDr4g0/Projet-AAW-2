/*
import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='zoo_db';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB
*/

const mongoose = require("mongoose/");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.url = 'mongodb://127.0.0.1:27017/zoo_db';
db.animals = require("../models/animals.model.js")
module.exports = db;
