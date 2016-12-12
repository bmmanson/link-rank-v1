import React, {Component} from 'react';

class Footer extends Component {
	render () {
		return (
			<div style={{paddingTop: 10, paddingBottom: 10, borderTopWidth: 2, borderTopStyle:'solid', borderTopColor: '#1E90FF'}}>
				<p style={{textAlign: 'center', fontFamily: 'Oxygen', fontSize: 11}}>Community Guidelines | Contact | Github</p>
			</div>
		);
	}
}

export {Footer};