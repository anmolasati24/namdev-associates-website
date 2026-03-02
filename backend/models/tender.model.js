const mongoose =require("mongoose");

const tenderSchema =new mongoose.Schema(
    {
        companyName:String,
        contactPerson:String,
        email:String,
        phone:String,
        projectDescription:String,
        budget:String,
        deadline:Date,
        document:String,
        status:{
            type:String,
            default:"Pending"
        }
    },
    {timestamps:true}
);

module.exports =mongoose.model("Tender",tenderSchema);