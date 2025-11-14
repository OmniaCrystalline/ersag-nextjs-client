/** @format */
"use client";
import React, { useEffect } from "react";
import { handleLogout } from "@/lib/zustand/handlers";
import { useRouter } from "next/navigation";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";

const LogoutBtn = () => {
  const router = useRouter();
  const state = useStore(useAuthStore, (state) => state);

  useEffect(() => {
    if (!state) return;
  }, [state]);

  const logout = async () => {
    const res = await handleLogout();
    alert(res.message);
    state.logout();
    router.push("/");
  };
  return (
    <button
      type='button'
      onClick={logout}
      className=' bg-text text-bg hover:bg-accent1 focus:bg-accent1'>
      Вийти з акаунту
    </button>
  );
};

export default LogoutBtn;
