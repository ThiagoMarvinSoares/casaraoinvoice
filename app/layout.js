import { Inter } from "next/font/google";
import "./globals.css"; ''

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Casarao gerador de garantia",
  description: "PDF generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
