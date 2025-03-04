import NavigationBar from "./components/NavigationBar"; // cesta přizpůsobte

export const metadata = {
  title: 'Referral Codes',
  description: 'Seznam referral kuponů od Fukjemi'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Horní lišta */}
        <NavigationBar />

        {/* Obsah stránky */}
        {children}
      </body>
    </html>
  );
}
