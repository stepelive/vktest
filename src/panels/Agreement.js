import React from 'react';
import {Panel, Group,PanelHeader, Gallery, Div, Button} from '@vkontakte/vkui';
const Agreement = ({id, Accept, Agreement }) => (
	<Panel id={id}>	
      <PanelHeader>
			Соглашение
		  </PanelHeader>
		{Agreement &&
      <Group title={Agreement.title}>  
          <Div>{Agreement.body}</Div>              
          <Div>
            <Button size="xl" onClick={() => Accept() }>Я согласен</Button>
          </Div>
      </Group>
    }
			
	</Panel>
);

export default Agreement;
