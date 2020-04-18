import React from 'react'
import Radium from 'radium'
import HalfCircleButton, { CircleType } from './HalfCircleButton.js'
import LiveInfo from './LiveInfo.js'
import VideoStream from './VideoStream.js'
import TextInput from './TextInput.js'
import Websocket from './Websocket.js'


const styles = {
  container: {
    // Empty for now.  
  },

  topButton: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    margin: 'auto',
    top: '-5px',
    left: '0px',
    right: '0px',
    opacity: '90%'
  },

  bottomButton: {
    alignItems: 'center',
    position: 'absolute',
    margin: 'auto',
    left: '0px',
    right: '0px',
    bottom: '-5px',
    opacity: '90%'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageSrc: ''
    };

    this.websocket = React.createRef(); 
  }

  render() {
    return (
      <div style={styles.container}>
        <LiveInfo />
          <HalfCircleButton shape={CircleType.Bottom} style={styles.topButton}>About</HalfCircleButton>
          <HalfCircleButton shape={CircleType.Top} style={styles.bottomButton}>Send</HalfCircleButton>
      </div>
    );
  }

  onStreamImage(data) {
    let src = 'data:image/jpeg;base64,' + data
    this.setState({
      imageSrc: src
    }); 
  }

  emitMessage(text) {
    this.websocket.current.sendMessage(text); 
  }
}

export default Radium(App);

// Bring this in later in the development. But it's good that these are developed. 
{/* <Websocket 
ref={this.websocket}
newImageCbk={this.onStreamImage.bind(this)} 
/> */}
{/* <VideoStream imageSrc={this.state.imageSrc}/>
<TextInput onSubmit={this.emitMessage.bind(this)} /> */}