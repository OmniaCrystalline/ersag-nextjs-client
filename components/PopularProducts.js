/** @format */

import React from "react";
import Link from "next/link";
import ErsagProduct from "../lib/mongo/models.products";
import dbConnect from "@/lib/mongo/connect";
import GalleryTrigger from "./backdrop+modal/GalleryTrigger";
import ButtonAdd from "./ButtonAdd";

const PopularProducts = async () => {
  await dbConnect();
  const allProducts = await ErsagProduct.find();
  
  // Беремо перші 4 товари як популярні (можна змінити логіку на основі реальних даних)
  const popularProducts = allProducts.slice(0, 4).map((e) => ({
    ...e._doc,
    _id: e._id.toString(),
  }));

  if (popularProducts.length === 0) {
    return null;
  }

  const imglist = popularProducts.map((e) => ({
    img: e.img,
    title: e.title,
  }));

  return (
    <section className='w-full py-12 md:py-16 bg-white'>
      <div className='max-w-5xl mx-auto px-5'>
        <h2 className='text-2xl md:text-3xl font-bold text-text text-center mb-10'>
          Популярні товари
        </h2>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {popularProducts.map((product) => (
            <div
              key={product._id}
              className='grid shadow-lg bg-white rounded gap-3 h-auto w-full p-5 hover:shadow-xl transition-shadow'>
              <h3 className='text-center h-12 font-semibold rounded'>
                {product.title}
              </h3>
              <GalleryTrigger img={product.img} imglist={imglist} />
              <p className='text-sm text-text/70'>вага/об`єм: {product.weight} гр/мл</p>
              <p className='font-semibold text-accent1'>{product.price} грн</p>
              <div className='flex justify-between align-bottom'>
                <ButtonAdd elem={product} />
                <Link
                  href={`/${product._id}`}
                  className='text-accent2 hover:text-accent1 transition-colors'>
                  детальніше...
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-8'>
          <Link
            href='/catalog'
            className='px-6 py-3 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium inline-block'>
            Переглянути всі товари
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;

