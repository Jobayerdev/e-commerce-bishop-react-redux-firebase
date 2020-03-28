import React, { useState } from "react";
import TopCollectionItem from "../Top-Collection-Item/TopCollectionItem";
import SectionTitle from "../Title/SectionTitle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TopCollection = () => {
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
		<div className="top-collection">
			<SectionTitle inverse>Home Collection</SectionTitle>
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
				customTransition="3s ease-in-out"
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024
						},
						items: 4,
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
						items: 2,
						partialVisibilityGutter: 30
					}
				}}
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable>
				{state.map((x, i) => (
					<TopCollectionItem key={i} item={x} />
				))}
			</Carousel>
		</div>
	);
};
export default TopCollection;
