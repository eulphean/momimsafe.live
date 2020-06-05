import React from 'react'
import Radium from 'radium'
import { color, fontFamily } from './CommonStyles.js'
import Receipt from './Receipt.js'

const duration = '1.5s';

var heightAni = Radium.keyframes({
    '0%': {height: '0'},
    '100%': {height: '200px'},
  }, 'height');

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

    wrapContainer: {
        position: 'absolute',
        width: '100%',
        height: '0px',
        justifyContent: 'center',
        display: 'flex',
        zIndex: '0'
    },

    scrollContainer: {
        position: 'absolute',
        bottom: '0%',
        display: 'flex',
        backgroundColor: 'green',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        overflow: 'scroll',

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
        },
    },

    individualReceipt: {
        display: 'flex',    
        flexDirection: 'column',
        width: '100%'
    },

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
            }
        };

        this.receipt = React.createRef(); 
        this.wrapper = React.createRef(); 
        this.scrollContainer = React.createRef(); 
        this.lastReceiptIndex = 0; 
    }

    componentDidMount() {
        console.log('Receipt mounted');
    }

    render() {
        let wrapperStyle = this.state.enableAnimation ? [styles.wrapContainer, this.state.  animationStyle] : styles.wrapContainer; 
        return (
            <div ref={this.wrapper} style={wrapperStyle} onAnimationEnd={this.onWrapperAnimationEnd.bind(this)}>   
                <div ref={this.receiptContainer} style={[styles.scrollContainer]}>
                    {this.state.receipts}
                </div>
            </div>
        );
    }

    createReceipt(sequence) {
        // If it's a sequence, we use the local variable, else calculate a random index. 
        let receiptIdx = sequence ? this.lastReceiptIndex : Math.floor(Math.random(this.lastReceiptIndex, this.state.databaseEntries.length));  
        let r = (  
            <div ref={this.receipt} key={this.state.receipts.length} style={styles.individualReceipt} >
                <Receipt entry={this.state.databaseEntries[receiptIdx]} />
            </div>
        ); 

        let allReceipts = this.state.receipts; 
        allReceipts.unshift(r); 

        // Increment if it was a sequence based create receipt. We want to keep track
        // of the index of the last receipt we were on. 
        this.lastReceiptIndex = sequence ? this.lastReceiptIndex + 1 : this.lastReceiptIndex; 

        // Populate the receipt
        this.setState({
            receipts: allReceipts
        }); 
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.enableAnimation && this.receipt.current !== null) {
            this.enableAnimation(); 
        }
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