import React, { Component } from 'react';
import { Link } from 'gatsby';
import { connectWithStore } from '../../store/Store';

const RibbonUI = ({ handleScrollTo }) => (
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

const Ribbon = connectWithStore(RibbonUI);
export default Ribbon;
