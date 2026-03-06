const Tender = require("../models/tender.model");
const sendEmail = require("../utils/sendEmail");

exports.createTender = async (req, res) => {
  try {
    const tender = await Tender.create({
      ...req.body,
      document: req.file ? req.file.path : null
    });

    await sendEmail(
      "New Tender Submission",
      `Company: ${tender.companyName}
Contact: ${tender.contactPerson}
Email: ${tender.email}
Phone: ${tender.phone}
Budget: ${tender.budget}
Deadline: ${tender.deadline}`
    );

    res.status(201).json({ message: "Tender Submitted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAllTenders = async (req, res) => {
  const tenders = await Tender.find().sort({ createdAt: -1 });
  res.json(tenders);
};

exports.updateTenderStatus = async (req, res) => {
  const tender = await Tender.findById(req.params.id);

  if (!tender) {
    return res.status(404).json({ message: "Not found" });
  }

  tender.status = req.body.status;
  await tender.save();

  res.json({ message: "Status Updated" });
};