import React, { useEffect, useContext } from "react";
import { API_KEY, API_URL } from "../config";

import { ShopContext } from "../context";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BascketList } from "./BasketList";
import { Alert } from "./Alert";

export default function Shop() {
  const { setGoods, loading, order, isBasketShow, alertName } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BascketList />}
      {alertName && <Alert />}
    </main>
  );
}
