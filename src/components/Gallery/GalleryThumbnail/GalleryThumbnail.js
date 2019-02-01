import React from 'react';
import { Link, withPrefix } from 'gatsby';
import { FaSearchPlus } from 'react-icons/fa';

const GalleryThumbnail = ({ imgSrc, primary }) => (
	<div className={`gallery__grid-item gallery__grid-item--${primary ? 'primary' : 'secondary'}`}>
		<img src={withPrefix(imgSrc)} alt={imgSrc} className="gallery__image" />
		<Link to={withPrefix(imgSrc)} className="gallery__link">
			<div className="gallery__icon">
				<FaSearchPlus className="gallery__svg" />
			</div>
		</Link>
	</div>
);

export default GalleryThumbnail;
