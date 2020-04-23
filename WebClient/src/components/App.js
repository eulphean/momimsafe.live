import React from 'react'
import Radium from 'radium'
import HalfCircleButton, { CircleType } from './HalfCircleButton.js'
import LiveInfo from './LiveInfo.js'
import Popup, {PopupType} from './Popup.js'
import VideoStream from './VideoStream.js'
import { withOrientationChange } from 'react-device-detect'
import TextInput from './TextInput.js'
import Websocket from './Websocket.js'

const styles = {
  container: {
    position: 'relative'
  },

  topButton: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    margin: 'auto',
    top: '-5px',
    left: '0px',
    right: '0px',
    opacity: '0.9'
  },

  bottomButton: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    margin: 'auto',
    left: '0px',
    right: '0px',
    bottom: '-5px',
    opacity: '0.9'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageSrc: '',
      popupType: PopupType.About,
      showButtons: ''
    };

    this.websocket = React.createRef(); 
    this.popupRef = React.createRef(); 
    this.timeoutDuration = 3000; 
    //this.buttonTimeout = setTimeout(this.hideButtons.bind(this), this.timeoutDuration); 
  }

  render() {
    return (
      <div onClick={this.onTouch.bind(this)} onTouchStart={this.onTouch.bind(this)} style={styles.container}>
        <Websocket 
          ref={this.websocket}
        /> 
        <LiveInfo />
        <VideoStream ref={this.videoStream} />
        <Popup 
          ref={this.popupRef}
          onClose={this.handlePopupClose.bind(this)}
          onSend={this.handleSendMessage.bind(this)}
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

    // Enable timeout again. 
    this.buttonTimeout = setTimeout(this.hideButtons.bind(this), this.timeoutDuration); 
  }

  handleClick(event, type) {
    event.stopPropagation();

    // Remove any hiding timeout because the buttons are hiding anyways. 
    clearTimeout(this.buttonTimeout);

    let popupType = (type === 'About') ? PopupType.About : PopupType.Send;
    // Set popup type based on the button click. 
    this.setState({
      popupType: popupType,
      showButtons: false
    });

    // Show popup. 
    this.popupRef.current.showPopup(); 
  }

  onTouch() {
    // Clear previous timeout, set new timeout. 
    clearTimeout(this.buttonTimeout); 
    this.buttonTimeout = setTimeout(this.hideButtons.bind(this), this.timeoutDuration); 

    this.setState({
      showButtons: true
    }); 
  }

  hideButtons() {
    this.setState({
      showButtons: false
    }); 
  }

  handleSendMessage(content) {
    this.websocket.current.sendMessage(content); 
  }
}

export default Radium(withOrientationChange(App));