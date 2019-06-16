import React from 'react';
import {Panel, Cell, List,  PanelHeader, PullToRefresh,HeaderButton, Group, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';

const osname = platform();

function RenderSurveys(props){
	const surveys = props.surveys;
	const go = props.go_survey;
	var itemList = surveys.map((survey)=>	  		
	  		<Cell onClick={go} data-survey={survey.title} expandable key={survey.id} before={<Icon28HelpOutline />}>{survey.title}</Cell>
	);
	return <List>{itemList}</List>
}
const Surveys = ({id, go, user, onRefresh, surveys, refreshAwaiter, requestAwaiter, go_survey}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="main">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>
			Список отпросов			
		</PanelHeader>
		<PullToRefresh onRefresh={onRefresh} isFetching={refreshAwaiter}>
			{surveys &&
				<Group title={`Ваши доступные опросы`}>			
					<RenderSurveys go_survey={go_survey} requestAwaiter={requestAwaiter} surveys={surveys} go={go}></RenderSurveys>	
  				</Group>
			}		
		</PullToRefresh>
	</Panel>
);

export default Surveys;
