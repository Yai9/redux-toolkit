import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
	const DUMMY_DATA =[
		{
		id:"id1",
		title:"A Book",
		price: 6,
		description:"This is a first product - amazing!",
	        quantity: 1,
		total: 0
		},
				{
		id:"id2",
		title:"A Shirt",
		price: 8,
		description:"This is a second product - amazing!",
		quantity: 1,
		total:0
				}

	]
	
	return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_DATA.map(product=>(
        <ProductItem
		id={product.id}
		title ={product.title}
		price ={product.price}
	        total = {product.total}
	        quantity = {product.quantity}
          	description={product.description}
        />

		))}
      </ul>
    </section>
  );
};

export default Products;
