import React from 'react';
import Img from 'gatsby-image';

const MenuBody = ({ items, title, images = [] }) => {
	const list = items.map(({ name, price, description }, index) => (
		<li className="menu__list-item" key={index}>
			<h4 className="menu__header-secondary">
				{name} <span className="menu__price">{price} PLN</span>
			</h4>
			<p className="menu__paragraph">{description}</p>
		</li>
	));

	const imgList = images.map((element, index) => {
		return <Img fluid={element} key={index} className="menu__image" />;
	});

	const Body = ({ isImage }) => {
		if (isImage)
			return (
				<div className="menu__body-content">
					<div className="menu__images">{imgList}</div>
					<ul className="menu__list">{list}</ul>
				</div>
			);

		return (
			<div className="menu__body-content">
				<ul className="menu__list">{list}</ul>
			</div>
		);
	};

	return (
		<div className="menu__body">
			<header className="menu__header menu__header--body">
				<h4 className="menu__header-primary" dangerouslySetInnerHTML={{ __html: title }} />
			</header>
			<Body isImage={images.length} />
		</div>
	);
};

export default MenuBody;
