// pages/index.tsx
import Head from 'next/head';

import MainLayout from '../layouts/MainLayout';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import InspiringQuotes from '../components/InspiringSection';

const Home = () => {
  return (
    <MainLayout>
      <section className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20'>
        <Head>
          <title>My Portfolio</title>
          <meta
            name='description'
            content='Portfolio website of a Full Stack Developer.'
          />
        </Head>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <InspiringQuotes />
        <ContactSection />
      </section>
    </MainLayout>
  );
};

export default Home;
