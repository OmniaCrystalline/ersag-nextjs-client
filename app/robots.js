/** @format */

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ersag.com.ua";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/basket", "/history", "/login", "/signup"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

