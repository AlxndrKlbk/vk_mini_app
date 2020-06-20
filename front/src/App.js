import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';

class App extends React.Component {
	// const [activePanel, setActivePanel] = useState('home');
	// const [fetchedUser, setUser] = useState(null);

	constructor() {
		super();
		this.changeInputText = this.changeInputText.bind(this);
		this.changeWordCount = this.changeWordCount.bind(this);
		this.state = {
			inputText: '',
			resultText: '',
			resultTags: '',
			wordCount: ''
		}
	}

	getTags() {
		axios({
			method: 'post',
			url: 'https://380aa881f990.ngrok.io/process_text',
			headers: {"Access-Control-Allow-Origin": "*"},
			data: {
				"params": [
					{
						"text": this.state.inputText,
						"word_count": this.state.wordCount
					}
				]
			}
		})
			.then((response) => {
				this.setState({
					resultText: response.result_text,
					keywords: response.keywords
				});
				console.log('resultText', response.result_text)
				console.log('keywords', response.keywords)
			})
	}

	changeInputText(e) {
		this.setState({
			inputText: e.target.value
		});
	}

	changeWordCount(e) {
		this.setState({
			wordCount: e.target.value
		});
	}



	render() {
	    return (
			<div>
				input your text <input type={'text'} name={'inputTextValue'} value={this.state.inputText} onChange={this.changeInputText}/><br/>
				input word count <input type={'text'} name={'wordCount'} value={this.state.wordCount} onChange={this.changeWordCount}/>
				<div onClick={() => {this.getTags()}}
					 style={{
					 	width: '100px',
						 height: '20px',
						 background: 'pink',
						 display: 'flex',
						 justifyContent: 'center',
						 alignItems: 'center'
					 }}>
					get tags
				</div>
			</div>
        )
	};
}

export default App;

