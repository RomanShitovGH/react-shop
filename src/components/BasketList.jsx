import { BascketItem } from "./BasketItem";

function BascketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    plusGood = Function.prototype,
    minusGood = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина
        <div class="secondary-content close-btn" onClick={handleBasketShow}>
          <i class="material-icons">clear</i>
        </div>
      </li>
      {order.length ? (
        order.map((item) => (
          <BascketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            plusGood={plusGood}
            minusGood={minusGood}
          />
        ))
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn-small">Оформить</button>
      </li>
    </ul>
  );
}

export { BascketList };
