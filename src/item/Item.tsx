import Button from "@material-ui/core/Button";
// Types
import { BasketItemType } from "../App";
// Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: BasketItemType;
  handleAddToBasket: (clickedItem: BasketItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToBasket }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>£{item.price}</h3>
    </div>
    <Button onClick={() => handleAddToBasket(item)}>Add to basket</Button>
  </Wrapper>
);

export default Item;
