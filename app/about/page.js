import React from 'react'

export const metadata = {
  title: "Про нас",
  description:
    "Дізнайтеся більше про Ersag - турецького виробника екологічної побутової хімії з багаторічною історією на європейському ринку. Всі товари сертифіковані в Туреччині.",
  openGraph: {
    title: "Про нас - Ersag / Ерсаг",
    description:
      "Дізнайтеся більше про Ersag - турецького виробника екологічної побутової хімії з багаторічною історією на європейському ринку.",
    url: "/about",
  },
};

const AboutPage = () => {
  return (
    <div className='container max-w-5xl m-auto grid gap-2 p-3'>
      <h1 className='text-center'>Про нас</h1>
      <p className='p-3'>
        Наразі на сайті представлені товари турецького виробника Ersag. Компанія
        має багаторічну історію на турецькому і європейському ринку. Всі товари
        сертифіковані в Туреччині.
      </p>
      <p className='p-3'>
        По питанням співпраці по нашим товарам, і, в тому числі, розміщення
        ваших товарів, або на електронну пошту {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'good.answer@gmail.com'}
      </p>
    </div>
  );
}

export default AboutPage
