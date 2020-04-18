import React from 'react'
import Radium from 'radium'

class VideoStream extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        };
    }

    render() {
        return (
        <img width='1000px' alt={'Live Stream'} src={this.props.imageSrc} />
        );
    }
}

export default Radium(VideoStream);