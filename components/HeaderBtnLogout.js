/** @format */

"use client";
import React from "react";
import { TbLogout, TbLogout2 } from "react-icons/tb";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";
import { shallow } from "zustand/shallow";

const HeaderBtnLogout = ({ user }) => {
  const state = useStore(useAuthStore, (state) => state, shallow);

  const logout = () => {
    state.logout();
  };

  return (
    <button onClick={logout} className='flex gap-1 md:ml-auto drop-shadow-lg hover:drop-shadow-xl w-fit'>
      <span className='drop-shadow-lg'>{user}</span>
      <TbLogout className='m-auto' />
    </button>
  );
};

export default HeaderBtnLogout;
