import React from 'react'
import Radium from 'radium'
import moment from 'moment-timezone'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'

const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: padding.small,
        zIndex: '15'
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: '15',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    labelContainer: {
        backgroundColor: color.liveRed,
        borderRadius: '5px',
        padding: padding.extraSmall,
        zIndex: '15'
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
                <div style={[styles.labelContainer, styles.textStyle]}>
                    {label}
                </div>
                <div style={styles.infoContainer}>
                    <div style={[styles.smallMargin, infoTextStyle]}>
                        {location}
                    </div>
                    <div style={infoTextStyle}>
                        {this.state.date}
                    </div>
                    <div style={infoTextStyle}>
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