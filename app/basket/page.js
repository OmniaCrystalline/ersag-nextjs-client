/** @format */
"use client";
import BasketList from "@/components/basket/BasketList";
import UserData from "@/components/basket/UserData";
import React, { useEffect } from "react";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";
import OrderSubmitBtn from "@/components/basket/OrderSubmitBtn";

const BasketPage = () => {
  const state = useStore(useAuthStore, (state) => state);
  const basket = state?.basket;
  const sum = state?.basketsum;
  const handledelete = state?.renovebasketelem;
  const handlequantity = state?.setquantity;
  const user = state?.user;
  const resetbasket = state?.resetbasket

  useEffect(() => {
    if (!state) return;
  }, [state]);

  return (
    <div className='container m-auto p-3 grid gap-3'>
      <BasketList
        basket={basket}
        sum={sum}
        handledelete={handledelete}
        handlequantity={handlequantity}
      />
      <UserData />
      {basket && basket.length > 0 && (
        <OrderSubmitBtn order={basket} user={user} resetbasket={resetbasket} />
      )}
    </div>
  );
};

export default BasketPage;
