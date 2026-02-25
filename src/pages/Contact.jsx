import { useEffect, useRef } from "react";

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
  const revealRef3 = useInView();

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

      body { margin:0; font-family:'Inter',sans-serif; background:#f8faff; }

      /* ───────── HERO ───────── */
      .hero{
        min-height:75vh;
        background:url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80") center center/cover no-repeat;
        display:flex;
        align-items:center;
        padding:0 5%;
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
        z-index:4;
        max-width:700px;
      }
      .hero h1{
        font-family:'Raleway',sans-serif;
        font-size:64px;
        font-weight:900;
        margin-top:80px;
        margin-bottom:20px;
        line-height:1.1;
      }
      .hero p{
        font-size:17px;
        opacity:0.9;
        line-height:1.8;
      }

      /* ───────── SECTION ───────── */
      .section{
        padding:90px 10%;
      }

      .contact-grid{
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:70px;
      }

      .title-main{
        font-family:'Raleway',sans-serif;
        font-size:42px;
        font-weight:800;
        color:#0a1a52;
        margin-bottom:20px;
      }

      .subtitle{
        color:#555;
        font-size:16px;
        line-height:1.8;
        margin-bottom:40px;
      }

      /* ───────── ADDRESS BOX ───────── */
      .address-box{
        margin-bottom:30px;
      }

      .address-box h4{
        font-family:'Raleway';
        font-size:20px;
        margin-bottom:8px;
        color:#0a1a52;
      }

      .address-box p{
        font-size:14px;
        color:#555;
        line-height:1.7;
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
        background:#0a1a52;
      }

      /* ───────── FORM ───────── */
      .form-card{
        background:rgba(255,255,255,0.9);
        backdrop-filter:blur(10px);
        padding:45px;
        border-radius:18px;
        box-shadow:0 30px 80px rgba(0,0,0,0.1);
      }

      .form-group{
        position:relative;
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
        outline:none;
        transition:0.3s;
        background:#f9fbff;
      }

      .form-group input:focus,
      .form-group textarea:focus,
      .form-group select:focus{
        border-color:#2563EB;
        box-shadow:0 0 0 3px rgba(37,99,235,0.15);
        background:#fff;
      }

      .submit-btn{
        width:100%;
        padding:16px;
        border-radius:40px;
        border:none;
        font-weight:600;
        font-size:15px;
        letter-spacing:1px;
        color:#fff;
        background:linear-gradient(135deg,#0a1a52,#2563EB);
        cursor:pointer;
        transition:0.4s;
      }

      .submit-btn:hover{
        transform:translateY(-4px);
        box-shadow:0 18px 40px rgba(37,99,235,0.4);
      }

      /* ───────── REVEAL ───────── */
      .reveal{
        opacity:0;
        transform:translateY(50px);
        transition:all 0.9s ease;
      }
      .reveal.show{
        opacity:1;
        transform:translateY(0);
      }

      @media(max-width:900px){
        .contact-grid{ grid-template-columns:1fr; }
        .hero h1{ font-size:40px; }
      }

      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Connect With Our Experts</h1>
          <p>
            Let’s build a reliable workforce strategy together. Reach out to our
            headquarters or branch offices — our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div ref={revealRef1} className="reveal">
            <div className="title-main">Let’s Build Something Strong Together</div>
            <div className="subtitle">
              Whether you require manpower outsourcing, security services,
              HR consultancy or compliance advisory — we ensure timely
              deployment and complete statutory compliance.
            </div>

            <div className="address-box">
              <h4>Lucknow – Headquarters</h4>
              <p>
                3/290, Vipul Khand, Gomti Nagar,<br/>
                Lucknow – 226010<br/>
                +91-84232-15047<br/>
                namdevassociateslko@gmail.com
              </p>
            </div>

            <div className="address-box">
              <h4>Delhi – Branch Office</h4>
              <p>
                Regional Office, Delhi<br/>
                +91-84232-15047
              </p>
            </div>

            <div className="address-box">
              <h4>Bhopal – Branch Office</h4>
              <p>
                Regional Office, Bhopal<br/>
                +91-84232-15047
              </p>
            </div>

            <div className="socials">
              <span>f</span>
              <span>in</span>
              <span>𝕏</span>
              <span>ig</span>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div ref={revealRef2} className="reveal">
            <div className="form-card">

              <div className="form-group">
                <input placeholder="Full Name*" />
              </div>

              <div className="form-group">
                <input placeholder="Email Address*" />
              </div>

              <div className="form-group">
                <input placeholder="Phone Number*" />
              </div>

              <div className="form-group">
                <select>
                  <option>Select Service Required</option>
                  <option>Manpower Outsourcing</option>
                  <option>Security Services</option>
                  <option>HR Consultancy</option>
                  <option>ISO Consultancy</option>
                </select>
              </div>

              <div className="form-group">
                <textarea rows="5" placeholder="Write Your Requirement..." />
              </div>

              <button className="submit-btn">Submit Your Request →</button>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}