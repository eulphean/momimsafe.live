import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'

export var CircleType = {
    Top : 0, 
    Bottom : 1
}; 

const styles={
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:color.pureTeal,
        color: color.sunLight,
        fontFamily: fontFamily.bebas,
        letterSpacing: '1px'
    },

    bottomCircle: {
        height:'45px',
        width:'90px',
        borderRadius:' 0 0 90px 90px',
    },

    topCircle: {
        height:'45px',
        width:'90px',
        borderRadius: '90px 90px 0 0'
    },

    textStyle: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.verySmall,
        color: color.sunLight,
        letterSpacing: '1px',
    }
}

class HalfCircleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state={
   
        };
    }

    render() {
        let circleStyle = this.props.shape === CircleType.Top ? styles.topCircle : styles.bottomCircle; 
        let buttonStyle = [styles.container, circleStyle, this.props.style]; 
        return (
            <div onClick={this.handleClick.bind(this)} style={buttonStyle}>
                {this.props.children}
            </div>
        );
    }

    handleClick() {
        this.props.onClick(this.props.children); 
    }
}

export default Radium(HalfCircleButton);