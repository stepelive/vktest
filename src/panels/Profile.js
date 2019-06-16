import React from 'react';
import {Panel, Cell, List, Avatar, PanelHeader, PullToRefresh,HeaderButton,platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';

const osname = platform();

function RenderSurveys(props){
	const surveys = props.userSurveys;
	const go = props.go_survey;
	var itemList = surveys.map((survey)=>	  		
	  		<Cell onClick={go} data-id={survey.id} expandable key={survey.id} before={<Icon28HelpOutline />}>{survey.title}</Cell>
	);
	return <List>{itemList}</List>
}
const Profile = ({id, go,user, onRefresh,ballance, go_userSurvey, userSurveys, refreshAwaiter }) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="main">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}>
			Информация
		</PanelHeader>
		{user &&
		<Cell
		photo={user.photo_max_orig} description={`Ваш баланс: ${ballance} р`}  before={<Avatar src={user.photo_max_orig} size={80}/>}	size="l">
				{user.first_name} {user.last_name}
	  		</Cell>


		}
		
		<PullToRefresh onRefresh={onRefresh} isFetching={refreshAwaiter}>
			{userSurveys &&
				<RenderSurveys userSurveys={userSurveys} go_survey={go_userSurvey}></RenderSurveys>
			}		
		</PullToRefresh>
	</Panel>
);

export default Profile;
