import React from "react";
import Cat from "../assets/images/logo_cat.svg";

const Logo = () => {
	return (
		<div className="logo-cat">
			<img src={Cat} alt="picto chat" />
			<p>Cut Cat</p>
		</div>
	);
};

export default Logo;
