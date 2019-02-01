import React from 'react';

import { SEO, Layout, Catering, Reviews, Gallery } from 'Components';

const IndexPage = () => (
	<>
		<SEO
			title="Strona główna"
			keywords={[`nowa`, `jaga`, `nowajaga`, `restauracja`, `catering`, `kręgle`, `nowytarg`]}
		/>
		<Layout>
			<Catering />
			<Reviews />
			<Gallery />
		</Layout>
	</>
);

export default IndexPage;
