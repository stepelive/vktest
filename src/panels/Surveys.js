import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, Group, Div, ListItem, Button, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();


function Surveys(props) {
	const surveys = props.surveys;
	const listItems = surveys.map((survey) =>
	  <ListItem key={survey.id}>
		{`${survey.id} : ${survey.description}`}
	  </ListItem>
	);
	return (
	  <listItems>{listItems}</listItems>
	);
  }


const Persik = ({id,go, data}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			Rates
		</PanelHeader>
		
		<Group title="Опросы">
		
			<Surveys surveys={data} ></Surveys>	
		</Group>
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
