import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { Banner, ChoosUs, ContactInfo, InsuranceServices, Services } from '@/components/home';
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
