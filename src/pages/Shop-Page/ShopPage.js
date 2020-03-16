import React, { useState } from "react";
import "./shop-page.style.scss";
import Category from "../../components/Catagory/Catagory";
import SHOP_DATA from "./ShopData";

const ShopPage = () => {
	const [state] = useState(SHOP_DATA);
	console.log(state);

	return (
		<div className="shop-page">
			{state.map((x, i) => (
				<Category title={x.title} item={x.items} />
			))}
		</div>
	);
};

export default ShopPage;
