import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

export const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code", // Custom CSS variable name
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Weights you need
});

export const metadata: Metadata = {
  title: "PasteBin",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
