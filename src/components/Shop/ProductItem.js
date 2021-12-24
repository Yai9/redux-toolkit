import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {cartActions} from '../../store/cart-slice.js';
import {useDispatch} from 'react-redux';

const ProductItem = (props) => {
	const { id, title, price, description, quantity, total } = props;

	const dispatch = useDispatch();

	const addItemHandler = () => {
		dispatch(cartActions.addToCart({id, title, price, description, quantity, total}))
			console.log(title)
			console.log(price)
console.log(id)
	}
  return (
    <li id={id} className={classes.item}>
	  <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
