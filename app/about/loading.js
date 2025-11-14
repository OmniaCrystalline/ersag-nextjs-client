/** @format */

import React from "react";
import Loader from "@/components/Loader";

const Loading = () => {
  return (
    <div className='w-full py-8'>
      <div className='max-w-5xl mx-auto px-5'>
        <Loader size='large' />
      </div>
    </div>
  );
};

export default Loading;
