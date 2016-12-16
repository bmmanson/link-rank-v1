import React, {Component} from 'react';
import { connect } from 'react-redux';

import { Navbar } from './navbar.jsx';
import { SubmitForms } from './submit-forms.jsx';

class Submit extends Component {

	render () {
		return (
			<div>
				<div style={{marginLeft: 70, marginRight: 70}}>
					<Navbar session={this.props.session} />
					<SubmitForms />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		session: state.session
	};
}

const SubmitView = connect(
	mapStateToProps
)(Submit);

export { SubmitView };