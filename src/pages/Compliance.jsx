import { useEffect, useRef, useState } from "react";

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ─── Counter Hook ─── */
function Counter({ end }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 20);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 20);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}</span>;
}

export default function ComplianceSection() {

  const revealRef = useReveal();

  return (
    <>
      <style>{`

      .compliance-section{
         
        padding:200px 8% 120px;
        background:linear-gradient(135deg,#0a1a52 0%, #1e40af 100%);
        color:#fff;
        position:relative;
        overflow:hidden;
      }

      .compliance-section::before{
        content:"";
        position:absolute;
        width:600px;
        height:600px;
        background:radial-gradient(circle,rgba(96,165,250,0.15),transparent 70%);
        top:-200px;
        right:-200px;
        border-radius:50%;
      }

      .compliance-header{
        text-align:center;
        max-width:800px;
        margin:auto;
        margin-bottom:70px;
      }

      .compliance-header h2{
        font-size:48px;
        font-weight:900;
        margin-bottom:20px;
        font-family:'Raleway',sans-serif;
      }

      .compliance-header p{
        font-size:16px;
        opacity:0.85;
        line-height:1.8;
      }

      .compliance-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
        gap:35px;
        margin-bottom:80px;
      }

      .compliance-card{
        background:rgba(255,255,255,0.08);
        backdrop-filter:blur(10px);
        padding:35px;
        border-radius:18px;
        transition:0.4s ease;
        border:1px solid rgba(255,255,255,0.15);
      }

      .compliance-card:hover{
        transform:translateY(-10px);
        box-shadow:0 25px 60px rgba(0,0,0,0.3);
        background:rgba(255,255,255,0.12);
      }

      .compliance-card h4{
        font-size:20px;
        margin-bottom:15px;
        font-weight:700;
      }

      .compliance-card ul{
        padding-left:18px;
        line-height:1.9;
        font-size:14px;
      }

      .compliance-stats{
        display:flex;
        justify-content:center;
        gap:60px;
        margin-bottom:80px;
        flex-wrap:wrap;
      }

      .stat-box{
        text-align:center;
      }

      .stat-box h3{
        font-size:48px;
        font-weight:900;
      }

      .stat-box p{
        opacity:0.7;
        margin-top:8px;
      }

      .risk-box{
        background:#fff;
        color:#0a1a52;
        padding:50px;
        border-radius:20px;
        text-align:center;
        max-width:850px;
        margin:auto;
        box-shadow:0 30px 70px rgba(0,0,0,0.2);
      }

      .risk-box h3{
        font-size:32px;
        margin-bottom:20px;
      }

      .download-btn{
        margin-top:25px;
        padding:14px 35px;
        border-radius:40px;
        border:none;
        font-weight:600;
        background:linear-gradient(135deg,#0a1a52,#2563EB);
        color:#fff;
        cursor:pointer;
        transition:0.4s;
      }

      .download-btn:hover{
        transform:translateY(-4px);
        box-shadow:0 15px 35px rgba(37,99,235,0.5);
      }

      .reveal{
        opacity:0;
        transform:translateY(50px);
        transition:1s ease;
      }

      .reveal.active{
        opacity:1;
        transform:translateY(0);
      }

      `}</style>

      <section className="compliance-section">
        <div ref={revealRef} className="reveal">

          <div className="compliance-header">
            <h2>Statutory Compliance & Governance Framework</h2>
            <p>
              We operate with complete adherence to Central & State Labour Laws,
              ensuring zero legal liability risk for our clients. Our structured
              compliance architecture guarantees transparent statutory management,
              audit-readiness and full regulatory alignment.
            </p>
          </div>

          {/* CARDS */}
          <div className="compliance-grid">

            <div className="compliance-card">
              <h4>Labour Law Compliance</h4>
              <ul>
                <li>Provident Fund (PF) Registration & Filing</li>
                <li>Employee State Insurance (ESI)</li>
                <li>Minimum Wages Act Compliance</li>
                <li>Contract Labour Regulation Act</li>
                <li>Bonus & Gratuity Management</li>
              </ul>
            </div>

            <div className="compliance-card">
              <h4>Statutory Registrations</h4>
              <ul>
                <li>GST Registered Entity</li>
                <li>PAN & MSME Certified</li>
                <li>Shop & Establishment License</li>
                <li>Professional Tax Registration</li>
              </ul>
            </div>

            <div className="compliance-card">
              <h4>Quality & Audit Governance</h4>
              <ul>
                <li>ISO 9001:2015 Framework</li>
                <li>Internal Compliance Audits</li>
                <li>Payroll Transparency</li>
                <li>Digital Documentation System</li>
              </ul>
            </div>

          </div>

          {/* COUNTERS */}
          <div className="compliance-stats">
            <div className="stat-box">
              <h3><Counter end={100}/> %</h3>
              <p>Compliance Rate</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={15}/>+</h3>
              <p>Years Governance Experience</p>
            </div>
            <div className="stat-box">
              <h3><Counter end={500}/>+</h3>
              <p>Clients Served</p>
            </div>
          </div>

          {/* RISK BOX */}
          <div className="risk-box">
            <h3>Zero Legal Liability Risk for Clients</h3>
            <p>
              Our structured statutory system ensures every deployment is legally
              compliant, audit-ready and risk-mitigated. We handle all regulatory
              responsibilities — so you can focus on operations.
            </p>
            <button className="download-btn">
              Download Compliance Profile →
            </button>
          </div>

        </div>
      </section>
    </>
  );
}