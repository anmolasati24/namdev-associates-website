const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
  company_name: String,
  organization_type: String,
  registration_number: String,
  gst_number: String,
  address: String,

  person_name: String,
  designation: String,
  email: String,
  phone: String,

  project_description: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Consultation", consultationSchema);