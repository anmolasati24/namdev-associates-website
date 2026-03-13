const nodemailer = require("nodemailer");

const sendEmail = async (data) => {

const transporter = nodemailer.createTransport({
service: "gmail",
auth: {
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
}
});

const mailOptions = {
from: process.env.EMAIL_USER,
to: data.email,
subject: "Consultation Request Received - Namdev Associates",

html: `
<h2>Consultation Request Submitted</h2>

<p>Dear ${data.contactPerson},</p>

<p>Your consultation request has been successfully received.</p>

<h3>Project Details</h3>

<ul>
<li><b>Company:</b> ${data.companyName}</li>
<li><b>Project Type:</b> ${data.projectType}</li>
<li><b>Location:</b> ${data.projectLocation}</li>
<li><b>Labour Required:</b> ${data.minimumLabour}</li>
<li><b>Budget:</b> ${data.budget}</li>
</ul>

<p>Our team will contact you shortly.</p>

<br/>

<p>Regards</p>
<p>Namdev Associates</p>
`
};

await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;