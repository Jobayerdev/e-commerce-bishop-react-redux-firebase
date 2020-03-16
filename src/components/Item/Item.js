import React from "react";
import "./Item.style.scss";
import CartIcon from "../Cart-Icon/CartIcon";

const Item = ({ item }) => {
	return (
		<div className="item">
			<div
				className="item-bg"
				style={{
					backgroundImage: `url(${(item && item.img) ||
						(item && item.imageUrl)})`,
					backgroundSize: "cover"
				}}>
				<h2 className="item-title">
					{item && item.name} <span>{item && item.catagory}</span>
				</h2>
				<div className="item-footer">
					<div className="price">{item && item.price}</div>
					<div className="cart">
						<CartIcon plusIcon />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
