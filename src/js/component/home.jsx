import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	let firstSecond = Math.floor(props.counter / 1)% 10
	let secondSecond =  Math.floor(props.counter / 10)% 10
	let thirdSecond =  Math.floor(props.counter / 100)% 10 
	let fourthSecond =  Math.floor(props.counter / 1000)% 10
	let fifthSecond =  Math.floor(props.counter / 10000)% 10
	let sixthSecond =  Math.floor(props.counter / 100000)% 10
	return (
		<div className="bg-black text-center d-flex justify-content-center text-white mx-3">
			<div className="bg-dark clock align-items-center d-flex bg-light-subtle">
				<i class="fa-regular fa-clock mx-auto "></i>
			</div>
			<div className='digit bg-dark'>
				{sixthSecond}
			</div>
			<div className='digit bg-dark'>
				{fifthSecond}
			</div>
			<div className='digit bg-dark'>
				{fourthSecond}
			</div>
			<div className='digit bg-dark'>
				{thirdSecond}
			</div>
			<div className='digit bg-dark'>
				{secondSecond}
			</div>
			<div className='digit bg-dark'>
				{firstSecond}
			</div>
		</div>
	);
};

export default Home;
