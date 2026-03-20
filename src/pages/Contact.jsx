import { useEffect, useRef, useState } from "react";
import axios from "axios";

/* ─── Scroll Reveal Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ref;
}

const WHATSAPP_NUMBER = "918423215047"; // Country code + number, no +

export default function Contact() {

  const revealRef1 = useInView();
  const revealRef2 = useInView();

  /* ───────── FORM STATE ───────── */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    /* ── 1. Send Email via backend ── */
    try {
      await axios.post("https://namdev-associates-website-1.onrender.com/api/contact", formData);
    } catch (err) {
      // If backend fails, still proceed with WhatsApp
      setError("⚠️ Email could not be sent, but your WhatsApp message is ready below.");
    }

    /* ── 2. Open WhatsApp with formatted message ── */
    const whatsappMessage =
      `*New Enquiry – Namdev Associates*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🛠️ *Service Required:* ${formData.service || "Not specified"}\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `_Sent via Namdev Associates Contact Form_`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setLoading(false);
  };

  return (
    <>
      <style>{`

      body { margin:0; font-family:'Inter',sans-serif; background:#f8faff; }

      .hero{
        min-height:70vh;
        background:url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80") center/cover no-repeat;
        display:flex;
        align-items:center;
        padding:120px 5% 0 5%;
        position:relative;
        color:#fff;
      }

      .hero::after{
        content:"";
        position:absolute;
        inset:0;
        background:linear-gradient(135deg,rgba(10,26,82,0.85),rgba(37,99,235,0.75));
      }

      .hero-content{
        position:relative;
        z-index:2;
        max-width:700px;
      }

      .hero h1{
        font-size:64px;
        font-weight:900;
        margin-bottom:20px;
      }

      .hero p{
        font-size:17px;
        opacity:0.9;
      }

      .section{
        padding:90px 10%;
      }

      .contact-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:70px;
      }

      .title-main{
        font-size:42px;
        font-weight:800;
        color:#0a1a52;
        margin-bottom:20px;
      }

      .subtitle{
        color:#555;
        margin-bottom:40px;
      }

      .address-box{
        margin-bottom:30px;
      }

      .address-box h4{
        font-size:20px;
        margin-bottom:8px;
        color:#0a1a52;
      }

      .address-box p{
        font-size:14px;
        color:#555;
      }

      .form-card{
        background:rgba(255,255,255,0.9);
        padding:45px;
        border-radius:18px;
        box-shadow:0 30px 80px rgba(0,0,0,0.1);
      }

      .form-group{
        margin-bottom:28px;
      }

      .form-group input,
      .form-group textarea,
      .form-group select{
        width:100%;
        padding:16px;
        border-radius:10px;
        border:1px solid #d9e1f7;
        font-size:14px;
        box-sizing:border-box;
        outline:none;
        transition:border 0.2s;
      }

      .form-group input:focus,
      .form-group textarea:focus,
      .form-group select:focus{
        border-color:#2563EB;
      }

      .submit-btn{
        width:100%;
        padding:16px;
        border-radius:40px;
        border:none;
        font-weight:600;
        font-size:15px;
        color:#fff;
        background:linear-gradient(135deg,#0a1a52,#2563EB);
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:10px;
        transition:opacity 0.2s;
      }

      .submit-btn:disabled{
        opacity:0.7;
        cursor:not-allowed;
      }

      .submit-btn:hover:not(:disabled){
        opacity:0.9;
      }

      .btn-icons{
        display:flex;
        gap:6px;
        align-items:center;
      }

      .wa-badge{
        background:#25D366;
        border-radius:20px;
        padding:2px 8px;
        font-size:12px;
        font-weight:700;
        letter-spacing:0.3px;
      }

      .email-badge{
        background:#2563EB;
        border-radius:20px;
        padding:2px 8px;
        font-size:12px;
        font-weight:700;
        letter-spacing:0.3px;
      }

      .reveal{
        opacity:0;
        transform:translateY(50px);
        transition:all 0.9s ease;
      }

      .reveal.show{
        opacity:1;
        transform:translateY(0);
      }

      @media (max-width: 1024px) {
        .hero { padding: 100px 4% 0; min-height: 60vh; }
        .hero-content { max-width: 90%; }
        .hero h1 { font-size: clamp(2rem, 7vw, 3.4rem); }
        .hero p { font-size: 1rem; }
        .section { padding: 65px 6%; }
        .contact-grid { gap: 35px; }
        .form-card { padding: 30px; }
      }

      @media (max-width: 768px) {
        .hero { padding: 90px 4% 20px; min-height: 50vh; }
        .hero h1 { font-size: clamp(1.8rem, 10vw, 2.4rem); margin-bottom: 12px; }
        .hero p { font-size: 0.95rem; margin-bottom: 8px; }
        .section { padding: 45px 4%; }
        .contact-grid { grid-template-columns: 1fr; gap: 28px; }
        .title-main { font-size: 2rem; margin-bottom: 16px; }
        .address-box p { font-size: 14px; }
        .form-card { padding: 20px; border-radius: 14px; }
        .form-group input, .form-group textarea, .form-group select { padding: 12px; }
        .submit-btn { padding: 14px; font-size: 14px; border-radius: 999px; }
      }

      @media (max-width: 500px) {
        .hero { padding: 80px 3% 18px; min-height: 45vh; }
        .hero h1 { font-size: 1.85rem; }
        .section { padding: 28px 3%; }
        .form-card { padding: 16px; }
      }

      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Connect With Our Experts</h1>
          <p>Let's build a reliable workforce strategy together.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* LEFT SIDE */}
          <div ref={revealRef1} className="reveal">

            <div className="title-main">Let's Build Something Strong Together</div>

            {/* Lucknow */}
            <div className="address-box">
              <h4>Lucknow - Headquarters</h4>
              <p>
                3/290 Vipul Khand Gomti Nagar<br />
                Lucknow - 226010<br />
                Phone: +91-84232-15047<br />
                Email: namdevassociateslko@gmail.com
              </p>
            </div>

            {/* Bhopal */}
            <div className="address-box">
              <h4>Bhopal - Regional Office</h4>
              <p>
                M.NO.45, Chuna Bhatti, Kolar Road<br />
                Bhopal - 462016<br />
                Phone: +91-84232-15047<br />
                Email: namdevassociateslko@gmail.com
              </p>
            </div>

            {/* Delhi */}
            <div className="address-box">
              <h4>Delhi - Corporate Office</h4>
              <p>
                B15 Office No. 1 2nd Floor Matiala Rd Gulab B Block A Kiran Garden<br />
                Uttam Nagar, New Delhi - 110059<br />
                Phone: +91-84232-15047<br />
                Email: namdevassociateslko@gmail.com
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div ref={revealRef2} className="reveal">

            <form className="form-card max-w-xl mx-auto" onSubmit={handleSubmit}>

              {/* SUCCESS MESSAGE */}
              {success && (
                <div style={{
                  background: "#e6f9f0",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  color: "#0a7f42",
                  fontSize: "14px",
                  lineHeight: "1.6"
                }}>
                  ✅ <strong>Request submitted!</strong><br />
                  📧 Email sent to our team.<br />
                  💬 WhatsApp opened with your enquiry details.
                </div>
              )}

              {/* ERROR / FALLBACK MESSAGE */}
              {error && (
                <div style={{
                  background: "#fff8e1",
                  padding: "14px 16px",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  color: "#7a5c00",
                  fontSize: "14px"
                }}>
                  {error}
                </div>
              )}

              <div className="form-group">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name*"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address*"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number*"
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service Required</option>
                  <option>Manpower Outsourcing</option>
                  <option>Security Services</option>
                  <option>Housekeeping</option>
                  <option>HR Consultancy</option>
                  <option>ISO Consultancy</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write Your Requirement..."
                  required
                />
              </div>

              <button className="submit-btn" type="submit" disabled={loading}>
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Submit Your Request
                    <span className="btn-icons">
                      <span className="email-badge">✉ Email</span>
                      <span className="wa-badge">💬 WhatsApp</span>
                    </span>
                  </>
                )}
              </button>

              <p style={{ fontSize: "12px", color: "#888", textAlign: "center", marginTop: "14px" }}>
                Submitting will send an email to our team and open WhatsApp with your enquiry.
              </p>

            </form>

          </div>

        </div>
      </section>

    </>
  );
}