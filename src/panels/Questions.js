import React from 'react';
import {Panel,List,Button, Div,Checkbox, PanelHeader, HeaderButton, Group} from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';


function WriteAnswer(orig, e, sender){
	var answer = {
		answer:orig.target.checked,
		id:e.id
	};

	sender(answer);
}

function RenderAnswers(props){
	const answers = props.question.avilableAnswers;
	const sender = props.sender;
	var listItem = answers.map((e)=>
		<Checkbox onChange={(orig) => WriteAnswer(orig,e,sender)} key={e.id.toString()}>{e.title}</Checkbox>
	);
	return <List>{listItem}</List>
}

const Questions = ({id, go, sendAnswer,setAnswer, activeQuestion ,activeSurvey}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="surveys">
				<Icon24BrowserBack/>
			</HeaderButton>}>            
			{activeSurvey.title}
		</PanelHeader>  
        <Group title={activeQuestion.title}>
			<RenderAnswers sender={setAnswer} question={activeQuestion}></RenderAnswers>
			<Div>
       			<Button size="xl" onClick={sendAnswer} level="secondary">Дальше</Button>
     		</Div>
      	</Group> 
	</Panel>
);

export default Questions;
