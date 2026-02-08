import { Sidebar } from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="antialiased">
      <body>
        <div className="grid grid-cols-(--grid-app) h-screen">
          <Sidebar />
          <main className="px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
