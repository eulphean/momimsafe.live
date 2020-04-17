import React from 'react'
import Radium from 'radium'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { padding } from './CommonStyles.js'
import ScrollToTop from './ScrollToTop.js'
import VideoStream from './VideoStream.js'
import TextInput from './TextInput.js'
import Websocket from './Websocket.js'

const styles = {
  container: {
    padding: padding.big,
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
        <Router basename={process.env.PUBLIC_URL}> 
         <ScrollToTop /> 
         <Websocket 
            ref={this.websocket}
            newImageCbk={this.onStreamImage.bind(this)} 
         />
         <Switch>
            <Route path="/">
              <VideoStream imageSrc={this.state.imageSrc}/>
              <TextInput onSubmit={this.emitMessage.bind(this)} />
            </Route>
          </Switch>
        </Router>
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