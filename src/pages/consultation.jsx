import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
// import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import Swal from "sweetalert2";

const ConsultationPage = () => {

  // const captchaRef = useRef(null);

  const initialState = {
    companyName: "",
    organizationType: "",
    registrationNumber: "",
    gstNumber: "",
    address: "",
    contactPerson: "",
    designation: "",
    email: "",
    phone: "",
    projectType: "",
    projectLocation: "",
    startDate: "",
    endDate: "",
    minimumLabour: "",
    budget: "",
    description: ""
  };

  const [formData, setFormData] = useState(initialState);
  // const [captcha, setCaptcha] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await axios.post(
        "https://namdev-associates-website-1.onrender.com/api/consultations",
        formData
      );//https://namdev-associates-website-1.onrender.com/

      if (res.data.success) {

        Swal.fire({
          icon: "success",
          title: "Form Submitted Successfully",
          text: "Our team will contact you shortly.",
          confirmButtonColor: "#4f46e5"
        });

        setFormData(initialState);

      }

    } catch (error) {

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again."
      });

    }

    setLoading(false);
  };

  return (
    <>
      <style>{`

        body{
          margin:0;
          font-family:'Segoe UI',sans-serif;
        }

        .page-container{
          min-height:100vh;
          padding:150px 20px 80px;
          background:linear-gradient(135deg,#0f172a,#1e1b4b,#0f172a);
          display:flex;
          justify-content:center;
        }

        .glass-card{
          width:100%;
          max-width:1100px;
          padding:50px;
          border-radius:25px;
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(20px);
          border:1px solid rgba(255,255,255,0.15);
          color:white;
        }

        .title{
          text-align:center;
          font-size:32px;
          font-weight:bold;
          margin-bottom:5px;
        }

        .subtitle{
          text-align:center;
          font-size:14px;
          color:#ddd;
          margin-bottom:40px;
        }

        .section-title{
          font-size:18px;
          margin:30px 0 15px;
          font-weight:600;
          border-bottom:1px solid rgba(255,255,255,0.2);
          padding-bottom:5px;
        }

        .form-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
          gap:18px;
        }

        input,select,textarea{
          width:100%;
          padding:12px 14px;
          border-radius:10px;
          border:1px solid rgba(255,255,255,0.2);
          background:rgba(255,255,255,0.15);
          color:white;
          outline:none;
        }

        select option{
          color:black;
        }

        textarea{
          grid-column:1/-1;
          resize:none;
        }

        input:focus,select:focus,textarea:focus{
          border-color:#6366f1;
          box-shadow:0 0 6px #6366f1;
        }

        .submit-btn{
          margin-top:25px;
          width:100%;
          padding:15px;
          border-radius:12px;
          border:none;
          background:linear-gradient(135deg,#6366f1,#4f46e5);
          color:white;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .submit-btn:hover{
          transform:translateY(-2px);
        }

        .captcha-box{
          margin-top:25px;
          display:flex;
          justify-content:center;
        }

        @media (max-width: 1024px) {
          .page-container{ padding:120px 16px 55px; }
          .glass-card{ padding: 38px; }
          .title{ font-size:28px; }
          .subtitle{ font-size:13px; margin-bottom:30px; }
        }

        @media (max-width: 768px) {
          .page-container{ padding:95px 12px 40px; }
          .glass-card{ padding:24px; border-radius:16px; }
          .title{ font-size:24px; }
          .subtitle{ font-size:12px; margin-bottom:24px; }
          .section-title{ margin:20px 0 10px; }
        }

        @media (max-width: 500px) {
          .page-container{ padding:85px 10px 30px; }
          .form-grid{ gap:14px; }
          .glass-card{ width:100%; max-width:100%; padding:20px; }
        }

      `}</style>

      <div className="page-container">

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          className="glass-card"
        >

          <div className="title">
            Official Consultation & Project Requirement Form
          </div>

          <div className="subtitle">
            Kindly provide complete and accurate details for official business processing.
          </div>

          <form onSubmit={handleSubmit}>

            <div className="section-title">Organization Details</div>

            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-4">

              <input name="companyName" placeholder="Organization / Company Name *" value={formData.companyName} onChange={handleChange} required className="w-full" />

              <input name="organizationType" placeholder="Organization Type *" value={formData.organizationType} onChange={handleChange} required className="w-full" />

              <input name="registrationNumber" placeholder="Registration Number" value={formData.registrationNumber} onChange={handleChange} className="w-full" />

              <input name="gstNumber" placeholder="GST Number" value={formData.gstNumber} onChange={handleChange} className="w-full" />

              <input name="address" placeholder="Official Address *" value={formData.address} onChange={handleChange} required className="w-full md:col-span-2" />

            </div>

            <div className="section-title">Contact Person Details</div>

            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-4">

              <input name="contactPerson" placeholder="Authorized Person Name *" value={formData.contactPerson} onChange={handleChange} required className="w-full" />

              <input name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="w-full" />

              <input type="email" name="email" placeholder="Official Email *" value={formData.email} onChange={handleChange} required className="w-full" />

              <input name="phone" placeholder="Contact Number *" value={formData.phone} onChange={handleChange} required className="w-full" />

            </div>

            <div className="section-title">Project Details</div>

            <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-4">

              <select name="projectType" value={formData.projectType} onChange={handleChange} required className="w-full">
                <option value="">Select Project Type *</option>
                <option>Infrastructure Development</option>
                <option>Government Tender</option>
                <option>Corporate Compliance</option>
                <option>Industrial Setup</option>
                <option>Project Management</option>
              </select>

              <input name="projectLocation" placeholder="Project Location *" value={formData.projectLocation} onChange={handleChange} required className="w-full" />

              <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full" />

              <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required className="w-full" />

              <input type="number" name="minimumLabour" min="1" placeholder="Minimum Labour Required *" value={formData.minimumLabour} onChange={handleChange} required className="w-full md:col-span-2" />

            </div>

            <div className="section-title">Financial & Additional Details</div>

            <div className="form-grid grid grid-cols-1 gap-4">

              <input name="budget" placeholder="Estimated Project Budget" value={formData.budget} onChange={handleChange} className="w-full" />

              <textarea name="description" rows="5" placeholder="Detailed Project Description *" value={formData.description} onChange={handleChange} required className="w-full" />

            </div>

            <button className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Official Consultation Request"}
            </button>

          </form>

        </motion.div>

      </div>
    </>
  );
};

export default ConsultationPage;