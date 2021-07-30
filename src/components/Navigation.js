import React from "react";
import Logo from "./Logo";
// Navigation
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	// Link white on focus page
	const location = useLocation();
	const { pathname } = location;

	return (
		<nav>
			<div className="container">
				<div className="navbar">
					<Logo />
					<div className="navbar-menu">
						<ul>
							<li
								className={
									pathname === "/" ? "menu-active" : ""
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									pathname === "/classement"
										? "menu-active"
										: ""
								}
							>
								<Link to="/classement">Classement</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
