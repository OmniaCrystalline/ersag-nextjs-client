/** @format */

"use client";
import React from "react";
import { BiLike } from "react-icons/bi";
import { handleOrderSend } from "@/lib/zustand/handlers";

const OrderSubmitBtn = ({ order, user, resetbasket }) => {
  const sendOrder = async () => {
    const res = await handleOrderSend({user, order});
    if (res.status === 200) resetbasket();
    alert(res.message);
  };
  return (
    <div className='p-5'>
      <button
        onClick={sendOrder}
        type='button'
        className='border border-accent2 border-spacing-1 rounded px-2 py-1 text-accent2 flex shadow-md hover:shadow-lg focus:shadow-lg m-auto gap-1'>
        Підтверджую замовлення <BiLike className='m-auto' />
      </button>
    </div>
  );
};

export default OrderSubmitBtn;
