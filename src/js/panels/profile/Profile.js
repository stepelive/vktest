import React from 'react';
import { Panel, Group, Button, Div, Cell, List, Avatar, PanelHeader, FormLayout, Input, PullToRefresh, Select, Icon24Camera, Icon24Shuffle, Icon16Add, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
import axios from 'axios';
const osname = platform();



class Profile extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			id: props.id,
			user: props.user,
			interests: [],
			debugInfo: "Тут дебаг",
			deNorm: "Ну тесты"
		}
		this.getSuggestions = this.getSuggestions.bind(this);
		this.renderInterests = this.renderInterests.bind(this);

	}


	componentDidMount() {
	}
	getSuggestions(e) {

		this.setState({ debugInfo: JSON.stringify(e.target.value) });

		if (e.target.value.length < 2)
			return;
		else {
			var t = this;
			axios.get(`https://salert.info/interests/SearchFromQuery?str=${e.target.value}`,
			).then((x) => {
				t.setState({ debugInfo: JSON.stringify(x.data), interests: x.data });
			}).catch(function (x) {
				t.setState({ debugInfo: 'Ошибка ' + JSON.stringify(x) });
			});
		}

	}
	renderInterests() {
		var interests = this.state.interests;
		if (!interests || interests.length < 1)
			return <Div>Интересы типо</Div>

		var itemList = interests.map((e) =>
			<option value={e.id}>{e.title}</option>
		);
		return <Select top="Выберите интерес из списка" placeholder="Выберите интерес">{itemList}</Select>;



	}
	render() { // eslint-disable-next-line
		const { id, user, debugInfo, interests, deNorm } = this.state;
		return (
			<Panel id={id}>
				<PanelHeader>
					Профиль
		</PanelHeader>
				{user &&
					<Group title="Общие данные">

						<Cell
							size="m"
							before={<Avatar src={user.photo_max_orig} size={80} />}>
							{user.first_name} {user.last_name}
						</Cell>
					</Group>
				}
				{user &&
					<Group title="Кнопки с иконками">
						<Input onInput={this.getSuggestions} top="Начните вводить для подсказки" />
						<this.renderInterests></this.renderInterests>

						<Div>
							{deNorm}
						</Div>
						<Div>
							{debugInfo}
						</Div>

						<Div>
							<Button before={<Icon28HelpOutline />} size="l">Take a photo</Button>
						</Div>
						<Div>
							<Button level="secondary" before={<Icon28HelpOutline />} size="l">Shuffle</Button>
						</Div>

					</Group>
				}

			</Panel>
		)
	}
}

export default Profile;