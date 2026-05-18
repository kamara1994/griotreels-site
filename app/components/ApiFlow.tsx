export default function ApiFlow() {
  return (
    <section
      id="flow"
      style={{
        padding: "100px 6%",
        borderTop: "1px solid rgba(212,168,83,0.08)",
        background: "rgba(212,168,83,0.02)",
      }}
    >
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 70 }}>
        <div
          style={{
            fontSize: 10,
            letterSpacing: 5,
            color: "#d4a853",
            fontFamily: "'Courier Prime', monospace",
            marginBottom: 16,
          }}
        >
          INTEGRATION
        </div>
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(24px,3vw,40px)",
            color: "#f5e6c8",
            marginBottom: 20,
          }}
        >
          TikTok Content Posting API Flow
        </h2>
        <p
          style={{
            color: "#64748b",
            fontSize: 17,
            fontStyle: "italic",
            maxWidth: 600,
            margin: "0 auto",
            lineHeight: 1.8,
          }}
        >
          End-to-end integration for submitting original Griot Reels video
          episodes to TikTok automatically.
        </p>
      </div>

      <div
        className="flow-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 20,
        }}
      >
        <div
          className="flow-card fade-up"
          style={{
            padding: 32,
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(0,245,255,0.15)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(0,245,255,0.1)",
              border: "1px solid rgba(0,245,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#00f5ff",
              fontWeight: 800,
              fontSize: 13,
              fontFamily: "'Courier Prime', monospace",
              marginBottom: 24,
            }}
          >
            01
          </div>
          <h3 style={{ color: "#00f5ff", fontFamily: "'Cinzel', serif", fontSize: 15, marginBottom: 14 }}>
            Prepare Episode
          </h3>
          <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 14 }}>
            An original Griot Reels vertical video episode is created by our automated content system.
          </p>
        </div>

        <div
          className="flow-card fade-up"
          style={{
            padding: 32,
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(167,139,250,0.15)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a78bfa",
              fontWeight: 800,
              fontSize: 13,
              fontFamily: "'Courier Prime', monospace",
              marginBottom: 24,
            }}
          >
            02
          </div>
          <h3 style={{ color: "#a78bfa", fontFamily: "'Cinzel', serif", fontSize: 15, marginBottom: 14 }}>
            Add Details
          </h3>
          <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 14 }}>
            Title, caption, series name, and destination account are confirmed before posting.
          </p>
        </div>

        <div
          className="flow-card fade-up"
          style={{
            padding: 32,
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(244,114,182,0.15)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(244,114,182,0.1)",
              border: "1px solid rgba(244,114,182,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f472b6",
              fontWeight: 800,
              fontSize: 13,
              fontFamily: "'Courier Prime', monospace",
              marginBottom: 24,
            }}
          >
            03
          </div>
          <h3 style={{ color: "#f472b6", fontFamily: "'Cinzel', serif", fontSize: 15, marginBottom: 14 }}>
            Upload Draft
          </h3>
          <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 14 }}>
            The app sends the video to TikTok as a draft using the Content Posting API scope.
          </p>
        </div>

        <div
          className="flow-card fade-up"
          style={{
            padding: 32,
            borderRadius: 20,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(52,211,153,0.15)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "rgba(52,211,153,0.1)",
              border: "1px solid rgba(52,211,153,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#34d399",
              fontWeight: 800,
              fontSize: 13,
              fontFamily: "'Courier Prime', monospace",
              marginBottom: 24,
            }}
          >
            04
          </div>
          <h3 style={{ color: "#34d399", fontFamily: "'Cinzel', serif", fontSize: 15, marginBottom: 14 }}>
            Review and Publish
          </h3>
          <p style={{ color: "#64748b", lineHeight: 1.8, fontSize: 14 }}>
            Video is reviewed and published on the official @GriotReels TikTok account.
          </p>
        </div>
      </div>
    </section>
  );
}