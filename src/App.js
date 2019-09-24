import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon28More from '@vkontakte/icons/dist/28/more';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';

import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {
    Root,
    View,
    ScreenSpinner, PanelHeader,
    Epic,
    Tabbar,
    Panel,
    TabbarItem,
    Icon
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'

import ProfileBase from './js/panels/profile/Profile';
import SurveysBase from './js/panels/surveys/Surveys';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debug: true,
            activeStory: { view: 'profile', panel: 'base' },
            history: [{
                view: 'profile',
                panel: 'base'
            }],
            user: undefined,
            userBallance:15,
            surveyHistory: {
                sponsoredDone:0,
                profileDone:0,
                earnedBallance: 0
            } ,
            surveys: [],
            userSurveys: [],


        };
        this.onStoryChange = this.onStoryChange.bind(this);
    }
    componentDidMount() {
        //axios.get('https://web20190521031103.azurewebsites.net/' ).then((x)=>this.setState({dataSurveys: x.data}));
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppGetUserInfoResult':
                    this.setState({ user: e.detail.data })
                    this.loadSurveys();
                    break;
                default:
                    console.log(e.detail.type);
            }
        });
        connect.send('VKWebAppGetUserInfo', {});
    }
    ///#region surveys

    //Тут данные грузятся-баланс, пройденные опросы, новые опросы
    loadSurveys() {
        if (this.state.debug) {
            var _surveys = [
                {
                    title: "Опрос с radioButton", id: "0",
                    questions: [
                        {
                            id: "-1",
                            title: "Слайдни!",
                            type: "slider",
                            avilableAnswers: [
                               
                            ]
                        }
                    ]
                },
                {
                    title: "Опрос с чекбоксом", id: "1",
                    questions: [
                        {
                            id: "0",
                            title: "Чо каво?",
                            type: "checkbox",
                            avilableAnswers: [
                                {
                                    id: "0",
                                    title: "да"
                                },
                                {
                                    id: "1",
                                    title: "нет"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "Опрос со слайдером", id: "2",
                    questions: [
                        {
                            id: "2",
                            title: "Слайдни!",
                            type: "slider",
                            avilableAnswers: [
                               
                            ]
                        }
                    ]
                },
                
                {
                    title: "Опрос со строкой", id: "3",
                    questions: [
                        {
                            id: "3",
                            title: "Пешы!",
                            type: "string",
                            avilableAnswers: [
                               
                            ]
                        }
                    ]
                },
                {
                    title: "Опрос с перемещением приоритета", id: "4",
                    questions: [
                        {
                            id: "4",
                            title: "Слайдни!",
                            type: "move",
                            avilableAnswers: [
                               
                            ]
                        }
                    ]
                }];
            var surveyHistory = {
                sponsoredDone:12,
                profileDone:5,
                earnedBallance: 15
            }

            this.setState({ surveys: _surveys, surveyHistory:surveyHistory });

        }

    }




    ///



    activePanel(e) {
        var activePanel = this.state.history.find((x) => {
            return x.view == e.currentTarget.dataset.view
        })

    }

    onStoryChange(e) {
        var c = this.state.activeStory;
        c.view = e.currentTarget.dataset.view;
        this.setState({ activeStory: c })
    }

    render() {

        return (
            <Epic activeStory={this.state.activeStory.view} tabbar={
                <Tabbar>
                     <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory.view === 'info'}
                        data-view="info"
                        text="Информация"
                    ><Icon28More /></TabbarItem>
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory.view === 'profile'}
                        data-view="profile"
                        text="Профиль"
                        label={`${this.state.userBallance.toString()}`}
                    ><Icon28User /></TabbarItem>
                   
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory.view === 'surveys'}
                        data-view="surveys"
                        label={this.state.surveys.length.toString()}
                        text="Опросы"
                    ><Icon28Newsfeed /></TabbarItem>
                  
                    <TabbarItem
                        onClick={this.onStoryChange}
                        selected={this.state.activeStory.view === 'settings'}
                        data-view="settings"
                        text="Настройки"
                    ><Icon28Settings /></TabbarItem>

                </Tabbar>
            }>
                 <View id="info" activePanel="base">
                    <Panel id="base">
                        <PanelHeader>Информация всякая</PanelHeader>
                    </Panel>
                </View>
                <View id="profile" activePanel="base">
                    <ProfileBase id="base" surveyHistory={this.state.surveyHistory} ballance={this.state.userBallance} go={this.go} go_userSurvey={this.userSurvey} user={this.state.user} userSurveys={this.state.userSurveys} />
                </View>
                
                <View id="surveys" activePanel="base">
                    <SurveysBase id="base" onRefresh={this.loadSurveys} surveys={this.state.surveys} user={this.state.user} />
                </View>
                
                <View id="settings" activePanel="base">
                    <Panel id="base">
                        <PanelHeader>Настройки</PanelHeader>
                    </Panel>
                </View>
            </Epic>
        )
    }
}

export default App;