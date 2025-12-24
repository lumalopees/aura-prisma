import { ImageResponse } from "next/og";

export const alt = "Aura Prisma - Estúdio Criativo";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: 100, fontWeight: "bold", marginBottom: 20 }}>
          Aura Prisma
        </div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>
          Estúdio Criativo
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

