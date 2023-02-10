const express = require("express");
const moment = require("moment");
const router = express.Router();
const Case= require("../models/casesSchema")
//routes

router.post("/register",async(req,res)=>{

    try{
        const preuser = await Case.findOne({ email: req.body.email });
        if (preuser) {
            return res.status(200).send({ message: "This Cases already exist in our databse", success: false });
            
         } else {
            const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

            const newCase =new Case(req.body)

            await newCase.save();
            res.status(200).send({message:"Cases created successfully",success:true,data:newCase})
         }
  
    }catch(error){
        console.log(error);
        res.status(500).send({ message: error.message, success: false });
    }
});

//get caseData

router.get('/getdata',async(req,res)=>{

    try{
        const casedata = await Case.find();
        
        res.send({
          success:true,
          message: "User details fetched successfully",
          data: casedata,
        })
    }catch(error){
      res.send({
        success: false,
        message: error.message,
      });
    }
  
  })
module.exports = router