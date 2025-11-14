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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ersag.com.ua';
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'good.answer@gmail.com';

  // Структуровані дані для SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ersag / Ерсаг",
    "url": siteUrl,
    "logo": `${siteUrl}/icon.svg`,
    "description": "Турецька екологічна побутова хімія високої якості",
    "email": contactEmail,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ersag / Ерсаг",
    "url": siteUrl,
    "description": "Купити товари Ерсаг Ersag Україна. Турецька екологічна побутова хімія високої якості.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/catalog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Головна",
        "item": siteUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
