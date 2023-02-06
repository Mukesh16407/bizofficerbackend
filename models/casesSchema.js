const mongoose = require("mongoose");
const validator = require("validator");

const casesSchema = new mongoose.Schema({
    caseNumber: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    product:{
        type: String,
        required: true,
        trim: true
    },
    emil: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw Error("not valid email")
            }
        }
    },
    status: {
        type: String,
        required: true,
    },
    subStatus:{
        type: String,
        required: true, 
    },
    technician:{
        type:String,
        required:true
    },
    technicianstatus:{
        type:String,
        required:true
    },
    accountName:{
        type:String,
        required:true
    },
    contactName:{
        type:String,
        required:true,
    },

    mobile: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
   
   phone:{
    type: String,
    required: false,
    unique: true,
   },
   address:{
    type: String,
    required: true,
   },
   priority:{
    type:String,
    required:true
   },
   agent:{
    type:String,
    required:true
   },
   channel:{
    type:String,
    required:true
   },
   remarks:{
    type: String,
    required: false,
   },
   comment:{
    type: String,
    required: false,
   },
    datecreated:Date,
    dateUpdated:Date
});

// model
const users = new mongoose.model("users",casesSchema);