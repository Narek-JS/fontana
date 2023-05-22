import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { Banner } from '@/components/contactUs/Banner';
import { ContactInfo } from '@/components/contactUs/ContactInfo';
import { PostComments } from '@/components/contactUs/PostComments';
import { Container } from '@/components/ui/container';
import { CommentForm } from '@/components/commentForm';
import Head from 'next/head';

export default function Contact() {

  return (
    <Fragment>
      <Head>{metaTags.contact}</Head>
      <Banner />
      <ContactInfo />
      <PostComments />
      <section>
        <Container>
          <CommentForm />
        </Container>
      </section>
    </Fragment>
  );
};
