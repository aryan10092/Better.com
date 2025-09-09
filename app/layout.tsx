import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure Inter font for better readability and modern appearance
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Better Mortgage | Digital Mortgage Lender",
  description: "Get a mortgage that respects your time, circumstances, and wallet. Apply online with Better Mortgage for a simpler, faster home loan experience.",
  keywords: "mortgage, home loan, digital mortgage, better mortgage, online mortgage application",
  openGraph: {
    title: "Better Mortgage | Digital Mortgage Lender",
    description: "Get a mortgage that respects your time, circumstances, and wallet.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
