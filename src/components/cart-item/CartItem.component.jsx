import React from "react";
import "./cartItem-style.scss";

const CartItem = ({ item: { img, name, price, quantity } }) => {
	return (
		<div className="cart-item">
			<img src={img} alt="" />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x {price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
