import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from './close.svg'

export var PopupType = {
    About: 0,
    Send: 1
}; 

const styles={
    container: {

    },

    overlay: {
        position: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        background: color.deepSky,
        opacity: '50%',
        zIndex: '1'
    },

    contentContainer: {
        position: 'fixed',
        zIndex: '2',
        top:'0px',
        bottom: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '2',
        borderRadius: fontSize.extraSmall,
        background: color.pureTeal,
        color: color.sunLight,
        maxWidth: 'calc(100% - 50px)', // Bind this to media query
        maxHeight: 'calc(100% - 100px)', // Bind this to media query
        paddingLeft: padding.small,
        paddingRight: padding.small,
        overflow: 'scroll'
    },

    title: {
        marginTop: padding.extraBig,
        fontFamily: fontFamily.bilbo,
        fontSize: fontSize.extraHuge
    },

    body: {
        marginTop: padding.extraSmall,
        justifyContent: 'center',
        fontFamily: fontFamily.opensanslight,
        fontSize: fontSize.small
    },

    iconContainer: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: fontSize.small,
        padding: padding.extraSmall,
        backgroundColor: color.sunLight,
        right: fontSize.extraSmall
    },

    icon: {
        height: fontSize.verySmall,
        width: fontSize.verySmall,
        fill: color.pureTeal
    },

    buttonContainer: {
        marginTop: padding.big, 
        marginBottom: padding.extraBig,
        background: color.sunLight, 
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        color: color.pureTeal,
        letterSpacing: '1px'
    }
}

const aboutBody='This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is ab This is project is abThis is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is abis project is abThis is project is ab2 ject is abThis is project is ab2 ject is abThis is project is ab2 ject is abThis  abThis  abThis abThis abThis abThis abThis This abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThis'; 

const sendBody='This project is send send sensd. This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
   
        };
    }

    render() {
        let content = this.props.type === PopupType.About ? this.getAboutContent() : this.getSendContent();
        return (
            <div style={styles.container}>
                <div style={styles.overlay}></div>
                <div style={styles.contentContainer}>
                    {content}
                </div>
            </div>
        );
    }

    getCloseButton() {
        return (
            <button style={styles.buttonContainer}>
                CLOSE
            </button>
        ); 
    }

    getIconButton() {
        return(
            <div style={styles.iconContainer}>
                <Exit style={styles.icon} />
            </div>
        ); 
    }

    getAboutContent() {
        let closeButton = this.getCloseButton(); 
        let iconButton = this.getIconButton();  
        return (
            <div style={styles.content}>
                { iconButton }
                <div style={styles.title}>
                    Mom I'm Safe
                </div>
                <div style={styles.body}>
                    {aboutBody}
                </div>
                { closeButton }
            </div>
        )
    }

    getSendContent() {
        let closeButton = this.getCloseButton();
        let iconButton = this.getIconButton();
        return (
            <div style={styles.content}>
                { iconButton }
                <div style={styles.title}>
                    Send A Message
                </div>
                <div style={styles.body}>
                    {sendBody}
                </div>
                { closeButton }
            </div>
        );
    }
}

export default Radium(Popup);