import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaFacebookF } from 'react-icons/fa';

import { WidgetsArea } from './index';

const contactList = [
	{
		text: 'KRÓLOWEJ JADWIGI 27B',
		Icon: FaMapMarkerAlt
	},
	{
		text: '881-414-167',
		Icon: FaPhone
	},
	{
		text: '/nowa-jaga',
		Icon: FaFacebookF
	}
].map(({ text, Icon }, index) => (
	<li className="widgets__list-item" key={index}>
		<Icon className="widgets__icon" />
		{text}
	</li>
));

const timetableList = [
	['Kuchnia czynna', 'do 22:00'],
	['Pon-Śr', '10:00 - 22:00'],
	['Czw-Sob', '10:00 - 24:00'],
	['Niedziela', '10:00-18:00'],
	['Dowóz pon-sob', '10:00-18:00']
].map((element, index) => (
	<li className="widgets__list-item widgets__list-item" key={index}>
		{element[0]}
		<br />
		{element[1]}
	</li>
));

const Widgets = () => (
	<section className="widgets">
		<div className="container widgets__grid">
			<WidgetsArea
				header={`Nowa <span className="header-special header-light display-2">Jaga</span>`}
				content={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea alias
						inventore distinctio itaque! Dolorem deserunt, dolor quis qui doloremque
						ullam nihil maiores blanditiis non voluptas sint cupiditate eos commodi.`}
			/>

			<WidgetsArea
				header={`Znajdź nas`}
				content={<ul className="widgets__list widgets__list--2left">{contactList}</ul>}
			/>

			<WidgetsArea
				header={`Godziny otwarcia`}
				content={<ul className="widgets__list text-uppercase">{timetableList}</ul>}
			/>
		</div>
	</section>
);

export default Widgets;
