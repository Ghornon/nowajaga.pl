import React from 'react';
import { FaAngleUp } from 'react-icons/fa';

const LandingPageTimetable = () => {
	const timetableList = [
		['Kuchnia czynna', 'do 22:00'],
		['Pon-Śr', '10:00 - 22:00'],
		['Czw-Sob', '10:00 - 24:00'],
		['Niedziela', '10:00-18:00'],
		['Dowóz pon-sob', '10:00-18:00']
	].map((element, index) => (
		<li className="landing-page__timetable-list-item" key={index}>
			{element[0]}
			<br />
			{element[1]}
		</li>
	));

	return (
		<>
			<input type="checkbox" name="timetable-btn" id="timetable-btn" />
			<label htmlFor="timetable-btn" className="landing-page__timetable-label">
				<FaAngleUp className="landing-page__timetable-label-arrow" />
				<span className="text-uppercase">Godziny otwarcia</span>
			</label>
			<div className="landing-page__timetable">
				<ul className="landing-page__timetable-list">{timetableList}</ul>
			</div>
		</>
	);
};
export default LandingPageTimetable;
