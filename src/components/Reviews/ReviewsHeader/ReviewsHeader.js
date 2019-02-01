import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Header = () => (
	<header className="reviews__header">
		<h3 className="reviews__header-primary header-light">Recenzje</h3>
		<h4 className="reviews__header-secondary header-light">Od naszych klientów</h4>
		<FaQuoteRight className="reviews__icon" />
	</header>
);

export default Header;
