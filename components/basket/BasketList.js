/** @format */

"use client";
import React from "react";
import BasketHeader from "./BasketHeader";
import BasketItem from "./BasketItem";

const BasketList = ({ sum, basket, handlequantity, handledelete }) => {
  return (
    <div>
      <h1 className="hidden">Корзина</h1>
      <BasketHeader />
      {basket &&
        basket.length > 0 &&
        basket.map((e) => (
          <BasketItem
            key={e._id}
            e={e}
            handlequantity={handlequantity}
            handledelete={handledelete}
          />
        ))}
      {sum && sum > 0 && <p className="text-center">Загальна сума: {sum > 0 ? sum : ""}грн</p>}
      {/*fond && (
        <p>
          Сума з переказом в фонд `Повернись живим`:{" "}
          {Math.round(basketSum * 1.05)}грн
        </p>
      )*/}
    </div>
  );
};

export default BasketList;
