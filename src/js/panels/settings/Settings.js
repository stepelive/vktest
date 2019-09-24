import React from 'react';
import {Panel, Group,PanelHeader,  Div, Button} from '@vkontakte/vkui';
const Settings = ({id }) => (
	<Panel id={id}>	
      <PanelHeader>
			Настройки
		  </PanelHeader>
      <Group title="Общие">  

        <Cell>
            
        </Cell>
        
      </Group>
    
			
	</Panel>
);

export default Settings;
