// components/ThemeSwitcher.tsx
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent rendering until mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Render nothing on the server

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='bg-gray-700 text-white p-2 rounded-full'
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeSwitcher;
