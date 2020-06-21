import React, {useState, useEffect} from 'react';
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
            url: 'http://127.0.0.1:5000/process_text',
            headers: {"Access-Control-Allow-Origin": "*", 'Content-Type': 'application/json'},
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
                console.log(response);
                this.setState({
                    resultText: response.data[0].result_text,
                    keywords: response.data[0].keywords
                });
            })
            .catch((e) => {
                console.log(e)
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
                input your text <input type={'text'} name={'inputTextValue'} value={this.state.inputText}
                                       onChange={this.changeInputText}/><br/>
                input word count <input type={'text'} name={'wordCount'} value={this.state.wordCount}
                                        onChange={this.changeWordCount}/>
                <div onClick={() => {
                    this.getTags()
                }}
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
                <div>
                    <div>
                        result text {this.state.resultText}
                    </div>
                    <br/>
                    <div>
                        tags
                        {
                            this.state.keywords &&
                            this.state.keywords
                        }
                    </div>
                </div>
            </div>
        )
    };
}

export default App;

