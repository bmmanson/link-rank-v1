import React, {Component} from 'react';


class AddComment extends Component {

/*
add comment component should be displayed not only at the top
of the discuss view, but also when the user presses the reply
button at the bottom of each comment
*/

	render () {
		return (
			<div>
				<textarea />
				<button>add comment</button>
			</div>
		);
	}
}

export { AddComment };