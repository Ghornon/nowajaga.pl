import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaFacebookF } from 'react-icons/fa';

const TopBar = () => {
	const contactList = [
		{
			text: 'KRÓLOWEJ JADWIGI',
			Icon: FaMapMarkerAlt
		},
		{
			text: '123-456-789',
			Icon: FaPhone
		},
		{
			text: '/nowa-jaga',
			Icon: FaFacebookF
		}
	].map(({ text, Icon }, index) => (
		<li className="top-bar__contact-list-item" key={index}>
			<Icon className="top-bar__icon" />
			<span className="top-bar__text">{text}</span>
		</li>
	));

	return (
		<div className="top-bar">
			<div className="container">
				<ul className="top-bar__contact-list">{contactList}</ul>
			</div>
		</div>
	);
};

export default TopBar;
