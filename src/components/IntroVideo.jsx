import { useState, useEffect, useRef } from "react";

export default function IntroVideo() {

  const [minimized,setMinimized] = useState(false);
  const [hidden,setHidden] = useState(false);
  const [muted,setMuted] = useState(true);

  const videoRef = useRef(null);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setMinimized(true);
    },20000);

    return ()=>clearTimeout(timer);
  },[]);

  if(hidden) return null;

  const toggleMute = ()=>{
    const newMuted = !muted;
    setMuted(newMuted);

    if(videoRef.current){
      videoRef.current.muted = newMuted;
    }
  };

  return (

    <div
      style={{
        position:"fixed",
        top: minimized ? "auto" : "50%",
        left: minimized ? "auto" : "50%",
        transform: minimized ? "none" : "translate(-50%,-50%)",
        right: minimized ? "20px" : "auto",
        bottom: minimized ? "20px" : "auto",
        width: minimized ? "320px" : "650px",
        height: minimized ? "180px" : "360px",
        zIndex:9999,
        transition:"all 0.4s ease"
      }}
    >

      <div
        style={{
          width:"100%",
          height:"100%",
          background:"#000",
          borderRadius:"12px",
          padding:"6px",
          boxShadow:"0 25px 60px rgba(0,0,0,0.35)",
          position:"relative"
        }}
      >

        {!minimized && (
          <button
            onClick={()=>setMinimized(true)}
            style={{
              position:"absolute",
              top:"-14px",
              right:"-14px",
              width:"34px",
              height:"34px",
              borderRadius:"50%",
              border:"none",
              background:"#2563EB",
              color:"#fff",
              fontSize:"16px",
              cursor:"pointer"
            }}
          >
            ✕
          </button>
        )}

        {minimized && (
          <button
            onClick={()=>setHidden(true)}
            style={{
              position:"absolute",
              top:"-10px",
              right:"-10px",
              width:"28px",
              height:"28px",
              borderRadius:"50%",
              border:"none",
              background:"#ef4444",
              color:"#fff",
              fontSize:"14px",
              cursor:"pointer"
            }}
          >
            ✕
          </button>
        )}

        <button
          onClick={toggleMute}
          style={{
            position:"absolute",
            bottom:"10px",
            right:"10px",
            padding:"6px 10px",
            background:"rgba(0,0,0,0.6)",
            color:"#fff",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer",
            fontSize:"12px"
          }}
        >
          {muted ? "Unmute" : "Mute"}
        </button>

        <video
          ref={videoRef}
          src="/intro.mp4"
          autoPlay
          muted
          playsInline
          controls
          style={{
            width:"100%",
            height:"100%",
            borderRadius:"8px",
            objectFit:"cover"
          }}
        />

      </div>

    </div>
  );
}