import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import scrollToElement from 'scroll-to-element';

import 'Sass/main.scss';

import { TopBar, LandingPage, Spot, Ribbon, Widgets, Footer } from './index';

class Layout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollTo: null
		};
	}

	componentDidUpdate() {
		this.scrollElement();
	}

	componentDidMount() {
		this.scrollElement();
	}

	scrollElement() {
		// store a this ref, and
		let self = this;
		// wait for a paint to do scrolly stuff
		setTimeout(function() {
			scrollToElement(self.state.scrollTo, {
				offset: 0,
				ease: 'outBack',
				duration: 1000
			});
		}, 100);
	}

	handleScrollTo(scrollTo) {
		this.setState({ scrollTo });
	}

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
					<>
						<TopBar />
						<div className="wrapper">
							<LandingPage handleScrollTo={this.handleScrollTo.bind(this)} />
							<Spot handleScrollTo={this.handleScrollTo.bind(this)} />
							<Ribbon handleScrollTo={this.handleScrollTo.bind(this)} />
							{children}
						</div>
						<Widgets />

						<Footer title={data.site.siteMetadata.title} />
					</>
				)}
			/>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
