import React, { FC } from 'react';
import Link from 'next/link';

// CSS
import '@/styles/company-logo.css';

const CompanyLogo: FC = () => {
  return (
    <Link href="/" className="company-logo">
      <span className="pawis">Pawis</span> <span className="crea">Crea</span>
    </Link>
  );
};

export default CompanyLogo;
