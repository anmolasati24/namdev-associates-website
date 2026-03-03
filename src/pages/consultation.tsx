import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
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
    otherProjectType: "",
    projectLocation: "",
    startDate: "",
    endDate: "",
    minimumLabour: "",
    skilledLabour: "",
    semiSkilledLabour: "",
    unSkilledLabour: "",
    budget: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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
      await axios.post("http://localhost:5000/api/tenders", formData);
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      alert("Submission failed");
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
        }

        .page-container {
          min-height: 100vh;
          padding: 150px 20px 80px;
          background: linear-gradient(135deg, #0f172a, #1e1b4b, #0f172a);
          display: flex;
          justify-content: center;
        }

        .glass-card {
          width: 100%;
          max-width: 1100px;
          padding: 50px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: white;
        }

        .title {
          text-align: center;
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .subtitle {
          text-align: center;
          font-size: 14px;
          color: #ddd;
          margin-bottom: 40px;
        }

        .section-title {
          font-size: 18px;
          margin: 30px 0 15px;
          font-weight: 600;
          border-bottom: 1px solid rgba(255,255,255,0.2);
          padding-bottom: 5px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        input, select, textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.15);
          color: white;
          outline: none;
        }

        select {
          background-color: rgba(255,255,255,0.15);
          color: white;
        }

        select option {
          color: black;
        }

        textarea {
          grid-column: 1 / -1;
          resize: none;
        }

        input:focus, select:focus, textarea:focus {
          border-color: #6366f1;
          box-shadow: 0 0 6px #6366f1;
        }

        .submit-btn {
          margin-top: 30px;
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: white;
          font-weight: bold;
          cursor: pointer;
        }

        .success {
          text-align: center;
          padding: 10px;
          background: rgba(16,185,129,0.2);
          color: #10b981;
          border-radius: 10px;
          margin-bottom: 20px;
        }
      `}</style>

      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card"
        >
          <div className="title">Official Consultation & Project Requirement Form</div>
          <div className="subtitle">
            Kindly provide complete and accurate details for official business processing.
          </div>

          {success && <div className="success">Request submitted successfully.</div>}

          <form onSubmit={handleSubmit}>

            <div className="section-title">Organization Details</div>
            <div className="form-grid">
              <input name="companyName" placeholder="Organization / Company Name" onChange={handleChange} required />
              <input name="organizationType" placeholder="Organization Type (Govt / Pvt Ltd / Individual)" onChange={handleChange} required />
              <input name="registrationNumber" placeholder="Registration Number" onChange={handleChange} />
              <input name="gstNumber" placeholder="GST Number" onChange={handleChange} />
              <input name="address" placeholder="Official Address" onChange={handleChange} required />
            </div>

            <div className="section-title">Contact Person Details</div>
            <div className="form-grid">
              <input name="contactPerson" placeholder="Authorized Person Name" onChange={handleChange} required />
              <input name="designation" placeholder="Designation" onChange={handleChange} />
              <input name="email" type="email" placeholder="Official Email" onChange={handleChange} required />
              <input name="phone" placeholder="Contact Number" onChange={handleChange} required />
            </div>

            <div className="section-title">Project Details</div>
            <div className="form-grid">
              <select name="projectType" onChange={handleChange} required>
                <option value="">Select Project Type</option>
                <option>Infrastructure Development</option>
                <option>Government Tender</option>
                <option>Corporate Compliance</option>
                <option>Industrial Setup</option>
                <option>Project Management</option>
                <option value="Other">Other</option>
              </select>

              <input name="projectLocation" placeholder="Project Location" onChange={handleChange} required />

              <input type="date" name="startDate" onChange={handleChange} required />
              <input type="date" name="endDate" onChange={handleChange} required />

              <input
                type="number"
                name="minimumLabour"
                min="1"
                placeholder="Minimum Labour Required"
                onChange={handleChange}
                required
              />
            </div>

            {Number(formData.minimumLabour) > 25 && (
  <>
    <div className="section-title">
      Labour Classification (Mandatory if &gt; 25)
    </div>
    <div className="form-grid">
      <input
        type="number"
        name="skilledLabour"
        placeholder="Skilled Labour Count"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="semiSkilledLabour"
        placeholder="Semi-Skilled Labour Count"
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="unSkilledLabour"
        placeholder="Unskilled Labour Count"
        onChange={handleChange}
        required
      />
    </div>
  </>
)}

            <div className="section-title">Financial & Additional Details</div>
            <div className="form-grid">
              <input name="budget" placeholder="Estimated Project Budget" onChange={handleChange} />
              <textarea name="description" rows="5" placeholder="Detailed Project Description" onChange={handleChange} required />
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