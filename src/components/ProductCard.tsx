import React from 'react';
import NextImage from './NextImage';

function ProductCard({
  imageSrc,
  productName = 'test',
  alt,
}: {
  imageSrc: string;
  productName: string;
  alt: string;
}) {
  return (
    <div className='flex flex-col items-center justify-center space-y-2'>
      <NextImage src={imageSrc} alt={alt} width={200} height={200} />
      <div>{productName}</div>
    </div>
  );
}

export default ProductCard;
