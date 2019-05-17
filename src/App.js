import React from 'react';
import connect from '@vkontakte/vkui-connect';
import axios from 'axios';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			history: ['home'],
			fetchedUser: null,
			dataFetched:undefined
		};
	}

	goBack = () => {
		const history = [...this.state.history];
		history.pop();
		const activePanel = history[history.length - 1];		
		this.setState({ history, activePanel });
	  
	}

	componentDidMount() {
		axios.get('https://blockchain.info/ticker').then((x)=>this.setState({dataFetched: x.data}))

		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" datax={this.state.dataFetched}  fetchedUser={this.state.fetchedUser} go={this.go} />
				<Persik    id="persik" go={this.go} />
			</View>
		);
	}
}

export default App;
