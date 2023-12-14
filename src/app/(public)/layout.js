import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dix4erq.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
