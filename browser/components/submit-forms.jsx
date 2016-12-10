import React, {Component} from 'react';
import { connect } from 'react-redux';

import { SubmitFormStyles } from './../styles/submit-form.jsx';

class SubmitForms extends Component {

	constructor(props) {
		super(props);
		this.state = {
			url: '',
			title: '',
			text: '',
			error: false
		};
	}

//errors 

	render () {

		const errorSendingMessage = (error) => {
			if (error) {
				return (
					<div style={{height: 30}}>
						<p style={{margin: 0}}>Please try again.</p>
					</div>
				);
			} else {
				return (<div style={{height: 10}} />);
			}
		}

		const submitLink = () => {

			if (this.state.url.length === 0 || this.state.title.length === 0) {
				return this.setState({error: true});
			} else {
				//send to 
				//redirect to main
			}
		}

		return (
			<div style={SubmitFormStyles.container}>
				{errorSendingMessage(this.state.error)}
				<div style={{height: 20}}>
					<div style={SubmitFormStyles.labelContainer}>
						<p style={{textAlign: 'left', margin: 0, marginLeft: 2}}>title:</p>
					</div>
					<div>
						<input style={{width: 300}}/>
					</div>
				</div>
				<div style={{height: 20, marginTop: 4}}>
					<div style={SubmitFormStyles.labelContainer}>
						<p style={{textAlign: 'left', margin: 0, marginLeft: 2}}>url:</p>
					</div>
					<div>
						<input style={{width: 300}}/>
					</div>
				</div>
				<div style={{marginTop: 20}}>
					<div style={SubmitFormStyles.labelContainer}>
						<p style={{textAlign: 'left', margin: 0, marginLeft: 2}}>text:</p>
					</div>
					<div>
						<textarea style={{width: 360, height: 80}}/>
					</div>
				</div>
				<div>
					<div style={SubmitFormStyles.labelContainer}>
						<p> </p>
					</div>
					<div>
						<button onClick={submitLink}>submit</button>
					</div>
				</div>
				<div>
					<div style={SubmitFormStyles.labelContainer}>
						<p> </p>
					</div>
					<div>
						<p style={{fontSize: 14}}>Title and url fields cannot be empty. Text is optional.</p>
					</div>
				</div>
				<div style={{height: 20}}>
					<p> </p>
				</div>
			</div>
		);
	}
}



export { SubmitForms };