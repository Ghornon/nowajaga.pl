import React from 'react';

import { GalleryHeader, GalleryThumbnail } from './index';

const Gallery = () => {
	const itemList = [];

	for (let i = 0; i < 12; i++) {
		itemList.push(<GalleryThumbnail imgSrc={`${i}.jpg`} primary={i < 3} key={i} />);
	}

	return (
		<section className="gallery">
			<GalleryHeader />
			<div className="gallery__grid">{itemList}</div>
		</section>
	);
};
export default Gallery;
