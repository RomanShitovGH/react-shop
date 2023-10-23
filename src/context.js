import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromBasket = (id) => {
    dispatch({ type: "REMOVE_FROM_BASKET", payload: { id: id } });
  };

  value.basketShow = () => {
    dispatch({ type: "BASKET_SHOW" });
  };

  value.minusGood = (id) => {
    dispatch({ type: "MINUS_GOOD", payload: { id: id } });
  };

  value.plusGood = (id) => {
    dispatch({ type: "PLUS_GOOD", payload: { id: id } });
  };

  value.addToBasket = (good) => {
    dispatch({ type: "ADD_TO_BASKET", payload: { good: good } });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
