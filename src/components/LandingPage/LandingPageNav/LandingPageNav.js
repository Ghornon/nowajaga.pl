import React from 'react';
import { Link } from 'gatsby';

const Nav = ({ handleScrollTo }) => {
	const navList = [
		{
			to: '/',
			text: 'Strona główna',
			scrollTo: '.container'
		},
		{
			to: '/menu',
			text: 'Menu',
			scrollTo: '.menu'
		},
		{
			to: '/#catering',
			text: 'Catering',
			scrollTo: '.catering'
		},
		{
			to: '/#galeria',
			text: 'Galeria',
			scrollTo: '.gallery'
		}
	].map(({ to, text, scrollTo }, index) => (
		<li className="nav__nav-list-item" key={index}>
			<Link
				to={to}
				className="nav__link"
				activeClassName="nav__link--active"
				onClick={() => {
					if (typeof scrollTo !== 'undefined') {
						handleScrollTo(scrollTo);
					}
				}}
			>
				{text}
			</Link>
		</li>
	));

	return (
		<>
			<input type="checkbox" name="nav-btn" id="nav-btn" />

			<label htmlFor="nav-btn" className="nav__label nav__label--primary">
				<div className="hamburger" />
			</label>

			<nav className="nav" id="nav">
				<label htmlFor="nav-btn" className="nav__label">
					<div className="hamburger" />
				</label>

				<ul className="nav__nav-list">{navList}</ul>
			</nav>
		</>
	);
};

export default Nav;
