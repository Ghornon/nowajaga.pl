import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={data => {
				const metaDescription = description || data.site.siteMetadata.description;
				return (
					<Helmet
						htmlAttributes={{
							lang
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDescription
							},
							{
								property: `og:title`,
								content: title
							},
							{
								property: `og:description`,
								content: metaDescription
							},
							{
								property: `og:type`,
								content: `website`
							},
							{
								property: `og:image`,
								content: `ogimage.jpg`
							},
							{
								name: `twitter:card`,
								content: `summary`
							},
							{
								name: `twitter:creator`,
								content: data.site.siteMetadata.author
							},
							{
								name: `twitter:title`,
								content: title
							},
							{
								name: `twitter:description`,
								content: metaDescription
							}
						]
							.concat(
								keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `)
									  }
									: []
							)
							.concat(meta)}
					>
						<link
							href="https://fonts.googleapis.com/css?family=Marck+Script|Open+Sans:400,700"
							rel="stylesheet"
						/>
					</Helmet>
				);
			}}
		/>
	);
}

SEO.defaultProps = {
	lang: `pl`,
	meta: [],
	keywords: [
		`nowa`,
		`jaga`,
		`nowajaga`,
		`restauracja`,
		`catering`,
		`kręgle`,
		`nowytarg`,
		`dowóz`,
		`pl`,
		`nowajaga.pl`,
		`nowy`,
		`targ`,
		`impreyz`,
		`okolicznościowe`,
		`piłkarzyki`,
		`nowa jaga`,
		`nowa jaga restauracja`,
		`nowajaga restauracja`,
		`nowajaga.pl restauracja`,
		`nowajaga catering`,
		`nowajaga kręgle`,
		`restauracja nowy targ`,
		`menu`,
		`nowa jaga nowy targ menu`,
		`nowajaga nowy targ menu`
	]
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.array,
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`;
