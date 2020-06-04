import React from 'react'
import Radium from 'radium'
import { color, padding, boxShadow, fontSize } from './CommonStyles.js'


const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    innerContainer: {
        display: 'flex',
        position: 'fixed',
        top: padding.verySmall,
        left: padding.verySmall,
        right: padding.verySmall,
        height: '50vh',
        borderRadius: fontSize.big,
        backgroundColor: color.bodyGrey,
        boxShadow: boxShadow.dark
    }
} 

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
        };
        
      
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    
                </div>
            </div>
        );
    }
}

export default Radium(Body);