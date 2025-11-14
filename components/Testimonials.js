/** @format */

import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Олена К.",
      text: "Чудові продукти! Використовую вже півроку, дуже задоволена якістю та ефективністю. Рекомендую!",
      rating: 5,
    },
    {
      name: "Марія П.",
      text: "Екологічна продукція, яка дійсно працює. Дякую за якісний сервіс та швидку доставку.",
      rating: 5,
    },
    {
      name: "Ірина В.",
      text: "Вперше спробувала Ersag і вражена результатом. Тепер це моя улюблена марка побутової хімії.",
      rating: 5,
    },
  ];

  return (
    <section className='w-full py-12 md:py-16 bg-white'>
      <div className='max-w-5xl mx-auto px-5'>
        <h2 className='text-2xl md:text-3xl font-bold text-text text-center mb-10'>
          Відгуки клієнтів
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-text/10'>
              <div className='flex gap-1 mb-3 text-accent1'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className='w-4 h-4' />
                ))}
              </div>
              <p className='text-text/80 mb-4 italic'>&quot;{testimonial.text}&quot;</p>
              <p className='text-sm font-semibold text-text'>{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

