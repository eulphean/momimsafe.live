import React from 'react'
import Radium from 'radium'

const styles={
    container: {
        display: 'flex',
        backgroundColor: 'red'
    }
}

class LastReceipt extends React.Component {
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
                HELLO I"M LAST RECEIPT
            </div>
        );
    }
}

export default Radium(LastReceipt);