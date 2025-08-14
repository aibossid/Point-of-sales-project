import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDataStore = create(
  persist((set) => {
    return {
      product: [],
      cart: [],
      searchKeyword: "",

      getProduct: async () => {
        try {
          const res = await axios.get("https://fakestoreapi.com/products");
          set({ product: res.data });
        } catch (error) {
          console.log(error);
        }
      },

      addToCart: (addProduct, qty) => {
        set((state) => {
          const isExisting = state.cart.find(
            (item) => item.id === addProduct.id
          );
          if (isExisting) {
            return {
              cart: state.cart.map((product) =>
                product.id === addProduct.id
                  ? { ...product, qty: product.qty + qty }
                  : product
              ),
            };
          }
          return {
            cart: [...state.cart, { ...addProduct, qty: qty }],
          };
        });
      },

      decQty: (id) => {
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.id === id
                ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 0 }
                : item
            ),
          };
        });
      },

      removeFromCart: (id) => {
        set((state) => {
          return {
            cart: state.cart.filter((item) => item.id !== id),
          };
        });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      getSearchKeyword: (keyword) => {
        set({ searchKeyword: keyword });
      },

      updateQty: (id, qty) => {
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, qty: qty > 0 ? qty : "" } : item
            ),
          };
        });
      },
    };
  })
);
