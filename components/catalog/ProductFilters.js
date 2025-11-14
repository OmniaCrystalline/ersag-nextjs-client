/** @format */

"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";

const ProductFilters = ({ categories = [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  
  const getSearchParam = (key) => {
    try {
      return searchParams?.get(key) || "";
    } catch {
      return "";
    }
  };
  
  const [filters, setFilters] = useState(() => ({
    search: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "",
  }));

  useEffect(() => {
    if (searchParams) {
      setFilters({
        search: getSearchParam("search"),
        category: getSearchParam("category"),
        minPrice: getSearchParam("minPrice"),
        maxPrice: getSearchParam("maxPrice"),
        sortBy: getSearchParam("sortBy"),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const applyFilters = (updatedFilters = null) => {
    const filtersToApply = updatedFilters || filters;
    const params = new URLSearchParams();
    
    if (filtersToApply.search) params.set("search", filtersToApply.search);
    if (filtersToApply.category) params.set("category", filtersToApply.category);
    if (filtersToApply.minPrice) params.set("minPrice", filtersToApply.minPrice);
    if (filtersToApply.maxPrice) params.set("maxPrice", filtersToApply.maxPrice);
    if (filtersToApply.sortBy) params.set("sortBy", filtersToApply.sortBy);
    
    const queryString = params.toString();
    const url = queryString ? `/catalog?${queryString}` : "/catalog";
    router.push(url);
    setIsOpen(false);
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      category: "",
      minPrice: "",
      maxPrice: "",
      sortBy: "",
    });
    router.push("/catalog");
    setIsOpen(false);
  };

  const hasActiveFilters = 
    filters.search || 
    filters.category || 
    filters.minPrice || 
    filters.maxPrice || 
    filters.sortBy;

  return (
    <div className='mb-6'>
      {/* Пошук та кнопка фільтрів */}
      <div className='flex flex-col md:flex-row gap-4 mb-4'>
        <div className='flex-1 relative'>
          <FaSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-text/50' />
          <input
            type='text'
            placeholder='Пошук товарів...'
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            onKeyPress={(e) => e.key === "Enter" && applyFilters()}
            className='w-full pl-10 pr-4 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
          />
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='px-4 py-2 bg-accent2 text-bg rounded-lg hover:bg-accent2/90 transition-colors flex items-center gap-2'>
            <FaFilter />
            Фільтри
            {hasActiveFilters && (
              <span className='bg-accent1 text-bg rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                !
              </span>
            )}
          </button>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className='px-4 py-2 bg-accent1/20 text-accent1 rounded-lg hover:bg-accent1/30 transition-colors flex items-center gap-2'>
              <FaTimes />
              Очистити
            </button>
          )}
        </div>
      </div>

      {/* Панель фільтрів */}
      {isOpen && (
        <div className='bg-white border border-text/20 rounded-lg p-6 shadow-lg mb-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* Категорія */}
            <div>
              <label className='block text-sm font-semibold text-text mb-2'>
                Категорія
              </label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className='w-full px-3 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'>
                <option value=''>Всі категорії</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Мінімальна ціна */}
            <div>
              <label className='block text-sm font-semibold text-text mb-2'>
                Мін. ціна (грн)
              </label>
              <input
                type='number'
                value={filters.minPrice}
                onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                placeholder='0'
                min='0'
                className='w-full px-3 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
              />
            </div>

            {/* Максимальна ціна */}
            <div>
              <label className='block text-sm font-semibold text-text mb-2'>
                Макс. ціна (грн)
              </label>
              <input
                type='number'
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                placeholder='Без обмежень'
                min='0'
                className='w-full px-3 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'
              />
            </div>

            {/* Сортування */}
            <div>
              <label className='block text-sm font-semibold text-text mb-2'>
                Сортувати
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className='w-full px-3 py-2 border border-text/20 rounded-lg focus:outline-accent1 focus:border-accent1'>
                <option value=''>За замовчуванням</option>
                <option value='price-asc'>Ціна: від низької до високої</option>
                <option value='price-desc'>Ціна: від високої до низької</option>
                <option value='title-asc'>Назва: А-Я</option>
                <option value='title-desc'>Назва: Я-А</option>
              </select>
            </div>
          </div>

          {/* Кнопки дій */}
          <div className='flex gap-3 mt-6'>
            <button
              onClick={applyFilters}
              className='px-6 py-2 bg-accent1 text-bg rounded-lg hover:bg-accent1/90 transition-colors font-medium'>
              Застосувати
            </button>
            <button
              onClick={clearFilters}
              className='px-6 py-2 bg-accent2 text-bg rounded-lg hover:bg-accent2/90 transition-colors font-medium'>
              Скинути
            </button>
          </div>
        </div>
      )}

      {/* Активні фільтри */}
      {hasActiveFilters && !isOpen && (
        <div className='flex flex-wrap gap-2 text-sm'>
          {filters.search && (
            <span className='px-3 py-1 bg-accent1/20 text-accent1 rounded-full flex items-center gap-2'>
              Пошук: {filters.search}
              <button
                onClick={() => {
                  const updatedFilters = { ...filters, search: "" };
                  setFilters(updatedFilters);
                  applyFilters(updatedFilters);
                }}
                className='hover:text-accent1/70'>
                <FaTimes />
              </button>
            </span>
          )}
          {filters.category && (
            <span className='px-3 py-1 bg-accent2/20 text-accent2 rounded-full flex items-center gap-2'>
              Категорія: {filters.category}
              <button
                onClick={() => {
                  const updatedFilters = { ...filters, category: "" };
                  setFilters(updatedFilters);
                  applyFilters(updatedFilters);
                }}
                className='hover:text-accent2/70'>
                <FaTimes />
              </button>
            </span>
          )}
          {(filters.minPrice || filters.maxPrice) && (
            <span className='px-3 py-1 bg-accent1/20 text-accent1 rounded-full flex items-center gap-2'>
              Ціна: {filters.minPrice || "0"} - {filters.maxPrice || "∞"} грн
              <button
                onClick={() => {
                  const updatedFilters = { ...filters, minPrice: "", maxPrice: "" };
                  setFilters(updatedFilters);
                  applyFilters(updatedFilters);
                }}
                className='hover:text-accent1/70'>
                <FaTimes />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductFilters;

