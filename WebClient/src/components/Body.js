import React from 'react'
import Radium from 'radium'
import { color, padding, boxShadow, fontSize, fontFamily } from './CommonStyles.js'
import PaperRoll from './PaperRoll.js'


const styles={
    container: {
        display: 'flex',
        width: '100vw',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: color.bodyGrey,
        boxShadow: boxShadow.dark,
        borderRadius: '25px',
    },

    upperBodyContainer: {
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
        color: color.link,
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.verySmall,
        marginTop: padding.verySmall,
        letterSpacing: '1.5px',

        '@media (min-width: 750px)': {  
            fontSize: fontSize.small,
        },

        '@media (min-width: 1200px)' : {
            fontSize: fontSize.big
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
        letterSpacing: '1.5px'
    },

    button: {
        marginTop: padding.extraSmall,
        width: '20px',
        height: '20px',
        border: '1.4px solid black',
        borderRadius: '15px',
        boxShadow: boxShadow.darkButton
    },

    website: {
        display: 'flex',
        alignItems: 'flex-end',
        color: color.link,
        fontFamily: fontFamily.bebas, 
        fontSize: fontSize.small,
        letterSpacing: '1.5px'
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
        backgroundColor: color.bodyGrey,
        width: '90%',
        zIndex: '1', // Abstract the receipt,
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
                    <PaperRoll ref={this.paperRoll} database={this.props.database} />
                    <div style={styles.lowerMouth}></div>
                </div>
            </div>
        );
    }

    getHeader() {
        const website = 'https://amaykataria.com';
        return (
            <a 
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
        return (
            <div style={styles.buttonCollection}>
                <div style={styles.btnContainer}>
                    <div style={styles.title}>
                        PRINT
                    </div>
                    <div onClick={this.onPrint.bind(this)} style={styles.button}></div>
                </div>
                <div style={styles.btnContainer}>
                    <div style={styles.title}>
                        SHUFFLE
                    </div>
                    <div onClick={this.onShuffle.bind(this)} style={styles.button}></div>
                </div>
            </div>
        );
    }

    getWebsite() {
        return (
            <a 
                style={styles.website} 
                target='_blank' 
                rel="noopener noreferrer" 
                href={"https://momimsafe.live"}
            >
                MOMIMSAFE.LIVE
            </a>
        );
    }

    onPrint(event) {
        event.stopPropagation();
        console.log('Ordered Print'); 
        this.paperRoll.current.createReceipt(true);
    }

    onShuffle(event) {
        event.stopPropagation(); 
        console.log('Shuffle print'); 
        this.paperRoll.current.createReceipt(false);
    }
}

export default Radium(Body);