import React, { FC, use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

const HomePage: FC<HomePageProps> = ({ params }) => {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations('Home');

  return <main className="home-page mt-36">{t('title')}</main>;
};

export default HomePage;
