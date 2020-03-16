import React, { useState } from "react";
import HeroSliderItem from "../Hero-Slider-Item/HeroSliderItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HeroSlider.style.scss";

const HeroSlider = () => {
	const ProductData = [
		{
			id: 1,
			name: "Boskke Cube",
			catagory: "Home",
			img:
				"https://cdn.shopify.com/s/files/1/0233/5133/products/product.f4.a.png?v=1574226660",
			price: "$90",
			Links: "/shop"
		},
		{
			id: 1,
			name: "Boskke Cube",
			catagory: "Home",
			img: "https://www.pngkit.com/png/full/288-2886511_monstera-leaf-png.png",
			price: "$90",
			Links: "/shop"
		}
	];
	const [state] = useState(ProductData);
	return (
		<div
			className="hero-area"
			style={{
				backgroundImage: `url('https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/05/pattern.png)`,
				backgroundSize: "cover",
				backgroundRepeat: "noRepeat",
				height: "550px"
			}}>
			<Carousel
				additionalTransfrom={0}
				arrows={false}
				autoPlay={true}
				autoPlaySpeed={5000}
				centerMode={false}
				className=""
				containerClass="container-with-dots"
				dotListClass=""
				draggable
				focusOnSelect={false}
				infinite={true}
				itemClass=""
				keyBoardControl
				minimumTouchDrag={80}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				customTransition="5s all fade-in-out"
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024
						},
						items: 1,
						partialVisibilityGutter: 40
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0
						},
						items: 1,
						partialVisibilityGutter: 30
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464
						},
						items: 1,
						partialVisibilityGutter: 30
					}
				}}
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable>
				{state.map((x, i) => (
					<HeroSliderItem key={i} item={x} />
				))}
			</Carousel>
		</div>
	);
};

export default HeroSlider;
