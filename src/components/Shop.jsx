import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";

import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BascketList } from "./BasketList";
import { Alert } from "./Alert";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToBasket = (good) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === good.id);

    if (itemIndex < 0) {
      /*!order.length ? setOrder([good]) :*/ setOrder([...order, good]);
      console.log("сюда зашел 1");
    } else {
      order[itemIndex].quantity = order[itemIndex].quantity + good.quantity;
      setOrder([...order]);
    }

    setAlertName(good.name);
  };

  const removeFromBasket = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const plusGood = (id) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === id);
    order[itemIndex].quantity = order[itemIndex].quantity + 1;
    setOrder([...order]);
  };

  const minusGood = (id) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === id);

    if (order[itemIndex].quantity > 1) {
      order[itemIndex].quantity = order[itemIndex].quantity - 1;
      setOrder([...order]);
    }
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addCart={addToBasket} />
      )}
      {isBasketShow && (
        <BascketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          plusGood={plusGood}
          minusGood={minusGood}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
}
