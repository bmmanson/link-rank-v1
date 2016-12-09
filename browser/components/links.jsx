import React, {Component} from 'react';

import {Link} from './link.jsx';

class Links extends Component {

	render () {

		const displayLinks = function (links) {
			if (links) {
				return (
					links.map((link, i) =>
						(<Link link={link} key={i} />)
					)
				);
			}
		}

		return (
			<div>
				{displayLinks(this.props.links)}
			</div>
		);
	}
}

export { Links };