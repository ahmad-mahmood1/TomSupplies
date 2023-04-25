import * as React from 'react';
import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='h-full w-full'>
      <Header />

      {children}
      <div className='flex flex-row items-center justify-center'>
        <footer className='absolute bottom-2 text-gray-700'>
          Copyright © {new Date().getFullYear()} By{' '}
          <strong>Tom Supplies</strong> Powered by <strong>Veltrix LLC</strong>
        </footer>
      </div>
    </div>
  );
}
