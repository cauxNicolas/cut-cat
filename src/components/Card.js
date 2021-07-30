import React from "react";
import axios from "axios";

const Card = ({ data, imageRandom, numberCard }) => {
	console.log(data);

	const handleSubmit = async (event) => {
		//event.preventDefault();
		const response = await axios.post("http://localhost:3100/classement", {
			data: data,
			numberCard: numberCard,
		});
		console.log(response);
	};

	return (
		<div className="card">
			<div className="card-img-random">
				<img src={imageRandom} alt="image de chat" />
			</div>
			<form onSubmit={handleSubmit}>
				<button>So cute !</button>
			</form>
		</div>
	);
};

export default Card;
