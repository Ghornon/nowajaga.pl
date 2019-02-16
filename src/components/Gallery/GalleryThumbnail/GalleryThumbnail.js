import React from 'react';
import { withPrefix } from 'gatsby';
import { FaSearchPlus } from 'react-icons/fa';

const GalleryThumbnail = ({ imgSrc, primary }) => (
	<div className={`gallery__grid-item gallery__grid-item--${primary ? 'primary' : 'secondary'}`}>
		<img src={withPrefix(imgSrc)} alt={imgSrc} className="gallery__image" />
	</div>
);

export default GalleryThumbnail;
