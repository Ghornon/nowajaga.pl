import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { CateringHeader, CateringArticle } from './index';

const Catering = () => (
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
			<section className="catering">
				<CateringHeader />

				<CateringArticle
					imgSrc={data.image1.childImageSharp.fluid}
					header="Lorem, ipsum."
					content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem iste nulla
						voluptas totam! Omnis sapiente quibusdam corporis dicta natus! Dignissimos
						quidem sunt reiciendis officiis eaque eligendi dolor est deserunt? Ab."
				/>

				<CateringArticle
					imgSrc={data.image2.childImageSharp.fluid}
					header="Dolor, sit."
					content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem iste nulla
						voluptas totam! Omnis sapiente quibusdam corporis dicta natus! Dignissimos
						quidem sunt reiciendis officiis eaque eligendi dolor est deserunt? Ab."
				/>
			</section>
		)}
	/>
);

export default Catering;
