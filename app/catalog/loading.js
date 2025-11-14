/** @format */

import React from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

const Loading = () => {
  return (
    <div className='w-full py-8'>
      <div className='max-w-5xl mx-auto px-5'>
        <div className='mb-8'>
          <div className='h-10 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded w-64 mb-4 animate-pulse' />
          <div className='h-6 bg-gradient-to-r from-accent1/20 to-accent2/20 rounded w-96 animate-pulse' />
        </div>
        <SkeletonLoader type='product' />
      </div>
    </div>
  );
};

export default Loading;

