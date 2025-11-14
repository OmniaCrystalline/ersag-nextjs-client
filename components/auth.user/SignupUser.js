/** @format */
"use client";
import { useState, useEffect } from "react";
import SwitcherForms from "./Switcher";
import { handleSignup } from "@/lib/zustand/handlers";
import { useRouter } from "next/navigation";
import useStore from "@/lib/zustand/hook";
import useAuthStore from "@/lib/zustand/storage";

const SignupForm = () => {
  const state = useStore(useAuthStore, (state) => state);
  const login = state?.login;
  useEffect(() => {
    if (!state) return;
  }, [state]);

  const router = useRouter();
  const [confirmpass, setconfirmpass] = useState(true);
  const [regexpass, setregexpass] = useState(true);
  const [regexphone, setregexphone] = useState(true);

  const checkPassword = (str) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/;
    const isValid = regex.test(str);
    setregexpass(isValid);
    return isValid;
  };

  const checkPhone = (str) => {
    const regex = /^(38)?\d{10}$/;
    const isValid = regex.test(str);
    setregexphone(isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirmPassword = e.target.confirm.value;
    const phone = e.target.phone.value;

    // Перевірка співпадіння паролів
    const passwordsMatch = password === confirmPassword;
    setconfirmpass(passwordsMatch);

    // Перевірка валідності пароля та телефону
    const isPasswordValid = checkPassword(password);
    const isPhoneValid = checkPhone(phone);

    // Використовуємо результати перевірок безпосередньо, а не зі стану
    if (passwordsMatch && isPasswordValid && isPhoneValid) {
      const user = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: phone,
        password: password,
      };
      const response = await handleSignup(user);
      console.log("user", response);
      if (response.status === 200) {
        login(response.data);
        router.push("/history");
      }
      alert(response.message);
    } else {
      // Показуємо повідомлення про помилки
      if (!passwordsMatch) {
        alert("Паролі не співпадають");
      } else if (!isPasswordValid) {
        alert(
          "Пароль має містити: мінімум одна заглавна літера, мінімум одну цифру, мінімальна довжина 6"
        );
      } else if (!isPhoneValid) {
        alert("Телефон має містити тільки цифри (10 цифр або 12 з кодом 38)");
      }
    }
  };
  return (
    <div className='container grid gap-2 m-auto md:w-1/2'>
      <SwitcherForms />
      <form onSubmit={handleSubmit} className='auth-form'>
        <label htmlFor='name'>ім`я</label>
        <input required type='text' name='name'></input>
        <label htmlFor='email'>пошта</label>
        <input required type='email' name='email'></input>
        <label htmlFor='phone'>телефон</label>
        <input required type='text' name='phone'></input>
        {!regexphone && <span>містить тільки цифри</span>}
        <label htmlFor='password'>пароль</label>
        <input required type='password' name='password'></input>
        {!regexpass && (
          <span>
            Пароль має містити : мінімум одна заглавна літера, мінімум одну
            цифру, мінімальна довжина 6
          </span>
        )}
        <label htmlFor='confirm'>підтвердити пароль</label>
        <input required type='password' name='confirm'></input>
        {!confirmpass && <span>паролі не співпадають</span>}
        <button type='submit'>Зареєструватись</button>
      </form>
    </div>
  );
};

export default SignupForm;
