import React from "react";
import "./Header.style.scss";
import { Link } from "react-router-dom";
import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assest/4.4 crown.svg.svg";
import CartIcon from "../Cart-Icon/CartIcon";
import { connect } from "react-redux";
import CartDropDown from "../../components/cart-dropdown/CartDropDown";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// firebase
import { auth } from "../../firebase/firebase.utlis";

const Header = ({ currentUser, toggleCartHidden, hidden }) => {
	console.log(hidden);

	return (
		<div className="header">
			<div className="logo">
				<Link to="/">
					<Logo /> <span>BISHOP</span>
				</Link>
			</div>
			<div className="options">
				<div className="option">
					<Link to="/Shop">Shop</Link>
				</div>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						Sign out
					</div>
				) : (
					<div className="option">
						<Link to="/auth">Sign In</Link>
					</div>
				)}
				<div className="option">
					<Link to="/cart" onClick={toggleCartHidden}>
						<CartIcon itemCount />
					</Link>
				</div>
			</div>
			{hidden ? null : <CartDropDown />}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
