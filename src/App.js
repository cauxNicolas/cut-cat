import "./App.css";
import React, { useState, useEffect } from "react";
// Navigation
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Containers
import Classement from "./containers/Classement";
import Home from "./containers/Home";
// bdd
import axios from "axios";
// Image
import CatLoading from "./assets/images/catLoading.gif";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get("https://cut-cat.herokuapp.com/");
			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<>
			{isLoading === true ? (
				<div className="container loading">
					<div className="cat-img-loader">
						<img src={CatLoading} alt="image animé d'un chat" />
					</div>
					<p>chargement en cours...</p>
				</div>
			) : (
				<Router>
					<Switch>
						<Route path="/classement">
							<Classement />
						</Route>
						<Route path="/">
							<Home data={data} />
						</Route>
					</Switch>
				</Router>
			)}
		</>
	);
}

export default App;
