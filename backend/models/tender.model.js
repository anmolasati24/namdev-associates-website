const mongoose = require("mongoose");

const TenderSchema = new mongoose.Schema(
{
companyName: String,
organizationType: String,
registrationNumber: String,
gstNumber: String,
address: String,

contactPerson: String,
designation: String,
email: String,
phone: String,

projectType: String,
otherProjectType: String,
projectLocation: String,
startDate: Date,
endDate: Date,

minimumLabour: Number,
skilledLabour: Number,
semiSkilledLabour: Number,
unSkilledLabour: Number,

budget: String,
description: String
},
{ timestamps: true }
);

module.exports = mongoose.model("Tender", TenderSchema);