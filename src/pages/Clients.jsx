import { useEffect, useRef } from "react";

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

export default function ClientsUI() {
  const revealRef = useReveal();

  return (
    <>
      <style>{`

      @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

      body { margin:0; font-family:'Inter',sans-serif; }

      /* ───── HERO (HEADER OFFSET FIXED) ───── */
      .clients-hero{
        padding:240px 20px 80px; 
        background:linear-gradient(135deg,#eef4ff,#e0ebff);
        text-align:center;
      }

      .clients-hero h1{
        font-family:'Raleway',sans-serif;
        font-size:48px;
        font-weight:900;
        color:#0a1a52;
        margin-bottom:20px;
      }

      .clients-hero p{
        max-width:650px;
        margin:auto;
        color:#374151;
        line-height:1.7;
        font-size:16px;
      }

      /* ───── PREMIUM MARQUEE ───── */
      .marquee{
        overflow:hidden;
        background:#1e3a8a;
        color:#fff;
        padding:16px 0;
        font-family:'Raleway',sans-serif;
        font-weight:700;
        
        text-transform:uppercase;
        font-size:13px;
      }

      .marquee-track{
        display:inline-block;
        animation:scroll 28s linear infinite;
      }

      @keyframes scroll{
        from{ transform:translateX(0); }
        to{ transform:translateX(-50%); }
      }

      .marquee span{
        margin:0 50px;
        opacity:0.9;
      }

      /* ───── LOGO STRIP (FIXED CLEAN VERSION) ───── */
      .logo-marquee {
  overflow: hidden;
  background: #f8fbff;
  padding: 50px 0;
}

.logo-track {
  display: flex;
  gap: 80px;
  align-items: center;
  width: max-content;
  animation: scrollLogos 25s linear infinite;
}

@keyframes scrollLogos {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.logo-card {
  background: #ffffff;
  padding: 20px 40px;
  border-radius: 12px;
  box-shadow: 0 6px 25px rgba(0,0,0,0.05);
}

.logo-card img {
  height: 50px;
  object-fit: contain;
}
      /* ───── ENHANCED CLIENT SECTION ───── */
      .clients-section{
        padding:90px 8%;
        background:#ffffff;
      }

      .section-title{
        text-align:center;
        margin-bottom:70px;
      }

      .section-title h2{
        font-family:'Raleway',sans-serif;
        font-size:44px;
        font-weight:900;
        color:#0a1a52;
        margin-bottom:18px;
      }

      .section-title p{
        max-width:650px;
        margin:auto;
        font-size:16px;
        color:#555;
      }

      .clients-grid{
        display:grid;
        grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
        gap:40px;
      }

      .client-card{
        background:#f5f8ff;
        padding:40px;
        border-radius:20px;
        transition:0.4s;
        border:1px solid #e5edff;
      }

      .client-card:hover{
        transform:translateY(-10px);
        box-shadow:0 25px 60px rgba(37,99,235,0.15);
      }

      .client-card h4{
        font-size:22px;
        color:#0a1a52;
        margin-bottom:15px;
        font-family:'Raleway';
      }

      .client-card p{
        font-size:15px;
        line-height:1.7;
        color:#4b5563;
      }

      /* ───── COMPACT STATS ───── */
      .stats{
        padding:60px 8%;
        background:#eef4ff;
        display:flex;
        justify-content:center;
        gap:60px;
        flex-wrap:wrap;
      }

      .stat{
        text-align:center;
      }

      .stat h3{
        font-size:36px;
        font-weight:900;
        color:#1e3a8a;
      }

      .stat p{
        font-size:14px;
        color:#374151;
        margin-top:6px;
      }

      /* ───── REVEAL ───── */
      .reveal{
        opacity:0;
        transform:translateY(40px);
        transition:1s ease;
      }

      .reveal.active{
        opacity:1;
        transform:translateY(0);
      }

      `}</style>

      {/* HERO */}
      <section className="clients-hero">
        <h1>Trusted By Leading Organisations</h1>
        <p>
          Our compliance-driven workforce solutions power government bodies,
          PSUs, educational institutions and industrial enterprises nationwide.
        </p>
      </section>

      {/* WHERE WE WORK */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Government</span>
          <span>Defence</span>
          <span>PSU</span>
          <span>Healthcare</span>
          <span>Education</span>
          <span>EV Industry</span>
          <span>Manufacturing</span>
          <span>Infrastructure</span>
          <span>Corporate</span>
          <span>Government</span>
          <span>Defence</span>
        </div>
      </div>

      {/* LOGO STRIP */}
      <div className="logo-marquee">
        <div className="logo-track">
          <div className="logo-card"><img src="https://commons.wikimedia.org/wiki/File:Sbi_logo.svg" /></div>
          <div className="logo-card"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/NTPC_Logo.svg/3840px-NTPC_Logo.svg.png" /></div>
          <div className="logo-card"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/BHEL_logo.svg/1280px-BHEL_logo.svg.png" /></div>
          <div className="logo-card"><img src="https://m.media-amazon.com/images/I/61uJyfixlRL._AC_UF350,350_QL80_.jpg" /></div>
          <div className="logo-card"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C9f-iGUubXb8jnwt3zoVJRhWxOMFeLUURQ&s" /></div>
        </div>
      </div>

  

      {/* CLIENT DETAILS */}
      <section className="clients-section">
        <div ref={revealRef} className="reveal">
          <div className="section-title">
            <h2>Our Client Portfolio</h2>
            <p>
              From public sector undertakings to private enterprises, our
              workforce management solutions are trusted for reliability,
              compliance and operational excellence.
            </p>
          </div>

          <div className="clients-grid">
            <div className="client-card">
              <h4>Government & PSU Deployments</h4>
              <p>
                Comprehensive manpower and security services aligned with
                regulatory and statutory frameworks.
              </p>
            </div>

            <div className="client-card">
              <h4>Educational Institutions</h4>
              <p>
                Housekeeping, sanitation and facility teams ensuring safe
                and compliant campus operations.
              </p>
            </div>

            <div className="client-card">
              <h4>Industrial & Infrastructure</h4>
              <p>
                Skilled and semi-skilled workforce solutions supporting
                manufacturing and infrastructure growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT STATS */}
      <section className="stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Clients Served</p>
        </div>
        <div className="stat">
          <h3>10,000+</h3>
          <p>Personnel Deployed</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Client Retention</p>
        </div>
      </section>

    </>
  );
}