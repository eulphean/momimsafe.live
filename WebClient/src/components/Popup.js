import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from './close.svg'

const styles={
    container: {

    },

    background: {
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        background: color.deepSky,
        opacity: '50%',
        zIndex: '1'
    },

    contentContainer: {
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        borderRadius: '10px',
        padding: padding.small,
        background: color.pureTeal,
        opacity: '100%',
        marginTop: padding.huge,
        marginBottom: padding.huge,
        marginLeft: padding.big,
        marginRight: padding.big,
        zIndex: '2'
    },

    closeContainer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '-' + fontSize.extraSmall,
        right: '-' + fontSize.extraSmall,
        borderRadius: fontSize.small,
        padding: padding.extraSmall,
        backgroundColor: color.sunLight
    },

    icon: {
        height: fontSize.small,
        width: fontSize.small,
        fill: color.pureTeal,
    }
}

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
   
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.background}></div>
                <div style={styles.contentContainer}>
                    <div style={styles.closeContainer}>
                        <Exit style={styles.icon}/>
                    </div>
                    Hello I am a strange content
                </div>
            </div>
        );
    }
}

export default Radium(Popup);