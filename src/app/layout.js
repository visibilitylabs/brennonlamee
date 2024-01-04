"eslint-disable";
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/component/Header/Header';
import Footer from '@/component/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Legacy Solutions',
  description: `Boost Conversions and Profits
  with our expertise.
  Helping Business owners under 1 million in annual revenue increase their traffic conversion rates using expert analysis, edit and implementation`,
  image: '/logo-small.png',
  icon: '/logo-small.png',
  favicon: 'logo-small.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
