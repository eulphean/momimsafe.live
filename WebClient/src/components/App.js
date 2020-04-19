import React from 'react'
import Radium from 'radium'
import HalfCircleButton, { CircleType } from './HalfCircleButton.js'
import LiveInfo from './LiveInfo.js'
import Popup, {PopupType} from './Popup.js'
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
    display: 'flex',
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
      imageSrc: '',
      popupType: PopupType.About,
      showButtons: true
    };

    this.websocket = React.createRef(); 
    this.popupRef = React.createRef(); 
  }

  render() {
    return (
      <div style={styles.container}>
        <LiveInfo />
        <Popup 
          ref={this.popupRef}
          onClose={this.handlePopupClose.bind(this)}
          type={this.state.popupType} />
        <HalfCircleButton 
          key={'About'}
          show={this.state.showButtons}
          onClick={this.handleClick.bind(this)} 
          shape={CircleType.Bottom} 
          style={styles.topButton}>About</HalfCircleButton>
        <HalfCircleButton 
          key={'Send'}
          show={this.state.showButtons}
          onClick={this.handleClick.bind(this)}
          shape={CircleType.Top} 
          style={styles.bottomButton}>Send</HalfCircleButton>
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

  handlePopupClose() {
    this.setState({
      showButtons: true
    }); 
  }

  handleClick(type) {
    let popupType = (type === 'About') ? PopupType.About : PopupType.Send;
    // Set popup type based on the button click. 
    this.setState({
      popupType: popupType,
      showButtons: false
    });

    // Show popup. 
    this.popupRef.current.showPopup(); 
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