import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Armin Bakhshi — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social share image (auto-discovered at /opengraph-image).
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          backgroundColor: "#0b0b0c",
          color: "#f4f4f2",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 6,
            opacity: 0.6,
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
            marginTop: 16,
          }}
        >
          Armin Bakhshi
        </div>
        <div style={{ fontSize: 36, opacity: 0.75, marginTop: 20 }}>
          Frontend Developer — TypeScript · React · Next.js
        </div>
      </div>
    ),
    { ...size },
  );
}
