import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <div className='layout flex h-14 items-center justify-between'>
        <div>LOGO HERE</div>
        <div className='flex space-x-24'>
          <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
            Home
          </UnstyledLink>
          <UnstyledLink href='/shop' className='font-bold hover:text-gray-600'>
            Shop
          </UnstyledLink>
          <UnstyledLink href='/contact' className='font-bold hover:text-gray-600'>
            Contact
          </UnstyledLink>
        </div>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
