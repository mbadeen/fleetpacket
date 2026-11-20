import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FleetPacket',
  description: 'Digital compliance binder for commercial fleets',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;