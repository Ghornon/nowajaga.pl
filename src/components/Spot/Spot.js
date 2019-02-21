import React from 'react';
import { Link } from 'gatsby';
import { connectWithStore } from 'Store/Store';
import { FaUtensils, FaBookOpen, FaTruck, FaBowlingBall } from 'react-icons/fa';

const SpotUI = ({ handleScrollTo }) => {
	const spotList = [
		{
			text: 'Pyszne jedzenie',
			Icon: FaUtensils,
			to: '/menu',
			scrollTo: '.menu',
			subText: 'Zamów pyszne jedzenie z dostawą!'
		},
		{
			text: 'Catering',
			Icon: FaBookOpen,
			to: '/',
			scrollTo: '.catering',
			subText: ''
		},
		{
			text: 'Na dowóz',
			Icon: FaTruck,
			to: '/menu',
			scrollTo: '.menu',
			subText: 'Dowóz PON-SOB <br /> 10:00-18:00'
		},
		{
			text: 'Kręgle',
			Icon: FaBowlingBall,
			to: '/',
			scrollTo: '.gallery',
			subText: 'PON-PT: 30 PLN/h <br /> SOB: 40 PLN/h <br /> NIEDZ: 30 PLN/h'
		}
	].map(({ text, Icon, to, scrollTo, subText }, index) => (
		<li className="spot__list-item" key={index}>
			<Link
				to={to}
				className="spot__link"
				onClick={() => {
					if (typeof scrollTo !== 'undefined') {
						handleScrollTo(scrollTo);
					}
				}}
			>
				<div className="spot__icon">
					<Icon className="spot__svg" />
				</div>
				<h5>{text}</h5>
			</Link>
			{/* <h6 className="text-uppercase" dangerouslySetInnerHTML={{ __html: subText }} /> */}
		</li>
	));
	return (
		<section className="spot">
			<ul className="spot__list">{spotList}</ul>
		</section>
	);
};

const Spot = connectWithStore(SpotUI);
export default Spot;
