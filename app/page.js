/** @format */

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import PopularProducts from "@/components/PopularProducts";
import Testimonials from "@/components/Testimonials";
import Quality from "@/components/Quality";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import ErsagProduct from "@/lib/mongo/models.products";
import dbConnect from "@/lib/mongo/connect";

export default async function Home() {
  await dbConnect();
  
  // Отримуємо продукти для опитування
  const products = await ErsagProduct.find();
  const productsList = products.map((e) => ({
    _id: e._id.toString(),
    title: e.title,
  }));

  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <PopularProducts />
      <Quality />
      <Testimonials />
      <ContactForm products={productsList} />
      <section className='w-full py-12 md:py-16 bg-white'>
        <div className='max-w-5xl mx-auto px-5 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-text mb-6'>
            Переглянути всі товари
          </h2>
          <Link
            href='/catalog'
            className='px-8 py-4 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium text-lg inline-block'>
            Відкрити каталог
          </Link>
        </div>
      </section>
    </>
  );
}
