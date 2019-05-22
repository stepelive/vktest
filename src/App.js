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
			activeQuestion:undefined,
			answers:[]
		};
	}
	componentDidMount() {
		//axios.get('https://web20190521031103.azurewebsites.net/').then((x)=>this.setState({dataSurveys: x.data}));

		this.setState({dataSurveys: [
			{
			  "title": "Тестовый опрос",
			  "description": "Ну просто тестовый опрос,чо",
			  "questions": [
				{
				  "position": 1,
				  "price": 5.0,
				  "title": "Вы кто?",
				  "type": "checkbox",
				  "avilableAnswers": [
					{ "title": "Жопка", "questionId": 0, "question": null, "id": 0 },
					{ "title": "Попка", "questionId": 0, "question": null, "id": 1 },
					{ "title": "Да", "questionId": 0, "question": null, "id": 2 },
					{ "title": "Нет", "questionId": 0, "question": null, "id": 3 }
				  ],
				  "id": 0
				},
				{
					"position": 2,
					"price": 5.0,
					"title": "Вы что?",
					"type": "checkbox",
					"avilableAnswers": [
					  { "title": "123123", "questionId": 1, "question": null, "id": 4 },
					  { "title": "3213", "questionId": 1, "question": null, "id": 5},
					  { "title": "12331", "questionId": 1, "question": null, "id": 6 },
					  { "title": "1233", "questionId": 1, "question": null, "id": 7 }
					],
					"id": 1
				  },
				  {
					"position": 3,
					"price": 5.0,
					"title": "Вы кто?",
					"type": "checkbox",
					"avilableAnswers": [
					  { "title": "))", "questionId": 2, "question": null, "id": 8 },
					  { "title": "((Попка))", "questionId": 2, "question": null, "id": 9 },
					  { "title": "((Да))", "questionId": 2, "question": null, "id": 10 },
					  { "title": "9((((", "questionId": 2, "question": null, "id": 11 }
					],
					"id": 2
				  }
			  ],
			  "id": 0
			}
		  ]});
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
		var activeQuestion = activeSurvey[0].questions[0];
		console.log(activeSurvey);

		this.setState({activePanel: 'survey', activeQuestion:activeQuestion, activeSurvey:activeSurvey[0]})
	}
	setAnswer = (e) =>{
		var answers = this.state.answers;
		if(!e.answer){
			var has = answers.find((eb)=>{return eb.id == e.id});
			var index = answers.indexOf(has);
			if(index == -1){
				console.log('not has in index')
			}
			else{
				answers.splice(index,1);
			}
		}
		else{
			answers.push(e);
		}
		this.setState({ answers: answers})
		console.log(this.state.answers);
	}
	sendAnswers = () =>{
		var model = {
			survey: this.state.activeSurvey.id,
			answers: this.state.answers
		}
		console.log(model);
		this.nextQuestion();
	}
	nextQuestion = () =>{
		var currentQuestionIndex = this.state.activeSurvey.questions.indexOf(this.state.activeQuestion);
		var next = this.state.activeSurvey.questions[currentQuestionIndex+1];
		if(next == undefined){
			this.setState({ activePanel:'surveys' })
		}
		else{

			this.setState({ activeQuestion: next})
		}
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};	

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Surveys  id="surveys" go={this.go} surveys={this.state.dataSurveys} go_survey={this.survey}   />
				<Questions id="survey" go={this.go} nextQuestion={this.nextQuestion} setAnswer={this.setAnswer} sendAnswer={this.sendAnswers} activeQuestion={this.state.activeQuestion} activeSurvey={this.state.activeSurvey}></Questions>
			</View>
		);
	}
}

export default App;
