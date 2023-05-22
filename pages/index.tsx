import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { Banner, ChoosUs, Services } from '@/components/home';
import { InsuranceServices } from '@/components/home/InsuranceServices';
import { ContactInfo } from '@/components/home/ContactInfo';
import Head from 'next/head';

export default function Home() {

  return (
    <Fragment>
      <Head>{metaTags.home}</Head>
      <Banner />
      <Services />
      <ChoosUs />
      <InsuranceServices />
      <ContactInfo />
    </Fragment>
  );
};
