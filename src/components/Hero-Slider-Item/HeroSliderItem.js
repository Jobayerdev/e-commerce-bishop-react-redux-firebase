import React from "react";
import "./HeroSliderItem.style.scss";

const HeroSliderItem = ({ item }) => {
	return (
		<div className="hero-slide">
			<div className="slide-img">
				<img src={item.img} alt="" />
			</div>
			<div className="slide-content">
				<h1>{item.name}</h1>
				<h4>{item.catagory}</h4>
				<p className="price">
					<strike>{item.price}</strike>
					{item.price}
				</p>
				<a href={item.link}>SHOP now</a>
			</div>
		</div>
	);
};

export default HeroSliderItem;
