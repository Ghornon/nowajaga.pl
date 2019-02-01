import React from 'react';
import { Link } from 'gatsby';
import { FaUtensils, FaBookOpen, FaTruck, FaBowlingBall } from 'react-icons/fa';

const Spot = ({ handleScrollTo }) => {
	const spotList = [
		{
			text: 'Pyszne jedzenie',
			Icon: FaUtensils,
			to: '/menu',
			scrollTo: '.menu'
		},
		{
			text: 'Catering',
			Icon: FaBookOpen,
			to: '/#catering',
			scrollTo: '.catering'
		},
		{
			text: 'Na dowóz',
			Icon: FaTruck,
			to: '/menu',
			scrollTo: '.menu'
		},
		{
			text: 'Kręgle',
			Icon: FaBowlingBall,
			to: '/#galeria',
			scrollTo: '.gallery'
		}
	].map(({ text, Icon, to, scrollTo }, index) => (
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
		</li>
	));
	return (
		<section className="spot">
			<ul className="spot__list">{spotList}</ul>
		</section>
	);
};

export default Spot;
