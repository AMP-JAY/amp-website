export const metadata = {
  title: "Aura Music Publishing",
  description: "Empowering Vietnamese Pop with Korean Songwriting Excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}