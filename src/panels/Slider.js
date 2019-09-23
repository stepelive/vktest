import React from 'react';
import nyasha from '../img/nyasha.png';
import { Panel, Group, PanelHeader, Gallery, Div, Button } from '@vkontakte/vkui';
const Slider = ({ id, ChangeSlide, SliderData }) => (
  <Panel id={id}>
    <PanelHeader>
      Как это работает?
		  </PanelHeader>
    <Group>
      <Gallery
        slideWidth="100%"
        align="center"
        style={{ height: '100%' }}
        slideIndex={SliderData.slideIndex}
        onChange={(e) => { ChangeSlide(e); }}

      >
        <div style={{
          height: '450px',
          width: '100%'
        }}>
          <h1 style={{ textAlign: 'center' }}>Расскажите о себе</h1>
          <div style={{
            display: 'block',
            height: '300px',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundImage: 'url(' + nyasha + ')',
            backgroundPosition: 'center',
          }}>


          </div>
          <Div>
            <strong>Опросы подбираются персонально для каждого человека, и нам необходимо знать, че ты сука делаешь</strong>
          </Div>

        </div>

        <div style={{ backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg")' }} />
        <div style={{ backgroundImage: 'url("https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider1.jpg")' }} />
      </Gallery>
      <Div>
        <Button size="xl" onClick={() => ChangeSlide(SliderData.slideIndex + 1)}> {SliderData.slideIndex + 1 === SliderData.slides.length ? "Понятно!" : "Дальше"}</Button>
      </Div>
    </Group>
  </Panel>
);

export default Slider;
