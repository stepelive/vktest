import React from 'react';
import {Panel,List,Button,Radio, Slider, Div,Checkbox, PanelHeader, HeaderButton, Group} from '@vkontakte/vkui';
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
	const checker = props.checker;
	const sliderAnswer = props.sliderAnswer;
	var listItem;// eslint-disable-next-line
	if(props.question.type == 'checkbox'){
		listItem = answers.map((e)=>
		<Checkbox onChange={(orig) => WriteAnswer(orig,e,sender)} key={e.id.toString()}>{e.title}</Checkbox>
	);
	}
	else if(props.question.type === "slider"){		
			return	<Slider	min={0}	max={10} 	step={1}	onChange={value1 => sliderAnswer(value1)} />	
	}
	else{
		listItem = answers.map((e)=>
		<Radio onChange={(orig) => checker(e.id)} name={props.question.id}  value={e.id} key={e.id.toString()}>{e.title}</Radio>
	);
	}
	return <List>{listItem}</List>
}

const Questions = ({id, go, sendAnswer, radioAnswer, checkboxAnswer, sliderAnswer, requestAwaiter, activeQuestion ,activeSurvey}) => (
	<Panel id={id}>
		<PanelHeader
			left={<HeaderButton onClick={go} data-to="surveys">
				<Icon24BrowserBack/>
			</HeaderButton>}>            
			{activeSurvey.title }
		</PanelHeader>  
        <Group >
		<Div>{activeQuestion.title}</Div>
		{activeQuestion.imageSrc &&
			<img src={activeQuestion.imageSrc} alt="da" style={{width:'100%'}} />
			 // eslint-disable-next-line
		}
			<RenderAnswers sender={radioAnswer} sliderAnswer={sliderAnswer} checker={checkboxAnswer} question={activeQuestion}></RenderAnswers>			
			<Div>
       			<Button size="xl" onClick={sendAnswer} level="primary">Следующий вопрос</Button>
     		</Div>
      	</Group> 
	</Panel>
);

export default Questions;
