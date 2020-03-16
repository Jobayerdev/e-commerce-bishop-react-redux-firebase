import React, { Fragment } from "react";
import "./menuItem.style.scss";

const MenuItem = ({ item }) => {
	return (
		<Fragment>
			<div className="menu-item">
				<div
					className="background-img"
					style={{
						backgroundImage: `url(${item.img})`,
						backgroundSize: `contain`
					}}>
					<div className="content">
						<div className="title">{item.name}</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default MenuItem;
