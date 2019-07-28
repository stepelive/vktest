import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Tabbar, TabbarItem,  Epic, ScreenSpinner } from '@vkontakte/vkui';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';



import '@vkontakte/vkui/dist/vkui.css'
import Surveys from './panels/Surveys';
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
			activePanel: 'rootview',
			history: ['main'],
			user: undefined,
			dataSurveys: undefined,
			activeSurvey: undefined,
			activeQuestion: undefined,
			additional: undefined,
			userSurveys: [{ da: "net" }],
			answers: [],
			emptyAnswerProfile:"",
			emptyAnswer:"",

			requestAwaiter: <ScreenSpinner />,
			refreshAwaiter: false,
			activeProfileQuestion: undefined,
			profileAnswers: [],
			userBallance: 0,
			host: "https://web20190521031103.azurewebsites.net/",
			messageBox: "",
		};
	}
	componentDidMount() {
		//axios.get('https://web20190521031103.azurewebsites.net/').then((x)=>this.setState({dataSurveys: x.data}));
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ user: e.detail.data })
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
		var activeSurvey = this.state.dataSurveys.find((s) => {// eslint-disable-next-line
			return s.title == e.currentTarget.dataset.survey;
		});
		var activeQuestion = activeSurvey.questions[0];
		console.log(activeSurvey);

		this.setState({ activePanel: 'survey', activeQuestion: activeQuestion, activeSurvey: activeSurvey })
	}
	showMessage = (e) => {


	}
	//Questions
	setAnswer = (e) => {
		var answers = this.state.answers;
		if (!e.answer) {// eslint-disable-next-line
			var has = answers.find((eb) => { return eb == e.id });
			var index = answers.indexOf(has);// eslint-disable-next-line
			if (index == -1) {
				console.log('not has in index')
			}
			else {
				answers.splice(index, 1);
			}
		}
		else {
			answers.push(e.id);
		}
		this.setState({ answers: answers })
	}
	checkAnswer = (e) => {
		var answers = [];
		answers.push(e);
		this.setState({ answers: answers })
	}
	stringAnswer = (e) =>{
		this.setState({emptyAnswerProfile: e.currentTarget.value, additional: JSON.stringify(e.currentTarget.value)});
	}
	stringQuestionsAnswer = (e) => {
		
		this.setState({emptyAnswer: e.currentTarget.value, additional: JSON.stringify(e.currentTarget.value) });
	}
	sendAnswers = () => {
		this.setState({ requestAwaiter: <ScreenSpinner /> });
		var answerCount = this.state.answers.length;
		// eslint-disable-next-line
		var t = this;
		var userId = this.state.user.id;
		var str = "";

		this.state.answers.forEach((x) => {
			var model = {
				UserId: userId,
				AnswerId: x,				
				QuestionId: this.state.activeQuestion.id
			};
			if(this.state.emptyAnswer && this.state.emptyAnswer != ''){
				model.emptyAnswer = this.state.emptyAnswer;
			}
			str += JSON.stringify(model);
			axios.post(`${this.state.host}/Home/SetAnswer`, model, { headers: { 'Content-Type': 'application/json' } }).then((e) => {
				answerCount--;
				// eslint-disable-next-line
				var questionPrice = t.state.activeQuestion.price;
				t.setState({ userBallance: t.state.userBallance + questionPrice , additional: str });
				if (answerCount === 0) {
					this.nextQuestion();
				}

			}).catch((ex) => {
				this.afterRequest();
				this.setState({ additional: str });
			});

		})
		this.setState({emptyAnswer:''});
	}
	refreshSurveys = () => {
		this.setState({ refreshAwaiter: true })
		axios.post(`${this.state.host}/Home/GetSurveys`, this.state.user,
			{ headers: { 'Content-Type': 'application/json' } }).then((e) => {
				this.afterRequest();
				this.setState({ dataSurveys: e.data });
			}).catch((ex) => {
				this.afterRequest();
				this.setState({ additional: `Exception: ${JSON.stringify(ex)}` });
			});

		axios.post(`${this.state.host}/Home/GetUserAgreement`, this.state.user, { headers: { 'Content-Type': 'application/json' } }).then((e) => {
			this.setState({ additional: `Resp: ${JSON.stringify(e)}` });

		}).catch((ex) => {
			this.afterRequest();
			this.setState({ additional: `Exception: ${JSON.stringify(ex)}` });
		});
		axios.post(
			`${this.state.host}/Home/GetProfileSurveys`, this.state.user,
			{ headers: { 'Content-Type': 'application/json' } }).then((e) => {
				this.afterRequest();
				this.setState({ userSurveys: e.data.questions /*, additional:JSON.stringify(e.data.questions)*/ });
			}).catch((ex) => {
				this.afterRequest();
				this.setState({ additional: `Exception: ${JSON.stringify(ex)}` });
			});
		axios.post(
			`${this.state.host}/Home/GetBallance`, this.state.user,
			{ headers: { 'Content-Type': 'application/json' } }).then((e) => {
				this.afterRequest();
				this.setState({ userBallance: e.data /*, additional:JSON.stringify(e.data.questions)*/ });
			}).catch((ex) => {
				this.afterRequest();
				this.setState({ additional: `Exception: ${JSON.stringify(ex)}` });
			});
	}

	nextQuestion = () => {
		var currentQuestionIndex = this.state.activeSurvey.questions.indexOf(this.state.activeQuestion);
		var next = this.state.activeSurvey.questions[currentQuestionIndex + 1];// eslint-disable-next-line
		var sur = this.state.activeSurvey;
		sur.questions.splice(currentQuestionIndex, 1);
		if (next === undefined) {
			var avilableSurveys = this.state.dataSurveys;
			avilableSurveys.splice(avilableSurveys.indexOf(this.state.activeSurvey), 1);
			this.setState({ activePanel: 'surveys', dataSurveys: avilableSurveys, answers: [], requestAwaiter: false })
		}
		else {
			this.setState({ activeSurvey: sur, activeQuestion: next, answers: [], requestAwaiter: false })
		}
	}
	//Profile Questions
	userSurvey = (e) => {
		var activeQuestion = this.state.userSurveys.find((s) => {// eslint-disable-next-line
			return s.id == e.currentTarget.dataset.id;
		});
		this.setState({ activePanel: 'profileQuestions', activeProfileQuestion: activeQuestion })
	}
	checkProfileAnswer = (e) => {
		var answers = [];
		answers.push(e);
		this.setState({ profileAnswers: answers })
	}

	setProfileAnswer = (e) => {
		var answers = this.state.profileAnswers;
		if (!e.answer) {// eslint-disable-next-line
			var has = answers.find((eb) => { return eb == e.id });
			var index = answers.indexOf(has);// eslint-disable-next-line
			if (index == -1) {
				console.log('not has in index')
			}
			else {
				answers.splice(index, 1);
			}
		}
		else {
			answers.push(e.id);
		}
		this.setState({ profileAnswers: answers })
	}
	sendProfileAnswers = () => {
		this.setState({ requestAwaiter: <ScreenSpinner /> });
		var answerCount = this.state.profileAnswers.length;
		var userId = this.state.user.id;

		// eslint-disable-next-line

		this.state.profileAnswers.forEach((x) => {
			var model = {
				userId: userId,
				answerId: x,
				questionId: this.state.activeProfileQuestion.id
			};
			if(this.state.emptyAnswerProfile && this.state.emptyAnswerProfile != ''){
				model.emptyAnswer = this.state.emptyAnswerProfile;
			}
			this.setState({emptyAnswerProfile:''});
			axios.post(`${this.state.host}/Home/SetProfileAnswer`, model, { headers: { 'Content-Type': 'application/json' } }).then((e) => {
				answerCount--;
				// eslint-disable-next-line
				if (answerCount == 0) {
					this.nextProfileQuestion();
				}
			}).catch((ex) => {
				this.afterRequest();
				this.setState({ activePanel: 'debug', additional: `Exception: ${JSON.stringify(ex)}` });
			});;

		})
		/*var answers = this.state.profileAnswers.map((x)=>{
			return{
				userId:userId,
				ProfileAnswerId:x
			}	
		});
		this.setState({ activePanel:'debug', additional:JSON.stringify(answers)});*/
	}
	nextProfileQuestion = () => {
		var currentQuestionIndex = this.state.userSurveys.indexOf(this.state.activeProfileQuestion);
		var avilableSurveys = this.state.userSurveys;
		avilableSurveys.splice(currentQuestionIndex, 1);
		var next = this.state.userSurveys[currentQuestionIndex];// eslint-disable-next-line
		if (next == undefined) {
			this.setState({ activePanel: 'profile', userSurveys: avilableSurveys, profileAnswers: [], requestAwaiter: false })
		}
		else {
			this.setState({ activeProfileQuestion: next, profileAnswers: [], requestAwaiter: false })
		}
	}




	afterRequest = () => {
		this.setState({ requestAwaiter: null, refreshAwaiter: false })
	}

	beforeRequest = () => {
		this.setState({ requestAwaiter: <ScreenSpinner />, refreshAwaiter: true })
	}
	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {
		return (
			<Epic activeStory={this.state.activePanel} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.go}
						selected={this.state.activePanel === 'rootview'}
						data-to="rootview"
						text="Главная"
					></TabbarItem>
					<TabbarItem
						onClick={this.go}
						selected={this.state.activePanel === 'profile'}
						data-to="profile"
						text="Профиль"
						label={this.state.userBallance>0?this.state.userBallance.toString():""}

					><Icon28User /> </TabbarItem>
					<TabbarItem
						onClick={this.go}
						selected={this.state.activePanel === 'surveys'}
						data-to="surveys"
						text="Опросы"
						label={this.state.userSurveys.length>0?this.state.userSurveys.length.toString():""}
					>
						<Icon28HelpOutline />
					</TabbarItem>
					<TabbarItem
						onClick={this.go}
						selected={this.state.activePanel === 'debug'}
						data-to="debug"
						text="Дебаг"
					>
						<Icon28HelpOutline />
					</TabbarItem>
				</Tabbar>
			}>
				<View id='rootview' popout={this.state.requestAwaiter} activePanel={this.state.activePanel}>
					<Main id="rootview" go={this.go} onRefresh={this.refreshSurveys} refreshAwaiter={this.state.refreshAwaiter} surveys={this.state.dataSurveys} userSurveys={this.state.userSurveys} user={this.state.user}></Main>
				</View>
				<View id='profile' activePanel={this.state.activePanel}>
					<Profile id="profile" ballance={this.state.userBallance} go={this.go} go_userSurvey={this.userSurvey} user={this.state.user} userSurveys={this.state.userSurveys} />
				</View>

				<View id='surveys'  activePanel={this.state.activePanel}>
					<Surveys id="surveys" go={this.go} onRefresh={this.refreshSurveys} refreshAwaiter={this.state.refreshAwaiter} surveys={this.state.dataSurveys} user={this.state.user} go_survey={this.survey} />
				</View>
				<View id='survey'  activePanel={this.state.activePanel}>
					<Questions stringSender={this.stringQuestionsAnswer} id="survey" go={this.go} checkAnswer={this.checkAnswer} nextQuestion={this.nextQuestion} setAnswer={this.setAnswer} sendAnswer={this.sendAnswers} activeQuestion={this.state.activeQuestion} activeSurvey={this.state.activeSurvey}></Questions>

				</View>
				<View id='profileQuestions'  activePanel={this.state.activePanel}>
					<ProfileQuestions id="profileQuestions" stringSender={this.stringAnswer} go={this.go} checkAnswer={this.checkProfileAnswer} nextQuestion={this.nextProfileQuestion} setAnswer={this.setProfileAnswer} sendAnswer={this.sendProfileAnswers} activeQuestion={this.state.activeProfileQuestion}></ProfileQuestions>
				</View>
				<View id='debug'  activePanel={this.state.activePanel}>
					<Debug id="debug" go={this.go} info={this.state.additional}></Debug>
				</View>
			</Epic>
		);
	}
}

export default App;
