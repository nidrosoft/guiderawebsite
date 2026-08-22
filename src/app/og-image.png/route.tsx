import { ImageResponse } from "next/og"

export const runtime = "edge"

const features = [
  "AI trip planning",
  "Booking organization",
  "Safety & culture",
  "Traveler community",
]

export async function GET(request: Request) {
  const iconUrl = new URL("/favicon.png", request.url).toString()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #F7F9F8 0%, #EEF1F0 58%, #E5F3EC 100%)",
          color: "#16211C",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 440,
            height: 440,
            right: -150,
            top: -210,
            borderRadius: 999,
            background: "rgba(53, 185, 125, 0.16)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            right: 44,
            bottom: -150,
            borderRadius: 999,
            border: "1px solid rgba(14, 122, 78, 0.16)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 70,
            right: 70,
            top: 56,
            bottom: 56,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "36px 42px",
            borderRadius: 36,
            background: "rgba(255, 255, 255, 0.82)",
            border: "1px solid rgba(15, 36, 27, 0.08)",
            boxShadow: "0 24px 70px rgba(15, 36, 27, 0.10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {/* ImageResponse renders this server-side; next/image is not supported here. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={iconUrl}
                width="78"
                height="78"
                alt=""
                style={{ borderRadius: 20, boxShadow: "0 12px 26px rgba(14, 122, 78, 0.22)" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: -1 }}>Guidera</div>
                <div
                  style={{
                    marginTop: 5,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: 2.2,
                    color: "#0E7A4E",
                  }}
                >
                  YOUR AI TRAVEL COMPANION
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 16px",
                borderRadius: 999,
                background: "#F4F7F5",
                border: "1px solid rgba(15, 36, 27, 0.08)",
                color: "#3E4A44",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              Download on the App Store
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: 880 }}>
            <div
              style={{
                display: "flex",
                fontSize: 54,
                lineHeight: 1.05,
                letterSpacing: -2.6,
                fontWeight: 800,
                color: "#0F241B",
              }}
            >
              Plan smarter. Travel with confidence.
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 16,
                fontSize: 21,
                lineHeight: 1.42,
                color: "#69766F",
              }}
            >
              One intelligent place to plan, organize, and experience every trip.
            </div>
          </div>

          <div style={{ display: "flex", gap: 11, alignItems: "center" }}>
            {features.map((feature) => (
              <div
                key={feature}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "11px 15px",
                  borderRadius: 999,
                  background: "#F4F7F5",
                  border: "1px solid rgba(15, 36, 27, 0.08)",
                  color: "#3E4A44",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: "#35B97D",
                  }}
                />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  )
}
