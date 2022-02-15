import BasketItem from '../BasketItem/BasketItem'
// Styles
import { Wrapper } from './Basket.styles'
// Types
import { BasketItemType } from '../App'

type Props = {
  basketItems: BasketItemType[];
  addToBasket: (clickedItem: BasketItemType) => void;
  removeFromBasket: (id: number) => void;
};

const Basket: React.FC<Props> = ({ basketItems, addToBasket, removeFromBasket }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Basket</h2>
      {basketItems.length === 0 ? <p>No items in basket.</p> : null}
      {basketItems.map(item => (
        <BasketItem />
      ))}
    </Wrapper>
  )
}

export default Basket;