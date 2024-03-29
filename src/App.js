import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

import {useSelector} from 'react-redux';


const App = () =>{

	const showCart = useSelector(state=>state.cartStore.showCart); 

	return (
    <Layout>
	  {showCart &&
      <Cart />
	  }
      <Products />
    </Layout>
  );
}

export default App;
