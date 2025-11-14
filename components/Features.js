/** @format */

import React from "react";
import { GiLaurels } from "react-icons/gi";
import { FaLeaf, FaShieldAlt, FaAward, FaRecycle } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaLeaf className='w-8 h-8' />,
      title: "Екологічно чисто",
      description: "Всі продукти виготовлені з екологічних матеріалів, безпечні для здоров'я та навколишнього середовища",
    },
    {
      icon: <FaShieldAlt className='w-8 h-8' />,
      title: "Сертифіковано",
      description: "Всі товари мають сертифікати якості та відповідають європейським стандартам",
    },
    {
      icon: <FaAward className='w-8 h-8' />,
      title: "Перевірена якість",
      description: "Багаторічний досвід на турецькому та європейському ринку гарантує високу якість продукції",
    },
    {
      icon: <FaRecycle className='w-8 h-8' />,
      title: "Екологічна відповідальність",
      description: "Ми піклуємося про навколишнє середовище та пропагуємо екологічно свідоме споживання",
    },
  ];

  return (
    <section className='w-full py-12 md:py-16 bg-white'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='text-center mb-10'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <GiLaurels className='text-accent1 w-8 h-7' />
            <h2 className='text-2xl md:text-3xl font-bold text-text'>
              Чому обирають Ersag
            </h2>
          </div>
          <p className='text-text/70 max-w-2xl mx-auto'>
            Наша продукція поєднує ефективність, якість та екологічну відповідальність
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow text-center'>
              <div className='text-accent1 flex justify-center mb-4'>
                {feature.icon}
              </div>
              <h3 className='text-lg font-semibold text-text mb-2'>
                {feature.title}
              </h3>
              <p className='text-sm text-text/70'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

