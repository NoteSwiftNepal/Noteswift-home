import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Note Swift",
    short_name: "Note Swift",
    description: "The smarter way to learn. Lessons, notes, tests, live classes and SikAI for students in Nepal.",
    start_url: "/",
    display: "standalone",
    background_color: "#fafbfc",
    theme_color: "#0078d6",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    related_applications: [{ platform: "play", url: "https://play.google.com/store/apps/details?id=com.noteswift", id: "com.noteswift" }],
  };
}
