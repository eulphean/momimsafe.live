import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { fadeInDown, fadeInUp, fadeOutUp, fadeOutDown } from 'react-animations'

export var CircleType = {
    Top : 0, 
    Bottom : 1
}; 

const fadeInDuration = '1s';
const fadeOutDuration = '1s';

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

    fadeInDown: {
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    fadeOutUp: {
        animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeInUp: {
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    fadeOutDown: {
        animationName: Radium.keyframes(fadeOutDown, 'fadeOutUp'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    bottomCircle: {
        height:'45px',
        width:'90px',
        borderRadius:' 0 0 90px 90px'
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
        // Set circle and animation style
        let circleStyle, aniStyle; 
        if (this.props.shape === CircleType.Top) {
            circleStyle = styles.topCircle; 
            aniStyle = this.props.show ? styles.fadeInUp : styles.fadeOutDown; 
        } else {
            circleStyle = styles.bottomCircle; 
            aniStyle = this.props.show ? styles.fadeInDown : styles.fadeOutUp; 
        }

        let buttonStyle = [styles.container, circleStyle, aniStyle, this.props.style]; 
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