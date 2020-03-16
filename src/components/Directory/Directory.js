import React, { useState, Fragment } from "react";
import MenuItem from "../Menu-Item/MenuItem";
import "./directory.style.scss";

const Directory = () => {
	const menuItemData = [
		{
			id: 1,
			name: "Childern",
			img:
				"//demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/06/children-500x290.png",
			link: "/childern-directory"
		},
		{
			id: 2,
			name: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/06/home-500x290.png",
			link: "/home-directory"
		},
		{
			id: 3,
			name: "Out Door",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/06/outdoor-500x290.png",
			link: "/childern-directory"
		}
	];
	const [state] = useState(menuItemData);

	return (
		<Fragment>
			<div className="directory">
				{state.map((x, i) => (
					<MenuItem key={i} item={x} />
				))}
			</div>
		</Fragment>
	);
};

export default Directory;
