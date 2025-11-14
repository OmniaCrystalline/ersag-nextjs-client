/** @format */

import React from "react";
import { GiLaurels } from "react-icons/gi";

export const metadata = {
  title: "Умови використання - Ersag / Ерсаг",
  description: "Умови використання веб-сайту Ersag",
};

const TermsPage = () => {
  return (
    <div className='w-full py-8'>
      <div className='max-w-4xl mx-auto px-5'>
        <div className='mb-8 text-center'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <GiLaurels className='text-accent1 w-8 h-7' />
            <h1 className='text-3xl md:text-4xl font-bold text-text'>
              Умови використання
            </h1>
          </div>
          <p className='text-text/70'>
            Останнє оновлення:{" "}
            {new Date().toLocaleDateString("uk-UA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className='prose prose-lg max-w-none space-y-6 text-text'>
          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              1. Загальні умови
            </h2>
            <p className='text-text/80 leading-relaxed'>
              Використовуючи цей веб-сайт, ви погоджуєтеся з наступними умовами
              використання. Якщо ви не згодні з цими умовами, будь ласка, не
              використовуйте наш сайт.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              2. Використання сайту
            </h2>
            <p className='text-text/80 leading-relaxed mb-3'>
              Ви зобов&apos;язуєтеся:
            </p>
            <ul className='list-disc list-inside space-y-2 text-text/80 ml-4'>
              <li>Використовувати сайт лише в законних цілях</li>
              <li>Не намагатися отримати несанкціонований доступ до системи</li>
              <li>Не використовувати автоматизовані системи для збору даних</li>
              <li>Надавати точну та актуальну інформацію при реєстрації</li>
              <li>Поважати права інтелектуальної власності</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              3. Замовлення та оплата
            </h2>
            <p className='text-text/80 leading-relaxed mb-3'>
              При оформленні замовлення:
            </p>
            <ul className='list-disc list-inside space-y-2 text-text/80 ml-4'>
              <li>Ви підтверджуєте, що надана інформація є точною</li>
              <li>
                Ви зобов&apos;язуєтеся оплатити замовлення згідно з умовами
              </li>
              <li>Ми залишаємо за собою право відхилити замовлення</li>
              <li>Ціни можуть змінюватися без попереднього повідомлення</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              4. Інтелектуальна власність
            </h2>
            <p className='text-text/80 leading-relaxed'>
              Весь контент на цьому сайті, включаючи текст, зображення, логотипи
              та дизайн, є власністю Ersag / Ерсаг або їх ліцензіарів і
              захищений законами про авторське право. Будь-яке несанкціоноване
              використання заборонено.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              5. Обмеження відповідальності
            </h2>
            <p className='text-text/80 leading-relaxed'>
              Ми намагаємося забезпечити точність інформації на сайті, але не
              гарантуємо повної безпомилковості. Ми не несемо відповідальності
              за будь-які збитки, що виникли в результаті використання або
              неможливості використання нашого сайту.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>6. Зміни умов</h2>
            <p className='text-text/80 leading-relaxed'>
              Ми залишаємо за собою право змінювати ці умови в будь-який час.
              Зміни набувають чинності з моменту їх публікації на сайті.
              Продовжуючи використовувати сайт після змін, ви погоджуєтеся з
              новими умовами.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>7. Контакти</h2>
            <p className='text-text/80 leading-relaxed'>
              Якщо у вас є питання щодо цих умов, будь ласка, зв&apos;яжіться з
              нами:
            </p>
            <div className='mt-4 p-4 bg-accent2/10 rounded-lg'>
              <p className='text-text font-semibold mb-2'>Email:</p>
              <a
                href={`mailto:${
                  process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
                  "good.answer@gmail.com"
                }`}
                className='text-accent1 hover:text-accent2 transition-colors'>
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
                  "good.answer@gmail.com"}
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
