import React from 'react'
import Radium from 'radium'
import { fontSize, padding, fontFamily, color } from './CommonStyles.js';

const styles={
    container: {
        display: 'flex',
        width: '100%',
        height: '50px'
    },

    textarea: {
        width: '100%',
        fontSize: fontSize.small,
        padding: padding.small,
        fontFamily: fontFamily.bebas,
        color: color.pureTeal,
        letterSpacing: '1.5px'
    }
}

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: ''
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <textarea 
                    style={styles.textarea} 
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