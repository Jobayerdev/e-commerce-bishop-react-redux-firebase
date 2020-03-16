import React, { useState } from "react";
import "./TrandingList.style.scss";
import TrandingItem from "../Trandingi-Item/TrandingItem";
import ElementTitle from "../Title/ElementTitle";

const TrandingList = () => {
	const [state] = useState({
		newItem: [
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			}
		],
		topRated: [
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			}
		],
		products: [
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			}
		],
		bestSellers: [
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			},
			{
				name: "The age of collage",
				img:
					"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/yes_088_boskee_cube_3-1340x7851-550x700.jpg",
				price: "$120",
				rating: 5.0
			}
		]
	});
	return (
		<div className="tranding-list">
			<div className="new-item">
				<ElementTitle>Tranding List</ElementTitle>
				{state.newItem.map((x, i) => (
					<TrandingItem key={i} item={x} />
				))}
			</div>
			<div className="top-rated">
				<ElementTitle>Top Rated</ElementTitle>
				{state.topRated.map((x, i) => (
					<TrandingItem key={i} item={x} />
				))}
			</div>
			<div className="products">
				<ElementTitle>Products</ElementTitle>
				{state.products.map((x, i) => (
					<TrandingItem key={i} item={x} />
				))}
			</div>
			<div className="best-seller">
				<ElementTitle>Best seller</ElementTitle>
				{state.bestSellers.map((x, i) => (
					<TrandingItem key={i} item={x} />
				))}
			</div>
		</div>
	);
};

export default TrandingList;
