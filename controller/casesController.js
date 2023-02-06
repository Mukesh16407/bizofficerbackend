const users = require("../models/casesSchema");

const moment = require("moment");

// register user

exports.userpost = async (req, res) => {
  const {
    caseNumber,
    title,
    product,
    email,
    status,
    subStatus,
    technician,
    technicianstatus,
    accountName,
    contactName,
    mobile,
    address,
    priority,
    agent,
    channel,
  } = req.body;

  if (
    !caseNumber ||
    !title||
    !product||
    !email||
    !status||
    !subStatus||
    !technician||
    !technicianstatus||
    !accountName||
    !contactName||
    !mobile||
    !address||
    !priority||
    !agent||
    !channel
  ) {
    res.status(401).json("All Inputs is required");
  }
  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
        res.status(401).json("This user already exist in our databse")
    } else {

        const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        const userData = new users({
            caseNumber,
            title,
            product,
            email,
            status,
            subStatus,
            technician,
            technicianstatus,
            accountName,
            contactName,
            mobile,
            address,
            priority,
            agent,
            channel,
            datecreated,
        });
        await userData.save();
        res.status(200).json(userData);
    }
} catch (error) {
    res.status(401).json(error);
    console.log("catch block error")
}
};

// usersget

exports.userget = async (req, res) => {

    try{
     const userData = await users.find();
     res.status(200).json(userData);

    }catch(error){
      res.status(401).json(error)
    }
}

