import { graphql } from 'gatsby';

export const imageCropper = graphql`
	fragment imageCropper on File {
		childImageSharp {
			fluid(maxWidth: 740) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;
