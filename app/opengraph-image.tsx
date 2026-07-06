import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f4f4f5",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-170px",
            right: "-80px",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-120px",
            width: "560px",
            height: "560px",
            borderRadius: "999px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: "28px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#a1a1aa",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              border: "2px solid #f4f4f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f4f4f5",
              fontSize: "24px",
            }}
          >
            O
          </div>
          Personal digital space
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "96px",
              lineHeight: 1,
              letterSpacing: "-0.06em",
              maxWidth: "880px",
            }}
          >
            Omnia by Ferro
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.35,
              color: "#d4d4d8",
              maxWidth: "830px",
            }}
          >
            Projects, ideas, code, art and digital experiments.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "26px",
            color: "#a1a1aa",
          }}
        >
          <span>Zhelyazko “Ferro” Zhelyazkov</span>
          <span>omnia-by-ferro.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}