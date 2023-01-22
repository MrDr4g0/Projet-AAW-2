const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: {type:String, required:true},
    image: {type:String, required:true},
    note: {type:String, required:true}
});

module.exports = new mongoose.model('Animals',animalSchema);