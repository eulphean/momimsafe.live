import React from 'react'
import Radium from 'radium'
import moment from 'moment-timezone'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'

const styles={
    container: {
        display: 'flex',
        alignItems: 'flex-start'
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: padding.small,
        zIndex: '15'
    },

    labelContainer: {
        backgroundColor: color.liveRed,
        borderRadius: '5px',
        padding: padding.extraSmall
    },

    textStyle: {
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.verySmall,
        color: color.sunLight,
        letterSpacing: '1px',
    },

    infoColor: {
        color: color.liveRed
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
                <div style={styles.contentContainer}>
                    <div style={[styles.labelContainer, styles.textStyle]}>
                        {label}
                    </div>
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