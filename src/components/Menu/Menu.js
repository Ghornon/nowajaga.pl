import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { MenuHeader, MenuBody } from './index';

import { firstPage, secoundPage, thirdPage, pizza, hotDrinks, beverages } from './MenuData/data';

const Menu = () => (
	<StaticQuery
		query={graphql`
			query {
				hamburger: file(relativePath: { eq: "hamburger.jpg" }) {
					...imageCropper
				}

				chips: file(relativePath: { eq: "chips.jpg" }) {
					...imageCropper
				}

				dumplings: file(relativePath: { eq: "dumplings.jpg" }) {
					...imageCropper
				}

				rice: file(relativePath: { eq: "rice.jpg" }) {
					...imageCropper
				}

				steak: file(relativePath: { eq: "steak.jpg" }) {
					...imageCropper
				}

				pizza_1: file(relativePath: { eq: "pizza_1.jpg" }) {
					...imageCropper
				}

				pizza_2: file(relativePath: { eq: "pizza_2.jpg" }) {
					...imageCropper
				}
			}
		`}
		render={data => (
			<section className="menu">
				<MenuHeader />

				<MenuBody
					title={`Dania do <span class="menu__marker">10 PLN</span>`}
					items={firstPage}
					images={[
						data.hamburger.childImageSharp.fluid,
						data.chips.childImageSharp.fluid
					]}
				/>

				<MenuBody
					title={`Dania za <span class="menu__marker">12 PLN</span>`}
					items={secoundPage}
					images={[data.dumplings.childImageSharp.fluid, data.rice.childImageSharp.fluid]}
				/>

				<MenuBody
					title={`Dania za <span class="menu__marker">13 PLN</span>`}
					items={thirdPage}
					images={[data.steak.childImageSharp.fluid]}
				/>

				<MenuBody
					title={`<span class="menu__marker">Pizza  32cm</span>`}
					items={pizza}
					images={[
						data.pizza_1.childImageSharp.fluid,
						data.pizza_2.childImageSharp.fluid
					]}
				/>

				<MenuBody
					title={`Napoje <span class="menu__marker">gorące</span>`}
					items={hotDrinks}
				/>
				<MenuBody title={`<span class="menu__marker">Napoje</span>`} items={beverages} />
			</section>
		)}
	/>
);

export default Menu;
