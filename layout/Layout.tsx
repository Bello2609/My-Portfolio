import Head from 'next/head';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
//
import Footer from 'components/general/Footer';
import Navbar from 'components/general/Navbar';

export default function Layout(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    description: `website developer, web application developer, website designer, 
    React developer, Node.js engineer, freelance software developer, javascript developer,
    Software Engineer, Web Developer, Full Stack Developer, Backend Developer, Frontend Developer,
    Mobile App Developer, Application Developer, API Integration
    `,
    image: 'https://bellohadi.vercel.app/meta/meta-bello.jpg',
    type: 'website',
    ...customMeta,
  };
  return (
    <Fragment>
      <Head>
        <title>
          {meta.title
            ? `${meta.title} • Bello Hadi | Freelance Full-Stack Software Engineer`
            : 'Bello Hadi | Freelance Full-Stack Software Engineer'}
        </title>
        <meta name="robots" content="follow, index" />
        <meta
          name="keyword"
          content="Bello Hadi Dolapo, Bello Hadi, Portfolio, Freelance Full-Stack Software Engineer"
        />
        <meta name="author" content="Bello Hadi - Freelance Full-Stack Software Engineer" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://bellohadi.vercel.app${router.asPath}`}
        />
        <link rel="canonical" href={`https://bellohadi.vercel.app${router.asPath}`} />
        {/*  */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Bello Hadi" />
        <meta property="og:description" content={meta.description} />
        <meta
          property="og:title"
          content={
            meta.title
              ? `${meta.title} • Bello Hadi | Freelance Full-Stack Software Engineer`
              : 'Bello Hadi | Freelance Full-Stack Software Engineer'
          }
        />
        <meta property="og:image" content={meta.image} />
        {/*  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alliendeveloper" />
        <meta
          name="twitter:title"
          content={
            meta.title
            ? `${meta.title} • Bello Hadi | Freelance Full-Stack Software Engineer`
            : 'Bello Hadi | Freelance Full-Stack Software Engineer'
          }
        />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {/*  */}
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="32x32"
          href="/favicon.svg"
        />
      </Head>

      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
