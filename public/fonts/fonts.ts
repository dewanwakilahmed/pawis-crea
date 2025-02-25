import { Oswald, Work_Sans } from 'next/font/google';

export const primaryFont = Oswald({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const secondaryFont = Work_Sans({
  variable: '--font-secondary',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
