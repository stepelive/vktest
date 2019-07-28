import React from 'react';
import {Panel,List,ListItem,Button,Radio, Div,Checkbox,Input, PanelHeader, HeaderButton, Group} from '@vkontakte/vkui';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';


function WriteAnswer(orig, e, sender){
	var answer = {
		answer:orig.target.checked,
		id:e.id
	};
// eslint-disable-next-line
	var result = sender(answer);
}
function RenderAnswers(props){
	const answers = props.question.avilableAnswers;
	const sender = props.sender;
	const stringSender = props.stringSender;
	const checker = props.checker;
	var listItem;// eslint-disable-next-line
	if(props.question.type == 'checkbox'){
		listItem = answers.map((e)=>
		<Checkbox onChange={(orig) => WriteAnswer(orig,e,sender)} key={e.id.toString()}>{e.title}</Checkbox>
	);
	}
	else if(props.question.type === 'radio'){
		listItem = answers.map((e)=>
		<Radio onChange={(orig) => checker(e.id)} name={props.question.id}  value={e.id} key={e.id.toString()}>{e.title}</Radio>
	);
	}	
	else {
		return <List><ListItem><Input   placeholder="Введите Ваш ответ" onChange={(orig)=>stringSender(orig)} /></ListItem></List>
	}	
	if (props.question.avilableEmpty) {
		return <List>
			{listItem}
			<ListItem><Input placeholder="Введите Ваш ответ"  onChange={(orig)=>stringSender(orig)} /></ListItem>
		</List>
	}
	return <List>{listItem}</List>
}

const ProfileQuestions = ({id, go, sendAnswer, setAnswer, checkAnswer, requestAwaiter, activeQuestion,stringSender}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="profile">
				<Icon24BrowserBack/>
			</HeaderButton>}>            
			Профильные опросы
		</PanelHeader>  
        <Group >
		<Div>{activeQuestion.title}</Div>
		{activeQuestion.imageSrc &&
			<img src={activeQuestion.imageSrc} alt="da" style={{width:'100%'}} />
			 // eslint-disable-next-line
		}
			<RenderAnswers sender={setAnswer} stringSender={stringSender} checker={checkAnswer} question={activeQuestion}></RenderAnswers>			
			<Div>
       			<Button size="xl" onClick={sendAnswer} level="primary">Следующий вопрос</Button>
     		</Div>
      	</Group> 
	</Panel>
);

export default ProfileQuestions;
