import Head from 'next/head';
import mga from '../public/Image/bill-gates.jpg';

const AboutSection = () => (
  <section
    id='about'
    className='py-20 bg-gray-200 dark:bg-gray-800 text-center'
  >
    <div className='bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20'>
      <Head>
        <title>About Me - Md Ghazanfar Alam</title>
        <meta
          name='description'
          content='Learn more about Md Ghazanfar Alam, a Full Stack Developer.'
        />
      </Head>

      <div className='container mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 sm:grid-cols-2 gap-8'>
        {/* Row 1: Image */}
        <div className='flex justify-center items-center'>
          <img
            src={mga.src} // Replace with your actual image path
            alt='Md Ghazanfar Alam'
            className='w-64 h-64 rounded-full shadow-lg object-cover'
          />
        </div>

        {/* Row 2: About Me Content */}
        <div className='text-center sm:text-left flex flex-col justify-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>
            About Me
          </h1>
          <p className='mt-6 text-xl sm:text-2xl md:text-3xl'>
            Hello! I'm Md Ghazanfar Alam. I am a passionate software engineer
            with expertise in developing web, mobile, and desktop applications.
            My core strength lies in JavaScript, and I enjoy leveraging it to
            build innovative solutions. I am deeply committed to making the web
            more accessible and open to everyone.
          </p>
          <p className='mt-4 text-xl sm:text-2xl md:text-3xl'>
            I hold a Bachelor's degree in Computer Science Engineering from
            Sister Nivedita University, Kolkata (2023). I am available for any
            kind of job opportunity that suits my interests.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
