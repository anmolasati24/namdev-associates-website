const express =require("express");
const router= express.Router();
const upload =require("../middlewares/upload.middleware");
const {createTender} =require("../controllers/tender.controller");

router.post("/",upload.single("document"),createTender);
const protect = require("../middleware/auth.middleware");

router.get("/admin", protect, getAllTenders);
router.put("/:id", protect, updateTenderStatus);


module.exports=router;

