import React from 'react';
import { Link } from 'gatsby';
import { connectWithStore } from 'Store/Store';
import { FaBars } from 'react-icons/fa';

const NavUI = ({ handleScrollTo }) => {
	const navList = [
		{
			to: '/',
			text: 'Strona główna',
			scrollTo: '.landing-page',
			activeClassName: true
		},
		{
			to: '/menu',
			text: 'Menu',
			scrollTo: '.menu',
			activeClassName: true
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
	].map(({ to, text, scrollTo, activeClassName }, index) => (
		<li className="nav__nav-list-item" key={index}>
			<Link
				to={to}
				className="nav__link"
				activeClassName={activeClassName ? 'nav__link--active' : ''}
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

			<nav className="nav" id="nav">
				<label htmlFor="nav-btn" className="nav__label nav__label--primary">
					<FaBars className="nav__hamburger" />
				</label>
				<ul className="nav__nav-list">{navList}</ul>
			</nav>
		</>
	);
};

const Nav = connectWithStore(NavUI);
export default Nav;
