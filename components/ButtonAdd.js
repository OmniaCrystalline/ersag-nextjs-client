/** @format */
"use client";
import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";

const ButtonAdd = ({ elem }) => {
  const state = useStore(useAuthStore, (state) => state);
  const handler = state?.setbasket;

  const handleClick = () => {
    elem.quantity = 1;
    handler(elem);
  };

  return (
    <>
      {handler && (
        <button className='text-accent1' onClick={handleClick} type='button'>
          <FaShoppingBasket />
        </button>
      )}
    </>
  );
};

export default ButtonAdd;
