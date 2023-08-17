const express=require("express")

const {TripModel} = require("../model/tripModel");

const triprouter=express.Router()

//adding the book
triprouter.post("/addtrip",async(req,res)=>{
    try{
     const payload=req.body;

     const trip=new TripModel(payload)
     await trip.save()
     res.send({msg:"trip added success"})
    }catch(err)
    {
        res.send({msg:err.message})
    }
})

//geting the books
triprouter.get("/trip",async(req,res)=>{
    try{
         const trip=await TripModel.find();
         res.send(trip)

    }catch(err)
    {
        console.log(err)
    }
})


//delete the book

triprouter.delete("/deletetrip/:tripID",async(req,res)=>{

    try{
     const tripID=req.params.tripID
      let deletedtrip=await TripModel.findByIdAndDelete({_id:tripID});
      res.send({msg:"trip deleted"})
    }catch(err)
    {
        console.log(err)
    }
})


//filter the code

triprouter.get("/filter/:destination",async(req,res)=>{
    try{
      const destination=req.params.destination.toLowerCase();
      let trips=await TripModel.find({destination:destination})
      res.json(trips)

    }catch(err)
    {
        console.log(err)
    }
})

//sorting

triprouter.get("/sort/:Budget",async(req,res)=>{
    try{
       const field=req.params.field.toLowerCase();
       const sortoption={[field]:1}
       const trips=await TripModel.find().sort(sortoption)
       res.json(trips)
    }catch(err)
    {
        console.log(err)
    }
})
module.exports={
    triprouter
}