import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <Header />
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <footer className='absolute bottom-2 text-gray-700'>
              Copyright © {new Date().getFullYear()} By{' '}
              <strong>Tom Supplies</strong> Powered by{' '}
              <strong>Veltrix LLC</strong>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
