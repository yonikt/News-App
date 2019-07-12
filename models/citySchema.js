const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const citySchema = new Schema( {
   
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String

})

module.exports = citySchema
