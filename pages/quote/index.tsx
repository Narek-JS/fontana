import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { Banner } from '@/components/quote/Banner';
import Head from 'next/head';

export default function Quote() {

  return (
    <Fragment>
      <Head>{metaTags.quote}</Head>
      <Banner />
    </Fragment>
  );
};
