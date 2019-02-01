import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const Blockquote = ({ starScore, quote, author }) => {
	const stars = [];

	for (let i = 0; i < starScore; i++) {
		stars.push(<FaRegStar key={i} />);
	}

	return (
		<blockquote className="reviews__quote">
			<div className="reviews__quote-rate">{stars}</div>
			<p className="reviews__quote-content">{quote}</p>
			<footer className="reviews__quote-footer">- {author}</footer>
		</blockquote>
	);
};

export default Blockquote;
