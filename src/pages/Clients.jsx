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
  display:flex;
  gap:60px;
  width:max-content;
  animation:marqueeScroll 25s linear infinite;
}

@keyframes marqueeScroll{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

.marquee span{
  white-space:nowrap;
  opacity:0.9;
}
      /* ───── LOGO STRIP (FIXED CLEAN VERSION) ───── */
          .logo-marquee{
  overflow:hidden;
  background:#f8fbff;
  padding:50px 0;
}

.logo-strip-track{
  display:flex;
  gap:80px;
  align-items:center;
  width:max-content;
  animation:scrollLogos 28s linear infinite;
}

@keyframes scrollLogos{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

.logo-card{
  background:#ffffff;
  padding:20px 40px;
  border-radius:12px;
  box-shadow:0 6px 25px rgba(0,0,0,0.05);
}

.logo-card img{
  height:50px;
  object-fit:contain;
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
/* CLIENT SECTION */

.client-logos{
  padding:80px 8%;
  background:#f8fbff;
  overflow:hidden;
}

/* AUTO SCROLL TRACK */

.logo-scroll{
  overflow:hidden;
  position:relative;
}

.logo-track{
  display:flex;
  gap:20px;
  width:max-content;
  animation:scrollClients 35s linear infinite;
}

@keyframes scrollClients{
  from{ transform:translateX(0); }
  to{ transform:translateX(-50%); }
}

/* CARD */

.logo-box{
  min-width:250px;
  background:#ffffff;
  border-radius:15px;
  padding:30px;
  text-align:center;
  border:1px solid #e6edff;
  transition:0.35s;
}

.logo-box:hover{
  transform:translateY(-10px);
  box-shadow:0 25px 60px rgba(37,99,235,0.18);
}

/* LOGO */

.logo-box img{
  width:100%;
  height:60px;
  object-fit:contain;
  margin-bottom:15px;
}

/* TITLE */

.logo-box h4{
  font-family:'Raleway';
  font-size:18px;
  color:#0a1a52;
  margin-bottom:6px;
}
  .logo-box{
  min-width:260px;
  background:#ffffff;
  border-radius:16px;
  padding:30px;
  text-align:center;
  border:1px solid #e6edff;
  transition:0.35s;
  position:relative;
}

.logo-box::before{
  content:"Client Verified";
  position:absolute;
  top:-10px;
  left:20px;
  background:#1e3a8a;
  color:#fff;
  font-size:10px;
  padding:4px 10px;
  border-radius:20px;
}

/* STARS */

.rating{
  color:#fbbf24;
  font-size:14px;
  margin-bottom:10px;
  letter-spacing:2px;
}

/* REVIEW */

.logo-box p{
  font-size:14px;
  color:#4b5563;
  line-height:1.6;
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
  <div className="logo-strip-track">

    <div className="logo-card">
      <img src="https://basiceducation.up.gov.in/images/logo-hi.png"/>
    </div>

    <div className="logo-card">
      <img src="https://res.cloudinary.com/dyd71p9lj/image/upload/v1773041145/WhatsApp_Image_2026-03-07_at_2.14.16_PM_ncrv1u.jpg"/>
    </div>

    <div className="logo-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQwcIr_kadzowUreY3e0GTpWNol8hi3M0A&s"/>
    </div>

    <div className="logo-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNH4g4Oa95KcEGObIB7nGyzatswonDMKwjQ&s"/>
    </div>

    <div className="logo-card">
      <img src="https://iwebapps.noidapower.com:8032/assets/img/logo.png"/>
    </div>

    <div className="logo-card">
  <img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png"/>
</div>

<div className="logo-card">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Indian_Navy_crest.svg/250px-Indian_Navy_crest.svg.png"/>
</div>

<div className="logo-card">
  <img src="https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/indian_air_force_iaf_ensign.png"/>
</div>

<div className="logo-card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06zxrum2lNUWsCP7yXnz2ZVirpAUJQDmv2A&s"/>
</div>



<div className="logo-card">
  <img src="https://www.thestatesman.com/wp-content/uploads/2024/11/Untitled-design-2024-11-04T150811.713-jpg.webp"/>
</div>

    {/* duplicate for smooth loop */}

    <div className="logo-card">
      <img src="https://basiceducation.up.gov.in/images/logo-hi.png"/>
    </div>

    <div className="logo-card">
      <img src="https://res.cloudinary.com/dyd71p9lj/image/upload/v1773041145/WhatsApp_Image_2026-03-07_at_2.14.16_PM_ncrv1u.jpg"/>
    </div>

    <div className="logo-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQwcIr_kadzowUreY3e0GTpWNol8hi3M0A&s"/>
    </div>

  </div>
</div>


{/* CLIENT TESTIMONIAL LOGOS */}

<section className="client-logos">

<div className="section-title">
<h2>Trusted By Prestigious Institutions</h2>
<p>
Our workforce solutions are trusted by government organisations,
defence establishments, and major industrial corporations across India.
</p>
</div>

<div className="logo-scroll">

<div className="logo-track">

{/* Shiksha Vibhag */}

<div className="logo-box">
<img src="https://basiceducation.up.gov.in/images/logo-hi.png"/>
<h4>Shiksha Vibhag, Uttar Pradesh</h4>
<div className="rating">★★★★★</div>
<p>
Reliable manpower support and professional service delivery
helping maintain smooth operations across educational facilities.
</p>
</div>


{/* 510 Army Base Workshop */}

<div className="logo-box">
<img src="https://res.cloudinary.com/dyd71p9lj/image/upload/v1773041145/WhatsApp_Image_2026-03-07_at_2.14.16_PM_ncrv1u.jpg"/>
<h4>510 Army Base Workshop</h4>
<div className="rating">★★★★★</div>
<p>
Operational discipline and dependable workforce support
aligned with defence standards and security protocols.
</p>
</div>

<div className="logo-box">
<img src="https://static.mygov.in/indiancc/2021/03/mygov-10000000001872105186-1024x1024.jpg"/>
<h4>National Cadet Corps (NCC) Delhi</h4>
<div className="rating">★★★★☆</div>
<p>
Supporting NCC units with professional manpower services
ensuring organized and efficient training environments.
</p>
</div>
{/* Meerut Cantt */}

<div className="logo-box">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQwcIr_kadzowUreY3e0GTpWNol8hi3M0A&s"/>
<h4>Meerut Cantonment</h4>
<div className="rating">★★★★★</div>
<p>
Professional facility and workforce management ensuring
efficient functioning of defence infrastructure.
</p>
</div>


<div className="logo-box">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Badge_of_the_Indian_Air_Force.png/960px-Badge_of_the_Indian_Air_Force.png"/>
<h4>Indian Air Force</h4>
<div className="rating">★★★★☆</div>
<p>
Trusted workforce deployment supporting operational and
administrative activities across air force facilities.
</p>
</div>

{/* Linde */}

<div className="logo-box">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNH4g4Oa95KcEGObIB7nGyzatswonDMKwjQ&s"/>
<h4>Linde India</h4>
<div className="rating">★★★★☆</div>
<p>
Skilled manpower solutions supporting industrial
operations with safety, efficiency and reliability.
</p>
</div>


{/* NPCL */}

<div className="logo-box">
<img src="https://iwebapps.noidapower.com:8032/assets/img/logo.png"/>
<h4>Noida Power Company Ltd (NPCL)</h4>
<div className="rating">★★★★★</div>
<p>
Reliable workforce deployment helping ensure
consistent operational performance in power distribution.
</p>
</div>

<div className="logo-box">
<img src="https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png"/>
<h4>Central Police Organisation</h4>
<div className="rating">★★★★☆</div>
<p>
Professional manpower and security support services assisting
central police establishments with operational efficiency.
</p>
</div>

<div className="logo-box">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Indian_Navy_crest.svg/250px-Indian_Navy_crest.svg.png"/>
<h4>Indian Navy (INHS Patanjali)</h4>
<div className="rating">★★★★☆</div>
<p>
Providing disciplined manpower and facility support services
for naval establishments and defence infrastructure.
</p>
</div>

<div className="logo-box">
<img src="https://upload.wikimedia.org/wikipedia/en/7/7a/Department_of_Biotechnology_India_Logo.png"/>
<h4>Department of Biotechnology, Delhi</h4>
<div className="rating">★★★★☆</div>
<p>
Providing manpower solutions for administrative and research
support within biotechnology and government institutions.
</p>
</div>

{/* DUPLICATE FOR SMOOTH SCROLL */}

<div className="logo-box">
<img src="https://basiceducation.up.gov.in/images/logo-hi.png"/>
<h4>Shiksha Vibhag, Uttar Pradesh</h4>
<div className="rating">★★★★★</div>
<p>
Reliable manpower support and professional service delivery
helping maintain smooth operations across educational facilities.
</p>
</div>

<div className="logo-box">
<img src="https://iwebapps.noidapower.com:8032/assets/img/logo.png"/>
<h4>Noida Power Company Ltd (NPCL)</h4>
<div className="rating">★★★★★</div>
<p>
Reliable workforce deployment helping ensure
consistent operational performance in power distribution.
</p>
</div>

</div>
</div>

</section>

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
          <h3>15+</h3>
          <p>Clients Served</p>
        </div>
        <div className="stat">
          <h3>500+</h3>
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