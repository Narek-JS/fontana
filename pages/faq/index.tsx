import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { Banner } from '@/components/faq/Banner';
import { Questions } from '@/components/faq/Questions';
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
