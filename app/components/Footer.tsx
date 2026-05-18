import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ borderTop:"1px solid rgba(255,255,255,0.05)", padding:"32px 6%" }}>
      <div className="footer-inner" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <Image src="/logo.png" alt="Griot Reels" width={36} height={36} style={{ borderRadius:"50%", border:"1px solid rgba(212,168,83,0.3)" }} />
          <span style={{ fontFamily:"'Cinzel', serif", fontSize:14, letterSpacing:5, fontWeight:700, color:"#d4a853" }}>
            GRIOT REELS
          </span>
        </div>
        <div style={{ display:"flex", gap:28 }}>
          <a href="/terms" className="nav-link" style={{ color:"#334155", fontSize:10, letterSpacing:2, fontFamily:"'Courier Prime', monospace", textDecoration:"none" }}>Terms</a>
          <a href="/privacy" className="nav-link" style={{ color:"#334155", fontSize:10, letterSpacing:2, fontFamily:"'Courier Prime', monospace", textDecoration:"none" }}>Privacy</a>
        </div>
        <div style={{ fontSize:10, color:"rgba(255,255,255,0.07)", fontFamily:"'Courier Prime', monospace" }}>
          2026 GRIOT REELS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}