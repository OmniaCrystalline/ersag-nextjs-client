/** @format */

"use client";

import React from "react";
import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div className='w-full py-12'>
      <div className='max-w-5xl mx-auto px-5 text-center'>
        <h2 className='text-2xl font-bold text-text mb-4'>
          Помилка завантаження каталогу
        </h2>
        <p className='text-text/70 mb-6'>{error?.message || "Щось пішло не так"}</p>
        <div className='flex gap-4 justify-center'>
          <button
            onClick={reset}
            className='px-6 py-3 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium'>
            Спробувати ще раз
          </button>
          <Link
            href='/'
            className='px-6 py-3 bg-accent2 text-bg rounded-lg hover:bg-accent2/90 transition-colors font-medium'>
            На головну
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;

