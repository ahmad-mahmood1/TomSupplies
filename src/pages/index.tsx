import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/ProductCard';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className=''>Banner Here</div>
          <div className='flex flex-col items-center space-y-12'>
            <div>Catalogue List</div>
            <div>
              <ProductCard
                imageSrc='https://koko-max.com/wp-content/uploads/2022/06/5060391621449n-600x600.jpg'
                productName='Cadbury Crunchie Spread 400g'
                alt='Cadbury Crunchie Spread 400g'
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
