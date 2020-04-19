import React from 'react'
import Radium from 'radium'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from './close.svg'
import { fadeOut, fadeInDown, fadeInUp } from 'react-animations'

export var PopupType = {
    About: 0,
    Send: 1
}; 

// Custom Fade in animation. 
const fadeIn = Radium.keyframes({
    from: {
        opacity: '0%'
    },
    to: {
        opacity: '50%'
    }
}, 'fadesIn'); 

const fadeInDuration = '0.5s'; 
const slideInDuration = '1s'; 

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
        zIndex: '-999'
    },

    fadeIn: {
        animationName: fadeIn,
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards'
    },

    fadeInDown: {
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
        animationDuration: slideInDuration,
        animationFillMode: 'forwards'
    },

    fadeOut: {
        animationName: Radium.keyframes(fadeOut, 'fadeOut'),
        animationDuration: '5s'
    },

    fadeInUp: {
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        animationDuration: slideInDuration,
        animationFillMode: 'forwards'
    },

    showOverlay: {
        zIndex: '998'
    },

    contentContainer: {
        position: 'fixed',
        zIndex: '-999',
        top:'0px',
        bottom: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    showContent: {
        zIndex: '999'
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
            isVisible : false
        };
    }

    render() {
        let overlayStyle = this.state.isVisible ? [styles.overlay, styles.showOverlay, styles.fadeIn] : styles.overlay; 

        let content, contentContainerStyle; 
        if (this.props.type === PopupType.About) {
            content = this.getAboutContent(); 
            contentContainerStyle = this.state.isVisible ? [styles.contentContainer, styles.showContent, styles.fadeInDown] : styles.contentContainer; 
        } else {
            content = this.getSendContent(); 
            contentContainerStyle = this.state.isVisible ? [styles.contentContainer, styles.showContent, styles.fadeInUp] : styles.contentContainer;
        }

        return (
            <div style={styles.container}>
                <div style={overlayStyle}></div>
                <div style={contentContainerStyle}>
                    {content}
                </div>
            </div>
        );
    }

    getCloseButton() {
        return (
            <button style={styles.buttonContainer} onClick={this.hidePopup.bind(this)}>
                CLOSE
            </button>
        ); 
    }

    getIconButton() {
        return(
            <div style={styles.iconContainer} onClick={this.hidePopup.bind(this)}>
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

    showPopup() {
        // Set Z index to high. 
        this.setState({
            isVisible: true
        }); 
    }

    hidePopup() {
        this.props.onClose(); 
        // Set Z index to low. 
        this.setState({
            isVisible: false
        }); 
    }
}

export default Radium(Popup);