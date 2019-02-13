import React from 'react';

import { SEO, Layout, Catering, Reviews, Gallery } from 'Components';

const IndexPage = () => (
	<>
		<SEO title="Strona główna" />
		<Layout>
			<Catering />
			<Reviews />
			<Gallery />
		</Layout>
	</>
);

export default IndexPage;
