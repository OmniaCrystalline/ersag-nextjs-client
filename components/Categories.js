/** @format */

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ErsagProduct from "../lib/mongo/models.products";
import dbConnect from "@/lib/mongo/connect";

const Categories = async () => {
  await dbConnect();
  const products = await ErsagProduct.find();

  // Отримуємо унікальні категорії з продуктів
  const categories = [...new Set(products.map((p) => p.type))].filter(Boolean);

  // Якщо категорій немає, показуємо заглушку
  if (categories.length === 0) {
    return null;
  }

  // Зображення для категорій
  const categoryImages = [
    "/images/Lucid_Origin_A_beautiful_clean_house_with_large_windows_lettin_0.jpg",
    "/images/Lucid_Origin_A_lovely_couple_engages_in_morning_hygiene_with_t_0.jpg",
  ];

  return (
    <section className='w-full py-12 md:py-16 bg-white'>
      <div className='max-w-5xl mx-auto px-5 grid'>
        <h2 className='text-2xl md:text-3xl font-bold text-text text-center mb-10'>
          Категорії товарів
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-center'>
          {categories.map((category, index) => {
            const categoryProducts = products.filter(
              (p) => p.type === category
            );
            const imageSrc = categoryImages[index % categoryImages.length];

            return (
              <Link
                key={category}
                href={`/catalog?category=${encodeURIComponent(category)}`}
                className='group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-sm'>
                <div className='relative h-64 w-full'>
                  <Image
                    src={imageSrc}
                    alt={category}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30' />
                  <div className='absolute inset-0 flex flex-col justify-center items-center p-6 text-center'>
                    <h3 className='font-bold text-2xl md:text-3xl mb-3 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]'>
                      {category}
                    </h3>
                    <p className='text-base md:text-lg text-white font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'>
                      {categoryProducts.length} товарів
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
