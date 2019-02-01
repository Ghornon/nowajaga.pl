import { graphql } from 'gatsby';

export const imageCropper = graphql`
	fragment imageCropper on File {
		childImageSharp {
			fluid(maxWidth: 600) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;
