import React from 'react'
import Radium from 'radium'
import TextInput from './TextInput.js'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from './close.svg'
import { fadeOutUp, fadeOutDown, fadeInDown, fadeInUp } from 'react-animations'

// Receives a prop to define the type of popup.  
export var PopupType = {
    About: 0,
    Send: 1
}; 

// Maintain the current popup state (to track animations)
var PopupState = {
    Open: 0,
    Close: 1,
    None: 2
}; 

// Custom Fade in animation. 
const customFadeIn = Radium.keyframes({
    from: {
        opacity: '0%'
    },
    to: {
        opacity: '50%'
    }
}, 'fadesIn'); 

const customFadeOut = Radium.keyframes({
    from: {
        opacity: '50%'
    },
    to: {
        opacity: '0%'
    }
}, 'fadesOut'); 

const fadeInDuration = '0.5s'; 
const slideInDuration = '1s'; 
const fadeOutDuration = '1s';

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
        animationName: customFadeIn,
        animationDuration: fadeInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    fadeOut: {
        animationName: customFadeOut,
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeOutUp: {
        animationName: Radium.keyframes(fadeOutUp, 'fadeOutUp'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeOutDown: {
        animationName: Radium.keyframes(fadeOutDown, 'fadeOutDown'),
        animationDuration: fadeOutDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out'
    },

    fadeInDown: {
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown'),
        animationDuration: slideInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
    },

    fadeInUp: {
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        animationDuration: slideInDuration,
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-in'
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
        marginTop: padding.small,
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
    },

    input: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: padding.small
    },

    sendButtonContainer: {
        background: color.sunLight, 
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        color: color.pureTeal,
        letterSpacing: '1.5px',
        marginLeft: padding.extraSmall
    }
}

const aboutBody='This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is about the safety, secuirty This is project is ab This is project is abThis is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is ab is project is abThis is project is abis project is abThis is project is ab2 ject is abThis is project is ab2 ject is abThis is project is ab2 ject is abThis  abThis  abThis abThis abThis abThis abThis This abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThisThis abThis abThis'; 

const sendBody='This project is send send sensd. This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.This project is send send sensd.';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isVisible : false,
            popupState: PopupState.None
        };

        this.textInput = React.createRef(); 
        this.content = React.createRef(); 
    }

    render() {
        // Handle overlay styles. 
        let overlayStyle; 
        if (this.state.isVisible) {
            overlayStyle = [styles.overlay, styles.showOverlay]; 
            if (this.state.popupState === PopupState.Open) {
                overlayStyle = [overlayStyle, styles.fadeIn]; 
            } else if (this.state.popupState === PopupState.Close) {
                overlayStyle = [overlayStyle, styles.fadeOut]; 
            } else {
                // Do nothing. 
            }
        } else {
            overlayStyle = styles.overlay; 
        }

        // Handle different types of Popups. 
        let content, contentContainerStyle; 
        if (this.props.type === PopupType.About) {
            content = this.getAboutContent(); 
            if (this.state.isVisible) {
                contentContainerStyle = [styles.contentContainer, styles.showContent]; 
                if (this.state.popupState === PopupState.Open) {
                    contentContainerStyle = [contentContainerStyle, styles.fadeInDown]; 
                } else if (this.state.popupState === PopupState.Close) {
                    contentContainerStyle = [contentContainerStyle, styles.fadeOutUp];
                } else {
                    // Do nothing when it's in None state. 
                }
            } else {
                contentContainerStyle = styles.contentContainer; 
            }
        } else {
            content = this.getSendContent(); 
            if (this.state.isVisible) {
                contentContainerStyle = [styles.contentContainer, styles.showContent]; 
                if (this.state.popupState === PopupState.Open) {
                    contentContainerStyle = [contentContainerStyle, styles.fadeInUp]; 
                } else if (this.state.popupState === PopupState.Close) {
                    contentContainerStyle = [contentContainerStyle, styles.fadeOutDown];
                } else {
                    // Do nothing when it's in None state. 
                }
            } else {
                contentContainerStyle = styles.contentContainer; 
            }
        }

        return (
            <div onTouchStart={this.handleOnTouch.bind(this)} style={styles.container}>
                <div style={overlayStyle}></div>
                <div onAnimationEnd={this.contentAnimationEnd.bind(this)} style={contentContainerStyle}>
                    {content}
                </div>
            </div>
        );
    }

    contentAnimationEnd() {
        if (this.state.isVisible) {
            // Hide everything when content animation ends. 
            if (this.state.popupState === PopupState.Close) {
                this.setState({
                    isVisible: false,
                    popupState: PopupState.None
                }); 
            }
        }
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
            <div ref={this.content} style={styles.content}>
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
            <div ref={this.content} style={styles.content}>
                { iconButton }
                <div style={styles.title}>
                    Send Some Love
                </div>
                <div style={styles.input}>
                    <TextInput ref={this.textInput} />
                    <button onClick={this.handleSendMessage.bind(this)} style={styles.sendButtonContainer}>
                        SEND
                    </button>
                </div>
                <div style={styles.body}>
                    {sendBody}
                </div>
                {closeButton}
            </div>
        );
    }

    showPopup() {
        // Adjust the scroll top.
        this.content.current.scrollTop = 0; 

        this.setState({
            isVisible: true,
            popupState: PopupState.Open
        }); 
    }

    hidePopup(event) {
        event.stopPropagation(); 

        this.setState({
            popupState: PopupState.Close
        }); 

        // Kick off to bring the buttons back. 
        this.props.onClose(); 
    }

    handleOnTouch(event) {
        // Don't let this propogate to the main screen
        // where touch events mean something. 
        event.stopPropagation();
    }

    handleSendMessage(event) {
        event.stopPropagation(); 
        // Clear the content first
        this.textInput.current.clearContent(); 
        let content = this.textInput.current.getContent(); 
        this.props.onSend(content); 

        // Also, hide the popup.
        this.hidePopup(event); 
    }
 }

export default Radium(Popup);