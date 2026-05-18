export default function Series() {
  const series = [
    {
      label: "SERIES ONE",
      title: "SACRIFICE",
      color: "#f472b6",
      icon: "🩸",
      theme: "Family · Immigration · Legacy",
      description:
        "Emotional stories about parents, children, sacrifice, migration, and the painful choices people make for the ones they love.",
      hook:
        "She sold her only land to send her son to America. Years later, he returned with a secret that broke her heart.",
    },
    {
      label: "SERIES TWO",
      title: "BROKEN VOWS",
      color: "#fb923c",
      icon: "💔",
      theme: "Love · Betrayal · Secrets",
      description:
        "Relationship stories built around love, loyalty, betrayal, hidden truths, forgiveness, and dramatic cliffhangers.",
      hook:
        "He stood at the altar ready to marry her, until a stranger walked in with a baby and called him father.",
    },
    {
      label: "SERIES THREE",
      title: "ASHES TO GRACE",
      color: "#a78bfa",
      icon: "🔥",
      theme: "Faith · Redemption · Purpose",
      description:
        "Faith-centered stories about failure, pain, restoration, and people finding grace after losing almost everything.",
      hook:
        "The pastor everyone trusted had one buried secret. When it came out, the whole city had to choose sides.",
    },
  ];

  return (
    <section
      id="series"
      style={{
        padding: "110px 6%",
        borderTop: "1px solid rgba(212,168,83,0.07)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(212,168,83,0.018))",
      }}
    >
      <div className="fade-up" style={{ textAlign: "center", marginBottom: 74 }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            border: "1px solid rgba(212,168,83,0.25)",
            borderRadius: 999,
            fontSize: 10,
            letterSpacing: 5,
            color: "#d4a853",
            fontFamily: "'Courier Prime', monospace",
            marginBottom: 18,
            background: "rgba(212,168,83,0.045)",
          }}
        >
          ORIGINAL SERIALIZED CONTENT
        </div>

        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(30px,4.4vw,54px)",
            marginBottom: 22,
            color: "#f5e6c8",
            letterSpacing: 1.5,
          }}
        >
          Three Series. One Storytelling Engine.
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: 18,
            fontStyle: "italic",
            maxWidth: 760,
            margin: "0 auto",
            lineHeight: 1.85,
          }}
        >
          Griot Reels publishes original vertical story episodes designed for
          daily short-form distribution, emotional retention, and serialized
          audience engagement.
        </p>
      </div>

      <div
        className="series-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 24,
        }}
      >
        {series.map((item) => (
          <div
            key={item.title}
            className="series-card fade-up"
            style={{
              padding: 36,
              borderRadius: 26,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.018))",
              border: `1px solid ${item.color}33`,
              boxShadow: "0 26px 80px rgba(0,0,0,0.22)",
              position: "relative",
              overflow: "hidden",
              minHeight: 420,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: `radial-gradient(circle at top right, ${item.color}20, transparent 42%)`,
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 24,
                }}
              >
                <div style={{ fontSize: 42 }}>{item.icon}</div>

                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: 2,
                    color: "#d4a853",
                    fontFamily: "'Courier Prime', monospace",
                    border: "1px solid rgba(212,168,83,0.22)",
                    borderRadius: 999,
                    padding: "7px 10px",
                    background: "rgba(212,168,83,0.04)",
                  }}
                >
                  DAILY EPISODES
                </div>
              </div>

              <div
                style={{
                  fontFamily: "'Courier Prime', monospace",
                  fontSize: 10,
                  letterSpacing: 3,
                  color: "#64748b",
                  marginBottom: 8,
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 21,
                  fontWeight: 800,
                  letterSpacing: 3,
                  color: item.color,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </div>

              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: "#d4a853",
                  fontFamily: "'Courier Prime', monospace",
                  marginBottom: 24,
                }}
              >
                {item.theme}
              </div>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.9,
                  marginBottom: 26,
                  fontSize: 15,
                  fontStyle: "italic",
                  fontWeight: 300,
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.065)",
                  paddingTop: 22,
                }}
              >
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: 3,
                    color: "#475569",
                    fontFamily: "'Courier Prime', monospace",
                    marginBottom: 10,
                  }}
                >
                  SAMPLE EPISODE HOOK
                </div>

                <p
                  style={{
                    color: "rgba(245,230,200,0.58)",
                    fontSize: 13,
                    fontStyle: "italic",
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {item.hook}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="fade-up"
        style={{
          marginTop: 36,
          padding: "26px 30px",
          borderRadius: 22,
          border: "1px solid rgba(212,168,83,0.18)",
          background: "rgba(212,168,83,0.04)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 24,
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#b8c2d1",
            lineHeight: 1.8,
            fontSize: 15,
            margin: 0,
            fontStyle: "italic",
          }}
        >
          Each series is created for episodic posting. The workflow prepares one
          video episode at a time, then uploads it to TikTok drafts for review
          before publishing.
        </p>

        <div
          style={{
            color: "#d4a853",
            fontSize: 10,
            letterSpacing: 3,
            fontFamily: "'Courier Prime', monospace",
            whiteSpace: "nowrap",
          }}
        >
          OUTPUT: SHORT-FORM VIDEO EPISODES
        </div>
      </div>
    </section>
  );
}