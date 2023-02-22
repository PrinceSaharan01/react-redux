const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    category:String
})

module.exports = mongoose.model('datas',dataSchema);