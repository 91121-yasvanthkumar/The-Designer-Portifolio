import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Joonas Sandell — Selected Works',
  description: 'Creative developer and designer based in Helsinki, Finland.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased selection:bg-black selection:text-[#F1EFE7]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
