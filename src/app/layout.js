import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../../src/components/HeaderComponent"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ukraine Horizon",
  description: "",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
      <body className={inter.className}>
				<HeaderComponent />
				{children}</body>
    </html>
  );
}
