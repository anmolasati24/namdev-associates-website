import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("cl-active");
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
        /* ── ALL STYLES SCOPED TO .cl-page ── */

        .cl-page {
          font-family: inherit;
          background: #fff;
        }

        /* HERO */
        .cl-hero {
          padding: 160px 20px 80px;
          background: linear-gradient(135deg, #eef4ff, #e0ebff);
          text-align: center;
        }
        .cl-hero h1 {
          font-size: clamp(1.6rem, 6vw, 3rem);
          font-weight: 900;
          color: #0a1a52;
          margin-bottom: 20px;
          font-family: 'Raleway', sans-serif;
          line-height: 1.2;
        }
        .cl-hero p {
          max-width: 650px;
          margin: auto;
          color: #374151;
          line-height: 1.7;
          font-size: 15px;
        }

        /* MARQUEE */
        .cl-marquee {
          overflow: hidden;
          background: #1e3a8a;
          color: #fff;
          padding: 16px 0;
          font-weight: 700;
          text-transform: uppercase;
          font-size: 13px;
          font-family: 'Raleway', sans-serif;
        }
        .cl-marquee-track {
          display: flex;
          gap: 60px;
          width: max-content;
          animation: clMarquee 25s linear infinite;
        }
        @keyframes clMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-marquee span { white-space: nowrap; opacity: 0.9; }

        /* LOGO STRIP */
        .cl-logo-marquee {
          overflow: hidden;
          background: #f8fbff;
          padding: 50px 0;
        }
        .cl-logo-strip-track {
          display: flex;
          gap: 80px;
          align-items: center;
          width: max-content;
          animation: clScrollLogos 28s linear infinite;
        }
        @keyframes clScrollLogos {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-logo-card {
          background: #ffffff;
          padding: 20px 40px;
          border-radius: 12px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.05);
        }
        .cl-logo-card img {
          height: 50px;
          object-fit: contain;
        }

        /* CLIENT LOGOS SECTION */
        .cl-logos-section {
          padding: 80px 8%;
          background: #f8fbff;
          overflow: hidden;
        }
        .cl-section-title {
          text-align: center;
          margin-bottom: 70px;
        }
        .cl-section-title h2 {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 900;
          color: #0a1a52;
          margin-bottom: 18px;
        }
        .cl-section-title p {
          max-width: 650px;
          margin: auto;
          font-size: 16px;
          color: #555;
          line-height: 1.7;
        }
        .cl-logo-scroll { overflow: hidden; position: relative; }
        .cl-logo-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: clScrollClients 35s linear infinite;
        }
        @keyframes clScrollClients {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .cl-logo-box {
          min-width: 260px;
          background: #ffffff;
          border-radius: 16px;
          padding: 30px;
          text-align: center;
          border: 1px solid #e6edff;
          transition: 0.35s;
          position: relative;
        }
        .cl-logo-box::before {
          content: "Client Verified";
          position: absolute;
          top: -10px; left: 20px;
          background: #1e3a8a;
          color: #fff;
          font-size: 10px;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .cl-logo-box:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(37,99,235,0.18);
        }
        .cl-logo-box img {
          width: 100%; height: 60px;
          object-fit: contain; margin-bottom: 15px;
        }
        .cl-logo-box h4 {
          font-family: 'Raleway', sans-serif;
          font-size: 18px; color: #0a1a52; margin-bottom: 6px;
        }
        .cl-rating { color: #fbbf24; font-size: 14px; margin-bottom: 10px; letter-spacing: 2px; }
        .cl-logo-box p { font-size: 14px; color: #4b5563; line-height: 1.6; }

        /* CLIENT PORTFOLIO SECTION */
        .cl-portfolio {
          padding: 90px 8%;
          background: #ffffff;
        }
        .cl-portfolio-title {
          text-align: center;
          margin-bottom: 70px;
        }
        .cl-portfolio-title h2 {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.75rem);
          font-weight: 900;
          color: #0a1a52;
          margin-bottom: 18px;
        }
        .cl-portfolio-title p {
          max-width: 650px; margin: auto;
          font-size: 16px; color: #555; line-height: 1.7;
        }
        .cl-clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        .cl-client-card {
          background: #f5f8ff;
          padding: 40px;
          border-radius: 20px;
          transition: 0.4s;
          border: 1px solid #e5edff;
        }
        .cl-client-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(37,99,235,0.15);
        }
        .cl-client-card h4 {
          font-size: 22px; color: #0a1a52;
          margin-bottom: 15px;
          font-family: 'Raleway', sans-serif;
        }
        .cl-client-card p { font-size: 15px; line-height: 1.7; color: #4b5563; }

        /* STATS */
        .cl-stats {
          padding: 60px 8%;
          background: #eef4ff;
          display: flex;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .cl-stat { text-align: center; }
        .cl-stat h3 { font-size: 36px; font-weight: 900; color: #1e3a8a; }
        .cl-stat p  { font-size: 14px; color: #374151; margin-top: 6px; }

        /* REVEAL */
        .cl-reveal { opacity: 0; transform: translateY(40px); transition: 1s ease; }
        .cl-reveal.cl-active { opacity: 1; transform: translateY(0); }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .cl-hero { padding: 140px 16px 50px; }
          .cl-logos-section { padding: 50px 4%; }
          .cl-portfolio { padding: 50px 4%; }
          .cl-stats { gap: 30px; padding: 40px 4%; }
          .cl-logo-box { min-width: 220px; }
        }
        @media (max-width: 480px) {
          .cl-hero { padding: 130px 16px 40px; }
          .cl-hero h1 { font-size: 1.7rem; }
          .cl-client-card { padding: 24px; }
        }
      `}</style>

      <div className="cl-page">

        {/* HERO */}
        <section className="cl-hero">
          <h1>Trusted By Leading Organisations</h1>
          <p>
            Our compliance-driven workforce solutions power government bodies,
            PSUs, educational institutions and industrial enterprises nationwide.
          </p>
        </section>

        {/* MARQUEE */}
        <div className="cl-marquee">
          <div className="cl-marquee-track">
            {["Government", "Defence", "PSU", "Healthcare", "Education", "EV Industry", "Manufacturing", "Infrastructure", "Corporate",
              "Government", "Defence", "PSU", "Healthcare", "Education", "EV Industry", "Manufacturing", "Infrastructure", "Corporate"].map((s, i) => (
                <span key={i}>{s}</span>
              ))}
          </div>
        </div>

        {/* LOGO STRIP */}
        <div className="cl-logo-marquee">
          <div className="cl-logo-strip-track">
            {[
              "https://basiceducation.up.gov.in/images/logo-hi.png",
              "https://res.cloudinary.com/dyd71p9lj/image/upload/v1773041145/WhatsApp_Image_2026-03-07_at_2.14.16_PM_ncrv1u.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQwcIr_kadzowUreY3e0GTpWNol8hi3M0A&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNH4g4Oa95KcEGObIB7nGyzatswonDMKwjQ&s",
              "https://iwebapps.noidapower.com:8032/assets/img/logo.png",
              "https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Indian_Navy_crest.svg/250px-Indian_Navy_crest.svg.png",
              "https://d35xcwcl37xo08.cloudfront.net/current-affairs-wp-uploads/2025/04/indian_air_force_iaf_ensign.png",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06zxrum2lNUWsCP7yXnz2ZVirpAUJQDmv2A&s",
              "https://www.thestatesman.com/wp-content/uploads/2024/11/Untitled-design-2024-11-04T150811.713-jpg.webp",
              // duplicates for loop
              "https://basiceducation.up.gov.in/images/logo-hi.png",
              "https://res.cloudinary.com/dyd71p9lj/image/upload/v1773041145/WhatsApp_Image_2026-03-07_at_2.14.16_PM_ncrv1u.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQwcIr_kadzowUreY3e0GTpWNol8hi3M0A&s",
            ].map((src, i) => (
              <div key={i} className="cl-logo-card">
                <img src={src} alt="client logo" />
              </div>
            ))}
          </div>
        </div>

        {/* CLIENT CARDS */}
        <section className="cl-logos-section">
          <div className="cl-section-title">
            <h2>Trusted By Prestigious Institutions</h2>
            <p>
              Our workforce solutions are trusted by government organisations,
              defence establishments, and major industrial corporations across India.
            </p>
          </div>

          <div className="cl-logo-scroll">
            <div className="cl-logo-track">
              {[
                { img: "https://basiceducation.up.gov.in/images/logo-hi.png", name: "Shiksha Vibhag, Uttar Pradesh", stars: "★★★★★", review: "Reliable manpower support and professional service delivery helping maintain smooth operations across educational facilities." },
                { img: "https://res.cloudinary.com/dyd71p9lj/image/upload/v1773041145/WhatsApp_Image_2026-03-07_at_2.14.16_PM_ncrv1u.jpg", name: "510 Army Base Workshop", stars: "★★★★★", review: "Operational discipline and dependable workforce support aligned with defence standards and security protocols." },
                { img: "https://static.mygov.in/indiancc/2021/03/mygov-10000000001872105186-1024x1024.jpg", name: "National Cadet Corps (NCC) Delhi", stars: "★★★★☆", review: "Supporting NCC units with professional manpower services ensuring organized and efficient training environments." },
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkQwcIr_kadzowUreY3e0GTpWNol8hi3M0A&s", name: "Meerut Cantonment", stars: "★★★★★", review: "Professional facility and workforce management ensuring efficient functioning of defence infrastructure." },
                { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Badge_of_the_Indian_Air_Force.png/960px-Badge_of_the_Indian_Air_Force.png", name: "Indian Air Force", stars: "★★★★☆", review: "Trusted workforce deployment supporting operational and administrative activities across air force facilities." },
                { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsNH4g4Oa95KcEGObIB7nGyzatswonDMKwjQ&s", name: "Linde India", stars: "★★★★☆", review: "Skilled manpower solutions supporting industrial operations with safety, efficiency and reliability." },
                { img: "https://iwebapps.noidapower.com:8032/assets/img/logo.png", name: "Noida Power Company Ltd (NPCL)", stars: "★★★★★", review: "Reliable workforce deployment helping ensure consistent operational performance in power distribution." },
                { img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Central_Police_Canteen_Logo.png", name: "Central Police Organisation", stars: "★★★★☆", review: "Professional manpower and security support services assisting central police establishments with operational efficiency." },
                { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Indian_Navy_crest.svg/250px-Indian_Navy_crest.svg.png", name: "Indian Navy (INHS Patanjali)", stars: "★★★★☆", review: "Providing disciplined manpower and facility support services for naval establishments and defence infrastructure." },
                { img: "https://upload.wikimedia.org/wikipedia/en/7/7a/Department_of_Biotechnology_India_Logo.png", name: "Department of Biotechnology, Delhi", stars: "★★★★☆", review: "Providing manpower solutions for administrative and research support within biotechnology and government institutions." },
                // duplicates for loop
                { img: "https://basiceducation.up.gov.in/images/logo-hi.png", name: "Shiksha Vibhag, Uttar Pradesh", stars: "★★★★★", review: "Reliable manpower support and professional service delivery helping maintain smooth operations across educational facilities." },
                { img: "https://iwebapps.noidapower.com:8032/assets/img/logo.png", name: "Noida Power Company Ltd (NPCL)", stars: "★★★★★", review: "Reliable workforce deployment helping ensure consistent operational performance in power distribution." },
              ].map((c, i) => (
                <div key={i} className="cl-logo-box">
                  <img src={c.img} alt={c.name} />
                  <h4>{c.name}</h4>
                  <div className="cl-rating">{c.stars}</div>
                  <p>{c.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTFOLIO */}
        <section className="cl-portfolio">
          <div ref={revealRef} className="cl-reveal">
            <div className="cl-portfolio-title">
              <h2>Our Client Portfolio</h2>
              <p>
                From public sector undertakings to private enterprises, our
                workforce management solutions are trusted for reliability,
                compliance and operational excellence.
              </p>
            </div>
            <div className="cl-clients-grid">
              <div className="cl-client-card">
                <h4>Government & PSU Deployments</h4>
                <p>Comprehensive manpower and security services aligned with regulatory and statutory frameworks.</p>
              </div>
              <div className="cl-client-card">
                <h4>Educational Institutions</h4>
                <p>Housekeeping, sanitation and facility teams ensuring safe and compliant campus operations.</p>
              </div>
              <div className="cl-client-card">
                <h4>Industrial & Infrastructure</h4>
                <p>Skilled and semi-skilled workforce solutions supporting manufacturing and infrastructure growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="cl-stats">
          <div className="cl-stat"><h3>13+</h3><p>Clients Served</p></div>
          <div className="cl-stat"><h3>500+</h3><p>Personnel Deployed</p></div>
          <div className="cl-stat"><h3>100%</h3><p>Client Retention</p></div>
        </section>

      </div>
    </>
  );
}