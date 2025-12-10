// Root layout - must exist but just pass through to locale layout
// The middleware handles locale detection and redirection

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
