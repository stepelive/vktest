
import React from 'react';
import {
  View, PanelHeader, Group, Touch, Panel, Div, Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'

const size = {
  x: window.innerWidth,
  y: window.innerHeight  * 0.9,
}
const layerStyle = {
  backgroundColor: 'rgba(248, 247, 216, 0.7)',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  transition: 'background-color .3s'
}
const circleStyle = {
  width: size.x,
  height: size.y,
  position: 'absolute',
  backgroundBlendMode: 'multiply',
  backgroundPosition: 'top',
  transformOrigin: 'center bottom'
}
const UserPicStyle = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  overflow: 'hidden',
  backgroundPosition: 'center',
  height: size.y - 200,
  width: size.x,
  margin: 0,
  padding: 0
}



class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      users:[
        {
          id:1,
          avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCqxQ--DqnBS4npIj956y0KQZP2H1-ZdHmsEb4pH9CiVsATBUhg",
          first_name:"Котэк",
          last_name:"Котэков",
          ages:15,
          interests:["Лежать", "Муркать", "Облизываться", "Кушоть", "Орать"]
        },
        {
          id:2,
          avatar:"https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",
          first_name:"Пёсик",
          last_name:"Пёсиков",          
          ages:3,
          interests:["Гавкать", "Будить рано", "Писить", "Бегать", "Бегать"]
        }
      ],      
      rot: 0,
      moveBack: false,
      shiftX: 0,
      shiftY: 0,
      debugInfo: '',
      limitOffset: 20,
      userPicBackgroundColor: '',
      sizeX: size.x,
      sizeY: size.y,
      halfX: size.x / 50
    }


    this.startX = 0;
    this.startY = 0;

    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  componentDidMount() {
  }

  onMove(e) {
    let shiftX = this.startX + e.shiftX;
    let rotation = shiftX / this.state.halfX;

    var style = "";
    if (this.agree || this.disAgree) {
      if (this.agree) {
        style = `rgba(0,0,255,.05)`;
      }
      else {
        style = `rgba(255,0,0,.05)`;
      }
    }
    this.setState({
      rot: rotation,
      moveBack: false,
      userPicBackgroundColor: style,
      shiftX: shiftX
    });
  }

  onEnd(e) {
    var deb = this.state.debugInfo;
    var users = this.state.users;
    if (this.agree || this.disAgree) {
      if (this.agree) {
        deb += `+${this.state.users[0].first_name}`;
      }
      else {
        deb += `-${this.state.users[0].first_name}`;
      }
      users.splice(0,1);
    } 
    this.setState({ userPicBackgroundColor: '', rot: 0,users:users, debugInfo: deb, moveBack: true, shiftX: 0, shiftY: 0 });
  }
  refreshUsers(e){
    var us = this.state.users;
    var oldUser=
      {
        id:1,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCqxQ--DqnBS4npIj956y0KQZP2H1-ZdHmsEb4pH9CiVsATBUhg",
        first_name:"Котэк",
        last_name:"Котэков",
        ages:15,
        interests:["Лежать", "Муркать", "Облизываться", "Кушоть", "Орать"]
      } ;
      us.push(oldUser);
    this.setState({users:us});
  }

  getCircleRef(el) { this.circleRef = el };

  get agree() {
    const { shiftX, limitOffset } = this.state;
    return Math.abs(shiftX) > limitOffset && shiftX > 0;
  }
  get disAgree() {
    const { shiftX, limitOffset } = this.state;
    return Math.abs(shiftX) > limitOffset && shiftX < 0;
  }
  render() { // eslint-disable-next-line
    const { refreshUsers, users,moveBack, debugInfo, userPicBackgroundColor, rot } = this.state;



    return (
      <View activePanel="gallery">
        <Panel id="gallery">
          <PanelHeader>{debugInfo} {users.length}</PanelHeader>
          {users.length !== 0 &&          
          <Touch
            onMove={this.onMove}
            onEnd={this.onEnd}
            style={{ ...circleStyle,transition: moveBack ? `transform .2s` : `none`, transform: `rotate(${rot}deg)` }}
          >
            <div style={{ ...layerStyle, backgroundColor: userPicBackgroundColor, }}></div>
            <Div style={{ ...UserPicStyle,  backgroundImage: `url(${users[0].avatar})` }}></Div>
            <h1>
              <strong>{users[0].first_name}</strong>
            </h1>
            <h2>
              <strong>{users[0].interests.join(', ')}</strong>
            </h2>
          </Touch>
          }
          {users.length === 0 &&
          <Group>
            <Button onClick={refreshUsers}>Сбросить</Button>
          </Group> 
          }
          
        </Panel>
      </View>
    )
  }
}

export default App;