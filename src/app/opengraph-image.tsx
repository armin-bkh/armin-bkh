import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Armin Bakhshi — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social share image (auto-discovered at /opengraph-image).
export default async function Image() {
  const avatarData = await fetch(
    new URL("../../public/me.jpeg", import.meta.url),
  ).then((res) => res.arrayBuffer());
  const avatarSrc = `data:image/jpeg;base64,${Buffer.from(avatarData).toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "80px",
        backgroundColor: "#0b0b0c",
        color: "#f4f4f2",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt="avatar"
        src={avatarSrc}
        width={230}
        height={230}
        style={{
          borderRadius: "50%",
          border: "6px solid rgba(244,244,242,0.25)",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 56,
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
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
            marginTop: 16,
          }}
        >
          Armin Bakhshi
        </div>
        <div style={{ fontSize: 34, opacity: 0.75, marginTop: 20 }}>
          Frontend Developer — TypeScript · React · Next.js
        </div>
      </div>
    </div>,
    { ...size },
  );
}
