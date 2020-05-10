import React from 'react'
import Radium from 'radium'
import { color, fontFamily, fontSize, padding } from './CommonStyles.js'
import { fadeIn, fadeOut } from 'react-animations'

export var CircleType = {
    Top : 0, 
    Bottom : 1
}; 

const fadeInDuration = '1.0s';
const fadeOutDuration = '1.0s';

const styles={
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:color.pureTeal,
        color: color.sunLight,
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.extraHuge,
        letterSpacing: '1px',
        zIndex: '30',
        cursor: 'pointer',
        margin: padding.extraSmall,
        borderWidth: '3px',
        borderStyle: 'dotted',
        borderColor: color.link,

        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.extraMassive
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.extraMassive
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            fontSize: fontSize.extraEnormous
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.extraEnormous
        }
    },

    fadeIn: {
        animationName: Radium.keyframes(fadeIn, 'fadeIn'),
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    fadeOut: {
        animationName: Radium.keyframes(fadeOut, 'fadeOut'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    }, 

    bottomCircle: {
        height:'70px',
        width:'140px',
        borderRadius:' 0 0 140px 140px',

        '@media (min-width: 750px) and (orientation: portrait)': {  
            height:'90px',
            width:'180px',
            borderRadius:' 0 0 180px 180px',
        },

        '@media (min-width: 900px)': {  
            height:'90px',
            width:'180px',
            borderRadius:' 0 0 180px 180px',
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            height:'110px',
            width:'220px',
            borderRadius:' 0 0 220px 220px',
        },

        '@media (min-width: 1200px)' : {
            height:'110px',
            width:'220px',
            borderRadius:' 0 0 220px 220px',
        }
    },

    hide: {
        visibility: 'hidden'
    },

    topCircle: {
        height:'70px',
        width:'140px',
        borderRadius: '140px 140px 0 0',

        '@media (min-width: 750px) and (orientation: portrait)': {  
            height: '90px',
            width: '180px',
            borderRadius: ' 180px 180px 0px 0px'
        },

        '@media (min-width: 900px)': {  
            height: '90px',
            width: '180px',
            borderRadius: ' 180px 180px 0px 0px'
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            height: '110px',
            width: '220px',
            borderRadius: ' 220px 220px 0px 0px'
        },

        '@media (min-width: 1200px)' : {
            height: '110px',
            width: '220px',
            borderRadius: ' 220px 220px 0px 0px'
        }
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
            if (this.props.show) {
                aniStyle = styles.fadeIn; 
            } else if (this.props.show === false) {
                aniStyle = styles.fadeOut;
            } else {
                aniStyle = styles.hide;
            }
        } else {
            circleStyle = styles.bottomCircle; 
            if (this.props.show) {
                aniStyle = styles.fadeIn;
            } else if (this.props.show === false) {
                aniStyle = styles.fadeOut; 
            } else {
                aniStyle=styles.hide;
            }
        }

        let buttonStyle = [styles.container, circleStyle, aniStyle, this.props.style]; 
        return (
            <div onClick={this.handleClick.bind(this)} style={buttonStyle}>
                {this.props.children}
            </div>
        );
    }

    handleClick(event) {
        this.props.onClick(event, this.props.children); 
    }
}

export default Radium(HalfCircleButton);