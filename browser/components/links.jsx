import React, {Component} from 'react';

import {Link} from './link.jsx';

class Links extends Component {

	render () {

		const displayLinks = function (links) {
			if (links) {
				return (
					links.map((link, i) =>
						(<Link link={link} key={i} num={i} />)
					)
				);
			}
		}

		return (
			<div style={{backgroundColor:'#F7F7F7', marginTop: 0}}>
				{displayLinks(this.props.links)}
			</div>
		);
	}
}

export { Links };