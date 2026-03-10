import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";

const geoUrl = "/maps/india.geojson";

const OFFICES = [
  {
    name: "Lucknow – Headquarters",
    coordinates: [80.9462, 26.8467],
    state: "Uttar Pradesh",
    address: "3/290, Vipul Khand, Gomti Nagar, Lucknow – 226010",
    phone: "+91-84232-15047",
    email: "namdevassociateslko@gmail.com",
    details: "Corporate Headquarters",
  },
  {
    name: "Delhi – Branch Office",
    coordinates: [77.2090, 28.6139],
    state: "Delhi",
    address: "Regional Office, Delhi",
    phone: "+91-84232-15047",
    email: "",
    details: "Regional Branch Office",
  },
  {
    name: "Bhopal – Branch Office",
    coordinates: [77.4126, 23.2599],
    state: "Madhya Pradesh",
    address: "Regional Office, Bhopal",
    phone: "+91-84232-15047",
    email: "",
    details: "Regional Branch Office",
  },
];

const SERVICES = [
  {
    name: "DRTC Shivpuri",
    coordinates: [77.6626, 25.4358],
    orgType: "Central Government", ministry: "—", department: "Defence Research & Training Centre",
    orgName: "DRTC Shivpuri", zone: "Shivpuri, Madhya Pradesh",
    type: "Manpower & Contract Services", icon: "⚙️",
  },
  {
    name: "Director General NCC",
    coordinates: [77.1855, 28.5986],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Defence",
    orgName: "Director General of National Cadet Corps (DGNCC)", zone: "Delhi",
    type: "Manpower Outsourcing", icon: "🎖️",
  },
  {
    name: "NPCIL – Rawatbhata",
    coordinates: [75.5937, 24.9200],
    orgType: "Central PSU", ministry: "PMO", department: "Department of Atomic Energy",
    orgName: "Nuclear Power Corporation of India Limited", zone: "Rajasthan",
    type: "Contract Staffing & Compliance", icon: "⚛️",
  },
  {
    name: "Directorate of Pension, UP",
    coordinates: [80.9196, 26.8681],
    orgType: "State Government", ministry: "—", department: "Finance Department Uttar Pradesh",
    orgName: "Directorate of Pension, Govt. of Uttar Pradesh", zone: "Lucknow",
    type: "Housekeeping & Facility Mgmt.", icon: "🏛️",
  },
  {
    name: "Food Safety & Drug Admin.",
    coordinates: [80.9271, 26.8553],
    orgType: "State Government", ministry: "—", department: "Food Safety & Drug Administration Dept., UP",
    orgName: "Food Safety and Drug Administration", zone: "Lucknow Head Office",
    type: "Support Staff & Security", icon: "🏥",
  },
  {
    name: "Indian Navy – INHS Patanjali",
    coordinates: [72.8147, 19.5044],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Military Affairs",
    orgName: "Indian Navy", zone: "INHS Patanjali, Virar",
    type: "Manpower & Facility Mgmt.", icon: "⚓",
  },
  {
    name: "Indian Air Force – No. 4 AFSB",
    coordinates: [83.0033, 25.3176],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Military Affairs",
    orgName: "Indian Air Force", zone: "No. 4 Air Force Selection Board, Varanasi",
    type: "Security & Support Deployment", icon: "✈️",
  },
];

export default function IndiaMap() {
  const [activeOffice,  setActiveOffice]  = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [filter, setFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);

  const showOffices  = filter === "all" || filter === "office";
  const showServices = filter === "all" || filter === "service";

  const close = () => { setActiveOffice(null); setActiveService(null); };
  const handleOfficeClick  = (i) => { setActiveOffice(activeOffice === i ? null : i); setActiveService(null); };
  const handleServiceClick = (i) => { setActiveService(activeService === i ? null : i); setActiveOffice(null); };

  const activeLoc = activeOffice !== null
    ? { ...OFFICES[activeOffice],  kind: "office"  }
    : activeService !== null
    ? { ...SERVICES[activeService], kind: "service" }
    : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }

        /* ━━━ SECTION ━━━ */
        .imap {
          font-family:'DM Sans',sans-serif;
          background: #060d1f;
          background-image:
            radial-gradient(ellipse 80% 60% at 20% 0%, rgba(30,58,138,0.35) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 100%, rgba(14,36,99,0.3) 0%, transparent 55%);
          padding: 88px 24px 100px;
          position: relative;
          overflow: hidden;
        }

        /* Fine grid texture */
        .imap::before {
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background-image:
            linear-gradient(rgba(99,140,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,140,255,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }

        /* Decorative orbs */
        .imap-orb {
          position:absolute; border-radius:50%; pointer-events:none;
          filter: blur(70px);
        }

        /* ━━━ HEADER ━━━ */
        .imap-hd { text-align:center; margin-bottom:52px; position:relative; z-index:2; }

        .imap-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          border:1px solid rgba(99,140,255,0.25);
          background:rgba(99,140,255,0.07);
          backdrop-filter:blur(10px);
          color:#93b4ff; font-size:10px; letter-spacing:4px; text-transform:uppercase;
          padding:7px 20px; font-weight:600; margin-bottom:20px;
          border-radius:2px;
        }
        .imap-pulse {
          width:6px; height:6px; border-radius:50%; background:#60a5fa;
          animation:imPulse 2.2s ease-in-out infinite;
        }
        @keyframes imPulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(96,165,250,0.7); opacity:1; }
          50%    { box-shadow:0 0 0 6px rgba(96,165,250,0);  opacity:0.5; }
        }

        .imap-h1 {
          font-family:'Cinzel',serif;
          font-size:clamp(28px,4.5vw,52px);
          font-weight:700;
          color:#fff;
          letter-spacing:1px;
          line-height:1.15;
          margin-bottom:14px;
        }
        .imap-h1 span { color:#60a5fa; }

        .imap-sub {
          font-size:15px; color:rgba(255,255,255,0.4);
          max-width:480px; margin:0 auto; line-height:1.8; font-weight:300;
        }

        /* Decorative rule */
        .imap-rule {
          display:flex; align-items:center; justify-content:center; gap:16px;
          margin-top:20px;
        }
        .imap-rule-line { width:60px; height:1px; background:linear-gradient(90deg,transparent,rgba(99,140,255,0.4)); }
        .imap-rule-line.r { background:linear-gradient(90deg,rgba(99,140,255,0.4),transparent); }
        .imap-rule-diamond {
          width:6px; height:6px; background:#60a5fa;
          transform:rotate(45deg); opacity:0.7;
        }

        /* ━━━ FILTERS ━━━ */
        .imap-filters {
          display:flex; justify-content:center; gap:8px; flex-wrap:wrap;
          margin-bottom:40px; position:relative; z-index:2;
        }
        .imap-btn {
          display:inline-flex; align-items:center; gap:8px;
          padding:9px 22px; font-size:11.5px; font-weight:600;
          border:1px solid rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.04);
          color:rgba(255,255,255,0.5);
          cursor:pointer; transition:all 0.25s;
          font-family:'DM Sans',sans-serif;
          border-radius:2px; letter-spacing:0.3px;
        }
        .imap-btn:hover { border-color:rgba(255,255,255,0.22); color:rgba(255,255,255,0.85); background:rgba(255,255,255,0.08); }
        .imap-btn.active-all {
          background:linear-gradient(135deg,#1e3a8a,#1d4ed8);
          border-color:#3b82f6; color:#fff;
          box-shadow:0 4px 20px rgba(37,99,235,0.35);
        }
        .imap-btn.active-off {
          background:linear-gradient(135deg,#7f1d1d,#dc2626);
          border-color:#ef4444; color:#fff;
          box-shadow:0 4px 20px rgba(220,38,38,0.35);
        }
        .imap-btn.active-svc {
          background:linear-gradient(135deg,#1e3a8a,#2563eb);
          border-color:#60a5fa; color:#fff;
          box-shadow:0 4px 20px rgba(96,165,250,0.3);
        }
        .ibtn-dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }

        /* ━━━ LAYOUT ━━━ */
        .imap-grid {
          max-width:1300px; margin:0 auto;
          display:grid; grid-template-columns:1fr;
          gap:20px; position:relative; z-index:2;
        }
        @media(min-width:1060px){ .imap-grid { grid-template-columns:1fr 340px; } }

        /* ━━━ MAP CARD ━━━ */
        .imap-card {
          border-radius:16px; overflow:hidden;
          border:1px solid rgba(99,140,255,0.18);
          background:rgba(8,18,52,0.7);
          backdrop-filter:blur(20px);
          box-shadow:
            0 0 0 1px rgba(99,140,255,0.06),
            0 24px 80px rgba(0,0,0,0.5),
            inset 0 1px 0 rgba(255,255,255,0.06);
          position:relative;
        }

        /* Top chrome bar */
        .imap-chrome {
          padding:14px 20px;
          display:flex; align-items:center; justify-content:space-between;
          border-bottom:1px solid rgba(99,140,255,0.1);
          background:rgba(255,255,255,0.02);
        }
        .imap-chrome-dots { display:flex; gap:6px; }
        .imap-chrome-dot {
          width:10px; height:10px; border-radius:50%;
        }
        .imap-chrome-title {
          font-size:11px; letter-spacing:3px; text-transform:uppercase;
          color:rgba(255,255,255,0.25); font-weight:600;
          display:flex; align-items:center; gap:10px;
        }
        .imap-chrome-title::before, .imap-chrome-title::after {
          content:''; width:20px; height:1px; background:rgba(99,140,255,0.2);
        }
        .imap-chrome-stats { display:flex; gap:20px; }
        .chrome-stat { display:flex; align-items:center; gap:6px; font-size:11px; font-weight:600; }
        .chrome-stat-dot { width:7px; height:7px; border-radius:50%; }
        .chrome-stat-num { color:rgba(255,255,255,0.7); }
        .chrome-stat-lbl { color:rgba(255,255,255,0.3); }

        /* Map canvas */
        .imap-canvas {
          position:relative;
          background:
            radial-gradient(ellipse 100% 100% at 50% 50%, #0c1d4d 0%, #060e28 100%);
          padding:0;
        }

        /* Vignette overlay */
        .imap-canvas::after {
          content:''; position:absolute; inset:0; pointer-events:none; z-index:1;
          background:radial-gradient(ellipse 90% 90% at 50% 50%, transparent 55%, rgba(4,8,24,0.6) 100%);
        }

        /* ━━━ LEGEND ━━━ */
        .imap-legend {
          display:flex; gap:28px; flex-wrap:wrap; align-items:center; justify-content:center;
          padding:14px 20px 16px;
          border-top:1px solid rgba(99,140,255,0.1);
          background:rgba(255,255,255,0.015);
        }
        .leg-item { display:flex; align-items:center; gap:9px; font-size:11.5px; font-weight:500; color:rgba(255,255,255,0.45); }
        .leg-pin {
          width:14px; height:20px; position:relative; flex-shrink:0;
          display:flex; align-items:flex-start; justify-content:center;
        }

        /* ━━━ RIGHT PANEL ━━━ */
        .imap-panel { display:flex; flex-direction:column; gap:16px; }

        /* Stats row */
        .imap-stats { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
        .imap-stat {
          border-radius:12px; padding:20px 16px; text-align:center;
          border:1px solid rgba(99,140,255,0.12);
          background:rgba(8,18,52,0.7);
          backdrop-filter:blur(20px);
          position:relative; overflow:hidden;
          box-shadow:0 8px 32px rgba(0,0,0,0.3);
        }
        .imap-stat::before {
          content:''; position:absolute; inset:0;
          background:radial-gradient(ellipse at 50% 0%, rgba(99,140,255,0.08), transparent 70%);
        }
        .imap-stat-val {
          font-family:'Cinzel',serif; font-size:38px; font-weight:700; line-height:1;
          position:relative;
        }
        .imap-stat.red .imap-stat-val  { color:#f87171; }
        .imap-stat.blue .imap-stat-val { color:#60a5fa; }
        .imap-stat-lbl { font-size:10px; font-weight:600; letter-spacing:2px; text-transform:uppercase; margin-top:6px; color:rgba(255,255,255,0.3); position:relative; }
        .imap-stat-bar { height:2px; border-radius:1px; margin-top:14px; position:relative; }
        .imap-stat.red  .imap-stat-bar { background:linear-gradient(90deg,#ef4444,#fca5a5,transparent); }
        .imap-stat.blue .imap-stat-bar { background:linear-gradient(90deg,#3b82f6,#93c5fd,transparent); }

        /* Directory card */
        .imap-dir {
          border-radius:12px; overflow:hidden; flex:1;
          border:1px solid rgba(99,140,255,0.12);
          background:rgba(8,18,52,0.7);
          backdrop-filter:blur(20px);
          box-shadow:0 8px 32px rgba(0,0,0,0.3);
        }
        .imap-dir-head {
          padding:14px 18px;
          background:linear-gradient(135deg, rgba(15,30,80,0.9), rgba(10,20,60,0.9));
          border-bottom:1px solid rgba(99,140,255,0.12);
          display:flex; align-items:center; gap:10px;
        }
        .imap-dir-title {
          font-family:'Cinzel',serif; font-size:12px; font-weight:600;
          color:rgba(255,255,255,0.8); letter-spacing:1px;
        }
        .imap-dir-cnt {
          margin-left:auto;
          background:rgba(59,130,246,0.2); border:1px solid rgba(59,130,246,0.3);
          color:#93c5fd; font-size:10px; font-weight:700;
          padding:2px 10px; border-radius:20px;
        }

        .imap-dir-body { max-height:420px; overflow-y:auto; }
        .imap-dir-body::-webkit-scrollbar { width:2px; }
        .imap-dir-body::-webkit-scrollbar-track { background:transparent; }
        .imap-dir-body::-webkit-scrollbar-thumb { background:rgba(99,140,255,0.3); border-radius:2px; }

        .dir-item {
          display:flex; align-items:center; gap:12px;
          padding:12px 18px; border-bottom:1px solid rgba(255,255,255,0.04);
          cursor:pointer; transition:all 0.2s;
          position:relative;
        }
        .dir-item:last-child { border-bottom:none; }
        .dir-item::before {
          content:''; position:absolute; left:0; top:0; bottom:0; width:0;
          background:linear-gradient(180deg,#ef4444,#f87171);
          transition:width 0.2s;
        }
        .dir-item.svc::before { background:linear-gradient(180deg,#3b82f6,#60a5fa); }
        .dir-item:hover { background:rgba(255,255,255,0.03); }
        .dir-item:hover::before { width:2px; }
        .dir-item.act { background:rgba(239,68,68,0.06); }
        .dir-item.act::before { width:3px; }
        .dir-item.act.svc { background:rgba(59,130,246,0.06); }

        .dir-avatar {
          width:36px; height:36px; border-radius:10px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; font-size:16px;
          border:1px solid rgba(255,255,255,0.06);
        }
        .dir-avatar.off { background:rgba(239,68,68,0.1); }
        .dir-avatar.svc { background:rgba(59,130,246,0.1); }

        .dir-name {
          font-family:'DM Sans',sans-serif; font-size:12px; font-weight:600;
          color:rgba(255,255,255,0.8); line-height:1.35; margin-bottom:2px;
        }
        .dir-sub { font-size:10px; color:rgba(255,255,255,0.3); }
        .dir-tag {
          margin-left:auto; flex-shrink:0;
          font-size:8px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
          padding:3px 8px; border-radius:2px;
        }
        .dir-tag.off { background:rgba(239,68,68,0.12); color:#f87171; border:1px solid rgba(239,68,68,0.2); }
        .dir-tag.svc { background:rgba(59,130,246,0.12); color:#93c5fd; border:1px solid rgba(59,130,246,0.2); }

        /* Hint text */
        .imap-hint {
          text-align:center; font-size:11px; color:rgba(255,255,255,0.18);
          letter-spacing:1px; padding-bottom:2px; font-weight:500;
          display:flex; align-items:center; justify-content:center; gap:8px;
        }
        .imap-hint::before,.imap-hint::after { content:''; width:30px; height:1px; background:rgba(99,140,255,0.15); }

        /* ━━━ MODAL ━━━ */
        .imap-overlay {
          position:fixed; inset:0; z-index:1000;
          background:rgba(2,6,23,0.75);
          backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
          display:flex; align-items:center; justify-content:center;
          padding:20px; animation:imOverlay 0.22s ease;
        }
        @keyframes imOverlay { from{opacity:0} to{opacity:1} }

        .imap-modal {
          width:100%; max-width:480px; border-radius:16px; overflow:hidden;
          background:rgba(8,16,48,0.97);
          border:1px solid rgba(99,140,255,0.2);
          box-shadow:
            0 0 0 1px rgba(99,140,255,0.06),
            0 40px 100px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.07);
          animation:imModal 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes imModal { from{opacity:0;transform:scale(0.86) translateY(24px)} to{opacity:1;transform:scale(1) translateY(0)} }

        .modal-stripe { height:4px; }
        .modal-stripe.off { background:linear-gradient(90deg,#ef4444,#f87171,#fca5a5); }
        .modal-stripe.svc { background:linear-gradient(90deg,#1d4ed8,#3b82f6,#93c5fd); }

        .modal-hd {
          padding:22px 24px 18px;
          display:flex; align-items:flex-start; gap:14px;
          border-bottom:1px solid rgba(255,255,255,0.06);
        }
        .modal-hd-icon {
          width:50px; height:50px; border-radius:14px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center; font-size:22px;
          border:1px solid rgba(255,255,255,0.08);
        }
        .modal-hd-icon.off { background:rgba(239,68,68,0.1); }
        .modal-hd-icon.svc { background:rgba(59,130,246,0.1); }
        .modal-kicker {
          font-size:8.5px; font-weight:700; letter-spacing:3px; text-transform:uppercase;
          margin-bottom:6px; display:inline-block;
        }
        .modal-kicker.off { color:#f87171; }
        .modal-kicker.svc { color:#93c5fd; }
        .modal-name {
          font-family:'Cinzel',serif; font-size:16px; font-weight:700;
          color:#fff; line-height:1.3;
        }
        .modal-x {
          margin-left:auto; width:30px; height:30px; border-radius:50%;
          background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);
          color:rgba(255,255,255,0.4); font-size:14px;
          cursor:pointer; display:flex; align-items:center; justify-content:center;
          flex-shrink:0; transition:all 0.2s; font-family:'DM Sans',sans-serif;
        }
        .modal-x:hover { background:rgba(239,68,68,0.15); border-color:rgba(239,68,68,0.3); color:#f87171; }

        .modal-body { padding:20px 24px 24px; }

        /* Service pill */
        .modal-pill {
          display:inline-flex; align-items:center; gap:8px;
          padding:7px 14px; border-radius:4px; margin-bottom:18px;
          font-size:12px; font-weight:600;
        }
        .modal-pill.off { background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.18); color:#f87171; }
        .modal-pill.svc { background:rgba(59,130,246,0.08); border:1px solid rgba(59,130,246,0.18); color:#93c5fd; }

        /* Org table */
        .modal-table {
          border-radius:10px; overflow:hidden;
          border:1px solid rgba(99,140,255,0.12);
          margin-bottom:18px;
        }
        .modal-table-head {
          padding:10px 16px;
          background:rgba(255,255,255,0.03);
          border-bottom:1px solid rgba(99,140,255,0.1);
          font-size:10px; font-weight:700; letter-spacing:2.5px;
          text-transform:uppercase; color:rgba(255,255,255,0.35);
          display:flex; align-items:center; gap:8px;
        }
        .modal-row {
          display:grid; grid-template-columns:120px 1fr;
          border-bottom:1px solid rgba(255,255,255,0.04); font-size:12.5px;
        }
        .modal-row:last-child { border-bottom:none; }
        .modal-key { padding:10px 14px; color:rgba(255,255,255,0.3); font-weight:500; font-size:11.5px; border-right:1px solid rgba(255,255,255,0.04); }
        .modal-val { padding:10px 14px; color:rgba(255,255,255,0.8); font-weight:500; line-height:1.45; }
        .modal-val.bold { color:#fff; font-weight:700; }

        /* Maps CTA */
        .modal-cta {
          display:flex; align-items:center; justify-content:center; gap:10px;
          width:100%; padding:13px 18px; border-radius:8px; border:none;
          background:linear-gradient(135deg,#1e3a8a,#2563eb);
          color:#fff; font-size:13px; font-weight:600;
          cursor:pointer; text-decoration:none;
          transition:all 0.25s; font-family:'DM Sans',sans-serif;
          box-shadow:0 4px 20px rgba(37,99,235,0.3);
        }
        .modal-cta:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(37,99,235,0.45); background:linear-gradient(135deg,#1d4ed8,#3b82f6); }

        @keyframes pinPop { 0%{transform:scale(0) translateY(10px);opacity:0} 65%{transform:scale(1.2) translateY(-3px)} 100%{transform:scale(1) translateY(0);opacity:1} }
      `}</style>

      <section className="imap">
        {/* Background orbs */}
        <div className="imap-orb" style={{width:700,height:700,top:-250,left:-150,background:"radial-gradient(circle,rgba(30,58,138,0.25) 0%,transparent 60%)"}}/>
        <div className="imap-orb" style={{width:500,height:500,bottom:-200,right:"-5%",background:"radial-gradient(circle,rgba(14,36,99,0.2) 0%,transparent 60%)"}}/>
        <div className="imap-orb" style={{width:300,height:300,top:"40%",right:"20%",background:"radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)"}}/>

        {/* ── HEADER ── */}
        <div className="imap-hd">
          <div className="imap-eyebrow">
            <span className="imap-pulse"/>
            National Presence
          </div>
          <h2 className="imap-h1">Where We <span>Operate</span></h2>
          <p className="imap-sub">Offices and active deployments across Central Government, Defence & PSU organisations across India.</p>
          <div className="imap-rule">
            <div className="imap-rule-line"/>
            <div className="imap-rule-diamond"/>
            <div className="imap-rule-line r"/>
          </div>
        </div>

        {/* ── FILTERS ── */}
        <div className="imap-filters">
          {[
            {k:"all",     l:"All Locations",  a:"active-all", d:"#60a5fa"},
            {k:"office",  l:"Our Offices",    a:"active-off", d:"#f87171"},
            {k:"service", l:"Service Sites",  a:"active-svc", d:"#93c5fd"},
          ].map(f=>(
            <button key={f.k} className={`imap-btn${filter===f.k?" "+f.a:""}`} onClick={()=>setFilter(f.k)}>
              <span className="ibtn-dot" style={{background:filter===f.k?"#fff":f.d, opacity:filter===f.k?1:0.6}}/>
              {f.l}
            </button>
          ))}
        </div>

        {/* ── MAIN GRID ── */}
        <div className="imap-grid">

          {/* MAP CARD */}
          <div className="imap-card">

            {/* Chrome top bar */}
            <div className="imap-chrome">
              <div className="imap-chrome-dots">
                <div className="imap-chrome-dot" style={{background:"#ff5f57"}}/>
                <div className="imap-chrome-dot" style={{background:"#ffbd2e"}}/>
                <div className="imap-chrome-dot" style={{background:"#28c840"}}/>
              </div>
              <div className="imap-chrome-title">India — Geographic Coverage</div>
              <div className="imap-chrome-stats">
                <div className="chrome-stat">
                  <div className="chrome-stat-dot" style={{background:"#f87171"}}/>
                  <span className="chrome-stat-num">{OFFICES.length}</span>
                  <span className="chrome-stat-lbl">offices</span>
                </div>
                <div className="chrome-stat">
                  <div className="chrome-stat-dot" style={{background:"#60a5fa"}}/>
                  <span className="chrome-stat-num">{SERVICES.length}</span>
                  <span className="chrome-stat-lbl">sites</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="imap-canvas">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 1060, center: [82.5, 22] }}
                width={820} height={640}
                style={{ width:"100%", height:"auto", display:"block" }}
              >
                <defs>
                  <linearGradient id="stateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a3a7c" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#0f2255" stopOpacity="0.9"/>
                  </linearGradient>
                  <linearGradient id="mpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2452a4"/>
                    <stop offset="100%" stopColor="#1a3a7c"/>
                  </linearGradient>
                  <filter id="glow-red">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glow-blue">
                    <feGaussianBlur stdDeviation="2.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(geo => {
                      const isMP = geo.properties.NAME_1 === "Madhya Pradesh"
                        || geo.properties.ST_NM === "Madhya Pradesh"
                        || geo.properties.name === "Madhya Pradesh";
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isMP ? "url(#mpGrad)" : "url(#stateGrad)"}
                          stroke="rgba(99,140,255,0.25)"
                          strokeWidth={0.6}
                          style={{
                            default:{ outline:"none" },
                            hover:  { fill: isMP?"#2d5bbf":"#1e4591", outline:"none", cursor:"default" },
                            pressed:{ outline:"none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {/* OFFICE MARKERS — Glowing red pin */}
                {showOffices && OFFICES.map((o, i) => (
                  <Marker key={`o${i}`} coordinates={o.coordinates}>
                    <g
                      style={{ cursor:"pointer", animation:`pinPop 0.45s cubic-bezier(0.34,1.56,0.64,1) ${i*100}ms both` }}
                      onClick={() => handleOfficeClick(i)}
                      filter="url(#glow-red)"
                    >
                      {/* Pulse ring */}
                      <circle r={0} fill="none" stroke="#ef4444" strokeWidth={1}>
                        <animate attributeName="r" values="0;22;0" dur="2.5s" repeatCount="indefinite" begin={`${i*0.4}s`}/>
                        <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" begin={`${i*0.4}s`}/>
                      </circle>
                      {/* Outer halo */}
                      <circle r={activeOffice===i?17:12} fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.3)" strokeWidth={1}/>
                      {/* Pin body */}
                      <circle r={activeOffice===i?10:7} fill={activeOffice===i?"#ef4444":"#dc2626"} stroke="#fff" strokeWidth={2}/>
                      {/* Pin tail */}
                      <polygon
                        points={activeOffice===i
                          ? "0,26 -6,12 6,12"
                          : "0,19 -4.5,9 4.5,9"
                        }
                        fill={activeOffice===i?"#ef4444":"#dc2626"}
                      />
                      {/* Inner dot */}
                      <circle r={activeOffice===i?4:2.8} fill="#fff" opacity={0.9}/>
                    </g>
                  </Marker>
                ))}

                {/* SERVICE MARKERS — Cool blue target */}
                {showServices && SERVICES.map((s, i) => (
                  <Marker key={`s${i}`} coordinates={s.coordinates}>
                    <g
                      style={{ cursor:"pointer", animation:`pinPop 0.45s cubic-bezier(0.34,1.56,0.64,1) ${(OFFICES.length+i)*100}ms both` }}
                      onClick={() => handleServiceClick(i)}
                      filter="url(#glow-blue)"
                    >
                      {activeService===i && (
                        <circle r={0} fill="none" stroke="#60a5fa" strokeWidth={1}>
                          <animate attributeName="r" values="0;20;0" dur="2s" repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite"/>
                        </circle>
                      )}
                      {/* Outer ring */}
                      <circle
                        r={activeService===i?13:9}
                        fill="rgba(59,130,246,0.15)"
                        stroke={activeService===i?"#60a5fa":"#3b82f6"}
                        strokeWidth={activeService===i?2:1.5}
                      />
                      {/* Mid ring */}
                      <circle r={activeService===i?8:5.5} fill="rgba(59,130,246,0.25)" stroke="#93c5fd" strokeWidth={1}/>
                      {/* Core */}
                      <circle r={activeService===i?4:3} fill={activeService===i?"#60a5fa":"#3b82f6"}/>
                      <circle r={activeService===i?1.5:1.2} fill="#fff" opacity={0.9}/>
                    </g>
                  </Marker>
                ))}

              </ComposableMap>
            </div>

            {/* Click hint */}
            <div style={{padding:"10px 20px 0"}}>
              <div className="imap-hint">Click any marker for full details</div>
            </div>

            {/* Legend */}
            <div className="imap-legend">
              <div className="leg-item">
                <svg width="14" height="22" viewBox="0 0 14 22">
                  <circle cx="7" cy="7" r="7" fill="#dc2626" stroke="#fff" strokeWidth="1.5"/>
                  <polygon points="7,21 3,10 11,10" fill="#dc2626"/>
                  <circle cx="7" cy="7" r="3" fill="#fff" opacity="0.9"/>
                </svg>
                Our Offices
              </div>
              <div className="leg-item" style={{gap:10}}>
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <circle cx="11" cy="11" r="9" fill="rgba(59,130,246,0.15)" stroke="#3b82f6" strokeWidth="1.5"/>
                  <circle cx="11" cy="11" r="5" fill="rgba(59,130,246,0.3)" stroke="#93c5fd" strokeWidth="1"/>
                  <circle cx="11" cy="11" r="2.5" fill="#60a5fa"/>
                </svg>
                Service Deployments
              </div>
              <div className="leg-item">
                <div style={{width:14,height:14,borderRadius:3,background:"linear-gradient(135deg,#2452a4,#1a3a7c)",border:"1px solid rgba(99,140,255,0.3)",flexShrink:0}}/>
                Madhya Pradesh (Home State)
              </div>
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="imap-panel">

            {/* Stats */}
            <div className="imap-stats">
              <div className="imap-stat red">
                <div className="imap-stat-val">{OFFICES.length}</div>
                <div className="imap-stat-lbl">Offices</div>
                <div className="imap-stat-bar"/>
              </div>
              <div className="imap-stat blue">
                <div className="imap-stat-val">{SERVICES.length}+</div>
                <div className="imap-stat-lbl">Sites</div>
                <div className="imap-stat-bar"/>
              </div>
            </div>

            {/* Directory */}
            <div className="imap-dir">
              <div className="imap-dir-head">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#60a5fa"><path d="M8 0a5 5 0 1 0 0 10A5 5 0 0 0 8 0zm0 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1.5C5.5 10.5 1 11.75 1 14v1h14v-1c0-2.25-4.5-3.5-7-3.5z"/></svg>
                <span className="imap-dir-title">Location Directory</span>
                <span className="imap-dir-cnt">{(showOffices?OFFICES.length:0)+(showServices?SERVICES.length:0)}</span>
              </div>
              <div className="imap-dir-body">
                {showOffices && OFFICES.map((o,i)=>(
                  <div
                    key={`d-o${i}`}
                    className={`dir-item${activeOffice===i?" act":""}`}
                    onClick={()=>handleOfficeClick(i)}
                    onMouseEnter={()=>setHoveredItem(`o${i}`)}
                    onMouseLeave={()=>setHoveredItem(null)}
                  >
                    <div className="dir-avatar off">🏢</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div className="dir-name">{o.name}</div>
                      <div className="dir-sub">{o.state}</div>
                    </div>
                    <span className="dir-tag off">Office</span>
                  </div>
                ))}
                {showServices && SERVICES.map((s,i)=>(
                  <div
                    key={`d-s${i}`}
                    className={`dir-item svc${activeService===i?" act":""}`}
                    onClick={()=>handleServiceClick(i)}
                  >
                    <div className="dir-avatar svc">{s.icon}</div>
                    <div style={{flex:1,minWidth:0}}>
                      <div className="dir-name">{s.name}</div>
                      <div className="dir-sub">{s.zone}</div>
                    </div>
                    <span className="dir-tag svc">Service</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════ MODAL ══════════ */}
      {activeLoc && (
        <div className="imap-overlay" onClick={e=>{ if(e.target.classList.contains("imap-overlay")) close(); }}>
          <div className="imap-modal">
            <div className={`modal-stripe ${activeLoc.kind==="office"?"off":"svc"}`}/>

            {/* Header */}
            <div className="modal-hd">
              <div className={`modal-hd-icon ${activeLoc.kind==="office"?"off":"svc"}`}>
                {activeLoc.kind==="office" ? "🏢" : (activeLoc.icon||"📍")}
              </div>
              <div style={{flex:1}}>
                <div className={`modal-kicker ${activeLoc.kind==="office"?"off":"svc"}`}>
                  {activeLoc.kind==="office" ? "Our Office" : "Service Provided"}
                </div>
                <div className="modal-name">{activeLoc.name}</div>
              </div>
              <button className="modal-x" onClick={close}>✕</button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <div className={`modal-pill ${activeLoc.kind==="office"?"off":"svc"}`}>
                {activeLoc.kind==="office" ? "🏢" : "🔧"}
                {activeLoc.kind==="office" ? activeLoc.details : activeLoc.type}
              </div>

              <div className="modal-table">
                <div className="modal-table-head">
                  🏛&nbsp; संगठन विवरण &nbsp;|&nbsp; Organisation Details
                </div>

                {activeLoc.kind==="office" ? (<>
                  <div className="modal-row"><div className="modal-key">Address</div><div className="modal-val">{activeLoc.address}</div></div>
                  <div className="modal-row"><div className="modal-key">State</div><div className="modal-val">{activeLoc.state}</div></div>
                  <div className="modal-row"><div className="modal-key">Phone</div><div className="modal-val">{activeLoc.phone}</div></div>
                  {activeLoc.email&&<div className="modal-row"><div className="modal-key">Email</div><div className="modal-val">{activeLoc.email}</div></div>}
                </>) : (<>
                  <div className="modal-row"><div className="modal-key">Type</div><div className="modal-val">{activeLoc.orgType}</div></div>
                  <div className="modal-row"><div className="modal-key">Ministry</div><div className="modal-val">{activeLoc.ministry}</div></div>
                  <div className="modal-row"><div className="modal-key">Department</div><div className="modal-val">{activeLoc.department}</div></div>
                  <div className="modal-row"><div className="modal-key">Organisation</div><div className="modal-val bold">{activeLoc.orgName}</div></div>
                  <div className="modal-row"><div className="modal-key">Office Zone</div><div className="modal-val">{activeLoc.zone}</div></div>
                </>)}
              </div>

              <a
                className="modal-cta"
                href={`https://www.google.com/maps?q=${activeLoc.coordinates[1]},${activeLoc.coordinates[0]}`}
                target="_blank" rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                View on Google Maps
                <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor"><path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}