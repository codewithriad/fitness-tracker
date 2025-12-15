import { Navbar } from "@/components/Navbar";
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
      </body>
    </html>
  );
}
