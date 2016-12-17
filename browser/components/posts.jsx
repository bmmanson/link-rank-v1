import React, {Component} from 'react';

import {Post} from './post.jsx';

class Posts extends Component {

	render () {

		const displayLinks = function (posts, type, session) {
			if (posts) {
				return (
					posts.map((post, i) =>
						(<Post post={post} key={i} num={i + 1} type={type} session={session} />)
					)
				);
			}
		}

		return (
			<div style={{backgroundColor:'#F7F7F7', marginTop: 0}}>
				{displayLinks(this.props.posts, this.props.type, this.props.session)}
			</div>
		);
	}
}

export { Posts };