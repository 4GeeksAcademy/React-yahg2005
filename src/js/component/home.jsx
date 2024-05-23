import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import CardContainer from './CardContainer';


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<CardContainer/>
			<Footer/>
		</div>
	);
};

export default Home;
