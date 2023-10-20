import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [], addCart = Function.prototype } = props;

  if (!goods.length) {
    return <h3>Товаров нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addCartCallBack={addCart} />
      ))}
    </div>
  );
}

export { GoodsList };
