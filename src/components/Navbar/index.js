import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const handleOnClick = (e) => {

	window.CommandBar.trackEvent('dogs-page-opened', {})
	
}

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/about">
						About
					</NavLink>
					<NavLink to="/contact">
						Contact Us
					</NavLink>
					<NavLink to="/dogs" onClick={handleOnClick}>
						Dogs
					</NavLink>
					<NavLink to="/sign-up">
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
