import classes from './CartButton.module.css';
import {cartActions} from '../../store/cart-slice.js';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

const CartButton = (props) => {

	const itemQuantity = useSelector(state=> state.cartStore.cartItems.length);

	const dispatch = useDispatch();
	const showCartHandler = () => {
		dispatch(cartActions.showCart());

	}

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemQuantity}</span>
    </button>
  );
};

export default CartButton;
