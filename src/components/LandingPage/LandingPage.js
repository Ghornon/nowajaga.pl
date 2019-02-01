import React from 'react';

import { LandingPageHeader, LandingPageNav, LandingPageTimetable } from './index';

const LandingPage = ({ active }) => (
	<section className="landing-page">
		<LandingPageHeader />
		<LandingPageNav />
		<LandingPageTimetable />
	</section>
);

export default LandingPage;
