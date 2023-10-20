function BascketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    plusGood = Function.prototype,
    minusGood = Function.prototype,
  } = props;

  return (
    <li className="collection-item valign-wrapper">
      {name}
      <div class="secondary-content minus-btn" onClick={() => minusGood(id)}>
        <i class="material-icons">remove</i>
      </div>
      х {quantity}
      <div class="secondary-content plus-btn" onClick={() => plusGood(id)}>
        <i class="material-icons">add</i>
      </div>
      = {quantity * price} руб.
      <div
        class="secondary-content clear-btn valign-wrapper"
        onClick={() => removeFromBasket(id)}
      >
        <i class="material-icons">clear</i>
      </div>
    </li>
  );
}

export { BascketItem };
