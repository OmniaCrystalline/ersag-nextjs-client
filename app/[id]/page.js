/** @format */

import React from "react";
import ErsagProduct from "../../lib/mongo/models.products";
import Image from "next/image";
import dbConnect from "@/lib/mongo/connect";
import ButtonAdd from "@/components/ButtonAdd";

export async function generateMetadata({ params }) {
  await dbConnect();
  const data = await ErsagProduct.findOne({ _id: params.id });
  
  if (!data) {
    return {
      title: "Товар не знайдено",
      description: "Товар не знайдено",
    };
  }

  const { title, description, price, weight, img } = data;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ersag.com.ua';
  const imageUrl = `${siteUrl}/images/${img}`;

  return {
    title: title,
    description: description || `Купити ${title} - ${price} грн. ${weight ? `Вага: ${weight} гр/мл.` : ''} Екологічна побутова хімія Ersag.`,
    openGraph: {
      title: `${title} - Ersag / Ерсаг`,
      description: description || `Купити ${title} - ${price} грн. Екологічна побутова хімія Ersag.`,
      url: `/${params.id}`,
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description || `Купити ${title} - ${price} грн.`,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/${params.id}`,
    },
  };
}

const GoodItem = async ({ params }) => {
  await dbConnect();
  const data = await ErsagProduct.findOne({ _id: params.id });
  const id = data._id.toString();
  const newdata = { ...data };
  const datatopath = { ...newdata._doc, _id: id };
  const { title, img, usage, description, weight, price, type } = datatopath;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ersag.com.ua';
  const imageUrl = `${siteUrl}/images/${img}`;
  const productUrl = `${siteUrl}/${id}`;

  // Структуровані дані для продукту
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "description": description || `Екологічна побутова хімія Ersag - ${title}`,
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Ersag"
    },
    "offers": {
      "@type": "Offer",
      "url": productUrl,
      "priceCurrency": "UAH",
      "price": parseFloat(price) || 0,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Ersag / Ерсаг"
      }
    },
    "category": type || "Побутова хімія",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Вага/Об'єм",
        "value": weight || "N/A"
      }
    ]
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Каталог",
        "item": `${siteUrl}/catalog`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": productUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className='grid container p-3 gap-1 m-auto'>
        <h1 className='w-full text-center font-medium text-accent1'>{title}</h1>
        <div>
          <Image
            src={`/images/${img}`}
            width='150'
            height='200'
            className='w-[150px] h-auto float-left p-3 rounded'
            alt={title}></Image>
          <h3 className='text-accent2'>Метод використання:</h3>
          <p>{usage}</p>
          <h3 className='text-accent2'>Опис:</h3>
          <p>{description}</p>
          <div className='flex gap-3 mt-3'>
            <p>{weight} гр/мл</p>
            <p>{price} грн</p>
            <ButtonAdd elem={datatopath} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodItem;
