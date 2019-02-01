import React from 'react';

import { SEO, Layout, Menu } from 'Components';

const MenuPage = () => (
	<>
		<SEO
			title="Menu"
			keywords={[`nowa`, `jaga`, `nowajaga`, `restauracja`, `catering`, `kręgle`, `nowytarg`]}
		/>
		<Layout>
			<Menu />
		</Layout>
	</>
);

export default MenuPage;
