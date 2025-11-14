/** @format */
"use client";

import { handleLogin } from "@/lib/zustand/handlers";
import SwitcherForms from "./Switcher";
import { useRouter } from "next/navigation";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";
import { shallow } from "zustand/shallow";
import { useEffect } from "react";

const LoginForm = () => {
  const state = useStore(useAuthStore, (state) => state, shallow);

  useEffect(() => {
    if (!state) return;
  }, [state]);

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      query: e.target.query.value,
      password: e.target.password.value,
    };
    const response = await handleLogin([data]);
    alert(response.message);
    if (response.status === 200) {
      response.data._id = response.data._id.toString();
      state.login(response.data);
      router.push("/history");
    }
  };

  return (
    <div className='container md:w-1/2 m-auto grid gap-2'>
      <SwitcherForms />
      <form className='auth-form' onSubmit={handleSubmit}>
        <label htmlFor='type'>пошта або телефон</label>
        <input type='text' name='query' required></input>
        <label htmlFor='password'>пароль</label>
        <input type='password' name='password' required></input>
        <button htmlFor='submit'>Вхід</button>
      </form>
    </div>
  );
};

export default LoginForm;
