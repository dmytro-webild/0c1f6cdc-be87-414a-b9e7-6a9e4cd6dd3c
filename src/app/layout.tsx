import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Stretch Ceiling Systems | Expert Installation & Materials",
  description: "Professional stretch ceiling solutions for homes and commercial projects. Quality materials, expert installation, and complete accessories. Trusted by thousands.",
  keywords: "stretch ceiling, ceiling systems, installation services, ceiling materials, accessories, professional",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CeilingPro - Transform Your Ceilings, Elevate Your Space",
    description: "Premium stretch ceiling systems with expert installation and quality materials.",
    siteName: "CeilingPro",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-photo/construction-worker-assembly-suspended-ceiling-with-drywall-fixing-drywall-ceiling-metal-frame-with-screwdriver_166373-1913.jpg",
        alt: "Professional stretch ceiling installation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Stretch Ceiling Systems",
    description: "Expert installation, quality materials, complete accessories",
    images: ["http://img.b2bpic.net/free-photo/construction-worker-assembly-suspended-ceiling-with-drywall-fixing-drywall-ceiling-metal-frame-with-screwdriver_166373-1913.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${figtree.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}