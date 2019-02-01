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
					quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
						erat a ante."
					author="Lorem ipsum"
				/>
				<Blockquote
					starScore="4"
					quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
						erat a ante."
					author="Lorem ipsum"
				/>
			</div>
		);
	}
}

export default ReviewsSiema;
