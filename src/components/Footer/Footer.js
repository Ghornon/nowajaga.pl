import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ title }) => (
	<footer className="footer container">
		<Link to="/" className="footer__link">
			{title}
		</Link>{' '}
		&copy; 2019
	</footer>
);

export default Footer;
