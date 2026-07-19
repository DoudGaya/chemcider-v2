import type { Metadata } from "next";
import { headers } from "next/headers";
import { SiteFooter, SiteHeader } from "./_components/site";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "chemcider.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      default: "Chemcider — Applied Research for a Healthier Africa",
      template: "%s | Chemcider",
    },
    description:
      "Chemcider is a Nigerian applied research company developing responsible hygiene, cleaner production and circular-system solutions for Africa.",
    keywords: [
      "Chemcider",
      "sustainable chemical research Nigeria",
      "green technology Africa",
      "hygiene products Nigeria",
      "clean production",
    ],
    openGraph: {
      title: "Chemcider — Better chemistry for a healthier Africa",
      description: "Applied research, responsible hygiene and cleaner systems—built in Nigeria for Africa.",
      type: "website",
      images: [{ url: "/og.png", width: 1659, height: 948, alt: "Chemcider applied research" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Chemcider — Better chemistry for a healthier Africa",
      description: "Applied research, responsible hygiene and cleaner systems—built in Nigeria for Africa.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
