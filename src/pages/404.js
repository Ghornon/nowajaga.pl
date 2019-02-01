import React from 'react';
import { Link } from 'gatsby';
import { SEO } from 'Components';

const NotFoundPage = () => (
	<>
		<SEO title="404: Not found" />
		<div className="notfound">
			<header className="notfound__header">
				<h1 className="notfound__header-primary">Błąd HTTP 404 nie znaleziono strony!</h1>
				<Link to="/" className="notfound__link">
					Powrót do strony głównej →
				</Link>
			</header>
		</div>
	</>
);

export default NotFoundPage;
