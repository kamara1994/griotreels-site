export default function Privacy() {
  return (
    <section
      id="privacy"
      style={{
        padding: "110px 6%",
        borderTop: "1px solid rgba(212,168,83,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.01), rgba(52,211,153,0.018))",
      }}
    >
      <div className="fade-up" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 18px",
            border: "1px solid rgba(52,211,153,0.22)",
            borderRadius: 999,
            fontSize: 10,
            letterSpacing: 5,
            color: "#34d399",
            fontFamily: "'Courier Prime', monospace",
            marginBottom: 20,
            background: "rgba(52,211,153,0.045)",
          }}
        >
          DATA USE AND PRIVACY
        </div>

        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(28px,3.6vw,46px)",
            color: "#f5e6c8",
            marginBottom: 22,
            letterSpacing: 1.4,
          }}
        >
          Built for Internal Posting Only.
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: 17,
            lineHeight: 1.9,
            fontStyle: "italic",
            maxWidth: 820,
            marginBottom: 42,
          }}
        >
          Griot Reels uses TikTok integration only to authorize our official
          brand account and upload original video episodes to TikTok drafts. The
          app is not designed to collect, analyze, or store TikTok audience data.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              borderLeft: "3px solid #34d399",
              padding: "34px 40px",
              background:
                "linear-gradient(180deg, rgba(52,211,153,0.075), rgba(255,255,255,0.025))",
              borderRadius: "0 22px 22px 0",
              color: "#b8c2d1",
              lineHeight: 2,
              fontSize: 16,
              fontStyle: "italic",
              borderTop: "1px solid rgba(52,211,153,0.16)",
              borderRight: "1px solid rgba(52,211,153,0.16)",
              borderBottom: "1px solid rgba(52,211,153,0.16)",
            }}
          >
            <strong style={{ color: "#f5e6c8" }}>Griot Reels does not collect, store, sell, or share TikTok user data.</strong>{" "}
            The TikTok API is used only to upload original Griot Reels video
            content to our own official TikTok account, @GriotReels. We do not
            access followers, comments, messages, private user information, or
            audience analytics for resale or third-party use.
          </div>

          <div
            style={{
              padding: 30,
              borderRadius: 22,
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(212,168,83,0.18)",
            }}
          >
            <div
              style={{
                color: "#d4a853",
                fontSize: 10,
                letterSpacing: 4,
                fontFamily: "'Courier Prime', monospace",
                marginBottom: 20,
              }}
            >
              REVIEW SUMMARY
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    color: "#34d399",
                    fontSize: 10,
                    letterSpacing: 2,
                    fontFamily: "'Courier Prime', monospace",
                    marginBottom: 6,
                  }}
                >
                  ACCOUNT
                </div>
                <div style={{ color: "#f5e6c8", fontSize: 14 }}>
                  Official TikTok: @GriotReels
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    color: "#00f5ff",
                    fontSize: 10,
                    letterSpacing: 2,
                    fontFamily: "'Courier Prime', monospace",
                    marginBottom: 6,
                  }}
                >
                  API PURPOSE
                </div>
                <div style={{ color: "#f5e6c8", fontSize: 14 }}>
                  Upload original videos to TikTok drafts
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.035)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    color: "#f472b6",
                    fontSize: 10,
                    letterSpacing: 2,
                    fontFamily: "'Courier Prime', monospace",
                    marginBottom: 6,
                  }}
                >
                  USER DATA
                </div>
                <div style={{ color: "#f5e6c8", fontSize: 14 }}>
                  Not collected, stored, sold, or shared
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 34, flexWrap: "wrap" }}>
          <a
            href="/terms"
            className="btn-ghost"
            style={{
              padding: "13px 28px",
              border: "1px solid rgba(212,168,83,0.3)",
              color: "#d4a853",
              textDecoration: "none",
              borderRadius: 2,
              fontSize: 10,
              letterSpacing: 3,
              fontFamily: "'Courier Prime', monospace",
              background: "rgba(212,168,83,0.03)",
            }}
          >
            READ TERMS
          </a>

          <a
            href="/privacy"
            className="btn-ghost"
            style={{
              padding: "13px 28px",
              border: "1px solid rgba(52,211,153,0.3)",
              color: "#34d399",
              textDecoration: "none",
              borderRadius: 2,
              fontSize: 10,
              letterSpacing: 3,
              fontFamily: "'Courier Prime', monospace",
              background: "rgba(52,211,153,0.03)",
            }}
          >
            READ PRIVACY POLICY
          </a>
        </div>
      </div>
    </section>
  );
}