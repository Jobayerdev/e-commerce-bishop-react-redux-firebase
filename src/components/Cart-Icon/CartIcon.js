import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assest/shopping-bag.svg";
import "./CartIcon.style.scss";

const CartIcon = ({ itemCount, plusIcon, ...otherProps }) => {
	return (
		<div className="shopping-icon">
			<ShoppingIcon className="icon" />
			{plusIcon ? <span className="plus-icon">+</span> : ""}
			{itemCount ? <span className="item-count">0</span> : ""}
		</div>
	);
};

export default CartIcon;
