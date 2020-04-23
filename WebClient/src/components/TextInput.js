import React from 'react'
import Radium from 'radium'
import { fontSize, padding, fontFamily, color } from './CommonStyles.js';

const styles={
    container: {
        display: 'flex',
        width: '100%',
        height: '50px',

        '@media (min-width: 750px) and (orientation: portrait)': {  
            height: '60px'
        },

        '@media (min-width: 1200px)' : {
           height: '70px'
        },

        '@media (min-width: 1400px)' : {
           height: '80px'
        }
    },

    textArea: {
        width: '100%',
        fontSize: fontSize.small,
        padding: padding.small,
        fontFamily: fontFamily.bebas,
        color: color.pureTeal,
        letterSpacing: '1px',

        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 1200px)' : {
            // no change.
            fontSize: fontSize.veryBig
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.extraBig
        }
    },
}

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: ''
        };

        this.textArea = React.createRef();
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div style={styles.container}>
                <textarea 
                    ref={this.textArea}
                    style={styles.textArea} 
                    outline='none' 
                    maxLength='500' 
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}
                    placeholder='Type your message...' />
            </div>
        );
    }

    onChange(event) {
        this.setState({
            value: event.target.value
        }); 

        this.props.onChange(event.target.value); 
    }

    clearContent() {
        this.setState({
            value: ''
        }); 
    }

    getContent() {
        return this.state.value; 
    }
}

export default Radium(TextInput);