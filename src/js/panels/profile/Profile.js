import React from 'react';
import { Panel, Group, Button, Div, Cell, List, Avatar, PanelHeader, PullToRefresh, HeaderButton, platform, IOS } from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';
import Icon24MoneyCircle from '@vkontakte/icons/dist/24/money_circle';
const osname = platform();

function RenderSurveys(props) {
	const surveys = props.userSurveys;
	const go = props.go_survey;
	var itemList = surveys.map((survey) =>
		<Cell onClick={go} data-id={survey.id} expandable key={survey.id} before={<Icon28HelpOutline />}>{survey.title}</Cell>
	);
	return <List>{itemList}</List>
}
const Profile = ({ id, surveyHistory, goToPanel, user, onRefresh, ballance, go_userSurvey, userSurveys, refreshAwaiter }) => (
	<Panel id={id}>
		<PanelHeader>
			Профиль
		</PanelHeader>

		<Group title="Общие данные">
			{user &&
				<Cell
					size="m"
					before={<Avatar src={user.photo_max_orig} size={80} />}>
					{user.first_name} {user.last_name}
				</Cell>
			}
		</Group>
		<Group title="Баланс">
			<Cell size="l" asideContent={ballance > 0 &&
				<Button before={<Icon24MoneyCircle />} level="sell">вывести</Button>
			} >
				{ballance} баллов

			</Cell>
		</Group>
		<Group title="Статистика">
			{surveyHistory &&
				<Cell size="l">
					{surveyHistory.sponsoredDone} оплачиваемых опросов пройдено
				</Cell>
				
			}
			{surveyHistory &&
			<Cell size="l">
				{surveyHistory.profileDone} профильных опросов пройдено
			</Cell>
			}
			{surveyHistory &&
			<Cell size="l">
				{surveyHistory.earnedBallance} заработано баллов на опросах
			</Cell>
			}		

		</Group>

		<PullToRefresh onRefresh={onRefresh} isFetching={refreshAwaiter}>
			{userSurveys &&
				<RenderSurveys userSurveys={userSurveys} go_survey={go_userSurvey}></RenderSurveys>
			}
		</PullToRefresh>
	</Panel>
);

export default Profile;
