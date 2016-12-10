import React, {Component} from 'react';

import {Post} from './post.jsx';

class Posts extends Component {

	render () {

		const displayLinks = function (posts, type) {
			if (posts) {
				return (
					posts.map((post, i) =>
						(<Post post={post} key={i} num={i} type={type} />)
					)
				);
			}
		}

		return (
			<div style={{backgroundColor:'#F7F7F7', marginTop: 0}}>
				{displayLinks(this.props.posts, this.props.type)}
			</div>
		);
	}
}

export { Posts };