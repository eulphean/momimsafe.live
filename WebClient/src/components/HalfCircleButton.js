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
        fontSize: fontSize.big,
        letterSpacing: '1px',
        zIndex: '30',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.veryBig
        },

        '@media (min-width: 750px)': {  
            // no change.
        },

        '@media (min-width: 900px)': {  
            // no change.
            fontSize: fontSize.veryBig,
            
        },

        '@media (min-width: 1200px)' : {
            
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.extraBig,
        },

        '@media (min-width: 1700px)' : {
            // no change.
        }
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
        borderRadius:' 0 0 90px 90px',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            // With every font size increasing we need to change
            // the size of the circle as well. 
            fontSize: fontSize.veryBig,
            height: '50px',
            width: '100px',
            borderRadius: ' 0 0 100px 100px'
        },

        '@media (min-width: 750px) and (orientation: portrait)': { 
            fontSize: fontSize.huge, 
            height: '70px',
            width: '140px',
            borderRadius: ' 0px 0px 140px 140px'
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.huge, 
            height: '70px',
            width: '140px',
            borderRadius: ' 0px 0px 140px 140px'
        },

        '@media (min-width: 900px) and (orentiation: portrait)': {  
            fontSize: fontSize.extraHuge, 
            height: '80px',
            width: '160px',
            borderRadius: ' 0px 0px 160px 160px'
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.massive, 
            height: '90px',
            width: '180px',
            borderRadius: ' 0px 0px 180px 180px'
        },

        '@media (min-width: 1400px)' : {

        },

        '@media (min-width: 1700px)' : {
            // no change.
        }
    },

    topCircle: {
        height:'45px',
        width:'90px',
        borderRadius: '90px 90px 0 0',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.veryBig,
            height: '50px',
            width: '100px',
            borderRadius: ' 100px 100px 0px 0px'
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.huge,
            height: '70px',
            width: '140px',
            borderRadius: ' 140px 140px 0px 0px'
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.huge,
            height: '70px',
            width: '140px',
            borderRadius: ' 140px 140px 0px 0px'
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            // no change.
            fontSize: fontSize.extraHuge,
            height: '80px',
            width: '160px',
            borderRadius: ' 160px 160px 0px 0px'
        },

        '@media (min-width: 1200px)' : {
            // no change.
            fontSize: fontSize.massive,
            height: '90px',
            width: '180px',
            borderRadius: ' 180px 180px 0px 0px'
        },

        '@media (min-width: 1400px)' : {
        },

        '@media (min-width: 1700px)' : {
            // no change.
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