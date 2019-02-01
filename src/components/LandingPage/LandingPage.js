import React from 'react';

import { LandingPageHeader, LandingPageNav, LandingPageTimetable } from './index';

const LandingPage = ({ handleScrollTo }) => (
	<section className="landing-page">
		<LandingPageHeader />
		<LandingPageNav handleScrollTo={handleScrollTo.bind(this)} />
		<LandingPageTimetable />
	</section>
);

export default LandingPage;
