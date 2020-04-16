//[ Private Key | Key                                    Date | Time ]
//[ Text Input                                              Button   ]
class Input {
    constructor(onEncrypt) {
        // Date / Time
        this.date = select('.date');
        this.time = select('.time');
        
        this.updateClock(); 
        setInterval(this.updateClock.bind(this), 1000); // Call this method every 1000 second. 
        
        // // Text input using a <textarea> tag. 
        this.textInput = select('.textinput');
        this.textInput.input(this.onInput.bind(this)); 

        // Encryption button.
        this.submit = select('.inputbutton'); 
        this.submit.mousePressed(this.onClick.bind(this, onEncrypt)); 
        this.disableButton(); 
    }

    updateClock() {
        // Get current date instance.
        var now = new Date(); 
        var date = now.getFullYear()+'/'+(now.getMonth()+1)+'/'+now.getDate();
        var time = now.toLocaleTimeString();
        // time = time[0] + time[1];
        this.date.html(date);
        this.time.html(time); 
    }

    onClick(onEncrypt) {  
        // Save text input value      
        var inputText = this.textInput.value(); 

        // Reset text area, button and private key label
        this.textInput.value(''); 

        // Callback to encrypt saved text input. 
        onEncrypt(inputText); 
        
        this.disableButton();
    }

    onInput() {
        var inputText = this.textInput.value(); 
        if (inputText.length > 0) {
            this.enableButton(); 
        } else {
            this.disableButton();
        }
    }

    disableButton() {
        this.submit.style('color', '#cfcfcf');
        this.submit.attribute('disabled', true); 
        this.submit.removeClass('animate');
    }

    enableButton() {
        // Enable color
        this.submit.style('color', 'black');
        this.submit.removeAttribute('disabled'); 
        this.submit.addClass('animate');
    }
}