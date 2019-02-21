import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { Provider } from '../store/Store';

import 'Sass/main.scss';

import { TopBar, LandingPage, Spot, Ribbon, Widgets, Footer } from './index';

class Layout extends Component {
	render() {
		const { children } = this.props;

		return (
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
					<Provider>
						<TopBar />
						<div className="wrapper">
							<LandingPage />
							<Spot />
							<Ribbon />
							{children}
						</div>

						<Widgets />
						<Footer title={data.site.siteMetadata.title} />
					</Provider>
				)}
			/>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
