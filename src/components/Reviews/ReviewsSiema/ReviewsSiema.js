import React, { Component } from 'react';

import Siema from 'siema';
import Blockquote from '../ReviewsBlockquote/ReviewsBlockquote';

class ReviewsSiema extends Component {
	componentDidMount() {
		this.siema = new Siema({
			selector: '.reviews__siema',
			duration: 200,
			easing: 'ease-out',
			perPage: 1,
			startIndex: 0,
			draggable: true,
			multipleDrag: true,
			threshold: 20,
			loop: true,
			rtl: false
		});
	}
	render() {
		return (
			<div className="reviews__siema siema">
				<Blockquote
					starScore="5"
					quote="Super atmosfera, polecam z całego serca GOŁĄBKI!!!"
					author="Roland"
				/>
				<Blockquote
					starScore="5"
					quote="Pyszne jedzenie , bardzo miła obsługa , jak najbardziej polecam :)"
					author="Piotrek"
				/>
			</div>
		);
	}
}

export default ReviewsSiema;
