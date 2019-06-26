import React from 'react';
import {Panel, Group,PanelHeader, Gallery, Div, Button} from '@vkontakte/vkui';
const Slider = ({id, ChangeSlide, SliderData }) => (
	<Panel id={id}>
		 <PanelHeader>
			Как это работает?
		  </PanelHeader>               
			<Group>
              <Gallery
                slideWidth="100%" 
                align="center"
                style={{ height: 400 }}
				slideIndex={SliderData.slideIndex}  
				onChange={(e)=>{ChangeSlide(e);}}             
              >
                <div style={{ backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg")' }} />
                <div style={{ backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg")' }} />
                <div style={{ backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg")' }} />
              </Gallery>
              <Div>
                <Button size="xl" onClick={() => ChangeSlide(SliderData.slideIndex + 1) }> {SliderData.slideIndex + 1 == SliderData.slides.length?"Понятно!":"Дальше"}</Button>
              </Div>
            </Group>
	</Panel>
);

export default Slider;
