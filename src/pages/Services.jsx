import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
/* ─── Scroll-reveal hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Data ─── */
const INDUSTRIES = [
  {
    name: "Defence",
    icon: "🎖️",
    desc: "Trusted deployments for Army, Navy and Air Force establishments with highest security clearance standards.",
    photo: "/images/military.jpg",
    tag: "Government",
  },
  {
    name: "Government & PSU",
    icon: "🏛️",
    desc: "Compliant workforce solutions for Central and State Government departments and Public Sector Undertakings.",
    photo: "/images/psu.webp",
    tag: "Public Sector",
  },
  {
    name: "Healthcare",
    icon: "🏥",
    desc: "Trained housekeeping and support staff for hospitals, clinics and medical institutions maintaining hygiene standards.",
    photo: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80",
    tag: "Medical",
  },
  {
    name: "Manufacturing",
    icon: "🏭",
    desc: "Skilled and semi-skilled manpower for factories, plants and production facilities across all industrial sectors.",
    photo: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80",
    tag: "Industrial",
  },
  {
    name: "Finance & Banking",
    icon: "🏦",
    desc: "Security personnel and compliance-ready support staff for banks, NBFCs and financial institutions.",
    photo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=600&q=80",
    tag: "Finance",
  },
  {
    name: "Education",
    icon: "🎓",
    desc: "Housekeeping, security and facility management for schools, colleges and university campuses.",
    photo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    tag: "Academic",
  },
  {
    name: "Infrastructure",
    icon: "🏗️",
    desc: "Manpower solutions for construction sites, highways, airports and large-scale infrastructure projects.",
    photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    tag: "Construction",
  },
  {
    name: "Hospitality",
    icon: "🏨",
    desc: "Professional housekeeping and facility staff for hotels, resorts and hospitality properties.",
    photo: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    tag: "Hotels",
  },
  {
    name: "Corporate",
    icon: "🏢",
    desc: "End-to-end staffing, security and HR consultancy for corporate offices and business parks.",
    photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    tag: "Business",
  },
];

const SERVICES = [
  {
    id: 1, tag: "Workforce Solutions", title: "Manpower Outsourcing", icon: "👥",
    desc: "End-to-end contractual manpower solutions with complete statutory compliance, timely mobilisation and structured replacement support.",
    features: ["Skilled & Semi-Skilled Workforce", "Contract Staffing Solutions", "Government & PSU Deployments", "Timely Replacement Support", "Statutory Compliance Management"],
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80",
  },
  {
    id: 2, tag: "Protection Services", title: "Security Services", icon: "🛡️",
    desc: "Background-verified, trained guards and supervisors with 24/7 supervisory oversight — ensuring complete protection of your assets and premises.",
    features: ["Trained & Verified Guards", "Industrial & Institutional Security", "24/7 Monitoring Support", "Compliance with Safety Norms", "Risk Mitigation Strategy"],
    photo: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=900&q=80",
  },
  {
    id: 3, tag: "Facility Management", title: "Housekeeping & Sanitation", icon: "🏢",
    desc: "Professional cleaning and sanitation teams for offices, hospitals, industrial plants and public institutions — highest hygiene standards guaranteed.",
    features: ["Professional Cleaning Teams", "Hygiene & Sanitation Standards", "Equipment & Material Management", "Trained Facility Staff", "Operational Supervision"],
    photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80",
  },
  {
    id: 4, tag: "HR Advisory", title: "HR Consultancy", icon: "📋",
    desc: "Expert advisory on HR policies, labour law compliance, payroll management and workforce training programmes.",
    features: ["Labour Law Compliance", "HR Policy Drafting", "Workforce Training", "Employee Documentation", "Grievance Management"],
    photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
  },
  {
    id: 5, tag: "Quality Systems", title: "ISO Quality Consultancy", icon: "✅",
    desc: "Structured ISO implementation from gap analysis and documentation to internal audits and certification readiness.",
    features: ["ISO 9001 Certification Support", "Documentation & Audit Preparation", "Process Standardisation", "Quality Management Systems", "Continuous Improvement Cycles"],
    photo: "https://www.pinakindustrial.com/assets/images/services/iso.jpg",
  },
];

const STATS = [
  { value: "7+", label: "Years of Experience" },
  { value: "13+", label: "Clients Served" },
  { value: "500+", label: "Personnel Deployed" },
  { value: "100%", label: "Compliance Rate" },
];

const WHY = [
  { icon: "⚖️", title: "Full Statutory Compliance", desc: "Every deployment adheres strictly to labour laws, PF, ESI and government regulations — zero legal risk." },
  { icon: "🎖️", title: "Verified & Trained Personnel", desc: "All personnel undergo thorough background verification, skills assessment and training before deployment." },
  { icon: "📊", title: "ISO 9001 Governed Operations", desc: "Our internal processes are aligned with ISO 9001 quality standards for consistent service delivery." },
  { icon: "🏛️", title: "Government & Defence Expertise", desc: "Deep experience with Central/State Government departments, Defence establishments and PSUs." },
  { icon: "🔄", title: "Seamless Replacement Support", desc: "Timely replacement of personnel with zero operational disruption to your facility." },
  { icon: "📞", title: "Dedicated Account Management", desc: "Each client gets a dedicated relationship manager for round-the-clock support." },
];

/* ─── Reveal ─── */
function Reveal({ children, delay = 0, style = {}, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  );
}

/* ─── Marquee ticker ─── */
function Ticker() {
  const items = [...INDUSTRIES, ...INDUSTRIES]; // duplicate for seamless loop
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {items.map((ind, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-icon">{ind.icon}</span>
            {ind.name}
            <span className="ticker-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Industry Card ─── */
function IndCard({ ind, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={delay}>
      <div
        className={`ind-card${hovered ? " hov" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="ind-card-img-wrap">
          <img src={ind.photo} alt={ind.name} className="ind-card-img" />
          <div className="ind-card-overlay" />
          <span className="ind-card-tag">{ind.tag}</span>
        </div>
        <div className="ind-card-body">
          <div className="ind-card-icon">{ind.icon}</div>
          <h3 className="ind-card-name">{ind.name}</h3>
          <p className="ind-card-desc">{ind.desc}</p>
        </div>
        <div className="ind-card-bar" />
      </div>
    </Reveal>
  );
}

/* ─── Main ─── */
export default function Services() {
  const [active, setActive] = useState(0);
  const cur = SERVICES[active];
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; -webkit-text-size-adjust: 100%; }
        img { max-width: 100%; display: block; }
        button { font-family: 'Inter', sans-serif; border: none; cursor: pointer; }

        .sp { font-family: 'Inter', sans-serif; background: #fff; color: #111827; overflow-x: hidden; }

        /* ── HERO ── */
        .hero {
          min-height: 100svh; padding-top: 72px;
          background: linear-gradient(135deg, #0a1a52 0%, #102272 50%, #1a3494 100%);
          display: flex; align-items: center;
          position: relative; overflow: hidden;
        }
        .hero-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow-1 { position:absolute; pointer-events:none; border-radius:50%; width:500px; height:500px; top:-180px; right:-80px; background:radial-gradient(circle,rgba(96,165,250,0.1) 0%,transparent 70%); }
        .hero-glow-2 { position:absolute; pointer-events:none; border-radius:50%; width:360px; height:360px; bottom:-80px; left:5%; background:radial-gradient(circle,rgba(37,99,235,0.12) 0%,transparent 70%); }
        .hero-photo { display:none; position:absolute; right:0; top:0; bottom:0; width:48%; overflow:hidden; pointer-events:none; }
        .hero-photo::before { content:''; position:absolute; left:0; top:0; bottom:0; width:240px; background:linear-gradient(to right,#0a1a52,transparent); z-index:2; }
        .hero-photo::after { content:''; position:absolute; inset:0; background:rgba(10,26,82,0.42); z-index:1; }
        .hero-photo img { width:100%; height:100%; object-fit:cover; animation:kenBurns 18s ease-in-out infinite alternate; }
        @keyframes kenBurns { from{transform:scale(1)} to{transform:scale(1.08)} }
        .hero-inner { position:relative; z-index:10; width:100%; max-width:1280px; margin:0 auto; padding:48px 20px 60px; }
        .hero-content { width:100%; }
        .hero-eyebrow { display:inline-flex; align-items:center; gap:10px; font-size:10px; letter-spacing:2.5px; text-transform:uppercase; color:rgba(255,255,255,0.6); margin-bottom:20px; animation:fadeUp 0.8s ease both; }
        .hero-eyebrow-line { width:24px; height:1px; background:rgba(96,165,250,0.7); }
        .hero-h1 { font-family:'Raleway',sans-serif; font-size:clamp(32px,8vw,62px); font-weight:900; color:#fff; line-height:1.1; margin-bottom:18px; animation:fadeUp 0.8s ease 0.1s both; }
        .hero-h1 em { font-style:normal; color:#60A5FA; }
        .hero-sub { font-size:clamp(14px,3.5vw,16px); color:rgba(255,255,255,0.65); line-height:1.8; margin-bottom:36px; font-weight:300; animation:fadeUp 0.8s ease 0.2s both; max-width:560px; }
        .hero-btns { display:flex; gap:12px; flex-wrap:wrap; animation:fadeUp 0.8s ease 0.3s both; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }

        /* ── BUTTONS ── */
        .btn-blue { display:inline-flex; align-items:center; gap:8px; background:#2563EB; color:#fff; font-size:12px; font-weight:600; letter-spacing:1px; padding:13px 28px; transition:all 0.3s ease; white-space:nowrap; }
        .btn-blue:hover { background:#1D4ED8; box-shadow:0 8px 24px rgba(37,99,235,0.45); transform:translateY(-2px); }
        .btn-outline-w { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.3); font-size:12px; font-weight:600; letter-spacing:1px; padding:13px 28px; transition:all 0.3s; white-space:nowrap; }
        .btn-outline-w:hover { border-color:#60A5FA; color:#60A5FA; }
        .btn-white { display:inline-flex; align-items:center; gap:8px; background:#fff; color:#0a1a52; font-size:12px; font-weight:700; letter-spacing:1px; padding:13px 28px; transition:all 0.3s; white-space:nowrap; }
        .btn-white:hover { background:#eff6ff; transform:translateY(-2px); box-shadow:0 10px 28px rgba(0,0,0,0.18); }
        .btn-ghost { display:inline-flex; align-items:center; gap:8px; background:transparent; color:#fff; border:1px solid rgba(255,255,255,0.3); font-size:12px; font-weight:600; letter-spacing:1px; padding:13px 28px; transition:all 0.3s; white-space:nowrap; }
        .btn-ghost:hover { border-color:#60A5FA; color:#60A5FA; }

        /* ── STATS ── */
        .stats-bar { background:#0a1a52; border-top:1px solid rgba(255,255,255,0.06); }
        .stats-inner { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:repeat(2,1fr); }
        .stat-cell { display:flex; flex-direction:column; justify-content:center; align-items:center; height:100%; padding:28px 16px; text-align:center; border-right:1px solid rgba(255,255,255,0.08); border-bottom:1px solid rgba(255,255,255,0.08); transition:background 0.3s; }
        .stat-cell:hover { background:rgba(255,255,255,0.03); }
        .stat-val { font-family:'Raleway',sans-serif; font-size:clamp(28px,5vw,40px); font-weight:900; color:#fff; line-height:1; }
        .stat-lbl { font-size:10px; letter-spacing:1.5px; text-transform:uppercase; color:rgba(255,255,255,0.5); margin-top:7px; }

        /* ════════════════════════════════════════
           INDUSTRIES WE SERVE — LIGHT PROFESSIONAL
        ════════════════════════════════════════ */

        .ind-section {
          background: #f0f4ff;
          position: relative; overflow: hidden;
          padding: 0 0 80px;
        }

        /* Subtle background mesh */
        .ind-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            radial-gradient(circle at 15% 50%, rgba(37,99,235,0.06) 0%, transparent 45%),
            radial-gradient(circle at 85% 20%, rgba(16,34,114,0.05) 0%, transparent 40%),
            linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px);
          background-size: auto, auto, 48px 48px, 48px 48px;
        }

        /* Decorative background circles */
        .ind-bg-circle {
          position: absolute; border-radius: 50%;
          pointer-events: none;
        }

        /* ── Section header ── */
        .ind-header {
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          padding: 64px 20px 52px;
          position: relative; z-index: 2;
        }
        .ind-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: #fff;
          border: 1px solid #bfdbfe;
          color: #2563EB; font-size: 10px; letter-spacing: 3px;
          text-transform: uppercase; padding: 7px 20px;
          margin-bottom: 20px; font-weight: 700;
          box-shadow: 0 2px 12px rgba(37,99,235,0.08);
        }
        .ind-badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #2563EB; animation: pulse 2s infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.5)} }
        .ind-h2 {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 900; color: #0a1a52; line-height: 1.15;
          margin-bottom: 14px;
        }
        .ind-h2 span { color: #2563EB; }
        .ind-sub {
          font-size: clamp(13px, 2.5vw, 15px);
          color: #4b5563; max-width: 520px;
          line-height: 1.75; font-weight: 300;
        }

        /* ── Ticker strip — navy on light ── */
        .ticker-wrap {
          width: 100%; overflow: hidden;
          background: #0a1a52;
          border-top: none;
          border-bottom: none;
          padding: 0; margin-bottom: 56px;
          position: relative; z-index: 2;
          box-shadow: 0 4px 24px rgba(10,26,82,0.18);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%);
        }
        .ticker-track {
          display: inline-flex; white-space: nowrap;
          animation: ticker 28s linear infinite;
        }
        .ticker-wrap:hover .ticker-track { animation-play-state: paused; }
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ticker-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 28px;
          font-family: 'Raleway', sans-serif;
          font-size: clamp(12px, 1.8vw, 14px);
          font-weight: 700; color: rgba(255,255,255,0.75);
          letter-spacing: 0.5px; transition: color 0.2s;
        }
        .ticker-item:hover { color: #fff; }
        .ticker-icon { font-size: 17px; }
        .ticker-sep { color: rgba(96,165,250,0.6); font-size: 7px; margin-left: 4px; }

        /* ── Cards grid ── */
        .ind-cards-wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2; }
        .ind-cards { display: grid; grid-template-columns: 1fr; gap: 20px; }

        /* Individual card — white on light blue bg */
        .ind-card {
          background: #fff;
          border: 1px solid #dbeafe;
          border-radius: 8px; overflow: hidden;
          position: relative; transition: all 0.38s ease;
          cursor: default;
          box-shadow: 0 2px 16px rgba(10,26,82,0.06);
        }
        .ind-card.hov {
          border-color: #2563EB;
          transform: translateY(-8px);
          box-shadow: 0 24px 56px rgba(37,99,235,0.18);
        }
        .ind-card-img-wrap { position: relative; overflow: hidden; height: 165px; }
        .ind-card-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform 0.7s ease;
          filter: brightness(0.88) saturate(0.9);
        }
        .ind-card.hov .ind-card-img { transform: scale(1.07); filter: brightness(1) saturate(1.1); }
        .ind-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 35%, rgba(10,26,82,0.55) 100%);
          transition: opacity 0.4s;
        }
        .ind-card.hov .ind-card-overlay { opacity: 0.75; }
        .ind-card-tag {
          position: absolute; top: 12px; right: 12px;
          background: #2563EB;
          color: #fff; font-size: 9px; font-weight: 700;
          letter-spacing: 1.5px; text-transform: uppercase;
          padding: 4px 11px;
        }
        .ind-card-body {
          padding: 22px 22px 24px;
          display: flex; flex-direction: column;
        }
        .ind-card-icon {
          font-size: 30px; margin-bottom: 12px;
          display: inline-block;
          transition: transform 0.35s ease;
        }
        .ind-card.hov .ind-card-icon { transform: scale(1.18) rotate(-6deg); }
        .ind-card-name {
          font-family: 'Raleway', sans-serif;
          font-size: clamp(15px, 2.2vw, 17px);
          font-weight: 800; color: #0a1a52; margin-bottom: 8px;
          transition: color 0.3s;
        }
        .ind-card.hov .ind-card-name { color: #2563EB; }
        .ind-card-desc {
          font-size: 13px; color: #6b7280;
          line-height: 1.7; transition: color 0.3s;
        }
        .ind-card.hov .ind-card-desc { color: #4b5563; }
        .ind-card-bar {
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #2563EB, #60A5FA);
          transform: scaleX(0); transition: transform 0.4s ease;
          transform-origin: left;
        }
        .ind-card.hov .ind-card-bar { transform: scaleX(1); }

        /* Count pills */
        .ind-count-row {
          max-width: 1280px; margin: 48px auto 0;
          padding: 0 20px;
          display: flex; align-items: center; justify-content: center;
          gap: 12px; flex-wrap: wrap;
          position: relative; z-index: 2;
        }
        .ind-count-pill {
          display: inline-flex; align-items: center; gap: 8px;
          background: #fff;
          border: 1px solid #bfdbfe;
          padding: 10px 20px;
          font-size: 13px; color: #1e3a8a; font-weight: 600;
          transition: all 0.25s;
          box-shadow: 0 2px 8px rgba(37,99,235,0.07);
        }
        .ind-count-pill:hover { background: #2563EB; border-color: #2563EB; color: #fff; box-shadow: 0 6px 18px rgba(37,99,235,0.3); transform: translateY(-2px); }
        .ind-count-pill:hover .ind-pill-dot { background: #fff; }
        .ind-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563EB; flex-shrink: 0; transition: background 0.25s; }

        /* ─────────────────────────────────
           SERVICES SECTION
        ───────────────────────────────── */
        .sec-wrap { max-width: 1280px; margin: 0 auto; padding: 0 20px; }
        .sec-pad { padding: 64px 0; }
        .sec-eyebrow { display:inline-flex; align-items:center; gap:10px; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#2563EB; font-weight:600; margin-bottom:12px; }
        .sec-eyebrow::before { content:''; width:24px; height:2px; background:#2563EB; flex-shrink:0; }
        .sec-h2 { font-family:'Raleway',sans-serif; font-size:clamp(24px,4vw,42px); font-weight:800; color:#0a1a52; line-height:1.2; }
        .divider { height:1px; background:linear-gradient(90deg,transparent,#dde5f4 30%,#dde5f4 70%,transparent); }

        /* Mobile service cards */
        .mob-cards { display:grid; grid-template-columns:1fr; gap:20px; }
        .mob-card { border:1px solid #e5eaf5; border-radius:4px; overflow:hidden; background:#fff; box-shadow:0 4px 20px rgba(10,26,82,0.06); transition:box-shadow 0.3s,transform 0.3s; }
        .mob-card:hover { box-shadow:0 12px 40px rgba(10,26,82,0.12); transform:translateY(-3px); }
        .mob-card-img-wrap { overflow:hidden; position:relative; }
        .mob-card-img-wrap::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,transparent 50%,rgba(10,26,82,0.5) 100%); }
        .mob-card-img { width:100%; height:200px; object-fit:cover; display:block; transition:transform 0.6s ease; }
        .mob-card:hover .mob-card-img { transform:scale(1.04); }
        .mob-card-body { padding:22px 20px; }
        .mob-card-tag { display:inline-block; background:#eff6ff; color:#2563EB; font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; padding:4px 12px; margin-bottom:10px; }
        .mob-card-title { font-family:'Raleway',sans-serif; font-size:20px; font-weight:800; color:#0a1a52; margin-bottom:10px; }
        .mob-card-desc { font-size:14px; color:#4b5563; line-height:1.7; margin-bottom:16px; }
        .mob-card-feats { list-style:none; }
        .mob-card-feat { display:flex; align-items:center; gap:10px; padding:9px 0; border-bottom:1px solid #eef2ff; font-size:13px; color:#374151; }
        .mob-card-feat:last-child { border-bottom:none; }
        .feat-check { width:20px; height:20px; flex-shrink:0; background:#eff6ff; color:#2563EB; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; }

        /* Desktop selector */
        .sel-wrap { display:none; border:1px solid #dde5f4; border-radius:4px; overflow:hidden; box-shadow:0 20px 60px rgba(10,26,82,0.08); }
        .sel-layout { display:grid; grid-template-columns:280px 1fr; }
        .sel-tabs { background:#f0f4ff; border-right:1px solid #dde5f4; }
        .sel-tab { padding:18px 22px; cursor:pointer; border-bottom:1px solid #dde5f4; transition:all 0.25s; position:relative; display:flex; align-items:flex-start; gap:12px; }
        .sel-tab::after { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:#2563EB; transform:scaleY(0); transition:transform 0.25s; transform-origin:center; }
        .sel-tab.on { background:#fff; }
        .sel-tab.on::after { transform:scaleY(1); }
        .sel-tab-icon { width:36px; height:36px; flex-shrink:0; background:#e8eefa; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:16px; transition:background 0.25s; }
        .sel-tab.on .sel-tab-icon { background:#dbeafe; }
        .sel-tab-sup { font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#9ca3af; font-weight:600; margin-bottom:2px; }
        .sel-tab-name { font-size:13px; font-weight:700; color:#0a1a52; font-family:'Raleway',sans-serif; transition:color 0.25s; line-height:1.3; }
        .sel-tab.on .sel-tab-name { color:#2563EB; }
        .sel-detail { background:#fff; }
        .sel-img-wrap { position:relative; overflow:hidden; height:280px; }
        .sel-img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform 0.6s; }
        .sel-img-wrap:hover img { transform:scale(1.04); }
        .sel-img-wrap::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,transparent 55%,rgba(10,26,82,0.5) 100%); }
        .sel-body { padding:28px 32px; }
        .sel-tag { display:inline-block; background:#eff6ff; color:#2563EB; font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; padding:4px 12px; margin-bottom:10px; }
        .sel-title { font-family:'Raleway',sans-serif; font-size:clamp(20px,2.5vw,26px); font-weight:800; color:#0a1a52; margin-bottom:10px; }
        .sel-desc { font-size:14px; color:#4b5563; line-height:1.8; margin-bottom:20px; }
        .sel-feats { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
        .sel-feat { display:flex; align-items:center; gap:9px; font-size:13px; color:#374151; padding:9px 12px; background:#f8faff; border:1px solid #eef2ff; }
        .sel-feat-dot { width:6px; height:6px; background:#2563EB; border-radius:50%; flex-shrink:0; }
        @keyframes panelIn { from{opacity:0;transform:translateX(14px)} to{opacity:1;transform:translateX(0)} }
        .panel-in { animation:panelIn 0.32s ease forwards; }

        /* Full-bleed service rows */
        .fb { display:flex; flex-direction:column; }
        .fb-img { position:relative; overflow:hidden; height:260px; flex-shrink:0; }
        .fb-img img { width:100%; height:100%; object-fit:cover; transition:transform 0.9s; }
        .fb-img:hover img { transform:scale(1.05); }
        .fb-img-overlay { position:absolute; inset:0; background:linear-gradient(135deg,rgba(10,26,82,0.2),transparent); pointer-events:none; }
        .fb-body { padding:36px 20px; display:flex; flex-direction:column; justify-content:center; }
        .fb-num { font-family:'Raleway',sans-serif; font-size:clamp(48px,12vw,80px); font-weight:900; line-height:1; color:#eef2ff; margin-bottom:-8px; user-select:none; }
        .fb-feats { list-style:none; margin-top:18px; }
        .fb-feat { display:flex; align-items:center; gap:11px; padding:11px 0; border-bottom:1px solid #eef2ff; font-size:14px; color:#374151; }
        .fb-feat:last-child { border-bottom:none; }

        /* Why */
        .why-grid { display:grid; grid-template-columns:1fr; gap:16px; }
        .why-card { padding:26px 22px; border:1px solid #e5eaf5; background:#fff; transition:all 0.35s; position:relative; overflow:hidden; }
        .why-card::before { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#2563EB,#60A5FA); transform:scaleX(0); transition:transform 0.35s; transform-origin:left; }
        .why-card:hover { transform:translateY(-5px); box-shadow:0 16px 44px rgba(10,26,82,0.1); border-color:#bfdbfe; }
        .why-card:hover::before { transform:scaleX(1); }
        .why-icon { width:48px; height:48px; border-radius:12px; background:#eff6ff; display:flex; align-items:center; justify-content:center; font-size:22px; margin-bottom:14px; }
        .why-title { font-family:'Raleway',sans-serif; font-size:16px; font-weight:700; color:#0a1a52; margin-bottom:8px; }
        .why-desc { font-size:13px; color:#6b7280; line-height:1.7; }

        /* CTA */
        .cta-sec { background:linear-gradient(135deg,#0a1a52 0%,#1e40af 100%); position:relative; overflow:hidden; }
        .cta-ring { position:absolute; border-radius:50%; border:1px solid rgba(255,255,255,0.05); pointer-events:none; }
        .cta-inner { max-width:680px; margin:0 auto; padding:72px 20px; text-align:center; position:relative; z-index:2; }
        .cta-badge { display:inline-block; background:rgba(96,165,250,0.1); border:1px solid rgba(96,165,250,0.22); color:#93c5fd; font-size:10px; letter-spacing:3px; text-transform:uppercase; padding:6px 16px; margin-bottom:24px; font-weight:600; }
        .cta-h2 { font-family:'Raleway',sans-serif; font-size:clamp(26px,5vw,48px); font-weight:900; color:#fff; line-height:1.15; margin-bottom:18px; }
        .cta-sub { font-size:clamp(13px,3vw,15px); color:rgba(255,255,255,0.6); line-height:1.8; margin-bottom:36px; font-weight:300; }
        .cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }

        /* ── TABLET 600px ── */
        @media (min-width:600px) {
          .hero-inner { padding:56px 32px 72px; }
          .stats-inner { grid-template-columns:repeat(4,1fr); }
          .stat-cell { border-bottom:none; padding:32px 20px; }
          .mob-cards { grid-template-columns:repeat(2,1fr); }
          .mob-card-img { height:220px; }
          .why-grid { grid-template-columns:repeat(2,1fr); }
          .sec-wrap { padding:0 32px; }
          .fb-img { height:320px; }
          .fb-body { padding:44px 32px; }
          .cta-inner { padding:80px 40px; }
          .ind-cards-wrap { padding:0 32px; }
          .ind-cards { grid-template-columns:repeat(2,1fr); gap:18px; }
          .ind-count-row { padding:0 32px; }
        }

        /* ── TABLET-LG 768px ── */
        @media (min-width:768px) {
          .ind-cards { grid-template-columns:repeat(2,1fr); }
          .ind-header { padding:72px 32px 52px; }
        }

        /* ── LAPTOP 900px ── */
        @media (min-width:900px) {
          .hero-inner { padding:0 48px; }
          .hero-content { max-width:520px; }
          .hero-photo { display:block; }
          .sec-wrap { padding:0 48px; }
          .sec-pad { padding:80px 0; }
          .mob-cards { display:none; }
          .sel-wrap { display:block; }
          .fb { flex-direction:row; min-height:500px; }
          .fb-img { height:auto; width:50%; flex-shrink:0; }
          .fb-img-r { order:2; }
          .fb-body { width:50%; padding:64px 56px; }
          .fb-body-l { order:1; }
          .why-grid { grid-template-columns:repeat(3,1fr); }
          .ind-cards-wrap { padding:0 48px; }
          .ind-cards { grid-template-columns:repeat(3,1fr); gap:20px; }
          .ind-count-row { padding:0 48px; }
          .ind-header { padding:80px 48px 56px; }
        }

        /* ── DESKTOP 1200px ── */
        @media (min-width:1200px) {
          .hero { min-height:88vh; }
          .hero-inner { padding:0 60px; }
          .hero-content { max-width:560px; }
          .sec-wrap { padding:0 60px; }
          .sec-pad { padding:96px 0; }
          .sel-layout { grid-template-columns:300px 1fr; }
          .fb-body { padding:80px 72px; }
          .stat-cell { padding:36px 28px; }
          .cta-inner { padding:100px 40px; }
          .ind-cards-wrap { padding:0 60px; }
          .ind-cards { grid-template-columns:repeat(3,1fr); gap:24px; }
          .ind-count-row { padding:0 60px; }
          .ind-header { padding:88px 60px 60px; }
        }

        /* ── XL 1400px ── */
        @media (min-width:1400px) {
          .sel-layout { grid-template-columns:320px 1fr; }
          .ind-cards { grid-template-columns:repeat(3,1fr); }
        }

        /* Accessibility */
        @media (prefers-reduced-motion:reduce) {
          *, *::before, *::after { animation-duration:0.01ms !important; transition-duration:0.01ms !important; }
        }
        @media (hover:none) {
          .why-card:hover, .mob-card:hover, .ind-card.hov { transform:none; box-shadow:none; }
          .btn-blue:hover, .btn-white:hover { transform:none; box-shadow:none; }
        }
      `}</style>

      <div className="sp">

        {/* ══ HERO ══ */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[120px] pb-12 md:pt-[150px] md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-sky-200 font-semibold">
                  <span className="h-0.5 w-6 bg-sky-300" /> Explore Our Expertise
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                  Service for <br /> Your <span className="text-sky-300">Development</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-200 max-w-xl">
                  Comprehensive manpower, security and compliance-driven solutions tailored for Government departments, Defence units and Corporate organisations across India.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => { document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' }); }} className="rounded-md bg-sky-500 hover:bg-sky-600 text-white font-semibold px-4 py-2 text-xs sm:text-sm">Explore Services</button>
                  <button onClick={() => navigate('/contact')} className="rounded-md border border-white/40 text-white font-semibold px-4 py-2 text-xs sm:text-sm hover:bg-white/10 transition-colors">Contact Us</button>
                </div>
              </div>
              <div>
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80" alt="Services" className="w-full h-auto rounded-xl shadow-2xl object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <div className="stats-bar">
          <div className="stats-inner">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 90}>
                <div className="stat-cell">
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            INDUSTRIES WE SERVE — MOVED TO TOP
        ══════════════════════════════════════════ */}
        <section className="ind-section">

          {/* Header */}
          <div className="ind-header">
            <Reveal>
              <div className="ind-badge">
                <span className="ind-badge-dot" />
                Sectors We Serve
              </div>
              <h2 className="ind-h2">Industries We <span>Serve</span></h2>
              <p className="ind-sub">
                Trusted by organisations across 9+ industries — delivering compliant, professional and scalable workforce solutions nationwide.
              </p>
            </Reveal>
          </div>

          {/* Animated ticker strip */}
          <Ticker />

          {/* Industry cards */}
          <div className="ind-cards-wrap">
            <div className="ind-cards">
              {INDUSTRIES.map((ind, i) => (
                <IndCard key={ind.name} ind={ind} delay={i * 60} />
              ))}
            </div>

            {/* Bottom summary pills */}
            <Reveal delay={200}>
              <div className="ind-count-row">
                {["9+ Industries", "Pan-India Coverage", "Govt & Private Sector", "ISO Compliant"].map(pill => (
                  <div key={pill} className="ind-count-pill">
                    <span className="ind-pill-dot" />
                    {pill}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══ OUR CORE SERVICES ══ */}
        <section id="core-services" className="sec-pad" style={{ background: "#fff" }}>
          <div className="sec-wrap">
            <Reveal>
              <div className="sec-eyebrow">What We Offer</div>
              <h2 className="sec-h2" style={{ marginBottom: 36 }}>Our Core Services</h2>
            </Reveal>

            {/* Service cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((s, i) => (
                <Reveal key={s.id} delay={i * 70}>
                  <article className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img src={s.photo} alt={s.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4 sm:p-5 flex-1">
                      <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wider bg-sky-100 text-sky-700 px-2 py-1 rounded">{s.tag}</span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">{s.desc}</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        {s.features.map(f => (
                          <li key={f} className="flex items-start gap-2"><span className="text-sky-500">✓</span>{f}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-6 border-t border-slate-200 pt-4">
              <p className="text-sm text-slate-500">Swipe or click a card to explore each service detail.</p>
            </div>

            {/* Desktop tab selector */}
            <div className="sel-wrap hidden md:block">
              <Reveal delay={100}>
                <div className="sel-layout">
                  <div className="sel-tabs">
                    {SERVICES.map((s, i) => (
                      <div key={s.id} className={`sel-tab${active === i ? " on" : ""}`} onClick={() => setActive(i)}>
                        <div className="sel-tab-icon">{s.icon}</div>
                        <div>
                          <div className="sel-tab-sup">{s.tag}</div>
                          <div className="sel-tab-name">{s.title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div key={active} className="sel-detail panel-in">
                    <div className="sel-img-wrap"><img src={cur.photo} alt={cur.title} /></div>
                    <div className="sel-body">
                      <span className="sel-tag">{cur.tag}</span>
                      <h3 className="sel-title">{cur.title}</h3>
                      <p className="sel-desc">{cur.desc}</p>
                      <div className="sel-feats">
                        {cur.features.map(f => (
                          <div key={f} className="sel-feat"><span className="sel-feat-dot" />{f}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ══ SERVICE DETAIL SECTIONS ══ */}
        {[
          { svc: SERVICES[0], num: "01", label: "Workforce Solutions", bg: "#f8faff", photo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80", alt: "Manpower", flip: false },
          { svc: SERVICES[1], num: "02", label: "Protection Services", bg: "#fff", photo: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=900&q=80", alt: "Security", flip: true },
          { svc: SERVICES[2], num: "03", label: "Facility Management", bg: "#f8faff", photo: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80", alt: "Housekeeping", flip: false },
          { svc: SERVICES[3], num: "04", label: "HR Advisory", bg: "#fff", photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80", alt: "HR", flip: true },
          { svc: SERVICES[4], num: "05", label: "Quality Systems", bg: "#f8faff", photo: "https://www.pinakindustrial.com/assets/images/services/iso.jpg", alt: "ISO", flip: false },
        ].map(({ svc, num, label, bg, photo, alt, flip }) => (
          <section key={num} className="fb">
            {!flip && (
              <div className="fb-img">
                <img src={photo} alt={alt} />
                <div className="fb-img-overlay" />
              </div>
            )}
            <Reveal delay={100} className={`fb-body${flip ? " fb-body-l" : ""}`} style={{ background: bg }}>
              <div className="fb-num">{num}</div>
              <div className="sec-eyebrow">{label}</div>
              <h2 className="sec-h2" style={{ marginBottom: 12 }}>{svc.title}</h2>
              <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.8 }}>{svc.desc}</p>
              <ul className="fb-feats">
                {svc.features.map(f => (
                  <li key={f} className="fb-feat"><span className="feat-check">✓</span>{f}</li>
                ))}
              </ul>
            </Reveal>
            {flip && (
              <div className="fb-img fb-img-r">
                <img src={photo} alt={alt} />
                <div className="fb-img-overlay" />
              </div>
            )}
          </section>
        ))}

        <div className="divider" />

        {/* ══ WHY CHOOSE US ══ */}
        <section className="sec-pad" style={{ background: "#f8faff" }}>
          <div className="sec-wrap">
            <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sec-eyebrow" style={{ justifyContent: "center" }}>Our Advantage</div>
              <h2 className="sec-h2" style={{ maxWidth: 420, margin: "0 auto" }}>Why Organisations Choose Us</h2>
            </Reveal>
            <div className="why-grid">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 65}>
                  <div className="why-card">
                    <div className="why-icon">{w.icon}</div>
                    <div className="why-title">{w.title}</div>
                    <div className="why-desc">{w.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="cta-sec">
          <div className="cta-ring" style={{ width: 500, height: 500, top: -200, right: -100 }} />
          <div className="cta-ring" style={{ width: 300, height: 300, bottom: -100, left: "5%" }} />
          <div className="cta-inner">
            <Reveal>
              <div className="cta-badge">Get Started</div>
              <h2 className="cta-h2">Ready to Build a<br /><span style={{ color: "#60A5FA" }}>Stronger Organisation?</span></h2>
              <p className="cta-sub">Connect with our team to discuss your manpower, security or compliance requirements. We deliver solutions tailored precisely to your needs.</p>
              <div className="cta-btns">
            <button
  onClick={() => navigate("/consultation")}
  className="btn-white"
>
  Request a Proposal
  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1l7 7-7 7V1z" />
  </svg>
</button>
                <button className="btn-ghost">Contact Us</button>
              </div>
            </Reveal>
          </div>
        </section>

      </div>
    </>
  );
}