import React from "react";
import Nav from "../components/Navigation";
import Card from "../components/Card";

const Home = ({ data }) => {
	return (
		<div>
			<Nav />
			<div className="container home">
				<div>
					<p className="vote">Vote for the cutest cat</p>
					<div className="d-flex">
						<Card
							data={data}
							imageRandom={data[0].picture}
							numberCard={0}
						/>
						<div className="versus">
							<p>VS</p>
						</div>
						<Card
							data={data}
							imageRandom={data[1].picture}
							numberCard={1}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
