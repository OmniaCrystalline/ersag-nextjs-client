/** @format */

"use client";

import React, { useState } from "react";
import { FaEnvelope, FaUser, FaPhone, FaComment } from "react-icons/fa";

const ContactForm = ({ products = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    usedProducts: false,
    productsUsed: [],
    productsUsedText: "",
    likedProducts: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Переконуємося, що продукти є масивом
  const productsList = Array.isArray(products) ? products : [];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "usedProducts") {
        setFormData({
          ...formData,
          usedProducts: checked,
          productsUsed: checked ? formData.productsUsed : [],
          likedProducts: checked ? formData.likedProducts : "",
        });
      } else if (name === "product") {
        // Обробка чекбоксів продуктів
        const productId = value;
        setFormData({
          ...formData,
          productsUsed: checked
            ? [...formData.productsUsed, productId]
            : formData.productsUsed.filter((id) => id !== productId),
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            data.message ||
            "Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.",
        });

        // Очищаємо форму
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          usedProducts: false,
          productsUsed: [],
          productsUsedText: "",
          likedProducts: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.message ||
            "Помилка відправки. Спробуйте ще раз або напишіть нам на email.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Помилка відправки. Спробуйте ще раз або напишіть нам на email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='w-full py-12 md:py-16 bg-gradient-to-br from-accent2/10 to-accent1/10'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='text-center mb-10'>
          <h2 className='text-2xl md:text-3xl font-bold text-text mb-4'>
            Зв&apos;яжіться з нами
          </h2>
          <p className='text-text/70 max-w-2xl mx-auto'>
            Маєте питання або пропозиції? Напишіть нам, і ми відповімо вам
            найближчим часом.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Контактна інформація */}
          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-semibold text-text mb-4'>
                Контактна інформація
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <FaEnvelope className='text-accent1 w-5 h-5 mt-1 flex-shrink-0' />
                  <div>
                    <p className='font-medium text-text'>Email</p>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'good.answer@gmail.com'}`}
                      className='text-accent1 hover:text-accent2 transition-colors'>
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'good.answer@gmail.com'}
                    </a>
                  </div>
                </div>
                <div className='p-4 bg-white rounded-lg shadow-md'>
                  <p className='text-sm text-text/70'>
                    Ми завжди раді відповісти на ваші запитання та допомогти з
                    вибором продукції Ersag.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Форма */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-text mb-2'>
                  <FaUser className='inline w-4 h-4 mr-2' />
                  Ім&apos;я
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
                  placeholder="Ваше ім'я"
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-text mb-2'>
                  <FaEnvelope className='inline w-4 h-4 mr-2' />
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
                  placeholder='your.email@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-semibold text-text mb-2'>
                  <FaPhone className='inline w-4 h-4 mr-2' />
                  Телефон (необов&apos;язково)
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full px-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
                  placeholder='+38 (XXX) XXX-XX-XX'
                />
              </div>

              {/* Опитування */}
              <div className='border-t border-text/20 pt-4 mt-4'>
                <h3 className='text-lg font-semibold text-text mb-4'>
                  Опитування
                </h3>

                <div className='space-y-4'>
                  <div>
                    <label className='flex items-center gap-2 cursor-pointer'>
                      <input
                        type='checkbox'
                        name='usedProducts'
                        checked={formData.usedProducts}
                        onChange={handleChange}
                        className='w-4 h-4 text-accent1 rounded focus:ring-accent1'
                      />
                      <span className='text-sm text-text'>
                        Чи користувались ви продукцією Ersag раніше?
                      </span>
                    </label>
                  </div>

                  {formData.usedProducts && (
                    <div>
                      <label className='block text-sm font-semibold text-text mb-2'>
                        Які продукти ви використовували? (можна вибрати кілька)
                      </label>
                      {productsList.length > 0 ? (
                        <div className='max-h-40 overflow-y-auto border border-text/20 rounded-lg p-3 space-y-2'>
                          {productsList.map((product) => (
                            <label
                              key={product._id || product.id}
                              className='flex items-center gap-2 cursor-pointer hover:bg-accent2/10 p-2 rounded'>
                              <input
                                type='checkbox'
                                name='product'
                                value={product._id || product.id}
                                checked={formData.productsUsed.includes(
                                  product._id || product.id
                                )}
                                onChange={handleChange}
                                className='w-4 h-4 text-accent1 rounded focus:ring-accent1'
                              />
                              <span className='text-sm text-text'>
                                {product.title}
                              </span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <input
                          type='text'
                          name='productsUsedText'
                          value={formData.productsUsedText || ""}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              productsUsedText: e.target.value,
                            })
                          }
                          className='w-full px-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
                          placeholder='Вкажіть назви продуктів...'
                        />
                      )}
                    </div>
                  )}

                  {formData.usedProducts && (
                    <div>
                      <label
                        htmlFor='likedProducts'
                        className='block text-sm font-semibold text-text mb-2'>
                        Що вам сподобалось найбільше?
                      </label>
                      <textarea
                        id='likedProducts'
                        name='likedProducts'
                        value={formData.likedProducts}
                        onChange={handleChange}
                        rows={3}
                        className='w-full px-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1 resize-none'
                        placeholder='Опишіть, що вам сподобалось...'
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold text-text mb-2'>
                  <FaComment className='inline w-4 h-4 mr-2' />
                  Повідомлення
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full px-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1 resize-none'
                  placeholder='Ваше повідомлення...'
                />
              </div>

              {submitStatus && (
                <div
                  className={`p-3 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-accent2/20 text-accent2"
                      : "bg-accent1/20 text-accent1"
                  }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full px-6 py-3 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed'>
                {isSubmitting ? "Відправляється..." : "Відправити повідомлення"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
