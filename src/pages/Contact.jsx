import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("ct-show"); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const WHATSAPP_NUMBER = "918423215047";

const OFFICES = [
  {
    city: "Lucknow",
    label: "Headquarters",
    address: "3/290 Vipul Khand, Gomti Nagar, Lucknow – 226010",
    phone: "+91-84232-15047",
    email: "namdevassociateslko@gmail.com",
  },
  {
    city: "Bhopal",
    label: "Regional Office",
    address: "M.NO.45, Chuna Bhatti, Kolar Road, Bhopal – 462016",
    phone: "+91-84232-15047",
    email: "namdevassociateslko@gmail.com",
  },
  {
    city: "New Delhi",
    label: "Corporate Office",
    address: "B15, Office No. 1, 2nd Floor, Matiala Rd, Kiran Garden, Uttam Nagar – 110059",
    phone: "+91-84232-15047",
    email: "namdevassociateslko@gmail.com",
  },
];

export default function Contact() {
  const revealRef1 = useInView();
  const revealRef2 = useInView();

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      await axios.post("https://namdev-associates-website-1.onrender.com/api/contact", formData);
    } catch {
      setError("⚠️ Email could not be sent, but your WhatsApp message is ready.");
    }

    const msg =
      `*New Enquiry – Namdev Associates*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🛠️ *Service:* ${formData.service || "Not specified"}\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `_Sent via Namdev Associates Contact Form_`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setLoading(false);
  };

  return (
    <>
      <style>{`
        .ct-page { background: #f8faff; }

        .ct-hero {
          min-height: 52vh;
          background: url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80") center/cover no-repeat;
          display: flex;
          align-items: center;
          padding: 130px 8% 60px;
          position: relative;
          color: #fff;
        }
        .ct-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(10,26,82,0.88), rgba(37,99,235,0.78));
        }
        .ct-hero-content { position: relative; z-index: 2; max-width: 700px; }
        .ct-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          border-radius: 20px; padding: 6px 16px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #bfdbfe; margin-bottom: 20px;
        }
        .ct-hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900; line-height: 1.15;
          margin-bottom: 16px; color: #fff;
        }
        .ct-hero h1 span { color: #60a5fa; }
        .ct-hero p {
          font-size: 16px; color: rgba(255,255,255,0.75);
          line-height: 1.7; max-width: 520px;
        }

        .ct-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 6%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: start;
        }

        .ct-left-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #0a1a52;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .ct-left-sub {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 40px;
          line-height: 1.7;
        }

        .ct-office-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 22px 24px;
          margin-bottom: 16px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .ct-office-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #0a1a52, #2563eb);
          border-radius: 4px 0 0 4px;
        }
        .ct-office-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 8px 28px rgba(10,26,82,0.08);
          transform: translateX(4px);
        }
        .ct-office-header {
          display: flex; align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .ct-office-city { font-size: 16px; font-weight: 800; color: #0a1a52; }
        .ct-office-label {
          font-size: 10px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          background: #eff6ff; color: #2563eb;
          border: 1px solid #bfdbfe;
          padding: 3px 10px; border-radius: 20px;
        }
        .ct-office-row {
          display: flex; align-items: flex-start;
          gap: 10px; margin-bottom: 8px;
          font-size: 13px; color: #475569;
        }
        .ct-office-row:last-child { margin-bottom: 0; }
        .ct-office-icon { color: #2563eb; margin-top: 2px; flex-shrink: 0; font-size: 13px; }

        .ct-reveal { opacity: 0; transform: translateY(40px); transition: all 0.8s ease; }
        .ct-reveal.ct-show { opacity: 1; transform: translateY(0); }

        .ct-form-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(10,26,82,0.08);
          position: relative;
          overflow: hidden;
        }
        .ct-form-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #0a1a52, #2563eb);
        }
        .ct-form-title { font-size: 20px; font-weight: 800; color: #0a1a52; margin-bottom: 6px; }
        .ct-form-sub { font-size: 13px; color: #64748b; margin-bottom: 28px; line-height: 1.6; }

        .ct-field { margin-bottom: 18px; }
        .ct-field label {
          display: block;
          font-size: 11px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          color: #64748b; margin-bottom: 7px;
        }
        .ct-field input,
        .ct-field textarea,
        .ct-field select {
          width: 100%;
          padding: 13px 16px;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          font-size: 14px;
          color: #0f172a;
          background: #f8faff;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .ct-field input:focus,
        .ct-field textarea:focus,
        .ct-field select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37,99,235,0.08);
          background: #fff;
        }
        .ct-field input::placeholder,
        .ct-field textarea::placeholder { color: #94a3b8; }
        .ct-field textarea { resize: none; }

        .ct-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .ct-submit {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          border: none;
          font-weight: 700;
          font-size: 15px;
          color: #fff;
          background: linear-gradient(135deg, #0a1a52, #2563eb);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.25s;
          margin-top: 8px;
          font-family: inherit;
          box-shadow: 0 6px 20px rgba(37,99,235,0.3);
        }
        .ct-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(37,99,235,0.4); }
        .ct-submit:disabled { opacity: 0.65; cursor: not-allowed; }

        .ct-badge { display: inline-flex; align-items: center; gap: 5px; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
        .ct-badge-email { background: #2563eb; color: #fff; }
        .ct-badge-wa    { background: #25D366; color: #fff; }

        .ct-alert { padding: 14px 16px; border-radius: 10px; font-size: 13px; line-height: 1.6; margin-bottom: 20px; }
        .ct-alert-success { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
        .ct-alert-warn    { background: #fffbeb; color: #92400e; border: 1px solid #fde68a; }

        .ct-form-note { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 14px; }

        @media (max-width: 1024px) {
          .ct-section { grid-template-columns: 1fr; gap: 40px; padding: 60px 5%; }
          .ct-hero { padding: 110px 6% 50px; }
        }
        @media (max-width: 768px) {
          .ct-hero { padding: 95px 4% 40px; }
          .ct-section { padding: 40px 4%; }
          .ct-form-card { padding: 24px 20px; }
          .ct-field-row { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .ct-hero { padding: 85px 4% 36px; }
          .ct-form-card { padding: 20px 16px; }
        }
      `}</style>

      <div className="ct-page">

        {/* HERO */}
        <section className="ct-hero">
          <div className="ct-hero-content">
            <div className="ct-hero-badge">📞 Get In Touch</div>
            <h1>Connect With <span>Our Experts</span></h1>
            <p>Let's build a reliable workforce strategy together. Reach us at any of our offices across India.</p>
          </div>
        </section>

        {/* MAIN */}
        <div className="ct-section">

          {/* LEFT */}
          <div ref={revealRef1} className="ct-reveal">
            <div className="ct-left-title">Our Offices</div>
            <p className="ct-left-sub">
              Namdev Associates operates from multiple offices across India.
              Reach out to your nearest office or contact our headquarters directly.
            </p>
            {OFFICES.map((o) => (
              <div key={o.city} className="ct-office-card">
                <div className="ct-office-header">
                  <span className="ct-office-city">{o.city}</span>
                  <span className="ct-office-label">{o.label}</span>
                </div>
                <div className="ct-office-row"><FaMapMarkerAlt className="ct-office-icon" /><span>{o.address}</span></div>
                <div className="ct-office-row"><FaPhoneAlt className="ct-office-icon" /><span>{o.phone}</span></div>
                <div className="ct-office-row"><FaEnvelope className="ct-office-icon" /><span>{o.email}</span></div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div ref={revealRef2} className="ct-reveal">
            <div className="ct-form-card">
              <div className="ct-form-title">Send Us a Message</div>
              <p className="ct-form-sub">Fill in your details and we'll get back to you within 24 hours.</p>

              {success && (
                <div className="ct-alert ct-alert-success">
                  ✅ <strong>Request submitted!</strong><br />
                  📧 Email sent to our team. 💬 WhatsApp opened with your enquiry.
                </div>
              )}
              {error && <div className="ct-alert ct-alert-warn">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="ct-field-row">
                  <div className="ct-field">
                    <label>Full Name *</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required />
                  </div>
                  <div className="ct-field">
                    <label>Phone Number *</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="ct-field">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="ct-field">
                  <label>Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option>Manpower Outsourcing</option>
                    <option>Security Services</option>
                    <option>Housekeeping</option>
                    <option>HR Consultancy</option>
                    <option>ISO Consultancy</option>
                  </select>
                </div>
                <div className="ct-field">
                  <label>Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Describe your requirement..." required />
                </div>
                <button className="ct-submit" type="submit" disabled={loading}>
                  {loading ? "Sending..." : (
                    <>
                      Submit Your Request
                      <span style={{display:"flex",gap:"6px"}}>
                        <span className="ct-badge ct-badge-email">✉ Email</span>
                        <span className="ct-badge ct-badge-wa">💬 WhatsApp</span>
                      </span>
                    </>
                  )}
                </button>
                <p className="ct-form-note">Submitting will email our team and open WhatsApp with your enquiry.</p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
