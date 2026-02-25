import { Sidebar } from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="antialiased">
      <body>
        <div className="lg:grid lg:grid-cols-(--grid-app) h-screen">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8 max-w-[100vw]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
