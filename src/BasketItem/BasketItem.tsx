import Button from "@material-ui/core/Button";
// Types
import { BasketItemType } from "../App";
//styles
import { Wrapper } from "./BasketItem.styles";

type Props = {
  item: BasketItemType;
  addToBasket: (clicedItem: BasketItemType) => void;
  removeFromBasket: (id: number) => void;
};

const BasketItem: React.FC<Props> = ({ item, addToBasket, removeFromBasket }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: £{item.price}</p>
        {/* // .fixed is for the price decimals */}
        <p>Total £{(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button size="small" disableElevation variant="contained" onClick={() => removeFromBasket(item.id)}>
          -
        </Button>
        <p>{item.amount}</p>
        <Button size="small" disableElevation variant="contained" onClick={() => addToBasket(item)}>
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

export default BasketItem;
