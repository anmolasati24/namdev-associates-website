import { useState, useEffect, useRef } from "react";

export default function IntroVideo() {
  const [minimized, setMinimized] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [muted, setMuted] = useState(true);

  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimized(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  const toggleMute = () => {
    const newMuted = !muted;
    setMuted(newMuted);
    if (videoRef.current) {
      videoRef.current.muted = newMuted;
    }
  };

  return (
    <>
      <style>{`
        .intro-video-wrapper {
          position: fixed;
          z-index: 9999;
          transition: all 0.4s ease;
        }

        /* ── EXPANDED (centred modal) ── */
        .intro-video-wrapper.expanded {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: min(650px, 92vw);
          height: auto;
          aspect-ratio: 16/9;
        }

        /* ── MINIMISED (pip corner) ── */
        .intro-video-wrapper.minimized {
          top: auto;
          left: auto;
          transform: none;
          right: clamp(8px, 3vw, 20px);
          bottom: clamp(8px, 3vh, 20px);
          width: clamp(200px, 30vw, 320px);
          height: auto;
          aspect-ratio: 16/9;
        }

        .intro-video-inner {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
          position: relative;
        }

        .intro-btn-close-expanded {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: #2563eb;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .intro-btn-close-minimized {
          position: absolute;
          top: -10px;
          right: -10px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: #ef4444;
          color: #fff;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .intro-btn-mute {
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 6px 10px;
          background: rgba(0, 0, 0, 0.6);
          color: #fff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 12px;
          z-index: 2;
        }

        .intro-video-el {
          width: 100%;
          height: 100%;
          border-radius: 8px;
          object-fit: cover;
          display: block;
        }

        /* ── Small phones: shrink pip further ── */
        @media (max-width: 480px) {
          .intro-video-wrapper.expanded {
            width: 96vw;
          }
          .intro-video-wrapper.minimized {
            width: clamp(150px, 45vw, 220px);
            right: 8px;
            bottom: 8px;
          }
          .intro-btn-close-expanded {
            width: 28px;
            height: 28px;
            font-size: 13px;
            top: -10px;
            right: -10px;
          }
        }
      `}</style>

      <div className={`intro-video-wrapper ${minimized ? "minimized" : "expanded"}`}>
        <div className="intro-video-inner">

          {!minimized && (
            <button
              className="intro-btn-close-expanded"
              onClick={() => setMinimized(true)}
              aria-label="Minimise video"
            >
              ✕
            </button>
          )}

          {minimized && (
            <button
              className="intro-btn-close-minimized"
              onClick={() => setHidden(true)}
              aria-label="Close video"
            >
              ✕
            </button>
          )}

          <button
            className="intro-btn-mute"
            onClick={toggleMute}
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? "🔇 Unmute" : "🔊 Mute"}
          </button>

          <video
            ref={videoRef}
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            controls
            className="intro-video-el"
          />

        </div>
      </div>
    </>
  );
}