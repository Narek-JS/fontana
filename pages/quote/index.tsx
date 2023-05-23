import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { Banner } from '@/components/quote';
import Head from 'next/head';

export default function Quote() {

  return (
    <Fragment>
      <Head>{metaTags.quote}</Head>
      <Banner />
    </Fragment>
  );
};
