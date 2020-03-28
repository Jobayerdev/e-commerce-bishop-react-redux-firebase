import { createSelector } from "reselect";

const selectState = (state) => state.cart;

// GET CART ITEMS
export const selectCartItems = createSelector(
	[selectState],
	(cart) => cart.cartItems
);

//TOGGLE CART
export const selectToggleHidden = createSelector(
	[selectState],
	(cart) => cart.hidden
);

//SUM PRICE IN CART ITEMS
export const selectTotal = createSelector([selectState], (items) =>
	items.cartItems.reduce(
		(accumulateTotal, currentTotal) =>
			accumulateTotal + currentTotal.quantity * currentTotal.price,
		0
	)
);
