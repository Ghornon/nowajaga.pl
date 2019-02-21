import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ title }) => (
	<footer className="footer">
		<div className="footer__box container">
			<Link to="/" className="footer__link">
				{title}
			</Link>{' '}
			&copy; 2019
		</div>
	</footer>
);

export default Footer;
