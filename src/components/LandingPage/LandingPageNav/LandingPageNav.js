import React from 'react';
import { Link } from 'gatsby';
import { connectWithStore } from 'Store/Store';

const NavUI = ({ handleScrollTo }) => {
	const navList = [
		{
			to: '/',
			text: 'Strona główna',
			scrollTo: '.landing-page'
		},
		{
			to: '/menu',
			text: 'Menu',
			scrollTo: '.menu'
		},
		{
			to: '/',
			text: 'Catering',
			scrollTo: '.catering'
		},
		{
			to: '/',
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

const Nav = connectWithStore(NavUI);
export default Nav;
