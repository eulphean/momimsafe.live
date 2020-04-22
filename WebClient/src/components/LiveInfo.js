import React from 'react'
import Radium from 'radium'
import moment from 'moment-timezone'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { fadeIn } from 'react-animations'

const fadeInDuration = '3s';

const index = '40'; 

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: padding.small,
        zIndex: index,

        '@media (min-width: 600px)': {  
            // no change.
            margin: padding.big
        },

        '@media (min-width: 750px)': {  
            // no change.
            margin: padding.veryBig
        },

        '@media (min-width: 1200px)': {  
            // no change.
            margin: padding.huge
        },
    },

    fadeIn: {
        animationName: Radium.keyframes(fadeIn, 'fadeIn'),
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: index,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    labelContainer: {
        backgroundColor: color.liveRed,
        borderRadius: '5px',
        padding: padding.extraSmall,
        zIndex: index,

        '@media (min-width: 900px)': {  
            // no change.
            padding: padding.verySmall
        },
    },

    textStyle: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        color: color.sunLight,
        letterSpacing: '1px',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.big,
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            // no change.
            fontSize: fontSize.veryBig
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            fontSize: fontSize.huge
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.veryHuge
        },

        '@media (min-width: 1400px)' : {

        },

        '@media (min-width: 1700px)' : {
            // no change.
        }
    },

    infoColor: {
        color: color.sunLight
    },

    smallMargin: {
        marginTop: padding.extraSmall
    }

}

const label='LIVE'; 
const location='CHICAGO, USA'; 

class LiveInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time: moment.tz('America/Chicago').format('h:mm:ss a'),
            date: moment.tz('America/Chicago').format('LL')
        };
        
        // Set time every 1 second. 
        setInterval(this.updateDateTime.bind(this), 1000); 
    }

    render() {
        let infoTextStyle=[styles.textStyle, styles.infoColor];
        return (
            <div style={styles.container}>
                <div style={[styles.labelContainer, styles.textStyle, styles.fadeIn]}>
                    {label}
                </div>
                <div style={styles.infoContainer}>
                    <div style={[styles.smallMargin, infoTextStyle, styles.fadeIn]}>
                        {location}
                    </div>
                    <div style={[infoTextStyle, styles.fadeIn]}>
                        {this.state.date}
                    </div>
                    <div style={[infoTextStyle, styles.fadeIn]}>
                        {this.state.time}
                    </div>
                </div>
            </div>
        );
    }

    updateDateTime() {
        this.setState({
            time: moment.tz('America/Chicago').format('h:mm:ss a'),
            date: moment.tz('America/Chicago').format('LL')
        }); 
    }
}

export default Radium(LiveInfo);