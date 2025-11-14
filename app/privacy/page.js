/** @format */

import React from "react";
import { GiLaurels } from "react-icons/gi";

export const metadata = {
  title: "Політика конфіденційності - Ersag / Ерсаг",
  description: "Політика конфіденційності та захисту персональних даних",
};

const PrivacyPage = () => {
  return (
    <div className='w-full py-8'>
      <div className='max-w-4xl mx-auto px-5'>
        <div className='mb-8 text-center'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <GiLaurels className='text-accent1 w-8 h-7' />
            <h1 className='text-3xl md:text-4xl font-bold text-text'>
              Політика конфіденційності
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
              1. Загальні положення
            </h2>
            <p className='text-text/80 leading-relaxed'>
              Ця Політика конфіденційності описує, як ми збираємо,
              використовуємо та захищаємо вашу персональну інформацію при
              використанні нашого веб-сайту. Ми зобов&apos;язуємося захищати
              вашу конфіденційність та дотримуватися вимог законодавства України
              про захист персональних даних.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              2. Збір інформації
            </h2>
            <p className='text-text/80 leading-relaxed mb-3'>
              Ми збираємо наступні типи інформації:
            </p>
            <ul className='list-disc list-inside space-y-2 text-text/80 ml-4'>
              <li>
                <strong>Персональні дані:</strong> ім&apos;я, електронна пошта,
                номер телефону, адреса доставки
              </li>
              <li>
                <strong>Технічна інформація:</strong> IP-адреса, тип браузера,
                операційна система, дата та час відвідування
              </li>
              <li>
                <strong>Cookies:</strong> ми використовуємо cookies для
                покращення функціональності сайту та аналізу використання
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              3. Використання інформації
            </h2>
            <p className='text-text/80 leading-relaxed mb-3'>
              Ми використовуємо зібрану інформацію для:
            </p>
            <ul className='list-disc list-inside space-y-2 text-text/80 ml-4'>
              <li>Обробки та виконання ваших замовлень</li>
              <li>Зв&apos;язку з вами щодо замовлень та запитів</li>
              <li>Покращення якості обслуговування</li>
              <li>Відправки маркетингових повідомлень (за вашою згодою)</li>
              <li>Забезпечення безпеки та запобігання шахрайству</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              4. Захист даних
            </h2>
            <p className='text-text/80 leading-relaxed'>
              Ми вживаємо технічних та організаційних заходів для захисту ваших
              персональних даних від несанкціонованого доступу, втрати, знищення
              або зміни. Всі дані передаються за допомогою зашифрованих
              з&apos;єднань (HTTPS).
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>5. Cookies</h2>
            <p className='text-text/80 leading-relaxed mb-3'>
              Наш веб-сайт використовує cookies для:
            </p>
            <ul className='list-disc list-inside space-y-2 text-text/80 ml-4'>
              <li>Збереження ваших налаштувань та вподобань</li>
              <li>Покращення функціональності сайту</li>
              <li>Аналізу використання сайту</li>
              <li>Збереження товарів у кошику</li>
            </ul>
            <p className='text-text/80 leading-relaxed mt-3'>
              Ви можете налаштувати свій браузер для відмови від cookies, але це
              може вплинути на функціональність сайту.
            </p>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>6. Ваші права</h2>
            <p className='text-text/80 leading-relaxed mb-3'>Ви маєте право:</p>
            <ul className='list-disc list-inside space-y-2 text-text/80 ml-4'>
              <li>Отримувати інформацію про ваші персональні дані</li>
              <li>Вимагати виправлення неточних даних</li>
              <li>Вимагати видалення ваших персональних даних</li>
              <li>Відкликати згоду на обробку даних</li>
              <li>Обмежити обробку ваших персональних даних</li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>7. Контакти</h2>
            <p className='text-text/80 leading-relaxed'>
              Якщо у вас є питання щодо цієї Політики конфіденційності або ви
              хочете реалізувати свої права, будь ласка, зв&apos;яжіться з нами:
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

          <section>
            <h2 className='text-2xl font-bold text-text mb-4'>
              8. Зміни в політиці
            </h2>
            <p className='text-text/80 leading-relaxed'>
              Ми залишаємо за собою право оновлювати цю Політику
              конфіденційності в будь-який час. Всі зміни будуть опубліковані на
              цій сторінці з зазначенням дати останнього оновлення.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
