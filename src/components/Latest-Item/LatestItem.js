import React, { useState } from "react";
import "./LatestItem.style.scss";
import SectionTitle from "../Title/SectionTitle";
import Item from "../Item/Item";

const LatestItem = () => {
	const ProductData = [
		{
			id: 1,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851.jpg",
			price: "90"
		},
		{
			id: 2,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_061_cast_iron_birds_1-1340x7851.jpg",
			price: "90"
		},
		{
			id: 3,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_086_tina_frey_hanging_planter_1-1340x7851.jpg",
			price: "90"
		},
		{
			id: 4,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_104_nourished_journal_1-1340x7851.jpg",
			price: "90"
		},
		{
			id: 5,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851.jpg",
			price: "90"
		},
		{
			id: 6,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851.jpg",
			price: "90"
		}
	];
	const [state] = useState(ProductData);
	return (
		<div className="latest">
			<SectionTitle>Latest Item</SectionTitle>
			<div className="latest-item">
				{state.map((x, i) => (
					<Item key={i} item={x} />
				))}
			</div>
		</div>
	);
};

export default LatestItem;
