import React from 'react';
import {Panel,Header,  PanelHeader, HeaderButton, Group} from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';


const Questions = ({id, go, sendAnswer, activeQuestion ,activeSurvey}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="surveys">
				<Icon24BrowserBack/>
			</HeaderButton>}>            
			{activeSurvey.title}
		</PanelHeader>  
        <Group>

      	</Group> 
	</Panel>
);

export default Questions;
