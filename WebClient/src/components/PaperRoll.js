import React from 'react'
import Radium from 'radium'
import { color, fontFamily, padding } from './CommonStyles.js'
import Receipt from './Receipt.js'

const duration = '1.5s';

var heightAni = Radium.keyframes({
    '0%': {height: '0'},
    '100%': {height: '60px'},
  }, 'height');

const styles={
    animatingContainer: {
        position: 'relative',
        marginLeft: padding.small,
        marginRight: padding.small,
        height: '0px',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: 'red',
        opacity: '0.5',
        zIndex: '0'
    },

    paperRollContainer: {
        position: 'absolute',
        bottom: '0%',
        display: 'flex',
        backgroundColor: 'green',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',

        '@media (min-width: 450px) and (orientation: landscape)' : {
            width: 'calc(100%/2 - 4%)'
        },
    
        '@media (min-width: 750px)' : {
            width: 'calc(100%/2 - 3%)'
        },
    
        '@media (min-width: 900px)' : {
            width: 'calc(100%/2 - 2%)'
        },
    
        '@media (min-width: 1200px)' : {
            width: 'calc(100%/3 - 2%)'
        },
    
        '@media (min-width: 1400px)' : {
            width: 'calc(100%/4 - 2%)'
        }
    },

    individualReceipt: {
        display: 'flex',    
        flexDirection: 'column',
        width: '100%'
    },

    testReceipt: {
        width: '100%',
        height: '60px'
    },

    testDiv: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100px',
        top: '-100px',
        backgroundColor: 'blue',
    }

}

class PaperRoll extends React.Component {
    constructor(props) {
        super(props);
        this.state={    
            receipts: [],
            enableAnimation: false,
            animationStyle: {
                animationName: heightAni, 
                animationDuration: duration,
                animationFillMode: 'forwards',
                animationTimingFunction:'ease-in'
            },
            lastReceiptIndex: 0
        };

        // Instances. 
        this.receipt = React.createRef(); 
        this.wrapper = React.createRef(); 
        this.scrollContainer = React.createRef(); 
    }

    componentDidMount() {
        console.log('Paper Roll Mount'); 
    }

    render() {
        let animatingStyle = this.state.enableAnimation ? [styles.animatingContainer, this.state.  animationStyle] : styles.animatingContainer; 
        return (
            <div ref={this.wrapper} style={animatingStyle} onAnimationEnd={this.onWrapperAnimationEnd.bind(this)}>  
                <div ref={this.receiptContainer} style={[styles.paperRollContainer]}>
                    {this.state.receipts}
                </div>
            </div>
        );
    }

    createReceipt(isOrdered) {
        // If it's in order, we use the local variable, else calculate a random index. 
        let receiptIdx = isOrdered ? this.state.lastReceiptIndex : Math.floor(Math.random(this.state.lastReceiptIndex, this.props.databaseEntries.length));  
        
        let r = (
            <div ref={this.receipt} key={this.state.receipts.length} style={styles.testReceipt}>

            </div>
        )

        // Push a receipt on top of the current one. 
        let allReceipts = this.state.receipts; 
        allReceipts.unshift(r); 

        // Increment if it was created in order based. We want to keep track
        // of the index of the last receipt we were on. 
        let lastIdx = isOrdered ? this.state.lastReceiptIndex + 1 : this.state.lastReceiptIndex; 
        
        // New receipts - Also new lastReceiptIdx
        this.setState({
            receipts: allReceipts,
            lastReceiptIndex: lastIdx,
            enableAnimation: true
        }); 
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.database !== prevProps.database ) {
            console.log('Creating first receipt');
            this.createReceipt(true); 
        }
        // if (!prevState.enableAnimation && this.receipt.current !== null) {
        //     this.enableAnimation(); 
        // }
    }

    updateHeightAnimation(currentHeight, newHeight) {
        heightAni = Radium.keyframes({
            '0%': {height: currentHeight + 'px'},
            '100%': {height: newHeight + 'px'},
            }, 'height');
    }

    enableAnimation() {
        // Setup new animation. 
        let curHeight = parseInt(this.wrapper.current.clientHeight, 10);
        let receiptHeight = parseInt(this.receipt.current.clientHeight, 10); 
        let finalHeight = curHeight + receiptHeight; 
        console.log('enableAnimation: ' + curHeight + ', ' + finalHeight);

        this.updateHeightAnimation(curHeight, finalHeight); 
        console.log('Animation begin');
        this.setState({
            enableAnimation: true,
            animationStyle: {
                animationName: heightAni,
                animationDuration: duration,
                animationFillMode: 'forwards',
                animationTimingFunction:'ease-in'
            }
        });

        this.createReceipt(true);
    }

    onWrapperAnimationEnd() {
        console.log('Animation ending'); 
    }
}

export default Radium(PaperRoll);

// let r = (  
//     <div ref={this.receipt} key={this.state.receipts.length} style={styles.individualReceipt} >
//         <Receipt entry={this.props.database[receiptIdx]} />
//     </div>
// ); 

// container: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     textAlign: 'center',
//     background: color.white,
//     color: color.black,
//     fontFamily: fontFamily.thermal,
//     width: '100%',
//     height: '100%',
//     border: 'none',
//     backfaceVisibility: 'hidden'
// },