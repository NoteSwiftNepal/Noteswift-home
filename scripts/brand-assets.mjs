// One-off: builds web brand assets from the real logo files in sibling NoteSwift repos.
// Run from noteswift-home: node scripts/brand-assets.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const root = "..";
const mark = `${root}/noteswift-admin/public/assets/logo-mark.png`;
const appIcon = `${root}/noteswift-student/assets/images/icon.png`;
const img = `${root}/noteswift-student/assets/images`;
mkdirSync("public/brand", { recursive: true });

const trimmed = await sharp(mark).trim().toBuffer();
await sharp(trimmed).resize({ height: 160 }).png().toFile("public/brand/mark.png");

// Dark-mode mark: black strokes become off-white, the blue dot stays.
const { data, info } = await sharp(trimmed).resize({ height: 160 }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const isBlue = b > r + 60;
  if (!isBlue) {
    const k = 255 - Math.max(r, g, b); // darkness = how much stroke
    data[i] = data[i + 1] = data[i + 2] = 244;
    data[i + 3] = Math.round((data[i + 3] * k) / 255);
  }
}
await sharp(data, { raw: info }).png().toFile("public/brand/mark-dark.png");

await sharp(appIcon).resize(512, 512).png().toFile("src/app/icon.png");
await sharp(appIcon).resize(180, 180).flatten({ background: "#ffffff" }).png().toFile("src/app/apple-icon.png");
await sharp(appIcon).resize(192, 192).png().toFile("public/brand/icon-192.png");
await sharp(appIcon).resize(512, 512).png().toFile("public/brand/icon-512.png");

await sharp(`${img}/sikai.png`).png().toFile("public/brand/sikai.png");
await sharp(`${img}/sikai-hero-full-transparent.png`).png().toFile("public/brand/sikai-hero-white.png");
console.log("brand assets written");
