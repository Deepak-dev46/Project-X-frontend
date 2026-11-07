import "./globals.css";

export const metadata = {
  title: "Project-48 | Engineering Platform",
  description: "Universal Application Experience & Engineering Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
