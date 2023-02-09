require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();
require("./db/conn");

const cors = require("cors");
const caseRouter = require("./Routes/caseRoutes");
const PORT = process.env.PORT || 6010

app.use(cors());
app.use(express.json());


app.use("/api/case",caseRouter);

app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})