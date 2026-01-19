export const metadata = {
  title: "WhatsApp Bridge",
  description: "Bridge for Meta webhook to n8n"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
