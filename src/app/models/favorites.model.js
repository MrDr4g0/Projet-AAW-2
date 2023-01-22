const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favoriteSchema = new Schema({
    animal_id: {type:Schema.Types.ObjectId, ref:'animals'},
    user_id: {type:Schema.Types.ObjectId, ref:'users'}
})

module.exports = new mongoose.model('Favorites',favoriteSchema);