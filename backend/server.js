require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Resend } = require("resend"); // ✅ Resend instead of nodemailer

const Consultation = require("./models/Consultation");
const Contact = require("./models/contactmodel");

const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- Root Route ---------------- */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Namdev Associates API is running ✅",
    routes: [
      "POST /api/contact",
      "GET  /api/contacts",
      "POST /api/consultation",
      "GET  /api/consultations"
    ]
  });
});

/* ---------------- MongoDB Connection ---------------- */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ---------------- Resend Setup ---------------- */

const resend = new Resend(process.env.RESEND_API_KEY); // ✅ uses env variable

/* ---------------- Keep Render Awake ---------------- */

setInterval(() => {
  fetch("https://namdev-associates-website-1.onrender.com")
    .catch(() => {});
}, 14 * 60 * 1000);

/* ================================================================
   CONTACT FORM API  →  /api/contact
================================================================ */

app.post("/api/contact", async (req, res) => {

  try {

    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and message are required."
      });
    }

    const newContact = new Contact({ name, email, phone, service, message });
    await newContact.save();

    /* -------- Email 1 → Company Notification -------- */
    await resend.emails.send({
      from: "Namdev Associates <no-reply@namdevassociates.com>", // ✅ verified domain
      to: process.env.EMAIL_USER,
      subject: `New Contact Enquiry from ${name} - Namdev Associates`,
      html: `
      <div style="font-family:Arial;background:#f4f4f4;padding:30px">
        <div style="max-width:600px;margin:auto;background:#fff;padding:30px;border-radius:8px;border-top:4px solid #1e3a8a">
          <h2 style="color:#1e3a8a;margin-bottom:4px">New Contact Enquiry</h2>
          <p style="color:#888;font-size:13px;margin-top:0">Received via Website Contact Form</p>
          <table style="width:100%;border-collapse:collapse;margin-top:20px">
            <tr style="background:#f0f4ff">
              <td style="padding:10px;font-weight:bold;width:40%">Name</td>
              <td style="padding:10px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold">Email</td>
              <td style="padding:10px"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="background:#f0f4ff">
              <td style="padding:10px;font-weight:bold">Phone</td>
              <td style="padding:10px"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold">Service Required</td>
              <td style="padding:10px">${service || "Not specified"}</td>
            </tr>
          </table>
          <h3 style="margin-top:25px;color:#1e3a8a">Message</h3>
          <p style="background:#f9f9f9;padding:16px;border-radius:6px;color:#333;line-height:1.6">${message}</p>
          <hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>
          <p style="font-size:12px;color:#aaa">Submitted via Namdev Associates website contact form.</p>
        </div>
      </div>
      `
    });

    /* -------- Email 2 → Client Auto-Reply -------- */
    await resend.emails.send({
      from: "Namdev Associates <no-reply@namdevassociates.com>", // ✅ verified domain
      to: email,
      subject: "We've Received Your Enquiry – Namdev Associates",
      html: `
      <div style="font-family:Arial;background:#f4f4f4;padding:30px">
        <div style="max-width:600px;margin:auto;background:#fff;padding:30px;border-radius:8px;border-top:4px solid #1e3a8a">
          <h2 style="color:#1e3a8a">Thank You, ${name}!</h2>
          <p style="color:#333;line-height:1.6">We have successfully received your enquiry. Our team will review your requirement and get back to you within <strong>24 hours</strong>.</p>
          <h3 style="color:#1e3a8a">Your Enquiry Summary</h3>
          <table style="width:100%;border-collapse:collapse">
            <tr style="background:#f0f4ff">
              <td style="padding:10px;font-weight:bold;width:40%">Name</td>
              <td style="padding:10px">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold">Phone</td>
              <td style="padding:10px">${phone}</td>
            </tr>
            <tr style="background:#f0f4ff">
              <td style="padding:10px;font-weight:bold">Service Required</td>
              <td style="padding:10px">${service || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding:10px;font-weight:bold">Message</td>
              <td style="padding:10px">${message}</td>
            </tr>
          </table>
          <p style="margin-top:25px;color:#333">
            📞 <strong>+91 84232 15047</strong><br/>
            📧 <strong>info@namdevassociates.com</strong>
          </p>
          <br/>
          <p style="color:#333">Best Regards,<br/><strong>Namdev Associates</strong><br/><span style="color:#888;font-size:12px">Manpower | Security | HR | ISO Consultancy</span></p>
        </div>
      </div>
      `
    });

    res.json({ success: true, message: "Enquiry submitted successfully" });

  } catch (error) {
    console.error("Contact API Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }

});

/* ================================================================
   GET all contacts  →  /api/contacts  (Admin)
================================================================ */

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
});

/* ================================================================
   CONSULTATION API  →  /api/consultation
================================================================ */

app.post("/api/consultation", async (req, res) => {

  try {

    const data = req.body;
    console.log("Incoming Consultation:", data);

    const newConsultation = new Consultation({
      ...data,
      status: "New Lead",
      source: "Website"
    });

    await newConsultation.save();

    /* -------- Email 1 → Company -------- */
    await resend.emails.send({
      from: "Namdev Associates <no-reply@namdevassociates.com>", // ✅ verified domain
      to: process.env.EMAIL_USER,
      subject: "New Consultation Request - Namdev Associates",
      html: `
      <div style="font-family:Arial;background:#f4f4f4;padding:30px">
        <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:8px">
          <h2 style="color:#1e3a8a;margin-bottom:20px">New Consultation Request</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td><b>Organization</b></td><td>${data.companyName}</td></tr>
            <tr><td><b>Type</b></td><td>${data.organizationType}</td></tr>
            <tr><td><b>Registration</b></td><td>${data.registrationNumber}</td></tr>
            <tr><td><b>GST</b></td><td>${data.gstNumber}</td></tr>
            <tr><td><b>Address</b></td><td>${data.address}</td></tr>
            <tr><td><b>Contact Person</b></td><td>${data.contactPerson}</td></tr>
            <tr><td><b>Email</b></td><td>${data.email}</td></tr>
            <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
            <tr><td><b>Project Type</b></td><td>${data.projectType}</td></tr>
            <tr><td><b>Project Location</b></td><td>${data.projectLocation}</td></tr>
            <tr><td><b>Minimum Labour</b></td><td>${data.minimumLabour}</td></tr>
            <tr><td><b>Estimated Budget</b></td><td>${data.budget}</td></tr>
          </table>
          <h3 style="margin-top:25px">Project Description</h3>
          <p>${data.description}</p>
        </div>
      </div>
      `
    });

    /* -------- Email 2 → Client Confirmation -------- */
    await resend.emails.send({
      from: "Namdev Associates <no-reply@namdevassociates.com>", // ✅ verified domain
      to: data.email,
      subject: "Consultation Request Received – Namdev Associates",
      html: `
      <div style="font-family:Arial;background:#f4f4f4;padding:30px">
        <div style="max-width:600px;margin:auto;background:white;padding:30px;border-radius:8px">
          <h2 style="color:#1e3a8a">Thank You for Contacting Namdev Associates</h2>
          <p>Dear ${data.contactPerson},</p>
          <p>We have successfully received your consultation request. Our team will review the information and contact you shortly.</p>
          <h3>Request Summary</h3>
          <p><b>Organization:</b> ${data.companyName}</p>
          <p><b>Project Type:</b> ${data.projectType}</p>
          <p><b>Project Location:</b> ${data.projectLocation}</p>
          <p><b>Minimum Labour:</b> ${data.minimumLabour}</p>
          <br/>
          <p>If you need to provide additional documents or details, you may reply to this email.</p>
          <br/>
          <p>Best Regards<br/><b>Namdev Associates</b></p>
        </div>
      </div>
      `
    });

    res.json({ success: true, message: "Consultation Request Submitted Successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }

});

/* ---------------- Admin: Get all Consultations ---------------- */

app.get("/api/consultations", async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch consultations" });
  }
});

/* ---------------- Start Server ---------------- */

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
