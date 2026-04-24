import Header from "@/components/Header";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
