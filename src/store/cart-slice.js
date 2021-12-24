import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	showCart: false,
	cartItems:[]

}

const cartSlice = createSlice({
	name:"cart",
	initialState: initialState,
	reducers:{
		showCart(state){
			state.showCart = !state.showCart
		},
		addToCart(state, action){
					const itemIndex = state.cartItems.findIndex(i=>i.id === action.payload.id);
					const cartItem = state.cartItems[itemIndex]
					

					if(cartItem){
					const updatedItem = {
						...cartItem,
						total: cartItem.total + cartItem.price * action.payload.quantity,
						quantity: cartItem.quantity + action.payload.quantity

				}
					const updatedArray = [...state.cartItems];
					updatedArray[itemIndex] = updatedItem;
					state.cartItems = updatedArray;
					} else {
						state.cartItems.push({
						id: action.payload.id,
						title: action.payload.title,
						price: action.payload.price,
						total: action.payload.total + action.payload.price * action.payload.quantity,
						quantity: action.payload.quantity++
					})

					}

				},
		removeFromCart(state, action){
					const itemIndex = state.cartItems.findIndex(i=>i.id === action.payload.id);
					const selectedItem = state.cartItems.find(i=>i.id === action.payload.id);

			                const cartItem = state.cartItems[itemIndex]


					if(selectedItem.quantity === 1){
						state.cartItems = state.cartItems.filter(i=>i.id !== action.payload.id)

					}else{

					const updatedItem = {
						...cartItem,
						id: action.payload.id,
						total: cartItem.total - cartItem.price * action.payload.quantity,
						quantity: cartItem.quantity - action.payload.quantity

				}
					const updatedArray = [...state.cartItems];
					updatedArray[itemIndex] = updatedItem;
					state.cartItems = updatedArray;
					}
			

	}
		
	
	
}})


export const cartActions = cartSlice.actions;


export default cartSlice;
