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

export default function Contact() {

  const revealRef1 = useInView();
  const revealRef2 = useInView();

  /* ───────── FORM STATE ───────── */

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    service:"",
    message:""
  });

  const [loading,setLoading] = useState(false);
const [success,setSuccess] = useState(false);

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = async(e)=>{
e.preventDefault();

setLoading(true);
setSuccess(false);

try{

await axios.post("http://localhost:5000/api/contact",formData);

setSuccess(true);

setFormData({
name:"",
email:"",
phone:"",
service:"",
message:""
});

}
catch(error){
alert("Error sending request");
}

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

      .socials{
        display:flex;
        gap:15px;
        margin-top:20px;
      }

      .socials span{
        width:38px;
        height:38px;
        border-radius:50%;
        background:#2563EB;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#fff;
        cursor:pointer;
        transition:0.3s;
      }

      .socials span:hover{
        transform:translateY(-4px);
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

      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Connect With Our Experts</h1>
          <p>
            Let's build a reliable workforce strategy together.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div ref={revealRef1} className="reveal">

            <div className="title-main">Let’s Build Something Strong Together</div>

            <div className="address-box">
              <h4>Lucknow - Headquarters</h4>
              <p>
                3/290 Vipul Khand Gomti Nagar<br/>
                Lucknow - 226010<br/>
                +91-84232-15047
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}

         <div ref={revealRef2} className="reveal">

  <form className="form-card" onSubmit={handleSubmit}>

    {/* SUCCESS MESSAGE */}
    {success && (
      <div style={{
        background:"#e6f9f0",
        padding:"12px",
        borderRadius:"8px",
        marginBottom:"20px",
        color:"#0a7f42",
        fontSize:"14px"
      }}>
        ✔ Your message has been sent successfully
      </div>
    )}

    <div className="form-group">
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name*"
      />
    </div>

    <div className="form-group">
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email Address*"
      />
    </div>

    <div className="form-group">
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number*"
      />
    </div>

    <div className="form-group">
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
      >
        <option>Select Service Required</option>
        <option>Manpower Outsourcing</option>
        <option>Security Services</option>
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
      />
    </div>

    <button className="submit-btn" disabled={loading}>
      {loading ? "Sending..." : "Submit Your Request →"}
    </button>

  </form>

</div>


        </div>
      </section>

    </>
  );
}
