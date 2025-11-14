/** @format */

import React from "react";
import Link from "next/link";
import { GiLaurels } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className='bg-accent2/50 text-text backdrop-blur-sm w-screen mt-auto'>
      <div className='max-w-5xl mx-auto px-5 py-8 grid gap-6 md:grid-cols-3'>
        {/* Опис та логотип */}
        <div className='grid gap-3'>
          <div className='flex items-center gap-2'>
            <GiLaurels className='text-accent1 w-6 h-5' />
            <h3 className='font-semibold text-lg'>Ersag / Ерсаг</h3>
          </div>
          <p className='text-sm text-text/80'>
            Турецька екологічна побутова хімія для вашого дому. Всі товари
            сертифіковані в Туреччині та мають багаторічну історію на європейському
            ринку.
          </p>
        </div>

        {/* Навігація */}
        <div className='grid gap-3'>
          <h3 className='font-semibold text-lg'>Навігація</h3>
          <nav className='grid gap-2'>
            <Link
              href='/'
              className='text-sm text-text/80 hover:text-accent1 transition-colors'>
              Каталог
            </Link>
            <Link
              href='/history'
              className='text-sm text-text/80 hover:text-accent1 transition-colors'>
              Історія замовлень
            </Link>
            <Link
              href='/about'
              className='text-sm text-text/80 hover:text-accent1 transition-colors'>
              Про нас
            </Link>
            <Link
              href='/basket'
              className='text-sm text-text/80 hover:text-accent1 transition-colors'>
              Кошик
            </Link>
          </nav>
        </div>

        {/* Контакти */}
        <div className='grid gap-3'>
          <h3 className='font-semibold text-lg'>Контакти</h3>
          <div className='grid gap-2 text-sm text-text/80'>
            <p>
              <span className='font-medium'>Email:</span>{" "}
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'good.answer@gmail.com'}`}
                className='hover:text-accent1 transition-colors'>
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'good.answer@gmail.com'}
              </a>
            </p>
            <p className='text-xs text-text/60 mt-2'>
              По питанням співпраці та розміщення товарів
            </p>
          </div>
        </div>
      </div>

      {/* Лігал інформація */}
      <div className='border-t border-text/20 mt-6 pt-4 pb-4'>
        <div className='max-w-5xl mx-auto px-5'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text/60'>
            <p>© {new Date().getFullYear()} Ersag / Ерсаг. Всі права захищені.</p>
            <div className='flex gap-4'>
              <Link
                href='/privacy'
                className='hover:text-accent1 transition-colors'>
                Політика конфіденційності
              </Link>
              <Link
                href='/terms'
                className='hover:text-accent1 transition-colors'>
                Умови використання
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
