import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import 'Sass/main.scss';

import { TopBar, LandingPage, Spot, Ribbon, Widgets, Footer } from './index';

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<TopBar />
				<div className="wrapper">
					<LandingPage />
					<Spot />
					<Ribbon />
					{children}
				</div>
				<Widgets />

				<Footer title={data.site.siteMetadata.title} />
			</>
		)}
	/>
);
Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
