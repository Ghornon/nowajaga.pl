import React from 'react';
import { Link } from 'gatsby';
import scrollToElement from 'scroll-to-element';

const Ribbon = () => (
	<section className="ribbon">
		<header className="ribbon__header">
			<h4 className="ribbon__header-primary header-light">
				Najlepsze przepisy z najlepszych składników
			</h4>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, quasi alias
				ipsum harum exercitationem iste aperiam, fugit distinctio dolorem culpa dolorum
				animi inventore assumenda id. Nesciunt accusamus eligendi maxime ex!
			</p>

			<Link
				to="/menu"
				className="button button-light"
				onClick={event => {
					if (window.location.pathname === '/menu') {
						event.preventDefault();
						scrollToElement('.menu', {
							offset: 0,
							ease: 'outBack',
							duration: 1000
						});
					}
				}}
			>
				Zobacz menu
			</Link>
		</header>
	</section>
);

export default Ribbon;
