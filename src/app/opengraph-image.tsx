import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Note Swift. The smarter way to learn.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Default social card for every page. Text stays in English so it renders without a Devanagari font.
export default async function OgImage() {
  const mark = await readFile(join(process.cwd(), "public/brand/mark-dark.png"));
  const src = `data:image/png;base64,${mark.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(60% 80% at 85% 20%, #0b4f8a 0%, #07090d 70%)",
          color: "#edf0f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={78} height={52} alt="" />
          <span style={{ fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>Note Swift</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3, lineHeight: 1.05 }}>The smarter way to learn.</span>
          <span style={{ marginTop: 24, fontSize: 32, color: "#98a1b0" }}>SEE, Class 11 and Class 12. Mapped to the NEB and CDC syllabus.</span>
        </div>
      </div>
    ),
    size,
  );
}
