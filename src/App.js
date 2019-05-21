import React from 'react';
import connect from '@vkontakte/vkui-connect';
import axios from 'axios';
import { View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import Surveys from './panels/Surveys';
import Questions from './panels/Questions'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'surveys',
			history: ['surveys'],
			dataSurveys:undefined,
			activeSurvey:undefined,
			activeQuestion:undefined
		};
	}
	componentDidMount() {
		axios.get('https://web20190521031103.azurewebsites.net/').then((x)=>this.setState({dataSurveys: x.data}));

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
	survey = (e) => {


		var activeSurvey = this.state.dataSurveys.filter((s)=>{
			return s.id == e.currentTarget.dataset.survey;
		});
		var activeQuestion = activeSurvey.questions[0];
		console.log(activeSurvey);

		this.setState({activePanel: 'survey', activeQuestion:activeQuestion, activeSurvey:activeSurvey[0]})
	}



	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};	

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Surveys  id="surveys" go={this.go} surveys={this.state.dataSurveys} go_survey={this.survey}   />
				<Questions id="survey" go={this.go} activeQuestion={this.state.activeQuestion} activeSurvey={this.state.activeSurvey}></Questions>
			</View>
		);
	}
}

export default App;
