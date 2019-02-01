import React from 'react';
import { Link } from 'gatsby';
import { FaUtensils, FaBookOpen, FaTruck, FaBowlingBall } from 'react-icons/fa';

const Spot = () => {
	const spotList = [
		{
			text: 'Pyszne jedzenie',
			Icon: FaUtensils
		},
		{
			text: 'Catering',
			Icon: FaBookOpen
		},
		{
			text: 'Na dowóz',
			Icon: FaTruck
		},
		{
			text: 'Kręgle',
			Icon: FaBowlingBall
		}
	].map(({ text, Icon }, index) => (
		<li className="spot__list-item" key={index}>
			<Link to="/menu" className="spot__link">
				<div className="spot__icon">
					<Icon className="spot__svg" />
				</div>
				<h5>{text}</h5>
			</Link>
		</li>
	));
	return (
		<section className="spot">
			<ul className="spot__list">{spotList}</ul>
		</section>
	);
};

export default Spot;
