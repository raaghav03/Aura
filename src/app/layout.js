import "./globals.css";

import Sidebar from "./components/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-50 ml-50 ">{children}</main>
      </body>
    </html>
  );
}
