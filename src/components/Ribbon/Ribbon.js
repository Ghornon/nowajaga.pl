import React from 'react';
import { Link } from 'gatsby';

const Ribbon = ({ handleScrollTo }) => (
	<section className="ribbon">
		<header className="ribbon__header">
			<h4 className="ribbon__header-primary header-light">
				Najlepsze przepisy z najlepszych składników
			</h4>
			<p>
				Szanowni Klienci, na wzgląd dla waszej pewności nie mamy dania dnia. Każda potrawa
				jest przygotowywane z świeżych produktów, przy każdym zamówieniu indywidualnie.
			</p>

			<Link
				to="/menu"
				className="button button-light"
				onClick={() => {
					handleScrollTo('.menu');
				}}
			>
				Zobacz menu
			</Link>
		</header>
	</section>
);

export default Ribbon;
