import React from 'react'
import Radium from 'radium'
import { color, padding, boxShadow, fontSize, fontFamily } from './CommonStyles.js'
import PaperRoll from './PaperRoll.js'


const styles={
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: padding.small
    },

    innerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '50vh',
        width: '100%',
        borderRadius: fontSize.big,
        backgroundColor: color.bodyGrey,
        boxShadow: boxShadow.dark
    },
    
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
        justifyContent: 'space-evenly'
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

    mouth: {
        display: 'flex',
        width: '80%',
        height: '60px',
        borderRadius: '12px',
        backgroundColor: color.faceGrey,
        marginTop: padding.big,
        boxShadow: boxShadow.darkButton
    }
} 

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
        };
    }

    render() {
        const header = this.getHeader(); 
        const buttons = this.getButtons();
        const website = this.getWebsite();  
        return (
            <div style={styles.container}>
                <div style={styles.innerContainer}>
                    {header}
                    <div style={styles.infoContainer}>
                        {buttons}
                        {website}
                    </div>
                    <div style={styles.division}></div>
                    <div style={styles.mouth}></div>
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
                    <div style={styles.button}></div>
                </div>
                <div style={styles.btnContainer}>
                    <div style={styles.title}>
                        SHUFFLE
                    </div>
                    <div style={styles.button}></div>
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
}

export default Radium(Body);