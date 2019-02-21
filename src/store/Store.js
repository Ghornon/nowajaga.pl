import React, { Component } from 'react';
import * as actions from '../actions/Actions';
import scrollToElement from 'scroll-to-element';

const Context = React.createContext();

export class Provider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollTo: null
		};
	}

	componentDidUpdate() {
		this.scrollElement();
	}

	componentDidMount() {
		this.scrollElement();
	}

	scrollElement() {
		// store a this ref, and
		let self = this;
		// wait for a paint to do scrolly stuff
		setTimeout(function() {
			scrollToElement(self.state.scrollTo, {
				offset: 0,
				ease: 'outBack',
				duration: 1000
			});

			// self.setState({ scrollTo: null });
		}, 100);
	}

	attacheMethods() {
		const newActions = {};

		for (let i in actions) {
			newActions[i] = actions[i].bind(this);
		}

		return newActions;
	}

	render() {
		return (
			<Context.Provider value={{ ...this.state, ...this.attacheMethods() }}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const connectWithStore = Container => {
	return class extends Component {
		render() {
			return (
				<Context.Consumer>
					{context => <Container {...context} {...this.props} />}
				</Context.Consumer>
			);
		}
	};
};
