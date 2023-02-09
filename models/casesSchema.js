const mongoose = require("mongoose");
const validator = require("validator");

const casesSchema = new mongoose.Schema({
    acoountName: {
        type: String,
        required: true,
        trim: true
    },
    channels: {
        type: String,
        required: true,
        trim: true
    },
    contactName:{
        type: String,
        required: true,
        trim: true
    },
    mobile:{
        type: Number,
        trim: true ,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    allCaseType:{
      type: String,
      required: true,

    },
    casetitile:{
        type: String,
        required: true,
        trim: true 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("not valid email")
            }
        }
    },
    productCategory:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required: true,
        trim: true  
    },
    product: {
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true, 
    },
    brand:{
        type:String,
        required:true
    },
    pinCode:{
        type:Number,
        required:true,
        minlength: 6,
        
    },
    serialNo:{
        type:Number,
        required:true
    },
    technician:{
        type:String,
        required:true,
    },

    model: {
        type: String,
        required: true,
        
    },
    warranty:{
    type: String,
    required:true
   },
   priority:{
    type: String,
    required: true,
   },
   problem:{
    type:String,
    required:true
   },
   source:{
    type:String,
    required:true
   },
   reason:{
    type: String,
    required:true
   
   },
   invoiceNumber:{
    type: Number,
    required:true
   
   },
   quantity:{
    type: Number,
    required:true
   },
   remarks:{
    type: String,
    required: true,
   },
   otherDetails:{
    type: String,
    required: true,
   },
   tags:{
    type: String,
    required: true,
   },
   agents:{
    type: String,
    required: true,
   },
   visibility:{
    type: String,
    required:true
   },
   
    datecreated:Date,
    dateUpdated:Date
});

// model
const cases = new mongoose.model("cases",casesSchema);
module.exports = cases;