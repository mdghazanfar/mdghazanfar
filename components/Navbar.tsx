// components/Navbar.tsx
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 dark:bg-gray-900 text-white sticky top-0 z-50'>
      <div className='container mx-auto flex items-center justify-between p-4'>
        <h1 className='text-xl font-bold'>MGA</h1>
        <div className='hidden md:flex space-x-4'>
          <Link href='#home' className='hover:text-green-500'>
            Home
          </Link>
          <Link href='#about' className='hover:text-green-500'>
            About
          </Link>
          <Link href='#projects' className='hover:text-green-500'>
            Projects
          </Link>
          <Link href='#contact' className='hover:text-green-500'>
            Contact
          </Link>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
