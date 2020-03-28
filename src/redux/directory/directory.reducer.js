const INITIAL_STATE = {
	sections: [
		{
			id: 1,
			name: "Childern",
			img:
				"//demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/06/children-500x290.png",
			linkUrl: "shop/hats"
		},
		{
			id: 2,
			name: "Home",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/06/home-500x290.png",
			linkUrl: "shop/sneakers"
		},
		{
			id: 3,
			name: "Out Door",
			img:
				"https://demokaliumsites-laborator.netdna-ssl.com/shop/wp-content/uploads/2015/06/outdoor-500x290.png",
			linkUrl: "shop/jackets"
		}
	]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
