import React, {Component} from 'react'
import './Counter.css'

export default class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        // this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div>
                <button onClick = {() => this.props.incmethod(this.props.by)}>{this.props.by}</button>
                <br />
                {/* <span className = "counterValue">{this.state.counter}</span> */}
            </div>
        );
    }

//     increment = () => {
//         this.setState({
//             counter : this.state.counter + this.props.by
//         });
//         console.log("increment");
//         this.props.incmethod(this.props.by);
//     }
}

CounterButton.defaultProps = {
    by : 1
}