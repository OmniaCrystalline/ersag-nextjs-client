/** @format */

"use client";
import React, { useEffect, useState } from "react";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";
import { shallow } from "zustand/shallow";
import { handleHistory } from "@/lib/zustand/handlers";
const moment = require("moment");

const History = () => {
  const [orders, setorders] = useState([]);
  const state = useStore(useAuthStore, (state) => state, shallow);
  const user = state?.user;

  useEffect(() => {
    if (!user) return;
    const getOrders = async () => {
      const res = await handleHistory(user.name);
      const { message } = res;
      setorders(message);
    };
    getOrders();
  }, [user]);

  return (
    <div className='container px-5 max-w-5xl'>
      {!user && <span>Зареєструйтись щоб бачити свою історію замовлень і замовляти без заповнення форм</span>}
      {user && (
        <>
          <span>{user.name}</span> <h2>Ваша історія замовлень</h2>
          {orders.length > 0 &&
            orders.map((e) => (
              <div key={e.date} className='grid gap-2  p-1'>
                <p className='text-center text-accent1'>
                  {moment(e.date).format("DD-MM-YYYY")}
                </p>
                <div>
                  {e.order.map(({ title, quantity, price }, index) => (
                    <div
                      key={e.date + index}
                      className='grid gap-2 grid-cols-3 md:grid-cols-5 p-2 bg-bg '>
                      <p className='col-span-3 md:col-span-2'>{index + 1} - { title}</p>
                      {/*<p className='col-span-2'>{title}</p>*/}
                      <p className='text-center'>{quantity} шт</p>
                      <p className='text-center'>ціна: {price} грн</p>
                      <p className='text-center'>
                        на суму: {quantity * price}грн
                      </p>
                    </div>
                  ))}
                  {/*<button
                  className='ml-auto w-fit border border-accent2  rounded px-2 flex justify-items-end'
                  type='button'
                  onClick={handleRepeat}>
                  Повторити замовлення
                </button>*/}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default History;

const HistoryHeader = () => {
  return <div className='container px-5 max-w-5xl'></div>;
};
