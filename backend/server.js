require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const Consultation = require("./models/Consultation");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- MongoDB Connection ---------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ---------------- Email Transporter ---------------- */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/* ---------------- Consultation API ---------------- */

app.post("/api/consultation", async (req, res) => {

  try {

    const data = req.body;

    console.log("Incoming Consultation:", data);

    /* -------- Save to Database -------- */

    const newConsultation = new Consultation({
      ...data,
      status: "New Lead",
      source: "Website"
    });

    await newConsultation.save();

    /* -------- Email 1 → Company -------- */

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Consultation Request - Namdev Associates",

      html: `
      <div style="font-family:Arial;background:#f4f4f4;padding:30px">

        <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:8px">

          <h2 style="color:#1e3a8a;margin-bottom:20px">
          New Consultation Request
          </h2>

          <table style="width:100%;border-collapse:collapse">

            <tr>
              <td><b>Organization</b></td>
              <td>${data.companyName}</td>
            </tr>

            <tr>
              <td><b>Type</b></td>
              <td>${data.organizationType}</td>
            </tr>

            <tr>
              <td><b>Registration</b></td>
              <td>${data.registrationNumber}</td>
            </tr>

            <tr>
              <td><b>GST</b></td>
              <td>${data.gstNumber}</td>
            </tr>

            <tr>
              <td><b>Address</b></td>
              <td>${data.address}</td>
            </tr>

            <tr>
              <td><b>Contact Person</b></td>
              <td>${data.contactPerson}</td>
            </tr>

            <tr>
              <td><b>Email</b></td>
              <td>${data.email}</td>
            </tr>

            <tr>
              <td><b>Phone</b></td>
              <td>${data.phone}</td>
            </tr>

            <tr>
              <td><b>Project Type</b></td>
              <td>${data.projectType}</td>
            </tr>

            <tr>
              <td><b>Project Location</b></td>
              <td>${data.projectLocation}</td>
            </tr>

            <tr>
              <td><b>Minimum Labour</b></td>
              <td>${data.minimumLabour}</td>
            </tr>

            <tr>
              <td><b>Estimated Budget</b></td>
              <td>${data.budget}</td>
            </tr>

          </table>

          <h3 style="margin-top:25px">Project Description</h3>

          <p>${data.description}</p>

        </div>
      </div>
      `
    });

    /* -------- Email 2 → Client Confirmation -------- */

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: "Consultation Request Received – Namdev Associates",

      html: `
      <div style="font-family:Arial;background:#f4f4f4;padding:30px">

        <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:8px">

          <h2 style="color:#1e3a8a">
          Thank You for Contacting Namdev Associates
          </h2>

          <p>Dear ${data.contactPerson},</p>

          <p>
          We have successfully received your consultation request.
          Our team will review the information and contact you shortly.
          </p>

          <h3>Request Summary</h3>

          <p><b>Organization:</b> ${data.companyName}</p>
          <p><b>Project Type:</b> ${data.projectType}</p>
          <p><b>Project Location:</b> ${data.projectLocation}</p>
          <p><b>Minimum Labour:</b> ${data.minimumLabour}</p>

          <br>

          <p>
          If you need to provide additional documents or details,
          you may reply to this email.
          </p>

          <br>

          <p>
          Best Regards<br>
          <b>Namdev Associates</b>
          </p>

        </div>
      </div>
      `
    });

    res.json({
      success: true,
      message: "Consultation Request Submitted Successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

/* ---------------- Admin Dashboard API ---------------- */

app.get("/api/consultations", async (req, res) => {

  try {

    const consultations = await Consultation
      .find()
      .sort({ createdAt: -1 });

    res.json(consultations);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch consultations"
    });

  }

});

/* ---------------- Start Server ---------------- */

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});