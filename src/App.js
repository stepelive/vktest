
import React from 'react';
import {  
    View,
    PanelHeader, Group, Touch,
  
    Panel,  
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css'


const circleStyle = {
    width: 200,
    height: 200,
    background: 'var(--accent)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -20,
    marginTop: -20
  }
  
  const containerStyle = {
    height: 200,
    border: '8px solid var(--icon_secondary)',
    position: 'relative'
  }

  class App extends React.Component {
  
    constructor (props) {

      super(props);

      this.state = {
        shiftX: 0,
        shiftY: 0
      }
      
      this.startX = 0;
      this.startY = 0;
      
      this.onMove = this.onMove.bind(this);
      this.onEnd = this.onEnd.bind(this);
      this.getCircleRef = this.getCircleRef.bind(this);
    }
    
    componentDidMount () {
      this.limitX = this.circleRef.offsetLeft;
      this.limitY = this.circleRef.offsetTop;
    }
    
    onMove (e) {
      let shiftX = this.startX + e.shiftX;
      let shiftY = this.startY + e.shiftY;
      
      this.setState({
        shiftX: shiftX > this.limitX ? this.limitX : shiftX < -this.limitX ? -this.limitX : shiftX,
        shiftY: shiftY > this.limitY ? this.limitY : shiftY < -this.limitY ? -this.limitY : shiftY, 
      });
    }
    
    onEnd (e) {
      this.startX += e.shiftX;
      this.startY += e.shiftY;
    }
    
    getCircleRef (el) { this.circleRef = el }; 
    
    get limitExceeded () {
      const { shiftX, shiftY } = this.state;
      return Math.abs(shiftX) >= this.limitX || Math.abs(shiftY) >= this.limitY
    }

    render () { // eslint-disable-next-line
      const { shiftX, shiftY, limitExceeded } = this.state;
    
      return (
        <View activePanel="gallery">
          <Panel id="gallery">
            <PanelHeader>Touch</PanelHeader>
            <Group title="Перетащите кружок">
              <div style={{ 
                ...containerStyle, 
                borderColor: this.limitExceeded ? 'var(--destructive)' : 'var(--icon_secondary)' }}
              >
                <Touch 
                  getRootRef={this.getCircleRef}
                  onMove={this.onMove} 
                  onEnd={this.onEnd}
                  style={{ ...circleStyle, transform: `translate(${shiftX}px, ${shiftY}px)` }} 
                />
              </div>  
            </Group>
          </Panel>
        </View>
      )
    }
  }

export default App;