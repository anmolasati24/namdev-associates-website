const express = require("express");
const router = express.Router();
const Tender = require("../models/Tender");
const sendEmail = require("../utils/sendEmail");

router.post("/tenders", async (req, res) => {

try {

const tender = new Tender(req.body);
await tender.save();

await sendEmail(req.body);

res.status(201).json({
message: "Tender submitted successfully"
});

} catch (error) {

res.status(500).json({
message: "Server error",
error: error.message
});

}

});

module.exports = router;