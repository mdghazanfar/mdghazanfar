import { useState } from 'react';
import { StaticImageData } from 'next/image';

import BillGate from '../public/Image/bill-gates.jpg';
import SteveJobs from '../public/Image/steve-jobs.jpg';
import MahatmaGandhi from '../public/Image/gandhi.jpg';
import AlbertEinstein from '../public/Image/albertEinstein.jpg';
import WilliamButler from '../public/Image/williamButler.jpg';
import ThomasEdison from '../public/Image/ThomasEdison.jpg';
import EleanorRoosevelt from '../public/Image/eleanorRoosevelt.jpg';
import Confucius from '../public/Image/Confucius.jpg';
import HenryFord from '../public/Image/HenryFord.jpg';
import RalphWaldo from '../public/Image/RalphWaldo.jpg';
import NoImageAvilable from '../public/Image/NoImage.png';

type Quote = {
  text: string;
  author: string;
  image: StaticImageData | string;
};

const InspiringQuotes: React.FC = () => {
  const quotes: Quote[] = [
    {
      text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
      author: 'Bill Gates',
      image: BillGate,
    },
    {
      text: 'Your time is limited, so don’t waste it living someone else’s life.',
      author: 'Steve Jobs',
      image: SteveJobs,
    },
    {
      text: 'Be the change that you wish to see in the world.',
      author: 'Mahatma Gandhi',
      image: MahatmaGandhi,
    },
    {
      text: 'In the middle of every difficulty lies opportunity.',
      author: 'Albert Einstein',
      image: AlbertEinstein,
    },
    {
      text: 'Do not wait to strike till the iron is hot, but make it hot by striking.',
      author: 'William Butler Yeats',
      image: WilliamButler,
    },
    {
      text: "I have not failed. I've just found 10,000 ways that won't work.",
      author: 'Thomas Edison',
      image: ThomasEdison,
    },
    {
      text: 'The future belongs to those who believe in the beauty of their dreams.',
      author: 'Eleanor Roosevelt',
      image: EleanorRoosevelt,
    },
    {
      text: 'It does not matter how slowly you go as long as you do not stop.',
      author: 'Confucius',
      image: Confucius,
    },
    {
      text: "Whether you think you can or you think you can't, you're right.",
      author: 'Henry Ford',
      image: HenryFord,
    },
    {
      text: 'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
      author: 'Ralph Waldo Emerson',
      image: RalphWaldo,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === quotes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center px-4'>
      <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-10'>
        Inspiring Quotes
      </h2>

      <div className='relative bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-7xl overflow-hidden'>
        {/* Quotes */}
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {quotes.map((quote, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center w-full flex-shrink-0 text-center'
            >
              <img
                src={
                  typeof quote.image === 'string'
                    ? quote.image
                    : quote.image.src
                }
                alt={quote.author}
                loading='lazy'
                onError={(e) => (e.currentTarget.src = NoImageAvilable.src)} // Fallback image
                className='rounded-full border-4 border-gray-300 dark:border-gray-700 w-28 h-28 md:w-36 md:h-36 shadow-lg'
              />
              <p className='text-lg md:text-xl italic mt-6 px-4'>
                "{quote.text}"
              </p>
              <p className='text-lg font-semibold mt-4'>— {quote.author}</p>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label='Previous Quote'
          className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg transition duration-200'
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          aria-label='Next Quote'
          className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg transition duration-200'
        >
          &gt;
        </button>

        {/* Dots */}
        <div className='flex justify-center mt-6 space-x-2'>
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Quote ${index + 1}`}
              className={`w-4 h-4 rounded-full transition duration-200 ${
                currentIndex === index
                  ? 'bg-gray-900 dark:bg-gray-100'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspiringQuotes;
