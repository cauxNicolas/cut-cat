import React, { useState, useEffect } from "react";
import Nav from "../components/Navigation";

// bdd
import axios from "axios";

const Classement = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const response = await axios.get("http://localhost:3100/classement");
		console.log(response.data);
		setData(response.data);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Nav />
			{isLoading === true ? (
				<div className="container">
					<p>chargement en cours</p>
				</div>
			) : (
				<div className="container">
					<p className="vote" style={{ marginTop: "1rem" }}>
						Classement for the cutest cat
					</p>
					<div className="classement">
						{data.map((cat, index) => {
							console.log(cat);
							return (
								<div className="classement-cat">
									<div className="classement-cat-content">
										<img
											src={cat.picture}
											alt={cat.initialId}
										/>
									</div>
									<div className="classement-cat-info">
										<p>
											Name :{" "}
											<span className="big">
												{cat.initialId}
											</span>
										</p>

										<br />
										<p>
											Number of vote :
											<span className="big">
												{" "}
												{cat.vote}
											</span>
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default Classement;
