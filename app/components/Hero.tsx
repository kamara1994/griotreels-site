export default function Hero() {
  return (
    <section
      className="hero-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "1.08fr 0.92fr",
        gap: 64,
        alignItems: "center",
        padding: "110px 6% 90px",
        minHeight: "92vh",
      }}
    >
      <div style={{ animation: "fadeUp 0.9s ease both" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "9px 22px",
            border: "1px solid rgba(212,168,83,0.35)",
            borderRadius: 999,
            color: "#d4a853",
            letterSpacing: 4,
            fontSize: 11,
            fontFamily: "'Courier Prime', monospace",
            marginBottom: 32,
            background: "rgba(212,168,83,0.06)",
            boxShadow: "0 0 40px rgba(212,168,83,0.08)",
          }}
        >
          WEST AFRICAN STORYTELLING · CINEMATIC SERIES · API POWERED
        </div>

        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(36px,5.5vw,72px)",
            lineHeight: 1.08,
            marginBottom: 26,
            letterSpacing: 1.5,
            color: "#f5e6c8",
            textShadow: "0 18px 60px rgba(0,0,0,0.45)",
          }}
        >
          African stories, told in episodes, built for the short-form era.
        </h1>

        <p
          style={{
            fontSize: 19,
            lineHeight: 1.9,
            color: "#b8c2d1",
            maxWidth: 620,
            marginBottom: 24,
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          Griot Reels creates and publishes original cultural, historical,
          faith-based, relationship, and motivational short-form video episodes
          to our official TikTok account, @GriotReels.
        </p>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.8,
            color: "#d4a853",
            maxWidth: 620,
            marginBottom: 38,
            fontFamily: "'Courier Prime', monospace",
            letterSpacing: 1,
          }}
        >
          This demo shows how our internal platform prepares a video episode,
          confirms the caption and destination, then sends the video to TikTok
          as a draft using the Content Posting API.
        </p>

        <div
          className="hero-btns"
          style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
        >
          <a
            href="#demo"
            className="btn-primary"
            style={{
              padding: "16px 32px",
              background: "linear-gradient(135deg,#d4a853,#a07830)",
              color: "#04030a",
              textDecoration: "none",
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: 3,
              fontWeight: 800,
              borderRadius: 2,
              boxShadow: "0 14px 45px rgba(212,168,83,0.22)",
            }}
          >
            VIEW POSTING DEMO
          </a>

          <a
            href="https://tiktok.com/@GriotReels"
            className="btn-ghost"
            style={{
              padding: "16px 32px",
              border: "1px solid rgba(212,168,83,0.35)",
              color: "#d4a853",
              textDecoration: "none",
              fontFamily: "'Cinzel', serif",
              fontSize: 11,
              letterSpacing: 3,
              borderRadius: 2,
              background: "rgba(212,168,83,0.03)",
            }}
          >
            WATCH ON TIKTOK
          </a>
        </div>

        <div
          style={{
            marginTop: 64,
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#334155",
          }}
        >
          <div
            className="scroll-line"
            style={{
              width: 54,
              height: 1,
              background:
                "linear-gradient(to right, rgba(212,168,83,0.65), transparent)",
            }}
          />
          <span
            style={{
              fontSize: 9,
              letterSpacing: 3,
              color: "#475569",
              fontFamily: "'Courier Prime', monospace",
            }}
          >
            SCROLL TO REVIEW API FLOW
          </span>
        </div>
      </div>

      <div id="demo" style={{ animation: "fadeUp 0.9s ease 0.2s both" }}>
        <div
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))",
            border: "1px solid rgba(212,168,83,0.32)",
            borderRadius: 30,
            padding: 34,
            boxShadow: "0 35px 100px rgba(0,0,0,0.58)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top right, rgba(212,168,83,0.16), transparent 36%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 4,
                  color: "#d4a853",
                  fontFamily: "'Courier Prime', monospace",
                }}
              >
                CONTENT POSTING DEMO
              </div>

              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: "#34d399",
                  fontFamily: "'Courier Prime', monospace",
                }}
              >
                INTERNAL USE ONLY
              </div>
            </div>

            <div
              style={{
                background: "#0c0a10",
                border: "1px solid rgba(212,168,83,0.22)",
                borderRadius: 18,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  borderBottom: "1px solid rgba(212,168,83,0.15)",
                  background: "rgba(212,168,83,0.04)",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#f472b6",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#facc15",
                  }}
                />
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#34d399",
                  }}
                />
                <span
                  style={{
                    fontSize: 10,
                    color: "#64748b",
                    fontFamily: "'Courier Prime', monospace",
                    marginLeft: 8,
                  }}
                >
                  griotreels.com/posting-demo
                </span>
              </div>

              <div style={{ padding: 24 }}>
                <div
                  style={{
                    marginBottom: 12,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      color: "#f472b6",
                      fontSize: 9,
                      letterSpacing: 2,
                      fontFamily: "'Courier Prime', monospace",
                      marginBottom: 4,
                    }}
                  >
                    VIDEO TITLE
                  </div>
                  <div style={{ color: "#f5e6c8", fontSize: 13 }}>
                    Sacrifice: Episode 1
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: 12,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: 9,
                      letterSpacing: 2,
                      fontFamily: "'Courier Prime', monospace",
                      marginBottom: 4,
                    }}
                  >
                    CAPTION
                  </div>
                  <div style={{ color: "#f5e6c8", fontSize: 13 }}>
                    A mother's sacrifice changed everything. Episode 1 begins now.
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: 12,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      color: "#34d399",
                      fontSize: 9,
                      letterSpacing: 2,
                      fontFamily: "'Courier Prime', monospace",
                      marginBottom: 4,
                    }}
                  >
                    DESTINATION ACCOUNT
                  </div>
                  <div style={{ color: "#f5e6c8", fontSize: 13 }}>
                    Official TikTok account: @GriotReels
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: 12,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      color: "#00f5ff",
                      fontSize: 9,
                      letterSpacing: 2,
                      fontFamily: "'Courier Prime', monospace",
                      marginBottom: 4,
                    }}
                  >
                    API PRODUCT
                  </div>
                  <div style={{ color: "#f5e6c8", fontSize: 13 }}>
                    TikTok Content Posting API
                  </div>
                </div>

                <div
                  style={{
                    marginBottom: 12,
                    padding: "12px 16px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.045)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      color: "#d4a853",
                      fontSize: 9,
                      letterSpacing: 2,
                      fontFamily: "'Courier Prime', monospace",
                      marginBottom: 4,
                    }}
                  >
                    REQUESTED SCOPE
                  </div>
                  <div style={{ color: "#f5e6c8", fontSize: 13 }}>
                    video.upload
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 18,
                    padding: "14px 20px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg,#d4a853,#a07830)",
                    color: "#04030a",
                    fontWeight: 900,
                    textAlign: "center",
                    letterSpacing: 2,
                    fontSize: 12,
                    fontFamily: "'Cinzel', serif",
                    cursor: "pointer",
                    boxShadow: "0 14px 40px rgba(212,168,83,0.18)",
                  }}
                >
                  SEND VIDEO TO TIKTOK DRAFT
                </div>

                <p
                  style={{
                    marginTop: 16,
                    marginBottom: 0,
                    color: "#94a3b8",
                    fontSize: 12,
                    lineHeight: 1.7,
                    fontFamily: "'Courier Prime', monospace",
                  }}
                >
                  Demo flow: prepare video → add caption → authorize account →
                  upload draft to TikTok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}