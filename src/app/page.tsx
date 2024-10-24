import React from 'react';
import Link from 'next/link';

const CommandPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='space-y-4 flex flex-col items-center'>
        <Link
          href='/exodus'
          className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text text-2xl font-bold'
        >
          Go to Exodus
        </Link>

        <Link href='/bicep'>Go to Bicep</Link>
      </div>
    </div>
  );
};

export default CommandPage;
