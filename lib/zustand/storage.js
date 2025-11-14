/** @format */

import { create } from "zustand";
import { persist } from "zustand/middleware";

const sum = (arr) =>
  arr.reduce((acc, curr) => (acc += curr.quantity * curr.price), 0);

const useAuthStore = create()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      basket: [],
      basketsum: null,
      admin: null,
      login: async (user) => {
        set({ user: user, isAuthenticated: true });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      setbasket: (elem) => {
        set((state) => {
          if (state.basket.findIndex((e) => e._id === elem._id) === -1) {
            return {
              basket: [...state.basket, elem],
              basketsum: sum([...state.basket, elem]),
            };
          } else return { basket: state.basket };
        });
      },
      setquantity: (quantity, _id) => {
        set((state) => {
          if (quantity < 1) return { basket: state.basket };
          else {
            const index = state.basket.findIndex((e) => e._id === _id);
            state.basket[index].quantity = quantity;
            return { basket: state.basket, basketsum: sum(state.basket) };
          }
        });
      },
      resetbasket: () => {
        set({ basket: [], basketsum: null });
      },
      renovebasketelem: (_id) => {
        set((state) => {
          const arr = state.basket.filter((e) => e._id !== _id);
          return {
            basket: state.basket.filter((e) => e._id !== _id),
            basketsum: sum(arr),
          };
        });
      },
      updateuser: (data) => {
        set({ user: data });
      },
    }),
    {
      name: "auth",
    }
  )
);

export default useAuthStore;
