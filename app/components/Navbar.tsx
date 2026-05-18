import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 6%",
        background: "rgba(4,3,10,0.92)",
        backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(212,168,83,0.15)",
      }}
    >
      <a
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          textDecoration: "none",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "1px solid rgba(212,168,83,0.45)",
            background: "rgba(212,168,83,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            boxShadow: "0 0 38px rgba(212,168,83,0.16)",
          }}
        >
          <Image
            src="/logo.png"
            alt="Griot Reels Logo"
            width={56}
            height={56}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: 5,
              color: "#d4a853",
              lineHeight: 1,
            }}
          >
            GRIOT REELS
          </span>

          <span
            style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 8,
              letterSpacing: 3,
              color: "#64748b",
            }}
          >
            CONTENT POSTING DEMO
          </span>
        </div>
      </a>

      <nav
        style={{
          display: "flex",
          gap: 4,
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="#demo"
          className="nav-link"
          style={{
            color: "#94a3b8",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "7px 14px",
          }}
        >
          Demo
        </a>

        <a
          href="#series"
          className="nav-link"
          style={{
            color: "#94a3b8",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "7px 14px",
          }}
        >
          Series
        </a>

        <a
          href="#flow"
          className="nav-link"
          style={{
            color: "#94a3b8",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "7px 14px",
          }}
        >
          API Flow
        </a>

        <a
          href="#privacy"
          className="nav-link"
          style={{
            color: "#94a3b8",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "7px 14px",
          }}
        >
          Data Use
        </a>

        <a
          href="/terms"
          className="nav-link"
          style={{
            color: "#94a3b8",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "7px 14px",
          }}
        >
          Terms
        </a>

        <a
          href="/privacy"
          className="nav-link"
          style={{
            color: "#94a3b8",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "7px 14px",
          }}
        >
          Privacy
        </a>

        <a
          href="https://tiktok.com/@GriotReels"
          className="btn-ghost"
          style={{
            border: "1px solid rgba(212,168,83,0.35)",
            color: "#d4a853",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            textDecoration: "none",
            padding: "9px 18px",
            marginLeft: 8,
            borderRadius: 2,
            background: "rgba(212,168,83,0.04)",
          }}
        >
          FOLLOW
        </a>
      </nav>
    </header>
  );
}