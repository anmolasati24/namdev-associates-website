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
    coordinates: [77.209, 28.6139],
    state: "Delhi",
    address: "Regional Office, Delhi",
    phone: "+91-84232-15047",
    details: "Regional Branch Office",
  },
  {
    name: "Bhopal – Branch Office",
    coordinates: [77.4126, 23.2599],
    state: "Madhya Pradesh",
    address: "Regional Office, Bhopal",
    phone: "+91-84232-15047",
    details: "Regional Branch Office",
  },
  {
    name: "Rudrapur – Branch Office",
    coordinates: [79.4032, 28.9774],
    state: "Uttarakhand",
    address: "Ward No. 27, Gandhi Colony, Rudrapur, Udham Singh Nagar – 263153",
    phone: "+91-84232-15047",
    email: "",
    details: "Registered Branch Office · Reg. No. UKSADDN029403",
    regNo: "UKSADDN029403",
    regAct: "Uttarakhand Dookan Aur Sthaapan Adhiniyam, 2017",
  },
  {
    name: "Sikar – Branch Office",
    coordinates: [75.1398, 27.6094],
    state: "Rajasthan",
    address: "Radhakishanpura, Sikar, Rajasthan",
    phone: "+91-84232-15047",
    email: "",
    details: "Registered Branch Office · Reg. No. SCA/2024/23/132889",
    regNo: "SCA/2024/23/132889",
    regAct: "Rajasthan Shops & Commercial Establishments Act, 1958",
  },
  {
    name: "Chandigarh – Branch Office",
    coordinates: [76.7794, 30.7333],
    state: "Chandigarh (UT)",
    address: "Regional Office, Chandigarh",
    phone: "+91-84232-15047",
    email: "",
    details: "Regional Branch Office",
  },
  {
    name: "Dehradun – Branch Office",
    coordinates: [78.0322, 30.3165],
    state: "Uttarakhand",
    address: "Regional Office, Dehradun",
    phone: "+91-84232-15047",
    email: "",
    details: "Regional Branch Office",
  },
  {
    name: "Jaipur – Branch Office",
    coordinates: [75.7873, 26.9124],
    state: "Rajasthan",
    address: "Regional Office, Jaipur",
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
    name: "Director General NCC (DGNCC)",
    coordinates: [77.1673, 28.6300],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Defence",
    orgName: "Director General of National Cadet Corps (DGNCC)", zone: "Delhi",
    type: "Manpower Outsourcing", icon: "🎖️",
  },
  {
    name: "NPCIL – Rawatbhata",
    coordinates: [75.5937, 24.92],
    orgType: "Central PSU", ministry: "PMO", department: "Department of Atomic Energy",
    orgName: "Nuclear Power Corporation of India Limited", zone: "Rajasthan",
    type: "Contract Staffing & Compliance", icon: "⚛️",
  },
  {
    name: "Directorate of Pension, UP",
    coordinates: [80.9000, 26.8750],
    orgType: "State Government", ministry: "—", department: "Finance Department Uttar Pradesh",
    orgName: "Directorate of Pension, Govt. of Uttar Pradesh", zone: "Lucknow",
    type: "Housekeeping & Facility Mgmt.", icon: "🏛️",
  },
  {
    name: "Food Safety & Drug Admin.",
    coordinates: [80.9500, 26.8400],
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
  {
    name: "Basic Shikha Department, Badaun",
    coordinates: [79.1218, 28.0368],
    orgType: "State Government", ministry: "—", department: "Basic Education Department, Uttar Pradesh",
    orgName: "Basic Shikha Department", zone: "Badaun District, Uttar Pradesh",
    type: "Support Staff & Facility Mgmt.", icon: "🏫",
  },
  {
    name: "Meerut Cantt – Indian Army Base Camp",
    coordinates: [77.7085, 28.9845],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Military Affairs",
    orgName: "Indian Army", zone: "Meerut Cantonment, Uttar Pradesh",
    type: "Security & Manpower Deployment", icon: "🪖",
  },
  {
    name: "Indian Navy – Karwar",
    coordinates: [74.1240, 14.8135],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Military Affairs",
    orgName: "Indian Navy", zone: "Karwar, Karnataka",
    type: "Ward Boy Services", icon: "⚓",
    contractNo: "GEMC-511687729140924", contractValue: "₹1.05 Crore",
  },
  {
    name: "Dept. of Biotechnology – Delhi",
    coordinates: [77.2290, 28.6350],
    orgType: "Central Government", ministry: "Ministry of Science & Technology", department: "Department of Biotechnology",
    orgName: "Department of Biotechnology, Govt. of India", zone: "New Delhi",
    type: "Semi-Skilled, Graduate & Administrative Manpower", icon: "🔬",
    contractNo: "GEMC-511687755569708", contractValue: "₹1.33 Crore",
  },
  {
    name: "Ordnance Factory – Kanpur",
    coordinates: [80.3318, 26.4499],
    orgType: "Central Government", ministry: "Ministry of Defence", department: "Department of Defence Production",
    orgName: "Ordnance Factory Board – Kanpur", zone: "Kanpur, Uttar Pradesh",
    type: "Skilled & Semi-Skilled Manpower", icon: "🏭",
  },
  // ── NEW CONTRACT ──
  {
    name: "Airports Authority of India – Datia",
    coordinates: [78.4572, 25.6706],
    orgType: "Central PSU", ministry: "Ministry of Civil Aviation", department: "Airports Authority of India (AAI)",
    orgName: "AAI – ANS, Finance, HR, Engineering, Tech, OPS, Commercial, General Store, IT",
    zone: "Datia, Madhya Pradesh (Bhopal Western Region)",
    type: "Manpower Outsourcing – Skilled & Unskilled (11 Resources)",
    icon: "✈️",
    contractNo: "GEMC-511687745310880",
    contractValue: "₹34.00 Lakh",
  },
];

export default function IndiaMap() {
  const [filter, setFilter]     = useState("all");
  const [hovered, setHovered]   = useState(null);

  const showOffices  = filter === "all" || filter === "office";
  const showServices = filter === "all" || filter === "service";

  const handleEnter = (loc, e) => {
    const rect = e.currentTarget.closest("svg")?.getBoundingClientRect()
               || e.currentTarget.getBoundingClientRect();
    const svgEl = e.currentTarget.closest("svg");
    const ctRect = e.currentTarget.getBoundingClientRect();
    setHovered({
      loc,
      x: ctRect.left - (svgEl ? svgEl.getBoundingClientRect().left : 0),
      y: ctRect.top  - (svgEl ? svgEl.getBoundingClientRect().top  : 0),
    });
  };
  const handleLeave = () => setHovered(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .imap {
          font-family: 'DM Sans', sans-serif;
          background: #060d1f;
          padding: 80px 24px 96px;
          position: relative; overflow: hidden;
        }
        .imap::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(96,165,250,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.04) 1px, transparent 1px);
          background-size: 52px 52px;
        }
        .imap-orb { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }

        .imap-hd { text-align: center; margin-bottom: 48px; position: relative; z-index: 2; }
        .imap-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          border: 1px solid rgba(96,165,250,0.22); background: rgba(96,165,250,0.06);
          color: #93c5fd; font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
          padding: 7px 20px; font-weight: 600; margin-bottom: 18px; border-radius: 2px;
        }
        .imap-pulse {
          width: 6px; height: 6px; border-radius: 50%; background: #60a5fa; flex-shrink: 0;
          animation: imPulse 2.2s ease-in-out infinite;
        }
        @keyframes imPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(96,165,250,0.7); }
          50%     { box-shadow: 0 0 0 7px rgba(96,165,250,0); }
        }
        .imap-h2 {
          font-family: 'Cinzel', serif;
          font-size: clamp(26px,4vw,48px); font-weight: 700; color: #fff;
          letter-spacing: 1px; line-height: 1.15; margin-bottom: 12px;
        }
        .imap-h2 span { color: #60a5fa; }
        .imap-sub { font-size: 15px; color: rgba(255,255,255,0.38); max-width: 460px; margin: 0 auto; line-height: 1.8; font-weight: 300; }
        .imap-divider { display: flex; align-items: center; justify-content: center; gap: 14px; margin-top: 18px; }
        .imap-divider-line   { width: 56px; height: 1px; background: linear-gradient(90deg,transparent,rgba(96,165,250,0.35)); }
        .imap-divider-line.r { background: linear-gradient(90deg,rgba(96,165,250,0.35),transparent); }
        .imap-divider-gem    { width: 6px; height: 6px; background: #60a5fa; transform: rotate(45deg); opacity: .6; }

        .imap-filters { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; position: relative; z-index: 2; }
        .imap-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 22px; font-size: 11.5px; font-weight: 600;
          border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.45); cursor: pointer; transition: all .22s;
          border-radius: 2px; font-family: 'DM Sans', sans-serif;
        }
        .imap-btn:hover { border-color: rgba(255,255,255,0.2); color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.07); }
        .imap-btn.a-all { background: linear-gradient(135deg,#1e3a8a,#1d4ed8); border-color: #3b82f6; color: #fff; box-shadow: 0 4px 20px rgba(37,99,235,.35); }
        .imap-btn.a-off { background: linear-gradient(135deg,#7f1d1d,#dc2626); border-color: #ef4444; color: #fff; box-shadow: 0 4px 20px rgba(220,38,38,.35); }
        .imap-btn.a-svc { background: linear-gradient(135deg,#1e3a8a,#2563eb); border-color: #60a5fa; color: #fff; box-shadow: 0 4px 20px rgba(96,165,250,.28); }
        .btn-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }

        .imap-grid { max-width: 1300px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 20px; position: relative; z-index: 2; }
        @media (min-width: 1060px) { .imap-grid { grid-template-columns: 1fr 340px; } }

        .imap-card {
          border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(96,165,250,0.15);
          background: rgba(6,14,40,0.75); backdrop-filter: blur(20px);
          box-shadow: 0 0 0 1px rgba(96,165,250,0.05), 0 24px 80px rgba(0,0,0,.55),
                      inset 0 1px 0 rgba(255,255,255,.05);
        }
        .imap-chrome {
          padding: 13px 20px; display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(96,165,250,0.1); background: rgba(255,255,255,0.02);
        }
        .chrome-dots { display: flex; gap: 6px; }
        .chrome-dot  { width: 10px; height: 10px; border-radius: 50%; }
        .chrome-label {
          font-size: 10.5px; letter-spacing: 3px; text-transform: uppercase;
          color: rgba(255,255,255,0.22); font-weight: 600;
          display: flex; align-items: center; gap: 10px;
        }
        .chrome-label::before,.chrome-label::after { content: ''; width: 18px; height: 1px; background: rgba(96,165,250,0.18); }
        .chrome-stats { display: flex; gap: 18px; }
        .chrome-stat  { display: flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 600; }
        .chrome-stat-dot { width: 7px; height: 7px; border-radius: 50%; }
        .chrome-num { color: rgba(255,255,255,0.7); }
        .chrome-lbl { color: rgba(255,255,255,0.28); }

        .imap-canvas {
          background: radial-gradient(ellipse 100% 100% at 50% 50%, #0c1d4d 0%, #050d26 100%);
          position: relative;
        }
        .imap-canvas::after {
          content: ''; position: absolute; inset: 0; pointer-events: none; z-index: 1;
          background: radial-gradient(ellipse 88% 88% at 50% 50%, transparent 52%, rgba(3,7,20,.65) 100%);
        }

        .imap-hovercard {
          position: absolute;
          z-index: 50;
          width: 300px;
          background: rgba(7,14,46,0.98);
          border: 1px solid rgba(96,165,250,0.22);
          border-radius: 14px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(96,165,250,0.06),
                      inset 0 1px 0 rgba(255,255,255,0.06);
          pointer-events: none;
          animation: hcIn .18s cubic-bezier(0.34,1.56,0.64,1);
          transform-origin: bottom center;
        }
        @keyframes hcIn {
          from { opacity: 0; transform: scale(0.88) translateY(8px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .hc-stripe { height: 3px; }
        .hc-stripe.off { background: linear-gradient(90deg,#ef4444,#f87171,#fca5a5); }
        .hc-stripe.svc { background: linear-gradient(90deg,#1d4ed8,#3b82f6,#93c5fd); }

        .hc-head {
          padding: 14px 16px 12px;
          display: flex; align-items: center; gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .hc-icon {
          width: 40px; height: 40px; border-radius: 11px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center; font-size: 19px;
          border: 1px solid rgba(255,255,255,0.07);
        }
        .hc-icon.off { background: rgba(239,68,68,0.12); }
        .hc-icon.svc { background: rgba(59,130,246,0.12); }
        .hc-kicker { font-size: 8px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 4px; display: block; }
        .hc-kicker.off { color: #f87171; }
        .hc-kicker.svc { color: #93c5fd; }
        .hc-name { font-family: 'Cinzel', serif; font-size: 13px; font-weight: 700; color: #fff; line-height: 1.25; }

        .hc-body { padding: 12px 16px 14px; }
        .hc-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 5px 11px; border-radius: 4px; margin-bottom: 12px;
          font-size: 11px; font-weight: 600;
        }
        .hc-pill.off { background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.18); color: #f87171; }
        .hc-pill.svc { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.18); color: #93c5fd; }

        .hc-table { border-radius: 8px; overflow: hidden; border: 1px solid rgba(96,165,250,0.1); margin-bottom: 12px; }
        .hc-table-head {
          padding: 7px 12px; background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(96,165,250,0.08);
          font-size: 8.5px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.28); display: flex; align-items: center; gap: 6px;
        }
        .hc-row { display: grid; grid-template-columns: 90px 1fr; border-bottom: 1px solid rgba(255,255,255,0.04); font-size: 11.5px; }
        .hc-row:last-child { border-bottom: none; }
        .hc-key { padding: 8px 10px; color: rgba(255,255,255,0.28); font-size: 10.5px; font-weight: 500; border-right: 1px solid rgba(255,255,255,0.04); }
        .hc-val { padding: 8px 10px; color: rgba(255,255,255,0.78); font-weight: 500; line-height: 1.4; font-size: 11px; }
        .hc-val.bold { color: #fff; font-weight: 700; }

        .hc-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; padding: 10px 14px; border-radius: 7px; border: none;
          background: linear-gradient(135deg,#1e3a8a,#2563eb);
          color: #fff; font-size: 12px; font-weight: 600;
          text-decoration: none; font-family: 'DM Sans', sans-serif;
          box-shadow: 0 3px 14px rgba(37,99,235,.3);
        }

        .imap-hovercard.pinned { pointer-events: auto; }

        .imap-legend {
          display: flex; gap: 28px; flex-wrap: wrap; align-items: center; justify-content: center;
          padding: 13px 20px 15px;
          border-top: 1px solid rgba(96,165,250,0.08); background: rgba(255,255,255,0.015);
        }
        .leg-item { display: flex; align-items: center; gap: 9px; font-size: 11.5px; font-weight: 500; color: rgba(255,255,255,0.38); }
        .leg-state { width: 14px; height: 14px; border-radius: 3px; background: linear-gradient(135deg,#2452a4,#1a3a7c); border: 1px solid rgba(96,165,250,0.3); flex-shrink: 0; }
        .imap-hint {
          text-align: center; font-size: 11px; color: rgba(255,255,255,0.16); letter-spacing: 1px;
          padding: 10px 0 2px; display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .imap-hint::before,.imap-hint::after { content: ''; width: 28px; height: 1px; background: rgba(96,165,250,0.12); }

        .imap-panel { display: flex; flex-direction: column; gap: 16px; }
        .imap-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .imap-stat {
          border-radius: 12px; padding: 20px 16px; text-align: center;
          border: 1px solid rgba(96,165,250,0.1); background: rgba(6,14,40,0.75);
          backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0,0,0,.3);
          position: relative; overflow: hidden;
        }
        .imap-stat::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 0%,rgba(96,165,250,0.07),transparent 65%); }
        .stat-val { font-family: 'Cinzel', serif; font-size: 38px; font-weight: 700; line-height: 1; position: relative; }
        .imap-stat.red  .stat-val { color: #f87171; }
        .imap-stat.blue .stat-val { color: #60a5fa; }
        .stat-lbl { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; margin-top: 6px; color: rgba(255,255,255,0.28); position: relative; }
        .stat-bar { height: 2px; border-radius: 1px; margin-top: 14px; position: relative; }
        .imap-stat.red  .stat-bar { background: linear-gradient(90deg,#ef4444,#fca5a5,transparent); }
        .imap-stat.blue .stat-bar { background: linear-gradient(90deg,#3b82f6,#93c5fd,transparent); }

        .imap-dir {
          border-radius: 12px; overflow: hidden; flex: 1;
          border: 1px solid rgba(96,165,250,0.1); background: rgba(6,14,40,0.75);
          backdrop-filter: blur(20px); box-shadow: 0 8px 32px rgba(0,0,0,.3);
        }
        .dir-head {
          padding: 13px 18px; background: linear-gradient(135deg,rgba(15,30,80,.95),rgba(8,18,52,.95));
          border-bottom: 1px solid rgba(96,165,250,0.1); display: flex; align-items: center; gap: 10px;
        }
        .dir-title { font-family: 'Cinzel', serif; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.75); letter-spacing: 1px; }
        .dir-count { margin-left: auto; background: rgba(59,130,246,0.18); border: 1px solid rgba(59,130,246,0.28); color: #93c5fd; font-size: 10px; font-weight: 700; padding: 2px 10px; border-radius: 20px; }
        .dir-body { max-height: 430px; overflow-y: auto; }
        .dir-body::-webkit-scrollbar { width: 2px; }
        .dir-body::-webkit-scrollbar-thumb { background: rgba(96,165,250,0.25); border-radius: 2px; }

        .dir-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 18px; border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer; transition: background .18s; position: relative;
        }
        .dir-item::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0; transition: width .2s; }
        .dir-item.off-item::before { background: linear-gradient(180deg,#ef4444,#f87171); }
        .dir-item.svc-item::before { background: linear-gradient(180deg,#3b82f6,#60a5fa); }
        .dir-item:last-child { border-bottom: none; }
        .dir-item:hover { background: rgba(255,255,255,0.04); }
        .dir-item:hover::before { width: 2px; }
        .dir-avatar { width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 16px; border: 1px solid rgba(255,255,255,0.06); }
        .dir-avatar.off { background: rgba(239,68,68,0.1); }
        .dir-avatar.svc { background: rgba(59,130,246,0.1); }
        .dir-name { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.8); line-height: 1.35; margin-bottom: 2px; }
        .dir-sub  { font-size: 10px; color: rgba(255,255,255,0.28); }
        .dir-tag  { margin-left: auto; flex-shrink: 0; font-size: 8px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 3px 8px; border-radius: 2px; }
        .dir-tag.off { background: rgba(239,68,68,0.1); color: #f87171; border: 1px solid rgba(239,68,68,0.18); }
        .dir-tag.svc { background: rgba(59,130,246,0.1); color: #93c5fd; border: 1px solid rgba(59,130,246,0.18); }

        @keyframes pinDrop {
          0%   { transform: scale(0) translateY(-10px); opacity: 0; }
          65%  { transform: scale(1.18) translateY(2px); }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>

      <section className="imap">
        <div className="imap-orb" style={{ width:700,height:700,top:-280,left:-160,background:"radial-gradient(circle,rgba(29,78,216,0.2) 0%,transparent 62%)" }} />
        <div className="imap-orb" style={{ width:500,height:500,bottom:-200,right:"-8%",background:"radial-gradient(circle,rgba(14,36,99,0.18) 0%,transparent 62%)" }} />

        <div className="imap-hd">
          <div className="imap-eyebrow"><span className="imap-pulse" />National Presence</div>
          <h2 className="imap-h2">Where We <span>Operate</span></h2>
          <p className="imap-sub">Offices and active deployments across Central Government, Defence &amp; PSU organisations pan-India.</p>
          <div className="imap-divider">
            <div className="imap-divider-line" />
            <div className="imap-divider-gem" />
            <div className="imap-divider-line r" />
          </div>
        </div>

        <div className="imap-filters">
          {[
            { k:"all",    l:"All Locations", a:"a-all", d:"#60a5fa" },
            { k:"office", l:"Our Offices",   a:"a-off", d:"#f87171" },
            { k:"service",l:"Service Sites", a:"a-svc", d:"#93c5fd" },
          ].map((f) => (
            <button key={f.k} className={`imap-btn${filter===f.k?" "+f.a:""}`} onClick={()=>setFilter(f.k)}>
              <span className="btn-dot" style={{background:filter===f.k?"#fff":f.d,opacity:filter===f.k?1:0.6}} />
              {f.l}
            </button>
          ))}
        </div>

        <div className="imap-grid">

          <div className="imap-card">
            <div className="imap-chrome">
              <div className="chrome-dots">
                <div className="chrome-dot" style={{background:"#ff5f57"}} />
                <div className="chrome-dot" style={{background:"#ffbd2e"}} />
                <div className="chrome-dot" style={{background:"#28c840"}} />
              </div>
              <div className="chrome-label">India — Geographic Coverage</div>
              <div className="chrome-stats">
                <div className="chrome-stat"><div className="chrome-stat-dot" style={{background:"#f87171"}} /><span className="chrome-num">{OFFICES.length}</span><span className="chrome-lbl">offices</span></div>
                <div className="chrome-stat"><div className="chrome-stat-dot" style={{background:"#60a5fa"}} /><span className="chrome-num">{SERVICES.length}</span><span className="chrome-lbl">sites</span></div>
              </div>
            </div>

            <div className="imap-canvas" style={{position:"relative"}}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale:1060, center:[82.5,22] }}
                width={820} height={640}
                style={{ width:"100%", height:"auto", display:"block" }}
              >
                <defs>
                  <linearGradient id="stFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#1a3a8a" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#0f2255" stopOpacity="0.9"/>
                  </linearGradient>
                  <linearGradient id="mpFill" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#2452a4"/>
                    <stop offset="100%" stopColor="#1a3a7c"/>
                  </linearGradient>
                  <filter id="glow-red">
                    <feGaussianBlur stdDeviation="2.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <filter id="glow-blue">
                    <feGaussianBlur stdDeviation="2" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const isMP = ["Madhya Pradesh"].includes(
                        geo.properties.NAME_1 || geo.properties.ST_NM || geo.properties.name
                      );
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={isMP ? "url(#mpFill)" : "url(#stFill)"}
                          stroke="rgba(96,165,250,0.22)"
                          strokeWidth={0.6}
                          style={{
                            default: { outline:"none" },
                            hover:   { fill: isMP?"#2d5bbf":"#1e4591", outline:"none", cursor:"default" },
                            pressed: { outline:"none" },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>

                {showOffices && OFFICES.map((o, i) => (
                  <Marker key={`o${i}`} coordinates={o.coordinates}>
                    <g
                      style={{ cursor:"pointer", animation:`pinDrop .4s cubic-bezier(0.34,1.56,0.64,1) ${i*90}ms both` }}
                      onMouseEnter={(e) => setHovered({ loc:{ ...o, kind:"office" }, markerId:`o${i}` })}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => window.open(`https://www.google.com/maps?q=${o.coordinates[1]},${o.coordinates[0]}`, "_blank")}
                      filter="url(#glow-red)"
                    >
                      <circle r={0} fill="none" stroke="#ef4444" strokeWidth={1.2} opacity={0.7}>
                        <animate attributeName="r"       values="0;22;0"     dur="2.6s" repeatCount="indefinite" begin={`${i*0.5}s`}/>
                        <animate attributeName="opacity" values="0.7;0;0.7"  dur="2.6s" repeatCount="indefinite" begin={`${i*0.5}s`}/>
                      </circle>
                      <circle r={13} fill="rgba(239,68,68,0.14)" stroke="rgba(239,68,68,0.28)" strokeWidth={1}/>
                      <circle r={8}  fill="#dc2626" stroke="#fff" strokeWidth={2}
                        style={{filter:"drop-shadow(0 4px 8px rgba(239,68,68,0.55))"}}/>
                      <polygon points="0,20 -5,10 5,10" fill="#dc2626"/>
                      <circle r={3}  fill="#fff" opacity={0.92}/>
                    </g>
                  </Marker>
                ))}

                {showServices && SERVICES.map((s, i) => (
                  <Marker key={`s${i}`} coordinates={s.coordinates}>
                    <g
                      style={{ cursor:"pointer", animation:`pinDrop .4s cubic-bezier(0.34,1.56,0.64,1) ${(OFFICES.length+i)*90}ms both` }}
                      onMouseEnter={(e) => setHovered({ loc:{ ...s, kind:"service" }, markerId:`s${i}` })}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => window.open(`https://www.google.com/maps?q=${s.coordinates[1]},${s.coordinates[0]}`, "_blank")}
                      filter="url(#glow-blue)"
                    >
                      <circle r={11} fill="rgba(59,130,246,0.14)" stroke="#3b82f6" strokeWidth={1.5}
                        style={{filter:"drop-shadow(0 3px 7px rgba(59,130,246,0.45))"}}/>
                      <circle r={6}  fill="rgba(59,130,246,0.3)"  stroke="#93c5fd" strokeWidth={1}/>
                      <circle r={3}  fill="#3b82f6"/>
                      <circle r={1.2} fill="#fff" opacity={0.95}/>
                    </g>
                  </Marker>
                ))}

              </ComposableMap>

              {hovered && (() => {
                const loc = hovered.loc;
                const isOff = loc.kind === "office";
                const k = isOff ? "off" : "svc";
                return (
                  <div className="imap-hovercard" style={{ top: 20, right: 20 }}>
                    <div className={`hc-stripe ${k}`} />
                    <div className="hc-head">
                      <div className={`hc-icon ${k}`}>{isOff ? "🏢" : (loc.icon || "📍")}</div>
                      <div>
                        <span className={`hc-kicker ${k}`}>{isOff ? "Our Office" : "Service Provided"}</span>
                        <div className="hc-name">{loc.name}</div>
                      </div>
                    </div>
                    <div className="hc-body">
                      <div className={`hc-pill ${k}`}>{isOff ? "🏢" : "🔧"} {isOff ? loc.details : loc.type}</div>
                      <div className="hc-table">
                        <div className="hc-table-head">{"🏛 संगठन विवरण | Organisation Details"}</div>
                        {isOff ? (<>
                          <div className="hc-row"><div className="hc-key">Address</div><div className="hc-val">{loc.address}</div></div>
                          <div className="hc-row"><div className="hc-key">State</div><div className="hc-val">{loc.state}</div></div>
                          <div className="hc-row"><div className="hc-key">Phone</div><div className="hc-val">{loc.phone}</div></div>
                          {loc.email && <div className="hc-row"><div className="hc-key">Email</div><div className="hc-val">{loc.email}</div></div>}
                          {loc.regNo && <div className="hc-row"><div className="hc-key">Reg. No.</div><div className="hc-val bold">{loc.regNo}</div></div>}
                          {loc.regAct && <div className="hc-row"><div className="hc-key">Act</div><div className="hc-val" style={{fontSize:"10px"}}>{loc.regAct}</div></div>}
                        </>) : (<>
                          <div className="hc-row"><div className="hc-key">Type</div><div className="hc-val">{loc.orgType}</div></div>
                          <div className="hc-row"><div className="hc-key">Ministry</div><div className="hc-val">{loc.ministry}</div></div>
                          <div className="hc-row"><div className="hc-key">Department</div><div className="hc-val">{loc.department}</div></div>
                          <div className="hc-row"><div className="hc-key">Organisation</div><div className="hc-val bold">{loc.orgName}</div></div>
                          <div className="hc-row"><div className="hc-key">Office Zone</div><div className="hc-val">{loc.zone}</div></div>
                          {loc.contractNo && <div className="hc-row"><div className="hc-key">Contract No.</div><div className="hc-val" style={{fontSize:"10px"}}>{loc.contractNo}</div></div>}
                          {loc.contractValue && <div className="hc-row"><div className="hc-key">Value</div><div className="hc-val bold" style={{color:"#60a5fa"}}>{loc.contractValue}</div></div>}
                        </>)}
                      </div>
                      <a
                        className="hc-cta"
                        href={`https://www.google.com/maps?q=${loc.coordinates[1]},${loc.coordinates[0]}`}
                        target="_blank" rel="noopener noreferrer"
                        style={{pointerEvents:"auto"}}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div style={{padding:"10px 20px 0"}}>
              <div className="imap-hint">Hover any marker for details · Click to open in Maps</div>
            </div>

            <div className="imap-legend">
              <div className="leg-item">
                <svg width="14" height="21" viewBox="0 0 14 21">
                  <circle cx="7" cy="7" r="7" fill="#dc2626" stroke="#fff" strokeWidth="1.5"/>
                  <polygon points="7,20 3,10 11,10" fill="#dc2626"/>
                  <circle cx="7" cy="7" r="3" fill="#fff" opacity="0.9"/>
                </svg>
                Office Location
              </div>
              <div className="leg-item">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <circle cx="11" cy="11" r="9"   fill="rgba(59,130,246,0.14)" stroke="#3b82f6" strokeWidth="1.5"/>
                  <circle cx="11" cy="11" r="5"   fill="rgba(59,130,246,0.3)"  stroke="#93c5fd" strokeWidth="1"/>
                  <circle cx="11" cy="11" r="2.5" fill="#3b82f6"/>
                </svg>
                Service Deployment
              </div>
              <div className="leg-item">
                <div className="leg-state"/>
                Madhya Pradesh (Home State)
              </div>
            </div>
          </div>

          <div className="imap-panel">
            <div className="imap-stats">
              <div className="imap-stat red">
                <div className="stat-val">{OFFICES.length}</div>
                <div className="stat-lbl">Offices</div>
                <div className="stat-bar"/>
              </div>
              <div className="imap-stat blue">
                <div className="stat-val">{SERVICES.length}+</div>
                <div className="stat-lbl">Sites</div>
                <div className="stat-bar"/>
              </div>
            </div>

            <div className="imap-dir">
              <div className="dir-head">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="#60a5fa"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4z"/></svg>
                <span className="dir-title">Location Directory</span>
                <span className="dir-count">{(showOffices?OFFICES.length:0)+(showServices?SERVICES.length:0)}</span>
              </div>
              <div className="dir-body">
                {showOffices && OFFICES.map((o,i) => (
                  <div
                    key={`dl-o${i}`}
                    className="dir-item off-item"
                    onMouseEnter={() => setHovered({ loc:{ ...o, kind:"office" }, markerId:`o${i}` })}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => window.open(`https://www.google.com/maps?q=${o.coordinates[1]},${o.coordinates[0]}`, "_blank")}
                  >
                    <div className="dir-avatar off">🏢</div>
                    <div>
                      <div className="dir-name">{o.name}</div>
                      <div className="dir-sub">{o.address}</div>
                    </div>
                    <span className="dir-tag off">Office</span>
                  </div>
                ))}
                {showServices && SERVICES.map((s,i) => (
                  <div
                    key={`dl-s${i}`}
                    className="dir-item svc-item"
                    onMouseEnter={() => setHovered({ loc:{ ...s, kind:"service" }, markerId:`s${i}` })}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => window.open(`https://www.google.com/maps?q=${s.coordinates[1]},${s.coordinates[0]}`, "_blank")}
                  >
                    <div className="dir-avatar svc">{s.icon}</div>
                    <div>
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
    </>
  );
}