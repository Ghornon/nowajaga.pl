import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const CateringArticle = ({
	imgSrc,
	header,
	content,
	handleScrollTo,
	scrollTo,
	linkTo,
	buttonText
}) => (
	<div className="catering__article">
		<Img fluid={imgSrc} className="catering__article-image" />
		<h4 className="catering__article-header">{header}</h4>
		<p className="catering__article-paragraph">{content}</p>
		<Link
			to={linkTo}
			className="button"
			onClick={event => {
				if (typeof linkTo === 'undefined' || linkTo === '/') {
					event.preventDefault();
				}
				handleScrollTo(scrollTo);
			}}
		>
			{buttonText}
		</Link>
	</div>
);

export default CateringArticle;
