import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, ScreenSpinner} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
import Surveys from './panels/Surveys';
import Slider from './panels/Slider';
import Questions from './panels/Questions'
import ProfileQuestions from './panels/ProfileQuestions'
import Main from './panels/Main'
import Debug from './panels/Debug'
import Profile from './panels/Profile'
import axios from 'axios'
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'main',
			history: ['main'],
			user:undefined,
			dataSurveys:undefined,
			activeSurvey:undefined,
			activeQuestion:undefined,
			additional:undefined,
			userSurveys:[{da:"net"}],
			answers:[],
			stringAnswer:undefined,
			requestAwaiter:<ScreenSpinner/>,
			refreshAwaiter:false,
			activeProfileQuestion:undefined,
			profileAnswers:[],
			userBallance:0,
			host : "https://web20190521031103.azurewebsites.net/",
			messageBox:"",
			agreement:"",			
			SliderData:{
				slideIndex:0,
				slides:["","",""]
			}
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

	
	//Surveys
	survey = (e) => {
		var activeSurvey = this.state.dataSurveys.find((s)=>{// eslint-disable-next-line
			return s.title == e.currentTarget.dataset.survey;
		});
		var activeQuestion = activeSurvey.questions[0];
		console.log(activeSurvey);

		this.setState({activePanel: 'survey', activeQuestion:activeQuestion, activeSurvey:activeSurvey})
	}
	showMessage = (e) =>{


	}
	//#region Questions
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
			e.data=Date.now();
			answers.push(e.id);
		}
		this.setState({ answers: answers})	
	}
	setStringAnswer = (e) =>{		
		this.setState({ stringAnswer: e.target.value})
	}
	checkAnswer = (e) =>{
		e.data=Date.now();
		var answers = [];
		answers.push(e);		
		this.setState({ answers: answers})
	}
	sendAnswers = () =>{
		this.setState({requestAwaiter:<ScreenSpinner/>});
		var answerCount = this.state.answers.length;
		// eslint-disable-next-line
		var t = this;
		var userId = this.state.user.id;
		
		this.state.answers.forEach((x)=>{
			var model ={
				date:Date.now(),
				UserId:userId,
				AnswerId:x
			};
			
			axios.post(`${this.state.host}/Home/SetAnswer`, model,{headers:{'Content-Type':'application/json'}}).then((e)=>{
				answerCount--;			
				 // eslint-disable-next-line
				var questionPrice = t.state.activeQuestion.price;
				t.setState({userBallance:t.state.userBallance + questionPrice});
				 // eslint-disable-next-line
				 if(answerCount == 0){
					this.nextQuestion();
				}	

			}).catch((ex)=>{
				this.afterRequest();
				this.setState({additional:`Exception: ${JSON.stringify(ex)}`});
			});

		})
	}
	//#endregion Questions
	checkAgreement = () => {		
		/* Проверка на пользовательское соглашение */
		axios.post(`${this.state.host}/Home/GetUserIsConfirm`,this.state.user,
			{headers:{'Content-Type':'application/json'}}).then((e)=>{	
				
				if(e.data.isConfirm){
					this.refreshSurveys();
				}
				else{
					this.getAgreement();
				}
		}).catch((ex)=>{
			this.getAgreement();			
		});
	}

	showErrorMessage = (message) => {
		this.setState({additional: message,activePanel: 'debug'});
	}
	//#region Agreement
	//Получаем пользовательское соглашение
	getAgreement = () => {
		axios.post(`${this.state.host}/Home/GetUserAgreement`,this.state.user,{headers:{'Content-Type':'application/json'}}).then((e)=>{
			this.setState({additional:`Resp: ${JSON.stringify(e)}`, agreement:e.data.agreement});

		}).catch((ex)=>{
			this.showErrorMessage(JSON.stringify(ex));
		});
	}
	//Подтверждаем пользовательское соглашение
	confirmAgreement = () => {
		this.refreshSurveys();
	}
	//#endregion Agreement
	//#region InstructionSlide
	showInstruction = () =>	{

	}
	ChangeSlide = (next) => {
		var currentSlideData = this.state.SliderData;
		if(next == currentSlideData.slides.length){
			currentSlideData.slideIndex = 0;
			this.setState({ activePanel: "main" , SliderData:currentSlideData});
		}
		else{
			currentSlideData.slideIndex = next;
			this.setState({SliderData:currentSlideData});
		}
	}
	//#endregion InstructionSlide
	refreshSurveys = () =>{
		this.setState({refreshAwaiter:true})
		/* Получение доступных опросов */
		axios.post(`${this.state.host}/Home/GetSurveys`,this.state.user,
			{headers:{'Content-Type':'application/json'}}).then((e)=>{						
			this.afterRequest();		 
			this.setState({dataSurveys:e.data});
		}).catch((ex)=>{
			this.afterRequest();
			this.setState({additional:`Exception: ${JSON.stringify(ex)}`});
		});

		


		
		axios.post(
			`${this.state.host}/Home/GetProfileSurveys`,this.state.user,
			{headers:{'Content-Type':'application/json'}}).then((e)=>{						
			this.afterRequest();		 
			this.setState({userSurveys:e.data.questions /*, additional:JSON.stringify(e.data.questions)*/});
		}).catch((ex)=>{
			this.afterRequest();
			this.setState({additional:`Exception: ${JSON.stringify(ex)}`});
		});	
		axios.post(
			`${this.state.host}/Home/GetBallance`,this.state.user,
			{headers:{'Content-Type':'application/json'}}).then((e)=>{						
			this.afterRequest();		 
			this.setState({userBallance:e.data /*, additional:JSON.stringify(e.data.questions)*/});
		}).catch((ex)=>{
			this.afterRequest();
			this.setState({additional:`Exception: ${JSON.stringify(ex)}`});
		});	
	}
	
	nextQuestion = () =>{
		if(this.state.stringAnswer != undefined){
			var userId = this.state.user.id;
			var model ={
				date:Date.now(),
				UserId:userId,
				EmptyAnswer:this.state.stringAnswer
			};	
			axios.post(`${this.state.host}/Home/SetAnswer`, model,{headers:{'Content-Type':'application/json'}}).then((e)=>{
				
			});
		}

		var currentQuestionIndex = this.state.activeSurvey.questions.indexOf(this.state.activeQuestion);		
		var next = this.state.activeSurvey.questions[currentQuestionIndex+1];// eslint-disable-next-line
		var sur = this.state.activeSurvey; 
		sur.questions.splice(currentQuestionIndex, 1);
		// eslint-disable-next-line
		if(next == undefined){
			var avilableSurveys = this.state.dataSurveys;
			avilableSurveys.splice( avilableSurveys.indexOf(this.state.activeSurvey), 1);
			this.setState({ activePanel:'surveys', dataSurveys:avilableSurveys, answers:[], stringAnswer:undefined, requestAwaiter:false})
		}
		else{
			this.setState({ activeSurvey:sur, activeQuestion: next,answers:[], stringAnswer:undefined, requestAwaiter:false})
		}
	}
	//Profile Questions
	userSurvey = (e) => {
		var activeQuestion = this.state.userSurveys.find((s)=>{// eslint-disable-next-line
			return s.id == e.currentTarget.dataset.id;
		});
		this.setState({activePanel: 'profileQuestions', activeProfileQuestion:activeQuestion})
	}
	checkProfileAnswer = (e) =>{
		var answers = [];
		answers.push(e);		
		this.setState({ profileAnswers: answers})
	}

	setProfileAnswer = (e) =>{
		var answers = this.state.profileAnswers;
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
		this.setState({ profileAnswers: answers})	
	}
	sendProfileAnswers = () =>{
		this.setState({requestAwaiter:<ScreenSpinner/>});
		var answerCount = this.state.profileAnswers.length;
		var userId = this.state.user.id;
		
		// eslint-disable-next-line
		
		this.state.profileAnswers.forEach((x)=>{
			var model ={
				userId:userId,
				answerId:x,
				date:Date.now()
			};
			axios.post(`${this.state.host}/Home/SetProfileAnswer`, model,{headers:{'Content-Type':'application/json'}}).then((e)=>{
				answerCount--;			
				 // eslint-disable-next-line
				if(answerCount == 0){
					this.nextProfileQuestion();
				}	
			}).catch((ex)=>{
				this.afterRequest();
				this.setState({activePanel:'debug', additional:`Exception: ${JSON.stringify(ex)}`});
			});	;

		})
		/*var answers = this.state.profileAnswers.map((x)=>{
			return{
				userId:userId,
				ProfileAnswerId:x
			}	
		});
		this.setState({ activePanel:'debug', additional:JSON.stringify(answers)});*/
	}
	nextProfileQuestion = () =>{
		var currentQuestionIndex = this.state.userSurveys.indexOf(this.state.activeProfileQuestion);
		var avilableSurveys = this.state.userSurveys;			
		avilableSurveys.splice( currentQuestionIndex, 1);
		var next = this.state.userSurveys[currentQuestionIndex];// eslint-disable-next-line
		if(next == undefined){
			this.setState({ activePanel:'profile', userSurveys:avilableSurveys, profileAnswers:[], requestAwaiter:false})
		}
		else{
			this.setState({ activeProfileQuestion: next,profileAnswers:[], requestAwaiter:false})
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
				<Main id="main" go={this.go} onRefresh={this.refreshSurveys} refreshAwaiter={this.state.refreshAwaiter} surveys={this.state.dataSurveys} userSurveys={this.state.userSurveys} user={this.state.user}></Main>
				<Profile  id="profile" ballance={this.state.userBallance} go={this.go} go_userSurvey={this.userSurvey} user={this.state.user} userSurveys={this.state.userSurveys} />
				<Surveys  id="surveys" go={this.go} onRefresh={this.refreshSurveys} refreshAwaiter={this.state.refreshAwaiter} surveys={this.state.dataSurveys} user={this.state.user} go_survey={this.survey}   />
				<Questions id="survey"  go={this.go} checkAnswer={this.checkAnswer} nextQuestion={this.nextQuestion} setAnswer={this.setAnswer} sendAnswer={this.sendAnswers} activeQuestion={this.state.activeQuestion} activeSurvey={this.state.activeSurvey}></Questions>
				<ProfileQuestions stringAnswer={this.setStringAnswer} id="profileQuestions" go={this.go} checkAnswer={this.checkProfileAnswer} nextQuestion={this.nextProfileQuestion} setAnswer={this.setProfileAnswer} sendAnswer={this.sendProfileAnswers} activeQuestion={this.state.activeProfileQuestion}></ProfileQuestions>
				<Debug id="debug" go={this.go} info={this.state.additional}></Debug>
				<Slider  id="slider" ChangeSlide={this.ChangeSlide} SliderData={this.state.SliderData}></Slider>	
			</View>
		);
	}
}

export default App;
