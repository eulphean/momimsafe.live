import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'

const styles={
    container: {
        position: 'absolute',
    }
}

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state={
   
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.contentContainer}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Radium(About);

// Add animation for this popup. 
// Container will fade in. 
// Content Container will drop drop. 