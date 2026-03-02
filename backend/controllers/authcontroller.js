const Admin = require("../models/Admin.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (!admin) {
    return res.status(400).json({ message: "Admin not found" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  res.json({
    token: generateToken(admin._id)
  });
};