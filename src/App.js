import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, ScreenSpinner} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import Surveys from './panels/Surveys';
import Questions from './panels/Questions'
import Debug from './panels/Debug'
import axios from 'axios'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'surveys',
			history: ['surveys'],
			user:undefined,
			dataSurveys:undefined,
			activeSurvey:undefined,
			activeQuestion:undefined,
			additional:undefined,
			answers:[],
			requestAwaiter:<ScreenSpinner/>,
			refreshAwaiter:false
		};
	}
	componentDidMount() {
		//axios.get('https://web20190521031103.azurewebsites.net/').then((x)=>this.setState({dataSurveys: x.data}));
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({user:e.detail.data})
					this.refreshSurveys();
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		
	}

	
	survey = (e) => {


		var activeSurvey = this.state.dataSurveys.find((s)=>{// eslint-disable-next-line
			return s.title == e.currentTarget.dataset.survey;
		});
		var activeQuestion = activeSurvey.questions[0];
		console.log(activeSurvey);

		this.setState({activePanel: 'survey', activeQuestion:activeQuestion, activeSurvey:activeSurvey})
	}
	setAnswer = (e) =>{
		var answers = this.state.answers;
		if(!e.answer){// eslint-disable-next-line
			var has = answers.find((eb)=>{return eb == e.id});
			var index = answers.indexOf(has);// eslint-disable-next-line
			if(index == -1){
				console.log('not has in index')
			}
			else{
				answers.splice(index,1);
			}
		}
		else{
			answers.push(e.id);
		}
		this.setState({ answers: answers})	
	}
	checkAnswer = (e) =>{
		var answers = [];
		answers.push(e);		
		this.setState({ answers: answers})
	}
	sendAnswers = () =>{
		this.setState({requestAwaiter:<ScreenSpinner/>});
		var answerCount = this.state.answers.length;
		// eslint-disable-next-line
		this.state.answers.forEach((x)=>{
			var model = {
				userId:1,
				answerId:x
			}
			axios.post(`https://web20190521031103.azurewebsites.net/Home/SetAnswer`, model,{headers:{'Content-Type':'application/json'}}).then((e)=>{
				answerCount--;			
				 // eslint-disable-next-line
				if(answerCount == 0){
					this.nextQuestion();
				}			
	
			});

		})
	}
	refreshSurveys = () =>{
		this.setState({refreshAwaiter:true})
		axios.post(
			`https://web20190521031103.azurewebsites.net/Home/GetSurveys`,this.state.user,
			{headers:{'Content-Type':'application/json'}}).then((e)=>{						
			this.afterRequest();		 
			this.setState({dataSurveys:e.data, additional:JSON.stringify(e.data)});
		}).catch((ex)=>{
			this.afterRequest();
			this.setState({additional:`Excepstion: ${JSON.stringify(ex)}`});
		});		

	}
	
	nextQuestion = () =>{
		var currentQuestionIndex = this.state.activeSurvey.questions.indexOf(this.state.activeQuestion);
		var next = this.state.activeSurvey.questions[currentQuestionIndex+1];// eslint-disable-next-line
		if(next == undefined){
			var avilableSurveys = this.state.dataSurveys;
			avilableSurveys.splice( avilableSurveys.indexOf(this.state.activeSurvey), 1);
			this.setState({ activePanel:'surveys', dataSurveys:avilableSurveys, answers:[], requestAwaiter:false})
		}
		else{
			this.setState({ activeQuestion: next,answers:[], requestAwaiter:false})
		}
	}
	afterRequest = () =>{
		this.setState({requestAwaiter:null,refreshAwaiter:false})
	}

	beforeRequest = () =>{
		this.setState({requestAwaiter:<ScreenSpinner/>,refreshAwaiter:true})
	}
	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};	

	render() {
		return (
			<View popout={this.state.requestAwaiter} activePanel={this.state.activePanel}>
				<Debug id="debug" go={this.go} additional={this.state.additional}></Debug>
				<Surveys  id="surveys" go={this.go} onRefresh={this.refreshSurveys} refreshAwaiter={this.state.refreshAwaiter} surveys={this.state.dataSurveys} user={this.state.user} go_survey={this.survey}   />
				<Questions id="survey"  go={this.go} checkAnswer={this.checkAnswer} nextQuestion={this.nextQuestion} setAnswer={this.setAnswer} sendAnswer={this.sendAnswers} activeQuestion={this.state.activeQuestion} activeSurvey={this.state.activeSurvey}></Questions>
			</View>
		);
	}
}

export default App;
