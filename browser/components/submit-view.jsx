import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { SubmitForms } from './submit-forms.jsx';

class Submit extends Component {

	render () {
		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70}}>
					<Navbar selected={'SUBMIT'} />
					<SubmitForms />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
	};
}

const SubmitView = connect(
	
)(Submit);

export { SubmitView };