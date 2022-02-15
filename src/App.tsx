import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Item from "./item/Item";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
// Styles
import { Wrapper, StyledButton } from "./App.styles";
// Types
export type BasketItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<BasketItemType[]> =>
  // first await is for converting to json, second await is for the API call itself
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [basketOpen, setBasketOpen] = useState(false)
  const [basketItems, setBasketItems] = useState([] as BasketItemType[])
  const { data, isLoading, error } = useQuery<BasketItemType[]>("products", getProducts);
  console.log(data);

  const getTotalItems = (items: BasketItemType[]) => 
  // acc = accumulator
  //  This will iterate through all the items in the basket, and will use the property 'amount' and add up the amount,
  // giving us the total amount that's in the basket
  items.reduce((acc: number, item) => acc + item.amount, 0)

  const handleAddToBasket = (clickedItem: BasketItemType) => null;

  const handleRemoveFromBasket = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={basketOpen} onClose={() => setBasketOpen(false)}>
        Basket goes here
      </Drawer>
    <StyledButton onClick={() => setBasketOpen(true)}>
    <Badge badgeContent={getTotalItems(basketItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
    </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToBasket={handleAddToBasket} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
