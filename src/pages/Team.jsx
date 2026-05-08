import React, { useRef, useEffect } from "react";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const LEADERSHIP = [
  {
    name: "Mr. Rohit Namdev",
    role: "Founder & Managing Director",
    bio: "The driving force behind Namdev Associates, Rohit brings deep expertise in manpower management and has successfully led government contracts across India.",
    phone: "+91 8423215047",
    email: "info@namdevassociates.com",
    image: "/assets/RNM.png",
    initials: "RN",
  },
  {
    name: "Mr. Tarun Parihar",
    role: "Operational Manager",
    bio: "Tarun oversees day-to-day operations, ensuring seamless workforce deployment and client satisfaction across all active contracts.",
    phone: "+91 8423215047",
    email: "info@namdevassociates.com",
    image: "/assets/TPR.jpeg",
    initials: "TP",
  },
];

const HR_TEAM = [
  {
    name: "Mr. Garvesh Namdev",
    role: "HR Coordinator",
    phone: "+91 8423215047",
    email: "info@namdevassociates.com",
    image: "/assets/GNM.jpeg",
    initials: "GN",
  },
  {
    name: "Miss Sonali Verma",
    role: "HR Coordinator",
    phone: "+91 8423215047",
    email: "info@namdevassociates.com",
    image: "/assets/svv.jpeg",
    initials: "SV",
  },
  {
    name: "Miss Sweta Maurya",
    role: "HR Coordinator",
    phone: "+91 8423215047",
    email: "info@namdevassociates.com",
    image: "/assets/Sweta.jpg",
    initials: "SM",
  },
];

export default function Team() {
  const revealRef1 = useReveal();
  const revealRef2 = useReveal();

  return (
    <>
      <style>{`
        .team-page {
          font-family: 'Inter', sans-serif;
          background: #f8faff;
        }

        /* ── Hero ── */
        .team-hero {
          padding: 160px 5% 90px;
          background: linear-gradient(135deg, #0a1a52 0%, #1e40af 100%);
          color: #fff;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .team-hero::before {
          content: "";
          position: absolute;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%);
          top: -200px;
          left: -150px;
          border-radius: 50%;
        }
        .team-hero::after {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(96,165,250,0.08), transparent 70%);
          bottom: -100px;
          right: -100px;
          border-radius: 50%;
        }
        .team-hero-content {
          position: relative;
          z-index: 2;
        }
        .team-hero h1 {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(32px, 6vw, 56px);
          font-weight: 900;
          margin: 0 0 20px;
        }
        .team-hero p {
          max-width: 580px;
          margin: 0 auto;
          font-size: clamp(15px, 2vw, 18px);
          opacity: 0.85;
          line-height: 1.8;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: #bfdbfe;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 100px;
          margin-bottom: 20px;
        }

        /* ── Layout ── */
        .section-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 24px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .section-tag {
          display: inline-block;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 14px;
          border: 1px solid #bfdbfe;
        }
        .section-title {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(26px, 4vw, 38px);
          font-weight: 800;
          color: #0a1a52;
          margin: 0 0 12px;
        }
        .section-sub {
          font-size: 15px;
          color: #6b7280;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Leadership Cards ── */
        .lead-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }
        .lead-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e8eef8;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .lead-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(10, 26, 82, 0.1);
        }
        .lead-img-wrap {
          height: 340px;
          overflow: hidden;
          position: relative;
          background: #dbeafe;
        }
        .lead-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s ease;
        }
        .lead-card:hover .lead-img {
          transform: scale(1.05);
        }
        .lead-img-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 56px;
          font-weight: 700;
          color: #1d4ed8;
          background: #dbeafe;
        }
        .lead-body {
          padding: 28px 28px 24px;
        }
        .lead-name {
          font-family: 'Raleway', sans-serif;
          font-size: 20px;
          font-weight: 800;
          color: #0a1a52;
          margin: 0 0 4px;
        }
        .lead-role {
          font-size: 12px;
          color: #2563eb;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin: 0 0 14px;
        }
        .lead-bio {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.75;
          margin: 0 0 20px;
        }
        .lead-contacts {
          border-top: 1px solid #f0f4ff;
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .lead-contact-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #374151;
        }
        .contact-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #eff6ff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 13px;
        }

        /* ── HR Team ── */
        .hr-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        @media (min-width: 900px) {
          .hr-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .hr-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #e8eef8;
          padding: 28px 24px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .hr-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.08);
          transform: translateY(-4px);
        }
        .hr-avatar-wrap {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 16px;
          border: 3px solid #dbeafe;
          background: #dbeafe;
        }
        .hr-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .hr-avatar-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          color: #1d4ed8;
        }
        .hr-name {
          font-family: 'Raleway', sans-serif;
          font-size: 17px;
          font-weight: 800;
          color: #0a1a52;
          margin: 0 0 4px;
        }
        .hr-role {
          font-size: 12px;
          color: #2563eb;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin: 0 0 16px;
        }
        .hr-divider {
          border: none;
          border-top: 1px solid #f0f4ff;
          margin: 0 0 14px;
        }
        .hr-contact {
          font-size: 13px;
          color: #4b5563;
          margin: 4px 0;
        }

        /* ── Reveal animation ── */
        .reveal-node {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-node.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── CTA Strip ── */
        .cta-strip {
          background: linear-gradient(135deg, #0a1a52 0%, #1e40af 100%);
          padding: 60px 24px;
          text-align: center;
          color: #fff;
        }
        .cta-strip h3 {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 800;
          margin: 0 0 12px;
        }
        .cta-strip p {
          font-size: 15px;
          opacity: 0.8;
          margin: 0 0 28px;
        }
        .cta-btn {
          display: inline-block;
          background: #fff;
          color: #1d4ed8;
          font-weight: 700;
          font-size: 14px;
          padding: 13px 32px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .cta-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }
      `}</style>

      <div className="team-page">

        {/* Hero */}
        <section className="team-hero">
          <div className="team-hero-content">
            <div className="hero-badge">Our People</div>
            <h1>Meet the Team</h1>
            <p>
              The leadership, operators, and HR specialists driving compliance-first
              workforce solutions across India.
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-wrap" id="leadership">
          <div ref={revealRef1} className="reveal-node">
            <div className="section-header">
              <div className="section-tag">Leadership</div>
              <h2 className="section-title">Our Leadership</h2>
              <p className="section-sub">
                Experienced minds guiding every contract, operation, and growth
                milestone with integrity and vision.
              </p>
            </div>

            <div className="lead-grid">
              {LEADERSHIP.map((leader, i) => (
                <div key={i} className="lead-card">
                  <div className="lead-img-wrap">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="lead-img"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="lead-img-fallback" style={{ display: "none" }}>
                      {leader.initials}
                    </div>
                  </div>
                  <div className="lead-body">
                    <h3 className="lead-name">{leader.name}</h3>
                    <p className="lead-role">{leader.role}</p>
                    <p className="lead-bio">{leader.bio}</p>
                    <div className="lead-contacts">
                      <div className="lead-contact-row">
                        <div className="contact-icon">📞</div>
                        <span>{leader.phone}</span>
                      </div>
                      <div className="lead-contact-row">
                        <div className="contact-icon">✉️</div>
                        <span>{leader.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HR Team */}
        <section style={{ background: "#f0f6ff", padding: "0" }} id="core-team">
          <div className="section-wrap">
            <div ref={revealRef2} className="reveal-node" style={{ transitionDelay: "0.15s" }}>
              <div className="section-header">
                <div className="section-tag">HR Team</div>
                <h2 className="section-title">HR Coordinators</h2>
                <p className="section-sub">
                  Dedicated professionals managing recruitment, compliance, and
                  employee relations across our operations.
                </p>
              </div>

              <div className="hr-grid">
                {HR_TEAM.map((member, i) => (
                  <div key={i} className="hr-card">
                    <div className="hr-avatar-wrap">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="hr-avatar"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="hr-avatar-fallback" style={{ display: "none" }}>
                        {member.initials}
                      </div>
                    </div>
                    <h4 className="hr-name">{member.name}</h4>
                    <p className="hr-role">{member.role}</p>
                    <hr className="hr-divider" />
                    <p className="hr-contact">📞 {member.phone}</p>
                    <p className="hr-contact">✉ {member.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-strip">
          <h3>Work With Our Team</h3>
          <p>Looking for compliant, structured, and performance-driven manpower solutions?</p>
          <a href="/contact" className="cta-btn">Get in Touch →</a>
        </section>

      </div>
    </>
  );
}
