export default function Stats() {
  return (
    <section
      style={{
        padding: "80px 6%",
        borderTop: "1px solid rgba(212,168,83,0.08)",
        borderBottom: "1px solid rgba(212,168,83,0.08)",
        background: "linear-gradient(to right, transparent, rgba(212,168,83,0.03), transparent)",
      }}
    >
      <div
        className="stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 40,
          textAlign: "center",
        }}
      >
        <div className="stat-item fade-up">
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(36px,5vw,56px)",
              color: "#d4a853",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            3
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 3,
              color: "#475569",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            ORIGINAL SERIES
          </div>
        </div>

        <div className="stat-item fade-up">
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(36px,5vw,56px)",
              color: "#d4a853",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            Daily
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 3,
              color: "#475569",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            NEW EPISODES
          </div>
        </div>

        <div className="stat-item fade-up">
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(36px,5vw,56px)",
              color: "#d4a853",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            9+
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 3,
              color: "#475569",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            LANGUAGES COMING
          </div>
        </div>

        <div className="stat-item fade-up">
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(36px,5vw,56px)",
              color: "#d4a853",
              fontWeight: 700,
              marginBottom: 10,
            }}
          >
            ∞
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 3,
              color: "#475569",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            STORIES TO TELL
          </div>
        </div>
      </div>
    </section>
  );
}