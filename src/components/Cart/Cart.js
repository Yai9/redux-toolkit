import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {

  const store = useSelector(state=>state.cartStore.cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
	  {store.map(item=>(
        <CartItem
          item={{
		id: item.id,
		key: item.id,
		title: item.title,
		quantity: item.quantity,
		price: item.price,
		total: item.total
	  }}
        />

	  ))}
      </ul>
    </Card>
  );
};

export default Cart;
