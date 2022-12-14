import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

//Pages
import HomePage from "./Pages/HomePage/HomePage";
import Portfolio from "./Pages/Portfolio/Portfolio";
import TermsAndService from "./Pages/TermsAndService/TermsAndService";
import Footer from "./components/Footer/Footer";
import OperationsDocument from "./Pages/OperationsDocument/OperationsDocument";
import FreelancerTOS from "./Pages/FreelancerTOS/FreelanerTOS";
import WhyUs from "./Pages/WhyUs/WhyUs";


function App() {
	const [loading, setLoading] = useState(true);
	const spinner = document.getElementById("loader");
	if (spinner) {
		setTimeout(() => {
			spinner.style.display = "none";
            setLoading(false)
		}, 2000);
	}
	return (
		!loading && (
			<>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact end path="/">
							<HomePage />
						</Route>
						<Route exact path="/portfolio">
							<Portfolio />
						</Route>
						<Route exact path="/tos">
							<TermsAndService />
						</Route>
						<Route exact path="/freelancertos">
							<FreelancerTOS />
						</Route>
						<Route exact path="/operations">
							<OperationsDocument />
						</Route>
						<Route exact path="/whyus">
							<WhyUs />
						</Route>
					</Switch>
					<Footer />
				</div>
			</>
		)
	);
}

export default App;
