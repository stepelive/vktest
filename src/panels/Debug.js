import React from 'react';
import {Panel, Div,PanelHeader, HeaderButton, Group} from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
const Debug = ({additional, go, id}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="surveys">
				<Icon24BrowserBack/>
			</HeaderButton>}>            
			Debug
		</PanelHeader>  
        <Group title="Debug">
			<Div>
				{additional}
			</Div>
      	</Group> 
	</Panel>
);

export default Debug;
