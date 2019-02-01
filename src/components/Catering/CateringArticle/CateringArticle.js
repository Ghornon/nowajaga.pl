import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import scrollToElement from 'scroll-to-element';

const CateringArticle = ({ imgSrc, header, content }) => (
	<div className="catering__article">
		<Img fluid={imgSrc} className="catering__article-image" />
		<h4 className="catering__article-header">{header}</h4>
		<p className="catering__article-paragraph">{content}</p>
		<Link
			to="/catering"
			className="button"
			onClick={event => {
				event.preventDefault();
				scrollToElement('.gallery', {
					offset: 0,
					ease: 'outBack',
					duration: 1000
				});
			}}
		>
			Zobacz więcej
		</Link>
	</div>
);

export default CateringArticle;
