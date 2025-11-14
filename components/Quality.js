/** @format */

import React from "react";
import { GiLaurels } from "react-icons/gi";
import { FaCertificate, FaCheckCircle } from "react-icons/fa";

const Quality = () => {
  const certifications = [
    "Сертифікат якості ISO",
    "Екологічний сертифікат",
    "Європейські стандарти",
    "Безпека для здоров'я",
  ];

  return (
    <section className='w-full py-12 md:py-16 bg-gradient-to-br from-accent2/10 to-accent1/10'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <GiLaurels className='text-accent1 w-8 h-7' />
              <h2 className='text-2xl md:text-3xl font-bold text-text'>
                Гарантія якості
              </h2>
            </div>
            <p className='text-text/70 mb-6'>
              Всі наші продукти проходять сувору перевірку якості та мають
              необхідні сертифікати. Ми гарантуємо високу якість та безпеку
              кожної одиниці продукції.
            </p>
            <div className='grid gap-3'>
              {certifications.map((cert, index) => (
                <div key={index} className='flex items-center gap-3'>
                  <FaCheckCircle className='text-accent1 w-5 h-5 flex-shrink-0' />
                  <span className='text-text'>{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='bg-white rounded-lg p-8 shadow-lg text-center'>
              <FaCertificate className='w-20 h-20 text-accent1 mx-auto mb-4' />
              <h3 className='text-xl font-semibold text-text mb-2'>
                Сертифікована продукція
              </h3>
              <p className='text-text/70 text-sm'>
                Всі товари мають офіційні сертифікати та відповідають
                міжнародним стандартам якості
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;

