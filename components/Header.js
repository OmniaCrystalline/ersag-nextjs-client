/** @format */
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";
import { shallow } from "zustand/shallow";
import { TbLogout } from "react-icons/tb";
import HeaderBtnLogout from "./HeaderBtnLogout";
import { RiMenuFoldFill } from "react-icons/ri";
import { GiLaurels } from "react-icons/gi";

const Header = () => {
  const [navigation, setnavigation] = useState(false);
  const router = usePathname();
  const state = useStore(useAuthStore, (state) => state, shallow);
  const user = state?.user?.name || false;
  const basketLen = state?.basket?.length || 0;

  const close =
    "bg-accent2/50 text-text backdrop-blur-sm px-5 fixed grid py-5 md:grid md:h-[60px] md:fixed md:w-full md:py-0 right-full md:right-auto z-50";
  const open =
    "bg-accent2/50 text-text backdrop-blur-sm px-5 fixed grid py-5 md:grid md:h-[60px] md:fixed md:w-full md:py-0 translate-x-screen md:translate-none z-50";
  return (
    <div className=' transition-all grid z-50'>
      <div className='text-bg bg-accent2 h-[50px] md:hidden w-full grid z-50 relative'>
        <h1 className='place-self-center'>Ersag / Ерсаг</h1>
        <button
          onClick={() => setnavigation(!navigation)}
          className='text-bg fixed right-[25px] top-[25px] -translate-y-1/2 bg-accent1/50 p-2 z-50'>
          <RiMenuFoldFill className='' />
        </button>
      </div>

      <nav className={navigation ? open : close}>
        <div
          className='max-w-5xl gap-5 w-screen grid 
        md:flex md:p-0 md:rotate-0 md:place-self-center md:m-auto md:w-full'>
          <Link
            href='/'
            onClick={() => setnavigation(!navigation)}
            className='flex items-center gap-2 hover:drop-shadow-lg'>
            <GiLaurels className='text-accent1 w-7 h-6' />
            <span className={router === "/" ? "font-medium" : "font-normal"}>
              головна
            </span>
          </Link>
          <Link
            href='/catalog'
            onClick={() => setnavigation(!navigation)}
            className={
              router === "/catalog"
                ? "font-medium "
                : "font-normal hover:drop-shadow-lg "
            }>
            каталог
          </Link>
          <Link
            href='/history'
            onClick={() => setnavigation(!navigation)}
            className={
              router === "/history"
                ? "font-medium "
                : "font-normal hover:drop-shadow-lg "
            }>
            історія
          </Link>
          <Link
            href='/about'
            onClick={() => setnavigation(!navigation)}
            className={
              router === "/about"
                ? "font-medium"
                : "font-normal hover:drop-shadow-lg "
            }>
            про нас
          </Link>
          <Link
            href='/basket'
            onClick={() => setnavigation(!navigation)}
            className={
              router === "/basket"
                ? "font-medium"
                : "font-normal hover:drop-shadow-lg "
            }>
            кошик ({basketLen})
          </Link>
          {!user && (
            <Link
              href='/login'
              onClick={() => setnavigation(!navigation)}
              className={
                router === "/login"
                  ? "font-medium md:ml-auto flex gap-1 hover:drop-shadow-lg "
                  : "font-normal md:ml-auto flex gap-1 hover:drop-shadow-lg "
              }>
              вхід <TbLogout className='m-auto' />
            </Link>
          )}
          {user && <HeaderBtnLogout user={user} />}
          {navigation && (
            <button
              onClick={() => setnavigation(!navigation)}
              className='md:hidden bg-accent1/50 p-2 w-fit'>
              <RiMenuFoldFill className='' />
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
