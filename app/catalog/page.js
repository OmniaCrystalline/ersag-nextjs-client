/** @format */

import React, { Suspense } from "react";
import Link from "next/link";
import GalleryTrigger from "@/components/backdrop+modal/GalleryTrigger";
import ErsagProduct from "@/lib/mongo/models.products";
import ButtonAdd from "@/components/ButtonAdd";
import ProductFilters from "@/components/catalog/ProductFilters";
import dbConnect from "@/lib/mongo/connect";

export const metadata = {
  title: "Каталог товарів",
  description:
    "Повний каталог екологічної побутової хімії Ersag. Широкий вибір турецьких екологічних засобів для дому. Фільтри по категоріям, ціні та назві.",
  openGraph: {
    title: "Каталог товарів - Ersag / Ерсаг",
    description:
      "Повний каталог екологічної побутової хімії Ersag. Широкий вибір турецьких екологічних засобів для дому.",
    url: "/catalog",
  },
};

const CatalogPage = async ({ searchParams }) => {
  await dbConnect();
  
  // Отримуємо всі товари для фільтрації
  let allProducts = await ErsagProduct.find();
  
  // Отримуємо унікальні категорії
  const categories = [...new Set(allProducts.map((p) => p.type))].filter(Boolean);
  
  // Застосовуємо фільтри
  let filteredProducts = [...allProducts];
  
  // Фільтр по категорії
  if (searchParams?.category) {
    filteredProducts = filteredProducts.filter((p) => p.type === searchParams.category);
  }
  
  // Фільтр по пошуку (назва)
  if (searchParams?.search) {
    const searchTerm = searchParams.search.toLowerCase();
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(searchTerm)
    );
  }
  
  // Фільтр по ціні
  if (searchParams?.minPrice || searchParams?.maxPrice) {
    filteredProducts = filteredProducts.filter((p) => {
      const price = parseFloat(p.price);
      const minPrice = searchParams.minPrice ? parseFloat(searchParams.minPrice) : 0;
      const maxPrice = searchParams.maxPrice ? parseFloat(searchParams.maxPrice) : Infinity;
      return price >= minPrice && price <= maxPrice;
    });
  }
  
  // Сортування
  if (searchParams?.sortBy) {
    filteredProducts.sort((a, b) => {
      switch (searchParams.sortBy) {
        case "price-asc":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-desc":
          return parseFloat(b.price) - parseFloat(a.price);
        case "title-asc":
          return a.title.localeCompare(b.title, "uk");
        case "title-desc":
          return b.title.localeCompare(a.title, "uk");
        default:
          return 0;
      }
    });
  }
  
  const newData = filteredProducts.map((e) => {
    return {
      ...e._doc,
      _id: e._id.toString(),
    };
  });
  const imglist = newData.map((e) => {
    return {
      img: e.img,
      title: e.title,
    };
  });

  return (
    <div className='w-full py-8'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-text mb-4'>
            Каталог товарів
          </h1>
          <p className='text-text/70 mb-4'>
            Всі товари Ersag - турецька екологічна побутова хімія
          </p>
          {newData.length > 0 && (
            <p className='text-sm text-text/60'>
              Знайдено товарів: {newData.length}
            </p>
          )}
        </div>
        
        <Suspense fallback={<div className='mb-6 h-20 bg-gradient-to-r from-accent1/10 to-accent2/10 rounded animate-pulse' />}>
          <ProductFilters categories={categories} />
        </Suspense>
        
        {newData && newData.length > 0 ? (
          <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
            {newData.map((e) => (
              <div
                key={e._id.toString()}
                className='grid shadow-lg bg-white rounded gap-3 h-auto w-full p-5 hover:shadow-xl transition-shadow'>
                <h3 className='text-center h-12 font-semibold rounded'>
                  {e.title}
                </h3>
                <GalleryTrigger img={e.img} imglist={imglist} />
                <p className='text-sm text-text/70'>вага/об`єм: {e.weight} гр/мл</p>
                <p className='font-semibold text-accent1'>{e.price} грн</p>
                <div className='flex justify-between align-bottom'>
                  <ButtonAdd elem={e} />
                  <Link
                    href={`/${e._id}`}
                    className='text-accent2 hover:text-accent1 transition-colors'>
                    детальніше...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-12'>
            <p className='text-text/70'>Товари не знайдено</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

