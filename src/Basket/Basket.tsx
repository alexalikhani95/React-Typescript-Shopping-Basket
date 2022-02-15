import BasketItem from "../BasketItem/BasketItem";
// Styles
import { Wrapper } from "./Basket.styles";
// Types
import { BasketItemType } from "../App";

type Props = {
  basketItems: BasketItemType[];
  addToBasket: (clickedItem: BasketItemType) => void;
  removeFromBasket: (id: number) => void;
};

const Basket: React.FC<Props> = ({ basketItems, addToBasket, removeFromBasket }) => {
  const calculateTotal = (items: BasketItemType[]) => items.reduce((accumulator: number, item) => accumulator + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Basket</h2>
      {basketItems.length === 0 ? <p>No items in basket.</p> : null}
      {basketItems.map((item) => (
        <BasketItem key={item.id} item={item} addToBasket={addToBasket} removeFromBasket={removeFromBasket} />
      ))}
      <h2>Total: £{calculateTotal(basketItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Basket;
