import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
