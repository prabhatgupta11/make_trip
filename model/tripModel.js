const mongoose=require('mongoose')
const tripschema=mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    noOftravelers:Number,
    Budget:Number
 
})

const TripModel=mongoose.model("trip",tripschema)

module.exports={
    TripModel
}