/** @format */

import React from "react";

const SkeletonLoader = ({ type = "product" }) => {
  if (type === "product") {
    return (
      <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className='bg-white rounded-lg shadow-lg p-5 animate-pulse'>
            <div className='h-12 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded mb-3' />
            <div className='h-48 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded mb-3' />
            <div className='h-4 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded mb-2 w-3/4' />
            <div className='h-4 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded mb-4 w-1/2' />
            <div className='flex justify-between'>
              <div className='h-8 bg-gradient-to-r from-accent1/30 to-accent2/30 rounded w-20' />
              <div className='h-4 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded w-24' />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "category") {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className='relative h-64 w-full rounded-lg overflow-hidden animate-pulse'>
            <div className='absolute inset-0 bg-gradient-to-r from-accent1/30 via-accent2/30 to-accent1/30' />
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='space-y-4 animate-pulse'>
      <div className='h-8 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded w-3/4' />
      <div className='h-4 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded w-full' />
      <div className='h-4 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded w-5/6' />
    </div>
  );
};

export default SkeletonLoader;

