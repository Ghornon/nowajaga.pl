import React from 'react';
import { Link } from 'gatsby';
import scrollToElement from 'scroll-to-element';

const Nav = () => {
	const navList = [
		{
			to: '/',
			text: 'Strona główna'
		},
		{
			to: '/menu',
			text: 'Menu'
		},
		{
			to: '/catering',
			text: 'Catering',
			scrollTo: '.catering'
		},
		{
			to: '/galeria',
			text: 'Galeria',
			scrollTo: '.gallery'
		}
	].map(({ to, text, scrollTo }, index) => (
		<li className="nav__nav-list-item" key={index}>
			<Link
				to={to}
				className="nav__link"
				activeClassName="nav__link--active"
				onClick={event => {
					if (typeof scrollTo !== 'undefined') {
						event.preventDefault();
						scrollToElement(scrollTo, {
							offset: 0,
							ease: 'outBack',
							duration: 1000
						});
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
