/** @format */
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SwitcherForms = () => {
  const router = usePathname();

  return (
    <>
      <div className='flex p-3'>
        <Link
          href='/login'
          className={
            router === "/login"
              ? "btn-active-auth w-1/2 p-2 text-center"
              : "w-1/2 p-2 text-center"
          }>
          Увійти
        </Link>
        <Link
          href='/signup'
          className={
            router === "/signup"
              ? "btn-active-auth w-1/2 p-2 text-center"
              : "w-1/2 p-2 text-center"
          }>
          Зареєструватись
        </Link>
      </div>
    </>
  );
};

export default SwitcherForms;
