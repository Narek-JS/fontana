import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { Banner, Questions } from '@/components/faq';
import { CommentForm } from '@/components/commentForm';
import { Container } from '@/components/ui/container';
import Head from 'next/head';

export default function Faq() {

  return (
    <Fragment>
      <Head>{metaTags.faqs}</Head>
      <Banner />
      <Questions />
      <section>
        <Container>
          <CommentForm />
        </Container>
      </section>
    </Fragment>
  );
};
