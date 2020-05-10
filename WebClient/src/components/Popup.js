import React from 'react'
import Radium from 'radium'
import TextInput from './TextInput.js'
import { color, padding, fontFamily, fontSize } from './CommonStyles.js'
import { ReactComponent as Exit } from './close.svg'
import { fadeOutUp, fadeOutDown, fadeInDown, fadeInUp } from 'react-animations'
import Receipt from './Receipt.js'

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
        opacity: '0'
    },
    to: {
        opacity: '0.5'
    }
}, 'fadesIn'); 

const customFadeOut = Radium.keyframes({
    from: {
        opacity: '0.5'
    },
    to: {
        opacity: '0'
    }
}, 'fadesOut'); 

const fadeInDuration = '0.5s'; 
const slideInDuration = '1.5s'; 
const fadeOutDuration = '1.5s';

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
        animationTimingFunction:'ease-in'
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

    showContent: {
        zIndex: '999'
    },

    contentContainer: {
        position: 'fixed',
        zIndex: '-999',
        top:'0px',
        bottom: '0px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        display: 'flex'
    },

    content: {
        borderRadius: fontSize.extraSmall,
        borderStyle: 'dotted',
        borderColor: color.link,
        borderWidth: '3px',
        overflow: 'auto',
        maxWidth: 'calc(100% - 50px)', // Bind this to media query
        maxHeight: 'calc(100% - 100px)', // Bind this to media query
        
        '@media (min-width: 600px)': {      
            maxWidth: 'calc(100% - 100px)', // Bind this to media query
            maxHeight: 'calc(100% - 100px)', // Bind this to media query
        },

        '@media (min-width: 750px)': {  
            maxWidth: 'calc(100% - 150px)', // Bind this to media query
            maxHeight: 'calc(100% - 100px)', // Bind this to media query
        },

        '@media (min-width: 1200px)' : {
            maxWidth: 'calc(100% - 300px)', // Bind this to media query
            maxHeight: 'calc(100% - 100px)', // Bind this to media query
        }
    },

    stretchContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: color.pureTeal,
        color: color.sunLight,
        paddingLeft: padding.small, // Bind this to media query
        paddingRight: padding.small, // Bind this to media query,
        '@media (min-width: 600px)': {      
            paddingLeft: padding.big, 
            paddingRight: padding.big
        },

        '@media (min-width: 900px)': {  
            paddingLeft: padding.extraBig, 
            paddingRight: padding.extraBig
        },

        '@media (min-width: 1200px)' : {
            paddingLeft: padding.huge, 
            paddingRight: padding.huge
        } 
    },

    title: {
        marginTop: padding.big,
        fontFamily: fontFamily.bilbo,
        fontSize: fontSize.massive,

        '@media (min-width: 600px)': {  
            fontSize: fontSize.extraMassive
        },
       
        '@media (min-width: 750px)': {  
            fontSize: fontSize.enormous
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.extraEnormous
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.extraEnormous
        },

        '@media (min-width: 1200px)' : {
            // no change.
            fontSize: fontSize.extraInsane
        },

        '@media (min-width: 1400px)' : {
        },
    },

    body: {
        marginTop: padding.extraSmall,
        justifyContent: 'center',
        fontFamily: fontFamily.opensanslight,
        fontSize: fontSize.small
    },

    mediaQueryOnText: {
        '@media (min-width: 750px) and (orientation: portrait)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 900px)': {  
            fontSize: fontSize.big
        },

        '@media (min-width: 1200px)' : {
            // no change.
            fontSize: fontSize.big
        },

        '@media (min-width: 1400px)' : {
            fontSize: fontSize.veryBig
        }
    },

    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        borderRadius: fontSize.small,
        padding: padding.extraSmall,
        backgroundColor: color.sunLight,
        right: fontSize.extraSmall,
        marginRight: '-' + fontSize.verySmall,
        height: fontSize.verySmall,
        width: fontSize.verySmall,
        fill: color.pureTeal,

        '@media (min-width: 600px)': {  
            marginRight: '-' + fontSize.big
        },


        '@media (min-width: 750px) and (orientation:portrait)': {  
            
        },

        '@media (min-width: 900px)': {  
            // height: fontSize.veryBig, 
            // width: fontSize.veryBig,
            height: fontSize.big, 
            width: fontSize.big,
            marginRight: '-' + fontSize.veryHuge
        },

        '@media (min-width: 1200px)': {  
            marginRight: '-' + fontSize.extraMassive
        },

        '@media (min-width: 1400px)' : {
            // height: fontSize.extraBig, 
            // width: fontSize.extraBig,
        }
    },

    icon: { 
        width: '100%',
        height: '100%'
    },

    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: padding.big, 
        marginBottom: padding.extraBig,
        background: color.sunLight, 
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        color: color.pureTeal,
        letterSpacing: '1px',
        padding: padding.small,
        borderRadius: fontSize.verySmall
    },

    input: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: padding.verySmall,
        marginBottom: padding.verySmall
    },

    sendButtonContainer: {
        background: color.sunLight, 
        fontFamily: fontFamily.bebas,
        fontSize: fontSize.small,
        color: color.pureTeal,
        letterSpacing: '1px',
        marginLeft: padding.extraSmall,
        padding: padding.small,
        borderRadius: fontSize.verySmall,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',

        '@media (min-width: 900px)' : {
            width: '100px'
        }
    },

    disabled: {
        color: color.disabled
    },

    imageContainer: {
        marginTop: padding.small,
        width: '100%'
    },

    footer: {
        display: 'flex',
        alignItems: 'center',
        color: color.link,
        alignSelf: 'center',
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.verySmall,
        marginBottom: padding.small,
        letterSpacing: '1.5px',

        '@media (min-width: 750px)': {  
            fontSize: fontSize.small,
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.big
        }
    },

    receiptsContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: padding.small
    }
}

const aboutBody="This project is currently a live video feed of my home studio, where I spend most of my day during the COVID-19 lockdown in Chicago, Illinois. Since Chicago went into lockdown on March 20th, I have not stepped into my studio at Mana Contemporary, where I'm currently a new-media resident. Meanwhile, I revamped my home studio, which has become my primary space for thinking, making, and elaborating on ideas. This work was developed in response to the consistent inquiries of well-being from my close friends, family members, and especially my mom in India, who ceaselessly desires us to video chat everyday during this global pandemic. As Chicago will open up from this lockdown, I will slowly become more comfortable to go outside. However, momimsafe.live will continue to be the one-stop place for my dear ones around the world to check on me and make sure I'm safe, secure, and engaged in making.";

const sendBody='There may be times when you see me working in my studio, or you may not. But you can leave me a message by typing in the textbox above and hitting the send button. Your message will be printed by a receipt printer in my studio situated on the left side of my desk, alongside a raspberry pi retrofitted with a LCD, streaming live news 24x7. These messages come as anonymous. So leave a trace in my studio, be honest, and send some love.';

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isVisible : false,
            popupState: PopupState.None,
            disabled: true
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
            <div onClick={this.handleOnTouch.bind(this)} onTouchStart={this.handleOnTouch.bind(this)} style={styles.container}>
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
        let buttonContainerStyle=[styles.buttonContainer, styles.mediaQueryOnText];
        return (
            <div style={buttonContainerStyle} onClick={this.hidePopup.bind(this)}>
                CLOSE
            </div>
        ); 
    }

    getIconButton() {
        return(
            <div onClick={this.hidePopup.bind(this)} style={styles.iconContainer}>
                <Exit style={styles.icon} />
            </div>
        ); 
    }

    getAboutContent() {
        let footer = this.getFooter(); 
        let closeButton = this.getCloseButton(); 
        let iconButton = this.getIconButton();  
        let bodyStyle = [styles.body, styles.mediaQueryOnText];
        return (
            <div ref={this.content} style={styles.content}>
                <div style={styles.stretchContainer}>
                    { iconButton }
                    <div style={styles.title}>
                        Mom I'm Safe
                    </div>
                    <div style={bodyStyle}>
                        {aboutBody}
                    </div>
                    { closeButton }
                    { footer }
                </div>
            </div>
        )
    }

    getSendContent() {
        let receipts = this.processReceipts(); 
        let footer = this.getFooter();
        let closeButton = this.getCloseButton();
        let iconButton = this.getIconButton();
        let sendButtonContainerStyle=[styles.mediaQueryOnText, styles.sendButtonContainer];
        sendButtonContainerStyle = this.state.disabled ? [sendButtonContainerStyle, styles.disabled] : sendButtonContainerStyle; 
        let bodyStyle = [styles.body, styles.mediaQueryOnText];
        return (
            <div ref={this.content} style={styles.content}>
                <div style={styles.stretchContainer}>
                    { iconButton }
                    <div style={styles.title}>
                        Send Some Love
                    </div>
                    <div style={styles.input}>
                        <TextInput onChange={this.onTextInputChange.bind(this)} ref={this.textInput} />
                        <button disabled={this.state.disabled} onClick={this.handleSendMessage.bind(this)} style={sendButtonContainerStyle}>
                            SEND
                        </button>
                    </div>
                    <div style={bodyStyle}>
                        {sendBody}
                    </div>
                    <div style={styles.receiptsContainer}>
                        {receipts}
                    </div>
                    {closeButton}
                    {footer}
                </div>
            </div>
        );
    }

    getFooter() {
        const website = 'https://amaykataria.com'
        return (
            <a 
                style={styles.footer} 
                target='_blank' 
                rel="noopener noreferrer" 
                href={website}>
                © Amay Kataria 2020
            </a>
        )
    }

    showPopup() {
        // Adjust the scroll top.
        this.content.current.scrollTop = 0; 
        if (this.props.type === PopupType.About) {
            this.setState({
                disabled: true
            }); 
        }

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

    onTextInputChange(newContent) {
        if (newContent.length !== 0) {
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
        }
    }

    processReceipts() {
        let entries = this.props.receipts;
        var receipts = []; 
        for (let i = 0; i < entries.length; i++) {
            receipts.push(
                <Receipt key={i} entry={entries[i]} />
            ); 
        }
        return receipts; 
    }
 }

export default Radium(Popup);