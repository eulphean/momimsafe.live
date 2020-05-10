import React from 'react'
import Radium from 'radium'
import { fontSize, padding, fontFamily, color } from './CommonStyles.js';

const styles={
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        background: color.white,
        color: color.black,
        marginTop: padding.small,
        fontFamily: fontFamily.thermal,
        paddingLeft: padding.extraSmall,
        paddingRight: padding.extraSmall,
        width: '100%'
    },

    title: {
        fontSize: fontSize.small,
        letterSpacing: '1.5px',
        paddingLeft: padding.verySmall,
        paddingRight: padding.verySmall,
        marginTop: padding.veryBig,
        background: color.black,
        color: color.white,
    },

    website: {
        marginTop: padding.small,
        fontSize: fontSize.verySmall
    },

    city: {
        background: color.white,
        color: color.black,
        marginTop: padding.extraSmall,
        fontSize: fontSize.verySmall
    },

    dateTimeContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

    dateTime: {
        fontSize: fontSize.verySmall,
        marginRight: padding.verySmall
    },

    message: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: padding.small,
        fontSize: fontSize.small,
        marginBottom: padding.big
    }
}

class Receipt extends React.Component {
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
        let websiteStyle = [styles.title, styles.website]; 
        let d = this.props.entry.date.toString().split("T")[0]; 
        console.log(d);
        return (
            <div style={styles.container}>
                <div style={styles.title}>{' MOMIMSAFE '}</div>
                <div style={websiteStyle}>
                    momimsafe.live
                </div>
                <div style={styles.city}>
                    CHICAGO, USA
                </div>
                <div style={styles.dateTimeContainer}>
                    <div style={styles.dateTime}>
                        {d}
                    </div>
                    <div style={styles.dateTime}>
                        {this.props.entry.time}
                    </div>
                </div>
                <div style={styles.message}>
                        {this.props.entry.message}
                </div>
            </div>
        );
    }
}

export default Radium(Receipt);