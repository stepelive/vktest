import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon28Settings from '@vkontakte/icons/dist/28/settings';
import Icon28Message from '@vkontakte/icons/dist/28/message';
import Icon28Users from '@vkontakte/icons/dist/28/users';
import React from 'react';
import connect from '@vkontakte/vkui-connect';
import axios from 'axios';
import {
  Root,
  View, Div,
  ScreenSpinner, PanelHeader,
  Epic,
  Tabbar,
  Panel,
  TabbarItem,
  Icon
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'

import Cards from './js/panels/main/Base';
import Profile from './js/panels/profile/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debug: true,
      activeStory: { view: 'cards', panel: 'cards' },
      history: [{
        view: 'cards',
        panel: 'cards'
      }],
      user: undefined,
      debugServerInfo: 'default'
    };
    this.onStoryChange = this.onStoryChange.bind(this);
    this.renderDebug = this.renderDebug.bind(this);
  }
  componentDidMount() {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({ user: e.detail.data });
          var t = this;
          axios.post("https://salert.info/user/GetUserData",  e.detail.data
          ).then((x) => {
            t.renderDebug(x.data, false);
          }).catch(function (x) {
            t.renderDebug(x, true);
          });
          break;
        default:
          console.log(e.detail.type);
      }
    });

    
    connect.send('VKWebAppGetUserInfo', {});
  }
  renderDebug(str, isCatch) {
      this.setState({ debugServerInfo: isCatch + JSON.stringify(str), activeStory: { view: 'info', panel: 'info' } });
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
            text="Профиль"
          ><Icon28User /></TabbarItem>

          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory.view === 'cards'}
            data-view="cards"
            text="Карточки"
          ><Icon28Users /></TabbarItem>

          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory.view === 'base'}
            data-view="base"
            text="Сообщения"
          ><Icon28Message /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory.view === 'settings'}
            data-view="settings"
            text="Настройки"
          ><Icon28Settings /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory.view === 'debug'}
            data-view="debug"
            text="Дебаг"
          ><Icon28Settings /></TabbarItem>
        </Tabbar>
      }>
        <View id="info" activePanel="info">
          <Profile id="info" user={this.state.user}></Profile>
        </View>

        <View id="cards" activePanel="cards">
          <Cards id="cards" debugServerInfo={this.state.debugServerInfo}></Cards>

        </View>
        <View id='debug' activePanel='debug'>
          <Panel id='debug' >
            <PanelHeader>Debug</PanelHeader>
            <Div>
              {this.state.debugServerInfo}
            </Div>

          </Panel>
        </View>

      </Epic>
    )
  }
}

export default App;