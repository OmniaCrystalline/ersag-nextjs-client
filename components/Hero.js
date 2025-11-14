/** @format */

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='w-full mt-8 md:mt-12 py-12 md:py-20 lg:py-24 rounded-lg mb-8 relative overflow-hidden z-0'>
      <div
        className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0'
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      />
      <div className='absolute inset-0 bg-gradient-to-br from-accent2/70 to-accent1/70 z-0' />
      <div className='relative z-10 max-w-5xl mx-auto px-5 grid gap-6 md:gap-8 text-center'>
        <div className='grid gap-4'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-bg drop-shadow-lg'>
            Ersag / Ерсаг
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl text-bg/90 max-w-2xl mx-auto drop-shadow-md'>
            Турецька екологічна побутова хімія для вашого дому
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='/basket'
            className='px-6 py-3 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium shadow-lg'>
            Перейти до кошика
          </Link>
          <Link
            href='/about'
            className='px-6 py-3 bg-accent2 text-bg rounded-lg hover:bg-accent2/90 transition-colors font-medium shadow-lg'>
            Дізнатися більше
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

