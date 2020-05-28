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
        fontFamily: fontFamily.thermal,
        width: '100%',
        height: '100%',
        border: 'none',
        backfaceVisibility: 'hidden'
    },

    title: {
        fontSize: fontSize.small,
        letterSpacing: '1.5px',
        paddingTop: padding.extraSmall,
        paddingBottom: padding.extraSmall,
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
        marginTop: padding.verySmall,
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
        marginBottom: padding.big,
        overflowWrap: 'anywhere',
        flexWrap: 'wrap',
        paddingLeft: padding.small,
        paddingRight: padding.small
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
        // Date
        let d = this.beautifyDate();
        return (
            <div style={styles.container}>
                <div style={styles.title}>{' MOMIMSAFE '}</div>
                <div style={websiteStyle}>
                    momimsafe.live
                </div>
                {/* <div style={styles.city}>
                    CHICAGO, USA
                </div> */}
                <div style={styles.dateTimeContainer}>
                    <div style={styles.dateTime}>
                        {d.date}
                    </div>
                    <div style={styles.dateTime}>
                        {d.time}
                    </div>
                </div>
                <div style={styles.message}>
                        {this.props.entry.message}
                </div>
            </div>
        );
    }

    beautifyDate() {
        let d = this.props.entry.date.toString().split("T")[0]; 
        let t = this.props.entry.time.toString().split(':');
        var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        d = d.split('-');
        d = new Date(d[0], d[1]-1, d[2], t[0], t[1], t[2]); 
        var obj = {
            date: d.toLocaleDateString('en-US', dateOptions),
            time: d.toLocaleTimeString('en-US')
        }
        return obj;
    }
}

export default Radium(Receipt);