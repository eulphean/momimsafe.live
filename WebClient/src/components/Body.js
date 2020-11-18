import React from 'react'
import Radium from 'radium'
import { color, padding, boxShadow, fontSize, fontFamily } from './CommonStyles.js'
import PaperRoll from './PaperRoll.js'


const styles={
    container: {
        display: 'flex',
        height: '250px',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: color.bodyGrey,
        boxShadow: boxShadow.dark,
        borderRadius: '25px',

        // Desktop sizes
        '@media (min-width: 768px)': {  
            width: '65%'
        },

        '@media (min-width: 1024px)': {  
            width: '30%'
        },

        '@media (min-width: 1440px)': {  
            width: '35%'
        },

        // Mobile sizes. 
        '@media (min-width: 375px) and (orientation: portrait)': {  
            width: '99%'
        },

        '@media (min-width: 768px) and (orientation: portrait)': {  
            width: '70%'
        },

        '@media (min-width: 1024px) and (orientation: portrait)': {  
            width: '65%'
        },

        '@media (min-width: 1024px) and (orientation: landscape)': {  
            width: '40%'
        },
    },

    upperBodyContainer: {
        position: 'relative',
        zIndex: '2', // Abstracts the receipt getting printed in the lower body
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: color.bodyGrey,
        borderRadius: '25px 25px 0px 0px',
        paddingBottom: padding.big
    },
    
    // With Amay Kataria websit
    header: {
        display: 'flex',
        color: color.sunLight,
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.verySmall,
        marginTop: padding.verySmall,
        letterSpacing: '1.5px',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.small,
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            // no change.
            fontSize: fontSize.small
        },

        '@media (min-width: 900)': {  
            // no change.
            fontSize: fontSize.big
        },

        ':hover': {
            color: color.link
        }
    },

    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: padding.big,
        marginLeft: padding.small,
        marginRight: padding.small,
        width: '100%',
        justifyContent: 'space-evenly',
        zIndex: '1'
    },
    
    buttonCollection: {
        display: 'flex',
        flexDirection: 'row'
    },

    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: padding.verySmall,
        marginRight: padding.verySmall,
        marginLeft: padding.verySmall
    },

    title: {
        color: color.sunLight,
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.small,
        letterSpacing: '1.5px',

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.big,
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            // no change.
            fontSize: fontSize.big
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            fontSize: fontSize.veryBig
        }
    },

    button: {
        marginTop: padding.extraSmall,
        width: '20px',
        height: '20px',
        border: '1.4px solid black',
        borderRadius: '15px',
        boxShadow: boxShadow.darkButton,
        cursor: 'pointer'
    },

    buttonHover: {
        backgroundColor: color.faceGrey,
        boxShadow: boxShadow.darkButtonBig
    },

    buttonDisabled: {
        backgroundColor: color.disabled
    }, 

    website: {
        display: 'flex',
        alignItems: 'flex-end',
        color: color.sunLight,
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.small,
        letterSpacing: '1.5px',

        ':hover': {
            color: color.link
        },

        '@media (min-width: 450px)': {  
            // no change.
        },

        '@media (min-width: 600px)': {  
            fontSize: fontSize.big,
        },

        '@media (min-width: 750px) and (orientation: portrait)': {  
            // no change.
            fontSize: fontSize.big
        },

        '@media (min-width: 900px) and (orientation: portrait)': {  
            fontSize: fontSize.veryBig
        }
    },

    division: {
        display: 'flex',
        width: '100%',
        height: '1.5px',
        backgroundColor: color.black,
        marginTop: padding.big,
        boxShadow: boxShadow.darkButton
    },

    mouthContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '0%',
        bottom: '0%',
        left: '0%', 
        right: '0%',
        // backgroundColor: color.bodyGrey,
        width: '90%',
        zIndex: '1' // Abstract the receipt,
    },

    upperMouth: {
        position: 'relative',
        backgroundColor: color.faceGrey,
        zIndex: '1', // Abstract the receipt
        height: '40px',
        borderRadius: '10px 10px 0 0',
        boxShadow: boxShadow.dark
    },

    lowerMouth: {
        position: 'absolute',  
        left: '0%',
        right: '0%',
        backgroundColor: color.faceGrey,
        height: '40px',
        marginTop: '40px',
        borderRadius: '0px 0px 10px 10px',
        zIndex: '-1', // Let the receipt show,
        boxShadow: boxShadow.darkButton
    }
} 

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           isPrintHovering: false,
           isShuffleHovering: false,
           isReloadHovering: false,
           isDisabled: true
        };

        this.paperRoll = React.createRef();
    }

    render() {
        const header = this.getHeader(); 
        const buttons = this.getButtons();
        const website = this.getWebsite();  
        return (
            <div style={styles.container}>
                <div style={styles.upperBodyContainer}>
                    {header}
                    <div style={styles.infoContainer}>
                        {buttons}
                        {website}
                    </div>
                    <div style={styles.division}></div>
                </div>
                <div style={styles.mouthContainer}>
                    <div style={styles.upperMouth}></div>
                        <PaperRoll ref={this.paperRoll} database={this.props.database} onAnimationEnd={this.onReceiptAnimationEnd.bind(this)} />
                    <div style={styles.lowerMouth}></div>
                </div>
            </div>
        );
    }

    getHeader() {
        const website = 'https://amaykataria.com';
        return (
            <a 
                key={'amaykataria'}
                style={styles.header} 
                target='_blank' 
                rel="noopener noreferrer" 
                href={website}
            >
                © Amay Kataria 2020
            </a>
        ); 
    }

    getButtons() {
        let printButtonStyle = this.state.isPrintHovering ? [styles.button, styles.buttonHover] : [styles.button]; 
        printButtonStyle = this.state.isDisabled ? [printButtonStyle, styles.buttonDisabled] : printButtonStyle; 
        let shuffleButtonStyle = this.state.isShuffleHovering ? [styles.button, styles.buttonHover] : [styles.button];
        shuffleButtonStyle = this.state.isDisabled ? [shuffleButtonStyle, styles.buttonDisabled] : shuffleButtonStyle; 
        let reloadButtonStyle = this.state.isReloadHovering ? [styles.button, styles.buttonHover] : [styles.button];
        reloadButtonStyle = this.state.isDisabled ? [reloadButtonStyle, styles.buttonDisabled] : reloadButtonStyle; 
        return (
            <div style={styles.buttonCollection}>
                <div style={styles.btnContainer}>
                    <div style={styles.title}>
                        PRINT
                    </div>
                    <div onMouseEnter={this.onPrintHover.bind(this)} onMouseLeave={this.onResetPrintHover.bind(this)} onClick={this.onPrint.bind(this)} style={printButtonStyle} disabled={this.state.isDisabled}></div>
                </div>
                <div style={styles.btnContainer}>
                    <div style={styles.title}>
                        SHUFFLE
                    </div>
                    <div onMouseEnter={this.onShuffleHover.bind(this)} onMouseLeave={this.onResetShuffleHover.bind(this)} onClick={this.onShuffle.bind(this)} style={shuffleButtonStyle} disabled={this.state.isDisabled}></div>
                </div>
                <div style={styles.btnContainer}>
                    <div style={styles.title}>
                        RELOAD
                    </div>
                    <div onMouseEnter={this.onReloadHover.bind(this)} onMouseLeave={this.onResetReloadHover.bind(this)} onClick={this.onReload.bind(this)} style={reloadButtonStyle} disabled={this.state.isDisabled}></div>
                </div>
            </div>
        );
    }

    getWebsite() {
        return (
            <a 
                key={'momimsafe'}
                style={styles.website} 
                target='_blank' 
                rel="noopener noreferrer" 
                href={"https://momimsafe.live"}
            >
                MOMIMSAFE.LIVE
            </a>
        );
    }

    onReceiptAnimationEnd() {
        this.setState({
            isDisabled: false
        });
    }

    onPrint(event) {
        event.stopPropagation();
        if (!this.state.isDisabled) {
            this.paperRoll.current.createReceipt(true);
            this.setState({
                isDisabled: true
            }); 
        }
    }

    onShuffle(event) {
        event.stopPropagation(); 
        if (!this.state.isDisabled) {
            this.paperRoll.current.createReceipt(false);
            this.setState({
                isDisabled: true
            }); 
        }
    }

    onReload(event) {
        event.stopPropagation();
        if (!this.state.isDisabled) {
            window.location.reload();
        }
    }

    onPrintHover(event) {
        event.stopPropagation(); 
        this.setState({
            isPrintHovering: true
        });
    }

    onShuffleHover(event) {
        event.stopPropagation();
        this.setState({
            isShuffleHovering: true
        });
    }

    onReloadHover(event) {
        event.stopPropagation();
        this.setState({
            isReloadHovering: true
        });
    }

    onResetReloadHover(event) {
        event.stopPropagation();
        this.setState({
            isReloadHovering: false
        }); 
    }

    onResetShuffleHover(event) {
        event.stopPropagation();
        this.setState({
            isShuffleHovering: false
        }); 
    }

    onResetPrintHover(event) {
        event.stopPropagation();
        this.setState({
            isPrintHovering: false
        }); 
    }

    getCurrentReceiptIdx() {
        return this.paperRoll.current.state.currentReceiptIdx; 
    }

    createReceipt() {
        this.paperRoll.current.createReceipt(true); 
    }
}

export default Radium(Body);