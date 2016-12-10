import React, {Component} from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

const validUrl = require('valid-url');

import { submitPost } from './../async/index.jsx';

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

		const submit = () => {
			if (this.state.url.length === 0 || this.state.title.length < 5) {
				return this.setState({error: true});
			} else if (validUrl.isUri(this.state.url) === undefined) {
				return this.setState({error: true});
			} else {
				const post = {
					url: this.state.url,
					title: this.state.title,
					text: this.state.text,
					userId: 1
				};
				return submitPost(post)
				.then((valid) => {
					if (!valid) {
						this.setState({error: true});
					} else {
						browserHistory.push('/');
					}
				})
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
						<input style={{width: 300}}
								value={this.state.title}
								onChange={(event) => this.setState({title: event.target.value})}/>
					</div>
				</div>
				<div style={{height: 20, marginTop: 4}}>
					<div style={SubmitFormStyles.labelContainer}>
						<p style={{textAlign: 'left', margin: 0, marginLeft: 2}}>url:</p>
					</div>
					<div>
						<input style={{width: 300}}
								value={this.state.url}
								onChange={(event) => this.setState({url: event.target.value})}/>
					</div>
				</div>
				<div style={{marginTop: 20}}>
					<div style={SubmitFormStyles.labelContainer}>
						<p style={{textAlign: 'left', margin: 0, marginLeft: 2}}>text:</p>
					</div>
					<div>
						<textarea style={{width: 360, height: 80}}
								value={this.state.text}
								onChange={(event) => this.setState({text: event.target.value})}/>
					</div>
				</div>
				<div>
					<div style={SubmitFormStyles.labelContainer}>
						<p> </p>
					</div>
					<div>
						<button onClick={submit}>submit</button>
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