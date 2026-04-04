import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";

const ConsultationPage = () => {
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
    description: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://namdev-associates-website-1.onrender.com/api/consultation",
        formData
      );
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Form Submitted Successfully",
          text: "Our team will contact you shortly.",
          confirmButtonColor: "#4f46e5",
        });
        setFormData(initialState);
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'Segoe UI', sans-serif;
        }

        /* ── Page wrapper ── */
        .page-container {
          min-height: 100vh;
          width: 100%;
          padding: clamp(80px, 12vw, 150px) clamp(12px, 4vw, 40px) clamp(40px, 6vw, 80px);
          background: linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a);
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        /* ── Card ── */
        .glass-card {
          width: 100%;
          max-width: 1100px;
          min-width: 0;          /* prevent flex/grid blowout */
          padding: clamp(16px, 4vw, 50px);
          border-radius: clamp(14px, 2vw, 25px);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
          overflow: hidden;      /* clip any child that still bleeds */
        }

        /* ── Headings ── */
        .title {
          text-align: center;
          font-size: clamp(20px, 4vw, 32px);
          font-weight: bold;
          margin-bottom: 6px;
          line-height: 1.3;
        }

        .subtitle {
          text-align: center;
          font-size: clamp(12px, 1.6vw, 14px);
          color: #ddd;
          margin-bottom: clamp(24px, 4vw, 40px);
          padding: 0 8px;
        }

        .section-title {
          font-size: clamp(14px, 2vw, 18px);
          margin: clamp(18px, 3vw, 30px) 0 clamp(10px, 1.5vw, 15px);
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding-bottom: 5px;
        }

        /* ── Grid ── */
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(12px, 2vw, 18px);
        }

        /* Full-width helpers */
        .col-full { grid-column: 1 / -1; }

        /* ── Fields ── */
        input, select, textarea {
          width: 100%;
          min-width: 0;          /* critical: prevents grid cell blowout */
          padding: clamp(10px, 1.5vw, 12px) clamp(12px, 1.8vw, 14px);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.15);
          color: white;
          outline: none;
          font-size: clamp(13px, 1.4vw, 15px);
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        input::placeholder, textarea::placeholder {
          color: rgba(255, 255, 255, 0.55);
        }

        select option { color: black; }

        textarea { resize: none; }

        input:focus, select:focus, textarea:focus {
          border-color: #6366f1;
          box-shadow: 0 0 6px #6366f1;
        }

        /* ── Submit ── */
        .submit-btn {
          margin-top: clamp(18px, 3vw, 25px);
          width: 100%;
          padding: clamp(12px, 2vw, 15px);
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          font-weight: bold;
          font-size: clamp(13px, 1.5vw, 15px);
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
          font-family: inherit;
        }

        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        /* ── Responsive: single column on narrow screens ── */
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
          /* col-full is redundant but harmless on single-col */
          .col-full { grid-column: 1; }
        }
      `}</style>

      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card"
        >
          <div className="title">Official Consultation &amp; Project Requirement Form</div>
          <div className="subtitle">
            Kindly provide complete and accurate details for official business processing.
          </div>

          <form onSubmit={handleSubmit}>

            {/* ── Organization Details ── */}
            <div className="section-title">Organization Details</div>
            <div className="form-grid">
              <input name="companyName" placeholder="Organization / Company Name *"
                value={formData.companyName} onChange={handleChange} required />

              <input name="organizationType" placeholder="Organization Type *"
                value={formData.organizationType} onChange={handleChange} required />

              <input name="registrationNumber" placeholder="Registration Number"
                value={formData.registrationNumber} onChange={handleChange} />

              <input name="gstNumber" placeholder="GST Number"
                value={formData.gstNumber} onChange={handleChange} />

              <input name="address" placeholder="Official Address *"
                value={formData.address} onChange={handleChange} required
                className="col-full" />
            </div>

            {/* ── Contact Person Details ── */}
            <div className="section-title">Contact Person Details</div>
            <div className="form-grid">
              <input name="contactPerson" placeholder="Authorized Person Name *"
                value={formData.contactPerson} onChange={handleChange} required />

              <input name="designation" placeholder="Designation"
                value={formData.designation} onChange={handleChange} />

              <input type="email" name="email" placeholder="Official Email *"
                value={formData.email} onChange={handleChange} required />

              <input name="phone" placeholder="Contact Number *"
                value={formData.phone} onChange={handleChange} required />
            </div>

            {/* ── Project Details ── */}
            <div className="section-title">Project Details</div>
            <div className="form-grid">
              <select name="projectType" value={formData.projectType}
                onChange={handleChange} required>
                <option value="">Select Project Type *</option>
                <option>Infrastructure Development</option>
                <option>Government Tender</option>
                <option>Corporate Compliance</option>
                <option>Industrial Setup</option>
                <option>Project Management</option>
              </select>

              <input name="projectLocation" placeholder="Project Location *"
                value={formData.projectLocation} onChange={handleChange} required />

              <input type="date" name="startDate" value={formData.startDate}
                onChange={handleChange} required />

              <input type="date" name="endDate" value={formData.endDate}
                onChange={handleChange} required />

              <input type="number" name="minimumLabour" min="1"
                placeholder="Minimum Labour Required *"
                value={formData.minimumLabour} onChange={handleChange} required
                className="col-full" />
            </div>

            {/* ── Financial & Additional Details ── */}
            <div className="section-title">Financial &amp; Additional Details</div>
            <div className="form-grid">
              <input name="budget" placeholder="Estimated Project Budget"
                value={formData.budget} onChange={handleChange}
                className="col-full" />

              <textarea name="description" rows="5"
                placeholder="Detailed Project Description *"
                value={formData.description} onChange={handleChange} required
                className="col-full" />
            </div>

            <button className="submit-btn" disabled={loading}>
              {loading ? "Submitting…" : "Submit Official Consultation Request"}
            </button>

          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ConsultationPage;