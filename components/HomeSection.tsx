// components/HomeSection.tsx
// const HomeSection = () => (
//   <section
//     id='home'
//     className='h-screen bg-gray-100 dark:bg-gray-900 text-center flex flex-col justify-center items-center'
//   >
//     <h1 className='text-5xl font-bold'>Welcome to My Portfolio</h1>
//     <p className='text-xl mt-4'>
//       I'm a Full Stack Developer passionate about building amazing web
//       applications.
//     </p>
//   </section>
// );

// export default HomeSection;
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
// components/HomeSection.tsx
const HomeSection = () => (
  <section
    id='home'
    className='h-screen bg-gray-100 dark:bg-gray-900 text-center flex flex-col justify-center items-center'
  >
    <Head>
      <title>Md Ghazanfar Alam - Full Stack Developer</title>
      <meta
        name='description'
        content='Portfolio of Md Ghazanfar Alam, Full Stack Developer'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='container mx-auto px-6 text-center'>
      <h1 className='text-4xl md:text-6xl font-bold'>Hello! I am</h1>
      <h2 className='text-5xl md:text-7xl font-extrabold mt-4'>
        Md Ghazanfar Alam
      </h2>
      <p className='mt-6 text-xl md:text-2xl font-medium'>
        <span>Full Stack Developer</span> •<span>Web Developer</span> •
        <span>Programmer</span> •<span>Software Engineer</span>
      </p>
      <div className='flex justify-center mt-8 gap-4'>
        <a
          href='#'
          className='bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600'
        >
          Get Resume
        </a>
        <a
          href='/about'
          className='border border-green-500 text-green-500 px-6 py-3 rounded-lg shadow-md hover:bg-green-500 hover:text-white'
        >
          About Me
        </a>
      </div>
    </div>

    <div className='absolute left-6 top-1/3 transform -translate-y-1/2'>
      <ul className='flex flex-col gap-4'>
        <li>
          <a
            href='https://github.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
          >
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </a>
        </li>
        <li>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
          >
            <FontAwesomeIcon icon={faFacebook} size='lg' />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
          >
            <i className='fab fa-linkedin'></i>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com'
            target='_blank'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-gray-100'
          >
            <FontAwesomeIcon icon={faTwitter} size='lg' />
          </a>
        </li>
      </ul>
      <p className='absolute mt-8 text-gray-500 rotate-90 origin-left'>
        FOLLOW ME
      </p>
    </div>
  </section>
);

export default HomeSection;
