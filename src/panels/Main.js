import React from 'react';
import {Panel, Cell, List,  PanelHeader, PullToRefresh, Group} from '@vkontakte/vkui';

const Main = ({id, go, user, onRefresh, surveys, agreement, userSurveys, refreshAwaiter, requestAwaiter, go_survey}) => (
	
	<Panel id={id}>
		<PanelHeader>
			Главная
		</PanelHeader>
		
		<PullToRefresh onRefresh={onRefresh} isFetching={refreshAwaiter}>			
				
				<Group>			
					<List>					
					{userSurveys &&
						<Cell  onClick={go} data-to="profile" indicator={userSurveys.length}>Профиль</Cell>
					}
					{surveys &&
						<Cell  onClick={go} data-to="surveys" indicator={surveys.length}>Опросы</Cell>
					}
						<Cell  onClick={go} data-to="slider">Как это работает?</Cell>
						<Cell onClick={go} data-to="debug">Debug</Cell>
										

						</List>
  				</Group>
					
		</PullToRefresh>	
			
	</Panel>
);

export default Main;
