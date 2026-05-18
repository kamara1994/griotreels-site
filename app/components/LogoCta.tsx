import Image from "next/image";

export default function LogoCta() {
  return (
    <section className="fade-up" style={{ padding:"100px 6%", textAlign:"center" }}>
      <Image src="/logo.png" alt="Griot Reels" width={200} height={200} className="logo-glow" style={{ borderRadius:"50%", margin:"0 auto 40px", display:"block", border:"2px solid rgba(212,168,83,0.3)" }} />
      <h2 style={{ fontFamily:"'Cinzel Decorative', serif", fontSize:"clamp(36px,7vw,80px)", letterSpacing:10, color:"#f5e6c8", marginBottom:16, lineHeight:1 }}>
        GRIOT REELS
      </h2>
      <p style={{ color:"#475569", fontSize:12, letterSpacing:6, fontFamily:"'Courier Prime', monospace", marginBottom:48 }}>
        STORIES THAT INSPIRE. LEGACIES THAT LIVE.
      </p>
      <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
        <a href="https://tiktok.com/@GriotReels" className="platform-pill" style={{ padding:"10px 24px", border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, fontSize:10, letterSpacing:2, color:"#475569", fontFamily:"'Courier Prime', monospace", textDecoration:"none", background:"rgba(255,255,255,0.02)" }}>
          TIKTOK
        </a>
        <a href="https://facebook.com/GriotReels" className="platform-pill" style={{ padding:"10px 24px", border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, fontSize:10, letterSpacing:2, color:"#475569", fontFamily:"'Courier Prime', monospace", textDecoration:"none", background:"rgba(255,255,255,0.02)" }}>
          FACEBOOK
        </a>
        <a href="https://youtube.com/@GriotReels" className="platform-pill" style={{ padding:"10px 24px", border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, fontSize:10, letterSpacing:2, color:"#475569", fontFamily:"'Courier Prime', monospace", textDecoration:"none", background:"rgba(255,255,255,0.02)" }}>
          YOUTUBE
        </a>
        <a href="#" className="platform-pill" style={{ padding:"10px 24px", border:"1px solid rgba(255,255,255,0.07)", borderRadius:20, fontSize:10, letterSpacing:2, color:"#475569", fontFamily:"'Courier Prime', monospace", textDecoration:"none", background:"rgba(255,255,255,0.02)" }}>
          PODCAST
        </a>
      </div>
    </section>
  );
}