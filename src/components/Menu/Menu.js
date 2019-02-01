import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { MenuHeader, MenuBody } from './index';

import { for10 } from './MenuData/for10';

const Menu = () => (
	<StaticQuery
		query={graphql`
			query {
				image1: file(relativePath: { eq: "catering_1.jpg" }) {
					...imageCropper
				}

				image2: file(relativePath: { eq: "catering_2.jpg" }) {
					...imageCropper
				}
			}
		`}
		render={data => (
			<section className="menu">
				<MenuHeader />

				<MenuBody
					title={`Dania za <span class="menu__marker">10 PLN</span>`}
					items={for10}
					images={[data.image1.childImageSharp.fluid, data.image2.childImageSharp.fluid]}
					imgSrc={data.image1.childImageSharp.fluid}
				/>
			</section>
		)}
	/>
);

export default Menu;
