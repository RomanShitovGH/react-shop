function Cart(props) {
  const { quantity = [], handleBasketShow = Function.prototype } = props;
  //const [uniqueArr, setUniqueArr] = useState([]);

  /*useEffect(() => {
    quantity.filter((item) => {
      let i = uniqueArr.findIndex((x) => x.id === item.id);

      if (i === -1) {
        !uniqueArr.length
          ? setUniqueArr([item])
          : setUniqueArr([...uniqueArr, item]);
      }
    });

    //console.log("quantity =", quantity);
  }, [quantity]);*/

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className="cart-quantity">{quantity.length}</span>
      ) : null}
    </div>
  );
}

export { Cart };
