import { useState } from "react";

const TENDERS = [
  {
    id: "GEMC-511687745310880",
    title: "Manpower Outsourcing – AAI Datia",
    org: "Airports Authority of India (AAI)",
    ministry: "Ministry of Civil Aviation",
    zone: "Datia, Madhya Pradesh",
    type: "Skilled & Unskilled Manpower (11 Resources)",
    value: "Confidential",
    start: "01 Apr 2026",
    end: "31 Mar 2027",
    status: "Active",
    category: "PSU",
    icon: "✈️",
  },
  {
    id: "GEMC-511687729140924",
    title: "Ward Boy Services – Indian Navy Karwar",
    org: "Indian Navy",
    ministry: "Ministry of Defence",
    zone: "Karwar, Karnataka",
    type: "Ward Boy / Healthcare Support",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "⚓",
  },
  {
    id: "GEMC-511687755569708",
    title: "Administrative & Graduate Manpower – DBT",
    org: "Department of Biotechnology, Govt. of India",
    ministry: "Ministry of Science & Technology",
    zone: "New Delhi",
    type: "Semi-Skilled, Graduate & Admin Manpower",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Government",
    icon: "🔬",
  },
  {
    id: "GEM/2024/DGNCC",
    title: "Manpower Outsourcing – DGNCC Delhi",
    org: "Director General of National Cadet Corps (DGNCC)",
    ministry: "Ministry of Defence",
    zone: "Delhi",
    type: "Manpower Outsourcing",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "🎖️",
  },
  {
    id: "GEM/2024/NPCIL",
    title: "Contract Staffing – NPCIL Rawatbhata",
    org: "Nuclear Power Corporation of India Limited",
    ministry: "PMO / Department of Atomic Energy",
    zone: "Rawatbhata, Rajasthan",
    type: "Contract Staffing & Compliance",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "PSU",
    icon: "⚛️",
  },
  {
    id: "GEM/2024/ORDNANCE",
    title: "Skilled Manpower – Ordnance Factory Kanpur",
    org: "Ordnance Factory Board – Kanpur",
    ministry: "Ministry of Defence",
    zone: "Kanpur, Uttar Pradesh",
    type: "Skilled & Semi-Skilled Manpower",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "🏭",
  },
  {
    id: "GEM/2024/DRTC",
    title: "Manpower & Contract Services – DRTC Shivpuri",
    org: "Defence Research & Training Centre",
    ministry: "Ministry of Defence",
    zone: "Shivpuri, Madhya Pradesh",
    type: "Manpower & Contract Services",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "⚙️",
  },
  {
    id: "GEM/2024/PENSION-UP",
    title: "Housekeeping & Facility – Directorate of Pension UP",
    org: "Directorate of Pension, Govt. of Uttar Pradesh",
    ministry: "Finance Department, Uttar Pradesh",
    zone: "Lucknow, Uttar Pradesh",
    type: "Housekeeping & Facility Mgmt.",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "State Government",
    icon: "🏛️",
  },
  {
    id: "GEM/2024/FSDA-UP",
    title: "Support Staff & Security – Food Safety & Drug Admin.",
    org: "Food Safety and Drug Administration",
    ministry: "Food Safety & Drug Administration Dept., UP",
    zone: "Lucknow Head Office, UP",
    type: "Support Staff & Security",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "State Government",
    icon: "🏥",
  },
  {
    id: "GEM/2024/NAVY-PATANJALI",
    title: "Manpower & Facility – Indian Navy INHS Patanjali",
    org: "Indian Navy",
    ministry: "Ministry of Defence",
    zone: "INHS Patanjali, Virar, Maharashtra",
    type: "Manpower & Facility Mgmt.",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "⚓",
  },
  {
    id: "GEM/2024/IAF-AFSB",
    title: "Security & Support – Indian Air Force No. 4 AFSB",
    org: "Indian Air Force",
    ministry: "Ministry of Defence",
    zone: "No. 4 Air Force Selection Board, Varanasi",
    type: "Security & Support Deployment",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "✈️",
  },
  {
    id: "GEM/2024/SHIKSHA-BADAUN",
    title: "Support Staff – Basic Shikha Department Badaun",
    org: "Basic Shikha Department",
    ministry: "Basic Education Department, Uttar Pradesh",
    zone: "Badaun District, Uttar Pradesh",
    type: "Support Staff & Facility Mgmt.",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "State Government",
    icon: "🏫",
  },
  {
    id: "GEM/2024/ARMY-MEERUT",
    title: "Security & Manpower – Indian Army Meerut Cantt",
    org: "Indian Army",
    ministry: "Ministry of Defence",
    zone: "Meerut Cantonment, Uttar Pradesh",
    type: "Security & Manpower Deployment",
    value: "Confidential",
    start: "—",
    end: "—",
    status: "Active",
    category: "Defence",
    icon: "🪖",
  },
];

const CATEGORIES = ["All", "Defence", "Government", "PSU", "State Government"];

export default function TendersPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = TENDERS.filter((t) => {
    const matchCat = activeCategory === "All" || t.category === activeCategory;
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.org.toLowerCase().includes(search.toLowerCase()) ||
      t.zone.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <style>{`
        .tn-page {
          font-family: 'Inter', sans-serif;
          background: #f8faff;
          min-height: 100vh;
          color: #1e293b;
        }

        /* ── HERO ── */
        .tn-hero {
          background: linear-gradient(135deg, #0a1a52 0%, #1e40af 100%);
          padding: 140px 6% 80px;
          position: relative;
          overflow: hidden;
          color: #fff;
        }
        .tn-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .tn-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        .tn-hero-inner {
          position: relative; z-index: 2;
          max-width: 1200px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .tn-hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 20px; padding: 6px 16px;
          font-size: 11px; font-weight: 600;
          letter-spacing: 2px; text-transform: uppercase;
          color: #93c5fd; margin-bottom: 20px;
        }
        .tn-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #38bdf8;
          animation: tnBlink 2s ease-in-out infinite;
        }
        @keyframes tnBlink {
          0%,100% { opacity: 1; } 50% { opacity: 0.3; }
        }
        .tn-hero h1 {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 900; line-height: 1.15;
          margin-bottom: 18px; color: #fff;
        }
        .tn-hero h1 span { color: #38bdf8; }
        .tn-hero-desc {
          font-size: 15px; color: rgba(255,255,255,0.65);
          line-height: 1.8; max-width: 500px;
        }
        .tn-hero-stats {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 16px; margin-top: 36px;
        }
        .tn-hstat {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px; padding: 20px;
          text-align: center;
        }
        .tn-hstat-val {
          font-size: 32px; font-weight: 900;
          color: #fff; line-height: 1;
        }
        .tn-hstat-val em { color: #38bdf8; font-style: normal; }
        .tn-hstat-lbl {
          font-size: 10px; color: rgba(255,255,255,0.45);
          letter-spacing: 2px; text-transform: uppercase;
          margin-top: 6px;
        }

        /* Hero right image side */
        .tn-hero-right {
          display: flex; flex-direction: column; gap: 14px;
        }
        .tn-gem-card {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 14px; padding: 22px 24px;
          display: flex; align-items: center; gap: 16px;
        }
        .tn-gem-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(56,189,248,0.15);
          border: 1px solid rgba(56,189,248,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
        }
        .tn-gem-label { font-size: 10px; color: rgba(255,255,255,0.4); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 4px; }
        .tn-gem-val { font-size: 14px; font-weight: 700; color: #fff; }

        /* ── MAIN ── */
        .tn-main {
          max-width: 1200px; margin: 0 auto;
          padding: 60px 6% 80px;
        }

        /* ── TOOLBAR ── */
        .tn-toolbar {
          display: flex; align-items: center;
          gap: 10px; flex-wrap: wrap;
          margin-bottom: 32px;
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 14px 18px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .tn-search {
          flex: 1; min-width: 200px;
          padding: 9px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 13px; color: #1e293b;
          outline: none; transition: border .2s;
          background: #f8faff;
        }
        .tn-search:focus { border-color: #1e40af; }
        .tn-search::placeholder { color: #94a3b8; }
        .tn-divider { width: 1px; height: 28px; background: #e2e8f0; }
        .tn-cat-btn {
          padding: 8px 16px; border-radius: 6px;
          border: 1px solid #e2e8f0;
          background: #fff; color: #64748b;
          font-size: 12px; font-weight: 600;
          cursor: pointer; transition: all .2s;
          font-family: inherit;
        }
        .tn-cat-btn:hover { border-color: #1e40af; color: #1e40af; }
        .tn-cat-btn.active {
          background: #0a1a52; border-color: #0a1a52;
          color: #fff;
        }

        /* ── COUNT ── */
        .tn-count {
          font-size: 13px; color: #64748b; margin-bottom: 20px;
        }
        .tn-count strong { color: #0a1a52; }

        /* ── GRID ── */
        .tn-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 20px;
        }

        /* ── CARD ── */
        .tn-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 26px;
          transition: all .25s;
          position: relative;
          overflow: hidden;
        }
        .tn-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #0a1a52, #2563eb);
          transform: scaleX(0); transform-origin: left;
          transition: transform .3s;
        }
        .tn-card:hover {
          border-color: #bfdbfe;
          box-shadow: 0 12px 40px rgba(10,26,82,0.1);
          transform: translateY(-3px);
        }
        .tn-card:hover::after { transform: scaleX(1); }

        .tn-card-header {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 14px;
        }
        .tn-card-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex; align-items: center;
          justify-content: center; font-size: 20px;
        }
        .tn-status-badge {
          display: flex; align-items: center; gap: 5px;
          font-size: 10px; font-weight: 700;
          letter-spacing: 1px; text-transform: uppercase;
          padding: 4px 10px; border-radius: 20px;
          background: #f0fdf4; border: 1px solid #86efac;
          color: #16a34a;
        }
        .tn-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; }

        .tn-card-id {
          font-size: 10px; color: #94a3b8;
          font-family: monospace; letter-spacing: 0.5px;
          margin-bottom: 8px;
        }
        .tn-card-title {
          font-size: 17px; font-weight: 800;
          color: #0f172a; margin-bottom: 4px;
          line-height: 1.3;
        }
        .tn-card-org {
          font-size: 12px; color: #2563eb;
          font-weight: 600; margin-bottom: 18px;
        }

        .tn-card-rows { display: flex; flex-direction: column; gap: 8px; margin-bottom: 18px; }
        .tn-card-row {
          display: flex; gap: 10px; align-items: flex-start;
          font-size: 12px;
        }
        .tn-card-row-label {
          min-width: 75px; color: #94a3b8; font-weight: 500;
        }
        .tn-card-row-val { color: #334155; font-weight: 500; flex: 1; }

        .tn-card-footer {
          border-top: 1px solid #f1f5f9;
          padding-top: 14px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .tn-card-footer-lbl { font-size: 10px; color: #94a3b8; letter-spacing: 1px; text-transform: uppercase; }
        .tn-card-footer-val {
          font-size: 20px; font-weight: 900; color: #0a1a52;
        }

        /* ── EMPTY ── */
        .tn-empty {
          text-align: center; padding: 60px 20px;
          color: #94a3b8; font-size: 15px;
          grid-column: 1 / -1;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .tn-hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .tn-hero-right { display: none; }
          .tn-hero { padding: 120px 5% 60px; }
        }
        @media (max-width: 768px) {
          .tn-hero { padding: 100px 4% 50px; }
          .tn-hero h1 { font-size: clamp(24px, 8vw, 36px); }
          .tn-hero-stats { grid-template-columns: 1fr 1fr; gap: 10px; }
          .tn-main { padding: 36px 4% 50px; }
          .tn-grid { grid-template-columns: 1fr; }
          .tn-toolbar { flex-direction: column; align-items: stretch; }
          .tn-search { max-width: 100%; }
          .tn-divider { display: none; }
        }
        @media (max-width: 480px) {
          .tn-hero-stats { grid-template-columns: 1fr; }
          .tn-card { padding: 18px; }
        }
      `}</style>

      <div className="tn-page">

        {/* ── HERO ── */}
        <section className="tn-hero">
          <div className="tn-hero-orb" style={{ width:500,height:500,top:-200,right:-100,background:"radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />

          <div className="tn-hero-inner">

            {/* LEFT */}
            <div>
              <div className="tn-hero-badge">
                <span className="tn-badge-dot" />
                GeM Portal · Active Contracts
              </div>
              <h1>
                Government <span>Tenders</span><br />
                & Active Contracts
              </h1>
              <p className="tn-hero-desc">
                Namdev Associates is a GeM-empanelled MSME delivering manpower outsourcing,
                security, housekeeping and facility management to Central & State Government
                organisations across India.
              </p>
              <div className="tn-hero-stats">
                <div className="tn-hstat">
                  <div className="tn-hstat-val">{TENDERS.length}<em>+</em></div>
                  <div className="tn-hstat-lbl">Active Contracts</div>
                </div>
                <div className="tn-hstat">
                  <div className="tn-hstat-val">₹20<em>Cr+</em></div>
                  <div className="tn-hstat-lbl">Total Value</div>
                </div>
                <div className="tn-hstat">
                  <div className="tn-hstat-val">7<em>+</em></div>
                  <div className="tn-hstat-lbl">Years Experience</div>
                </div>
                <div className="tn-hstat">
                  <div className="tn-hstat-val">12<em>+</em></div>
                  <div className="tn-hstat-lbl">States Covered</div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="tn-hero-right">
              <div className="tn-gem-card">
                <div className="tn-gem-icon">🏛</div>
                <div>
                  <div className="tn-gem-label">GeM Seller ID</div>
                  <div className="tn-gem-val">KTY5230009558960</div>
                </div>
              </div>
              <div className="tn-gem-card">
                <div className="tn-gem-icon">✅</div>
                <div>
                  <div className="tn-gem-label">MSME Registration</div>
                  <div className="tn-gem-val">UDYAM-UP-39-0000463</div>
                </div>
              </div>
              <div className="tn-gem-card">
                <div className="tn-gem-icon">🏷</div>
                <div>
                  <div className="tn-gem-label">GST Number</div>
                  <div className="tn-gem-val">09ARNPN0219Q2Z5</div>
                </div>
              </div>
              <div className="tn-gem-card">
                <div className="tn-gem-icon">🏅</div>
                <div>
                  <div className="tn-gem-label">Category</div>
                  <div className="tn-gem-val">OBC · MSE Verified</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── MAIN ── */}
        <div className="tn-main">

          {/* TOOLBAR */}
          <div className="tn-toolbar">
            <input
              className="tn-search"
              placeholder="🔍  Search by organisation, location, service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="tn-divider" />
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`tn-cat-btn${activeCategory === c ? " active" : ""}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <p className="tn-count">
            Showing <strong>{filtered.length}</strong> of <strong>{TENDERS.length}</strong> contracts
          </p>

          {/* CARDS */}
          <div className="tn-grid">
            {filtered.length === 0 ? (
              <div className="tn-empty">No contracts found matching your search.</div>
            ) : (
              filtered.map((t) => (
                <div key={t.id} className="tn-card">

                  <div className="tn-card-header">
                    <div className="tn-card-icon">{t.icon}</div>
                    <div className="tn-status-badge">
                      <span className="tn-status-dot" />
                      {t.status}
                    </div>
                  </div>

                  <div className="tn-card-id">{t.id}</div>
                  <div className="tn-card-title">{t.title}</div>
                  <div className="tn-card-org">{t.org}</div>

                  <div className="tn-card-rows">
                    <div className="tn-card-row">
                      <span className="tn-card-row-label">Ministry</span>
                      <span className="tn-card-row-val">{t.ministry}</span>
                    </div>
                    <div className="tn-card-row">
                      <span className="tn-card-row-label">Location</span>
                      <span className="tn-card-row-val">{t.zone}</span>
                    </div>
                    <div className="tn-card-row">
                      <span className="tn-card-row-label">Service</span>
                      <span className="tn-card-row-val">{t.type}</span>
                    </div>
                    {t.start !== "—" && (
                      <div className="tn-card-row">
                        <span className="tn-card-row-label">Period</span>
                        <span className="tn-card-row-val">{t.start} → {t.end}</span>
                      </div>
                    )}
                  </div>

                  <div className="tn-card-footer">
                    <div>
                      <div className="tn-card-footer-lbl">Contract Value</div>
                      <div className="tn-card-footer-val">{t.value}</div>
                    </div>
                    <span style={{
                      fontSize:"11px", fontWeight:"600", color:"#2563eb",
                      background:"#eff6ff", border:"1px solid #bfdbfe",
                      borderRadius:"6px", padding:"4px 10px"
                    }}>
                      {t.category}
                    </span>
                  </div>

                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </>
  );
}