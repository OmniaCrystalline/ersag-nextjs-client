/** @format */

"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";
import { handleUpdateUser } from "@/lib/zustand/handlers";

const UserData = () => {
  const state = useStore(useAuthStore, (state) => state);
  const user = state?.user;

  useEffect(() => {
    if (!state) return;
  }, [state]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formdata) => {
    const data = {};
    for (const key in formdata) {
      const value = formdata[key];
      if (value !== "" && user[key] !== value) {
        data[key] = value;
      }
    }

    let res = {};

    if (Object.keys(data).length !== 0) {
      res = await handleUpdateUser({ _id: user._id, data });
      if (res.status === 200) {
        state.updateuser(res);
      }
      alert(res.message);
    }
  };

  return (
    <>
      {user && (
        <h2 className='text-center text-accent1 font-medium'>
          Перевірте актуальність данних, змініть за необхідністю
        </h2>
      )}
      <form
        id='user'
        onSubmit={handleSubmit(onSubmit)}
        className='grid max-w-md m-auto gap-3 w-full bg-bg p-2 drop-shadow-md'>
        <label className='flex gap-2 relative'>
          ім`я
          <input
            defaultValue={user && user.name}
            placeholder={user && user.name}
            type='text'
            {...register("name", { required: !user ? true : false })}
            className='px-2 py-1 w-full rounded'
          />
          {errors.name && (
            <span className='text-accent1 text-xs absolute translate-y-1/2 right-2'>
              * обов`язкове поле
            </span>
          )}
        </label>
        <label className='flex gap-2 relative'>
          телефон
          <input
            defaultValue={user && user.phone}
            placeholder={user && user.phone}
            type='text'
            {...register("phone", {
              required: !user ? true : false,
              pattern: /^[0-9]*$/,
            })}
            className='px-2 py-1 w-full rounded'
          />
          {errors.phone && (
            <span className='text-accent1 text-xs absolute translate-y-1/2 right-2'>
              * обов`язкове поле, тільки цифри
            </span>
          )}
        </label>
        <label className='flex gap-2 relative'>
          пошта
          <input
            type='email'
            placeholder={user && user.email}
            defaultValue={user && user.email}
            {...register("email", { required: !user ? true : false })}
            className='px-2 py-1 w-full rounded'
          />
          {errors.email && (
            <span className='text-accent1 text-xs absolute translate-y-1/2 right-2'>
              * обов`язкове поле
            </span>
          )}
        </label>
        <button
          type='submit'
          className='px-2 py-1 text-text border border-text rounded w-fit m-auto hover:bg-text hover:text-bg'>
          {user ? "Оновити дані" : "Відправити"}
        </button>
      </form>
    </>
  );
};

export default UserData;
