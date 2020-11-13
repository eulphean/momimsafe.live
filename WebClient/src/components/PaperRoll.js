import React from 'react'
import Radium from 'radium'
import { padding } from './CommonStyles.js'
import Receipt from './Receipt.js'

const duration = '1.5s';

var heightAni = Radium.keyframes({
    '0%': {height: '0'},
    '100%': {height: '60px'},
  }, 'height');

const styles={
    animatingContainer: {
        position: 'absolute',
        top:'0%',
        bottom: '0%',
        left: '0%',
        right: '0%',
        marginLeft: padding.small,
        marginRight: padding.small,
        justifyContent: 'center',
        display: 'flex',
        zIndex: '0'
    },

    paperRollContainer: {
        position: 'absolute',
        bottom: '0%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center'
    },

    individualReceipt: {
        display: 'flex',    
        flexDirection: 'column',
        width: '100%'
    }
}

class PaperRoll extends React.Component {
    constructor(props) {
        super(props);
        this.state={    
            receipts: [],
            enableAnimation: false,
            animationStyle: {},
            currentReceiptIdx: 0
        };

        // Instances. 
        this.receipt = React.createRef(); 
        this.wrapper = React.createRef(); 
        this.scrollContainer = React.createRef(); 
        this.lastReceiptIdx = 0; 
    }

    componentDidMount() {
        console.log('Paper Roll Mount'); 
    }

    render() {
        let animatingStyle = this.state.enableAnimation ? [styles.animatingContainer, this.state.animationStyle] : styles.animatingContainer; 
        return (
            <div ref={this.wrapper} style={animatingStyle} onAnimationEnd={this.onWrapperAnimationEnd.bind(this)}>  
                <div ref={this.receiptContainer} style={styles.paperRollContainer}>
                    {this.state.receipts}
                </div>
            </div>
        );
    }

    createReceipt(isOrdered) {
        // If it's in order, we use the local variable, else calculate a random index. 
        let receiptIdx = isOrdered ? this.lastReceiptIdx : Math.floor(Math.random() * this.props.database.length);  

        console.log("Receipt: " + receiptIdx);
        
        let r = (
            <div ref={this.receipt} key={this.state.receipts.length} style={styles.individualReceipt} >
                <Receipt topPadding={true} entry={this.props.database[receiptIdx]} />
            </div>
        );

        // Push a receipt on top of the current one. 
        let allReceipts = this.state.receipts; 
        allReceipts.unshift(r); 

        // Increment if it was created in order based. We want to keep track
        // of the index of the last receipt we were on. 
        let currentIdx = isOrdered ? this.lastReceiptIdx + 1 : receiptIdx; 
        this.lastReceiptIdx = isOrdered ? currentIdx : this.lastReceiptIdx; 
        
        // New receipts - Also new lastReceiptIdx
        this.setState({
            receipts: allReceipts,
            currentReceiptIdx: currentIdx
        }); 
    }

    componentDidUpdate(prevProps, prevState) {
        // Finally got the database. 
        if (this.props.database !== prevProps.database) {
            console.log('Creating first receipt');
            this.createReceipt(true); 
        }

        if (this.state.currentReceiptIdx !== prevState.currentReceiptIdx) {
            setTimeout(() => {
                this.resetAnimation();
            }, 500); // Give it some time to render before enabling animation. 
        }
    }

    updateHeightAnimation(currentHeight, newHeight) {
        heightAni = Radium.keyframes({
            '0%': {height: currentHeight + 'px'},
            '100%': {height: newHeight + 'px'},
            }, 'height');
    }

    resetAnimation() {
        // Setup new animation. 
        let curHeight = parseInt(this.wrapper.current.offsetHeight);
        let receiptHeight = parseInt(this.receipt.current.offsetHeight); 
        let finalHeight = curHeight + receiptHeight; // Little Extra Receipt
        console.log('resetAnimation: ' + curHeight + ', ' + finalHeight);

        this.updateHeightAnimation(curHeight, finalHeight); 
        console.log('Animation begin');
        this.setState({
            animationStyle: {
                animationName: heightAni,
                animationDuration: duration,
                animationFillMode: 'forwards',
                animationTimingFunction:'linear'
            },
            enableAnimation: true
        });
    }

    onWrapperAnimationEnd() {
        console.log('Animation ending'); 
        this.props.onAnimationEnd();
    }
}

export default Radium(PaperRoll);