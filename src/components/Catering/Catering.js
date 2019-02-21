import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { connectWithStore } from 'Store/Store';

import { CateringHeader, CateringArticle } from './index';

const CateringUI = ({ handleScrollTo }) => {
	return (
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
						header="Organizujemy imprezy okolicznościowe"
						content="Zapraszamy do skorzystania z oferty organizacji imprez okolicznościowych takich jak:
						chrzciny,
						komunie,
						jubileusze,
						stypy,
						urodziny,
						osiemnastki,
						przyjęcia rodzinne,
						spotkania w gronie przyjaciół,
						i inne.
						Oferujemy kompleksową obsługę imprez, dekorację sali, elastyczne menu oparte na domowych recepturach dostosowane do preferencji klienta."
						handleScrollTo={handleScrollTo}
						scrollTo=".gallery"
						linkTo="/"
						buttonText="Zobacz galerię"
					/>

					<CateringArticle
						imgSrc={data.image2.childImageSharp.fluid}
						header="Organizujemy wszelkiego rodzaju imprezy cateringowe"
						content="Cena zależy od wielkości zamówienia, udzielamy również rabatów w zależności od wielkości zlecenia. Przy zamówieniach prosimy o wcześniejsze poinformowanie pracowników restauracji. Istnieje możliwość indywidualnego ustalenia menu."
						handleScrollTo={handleScrollTo}
						scrollTo=".menu"
						linkTo="/menu"
						buttonText="Zobacz menu"
					/>
				</section>
			)}
		/>
	);
};

const Catering = connectWithStore(CateringUI);
export default Catering;
