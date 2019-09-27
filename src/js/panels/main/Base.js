
import React from 'react';
import {
	View, PanelHeader, Group, Touch, Panel, Div, Button
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'
const size = {
	x: 390,
	y: 900
}
const layerStyle = {
	backgroundColor: 'rgba(248, 247, 216, 0.1)',
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	//transition: 'background-color .3s'
}
const interestsStyle = {
	backgroundColor: '#29b6f6',
	borderRadius: 10,
	padding: 5,
	margin: 5,
	whiteSpace: 'nowrap'

}
const circleStyle = {
	position:'absolute',
	backgroundColor:'#fff',
	backgroundPosition: 'top',
}
const UserPicStyle = {
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	overflow: 'hidden',
	backgroundPosition: 'center',
	margin: 0,
	padding: 0
}



class Cards extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			id: props.id,
			debugServerInfo: props.debugServerInfo,
			users: [
				{
					id: 1,
					avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCqxQ--DqnBS4npIj956y0KQZP2H1-ZdHmsEb4pH9CiVsATBUhg",
					first_name: "Котэк",
					last_name: "Котэков",
					ages: 15,
					interests: ["Лежать", "Муркать", "Облизываться", "Кушоть", "Орать"]
				},
				{
					id: 2,
					avatar: "https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",
					first_name: "Пёсик",
					last_name: "Пёсиков",
					ages: 3,
					interests: ["Гавкать", "Будить рано", "Писить", "Бегать", "Бегать"]
				},
				{
					id: 3,
					avatar: "https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",
					first_name: "Второй пёсик",
					last_name: "Пёсиков",
					ages: 3,
					interests: ["Гавкать", "Будить рано", "Писить", "Бегать", "Бегать"]
				},
				{
					id: 4,
					avatar: "https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",
					first_name: "Ещё один пёсик",
					last_name: "Пёсиков",
					ages: 3,
					interests: ["Гавкать", "Будить рано", "Писить", "Бегать", "Бегать"]
				}
			],
			myInterests: ["Писить", "Кушоть", "Орать"],
			rot: 0,
			moveBack: false,
			shiftX: 0,
			shiftY: 0,
			debugInfo: '',
			limitOffset: 30,
			userPicBackgroundColor: '',
			sizeX: 390,
			sizeY: 900,
			halfX: 390 / 20,
			minchange: 2
		}
		this.startX = 0;
		this.startY = 0;
		this.renderInterests = this.renderInterests.bind(this);

		this.onMove = this.onMove.bind(this);
		this.refreshUsers = this.refreshUsers.bind(this);
		this.onEnd = this.onEnd.bind(this);
	}


	componentDidMount() {
		this.setState({ sizeX: window.innerWidth, sizeY:window.innerHeight });		  
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
			
		}
		var rotation = this.state.rot * 5;
		this.setState({ userPicBackgroundColor: '', rot : rotation ,  debugInfo: deb, moveBack: false, shiftX: 0, shiftY: 0 });
		setTimeout(()=>{
			users.splice(0, 1);
			this.setState({ rot: 0,users: users, moveBack: true});
		},500)
	}


	refreshUsers(e) {
		var users = [
			{
				id: 1,
				avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCqxQ--DqnBS4npIj956y0KQZP2H1-ZdHmsEb4pH9CiVsATBUhg",
				first_name: "Котэк",
				last_name: "Котэков",
				ages: 15,
				interests: ["Лежать", "Муркать", "Облизываться", "Кушоть", "Орать"]
			},
			{
				id: 2,
				avatar: "https://xn-----6kckiwadblcgjxwwirci4z.xn--p1ai/image/cache/catalog/vse-kartinki/sobaka/sobaka-068-800x800.jpg",
				first_name: "Пёсик",
				last_name: "Пёсиков",
				ages: 3,
				interests: ["Гавкать", "Будить рано", "Писить", "Бегать", "Бегать"]
			}
		];
		this.setState({ users: users });
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
	renderInterests(interests) {
		var listItem;// eslint-disable-next-line
		var dCount = 0;
		listItem = [];
		var myInterests = this.state.myInterests;
		interests.forEach((e) => {
			var bgStyle = interestsStyle.backgroundColor;

			if (myInterests.indexOf(e) !== -1) {
				bgStyle = '#0000ff';
			}
			listItem.push(<span style={{ ...interestsStyle, backgroundColor: bgStyle }}>{e}</span>);
		}
		);
		return <Div style={{ lineHeight: '2.5', textAlign: 'center' }}>{listItem}</Div>
	};

	render() { // eslint-disable-next-line
		const { id, debugServerInfo, refreshUsers, users,sizeX, sizeY,  moveBack, debugInfo, userPicBackgroundColor, rot } = this.state;
		return (
			<Panel id={id} style={{overflow:'hidden'}}>
				<PanelHeader>{debugServerInfo}</PanelHeader>
				<Group>


					{users.length !== 0 && users[0] != undefined &&
						<Touch
							onMove={this.onMove}
							onEnd={this.onEnd}

							style={{ ...circleStyle, transformOrigin: `center ${sizeY * 2}px`, width: sizeX, height: sizeY, transition: moveBack?'none':`transform .05s ease-out`, transform: `rotate(${rot}deg)` }}
						>
							<Div style={{ height: '100%', padding:0 }}>
								<div style={{ ...layerStyle, backgroundColor: userPicBackgroundColor, }}></div>
								<Div style={{ ...UserPicStyle, width:sizeX,	height: sizeY - 300, backgroundImage: `url(${users[0].avatar})` }}></Div>
								<h1 style={{ textAlign: 'center' }}>
									<strong>{users[0].first_name} {users[0].last_name}</strong>
								</h1>
								{this.renderInterests(users[0].interests)}

							</Div>
						</Touch>

					}

					{users.length !== 0 && users[1] != undefined &&
						<Div style={{padding:0, height: sizeY }}>
							<Div style={{ ...UserPicStyle, width:sizeX,	height: sizeY - 300, backgroundImage: `url(${users[1].avatar})` }}></Div>
							<h1 style={{ textAlign: 'center' }}>
								<strong>{users[1].first_name} {users[1].last_name}</strong>
							</h1>
							{this.renderInterests(users[1].interests)}
						</Div>


					}
					{users.length === 0 &&
						<Group>
							<h1>Больше нету. Можешь сбросить </h1>
							<Button onClick={this.refreshUsers}>Сбросить</Button>
						</Group>
					}
				</Group>

			</Panel>
		)
	}
}

export default Cards;