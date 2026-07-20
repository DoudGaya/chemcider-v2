import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chemcider — Applied Research for a Healthier Africa",
    short_name: "Chemcider",
    description: "Responsible chemistry, applied research and sustainable systems from Nigeria for Africa.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbfb",
    theme_color: "#0077a8",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
