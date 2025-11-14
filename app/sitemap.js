/** @format */

import ErsagProduct from "@/lib/mongo/models.products";
import dbConnect from "@/lib/mongo/connect";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ersag.com.ua";

  // Статичні сторінки
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/catalog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Динамічні сторінки продуктів
  let productPages = [];
  try {
    await dbConnect();
    const products = await ErsagProduct.find().select("_id updatedAt");
    
    productPages = products.map((product) => ({
      url: `${baseUrl}/${product._id.toString()}`,
      lastModified: product.updatedAt || new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }

  return [...staticPages, ...productPages];
}

