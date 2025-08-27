export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-b from-[#CBDCEB] to-[#b2d0eb] bg-cover">
        {children}
    </div>
  );
}
