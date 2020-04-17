import React from 'react'
import Radium from 'radium'

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {
        return (
            <div onClick={this.onClick.bind(this)}>
                Text Input Click
            </div>
        );
    }

    onClick() {
        this.props.onSubmit('Hello how are you'); 
    }
}

export default Radium(TextInput);