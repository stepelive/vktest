import React from 'react';
import {Panel, Cell, List,  PanelHeader, HeaderButton, Group, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';

const osname = platform();

function RenderSurveys(props){
	const surveys = props.surveys;
	const go = props.go_survey;
	var itemList = surveys.map((survey)=>	  		
	  		<Cell onClick={go} data-survey={survey.id} expandable key={survey.id.toString()} before={<Icon28HelpOutline />}>{survey.title}</Cell>
	);
	return <List>{itemList}</List>
}
const Surveys = ({id, go, surveys, go_survey}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="surveys">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>
			Список отпросов
		</PanelHeader>
		{surveys &&
		<Group title="Доступные опросы">			
			<RenderSurveys go_survey={go_survey} surveys={surveys} go={go}></RenderSurveys>	
  		</Group>
		}		
	</Panel>
);

export default Surveys;
