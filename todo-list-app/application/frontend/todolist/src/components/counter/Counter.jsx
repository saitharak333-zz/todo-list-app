import React, {Component} from 'react';
import CounterButton from "./CounterButton"
import './Counter.css'

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.resetcount = this.resetcount.bind(this);
    }

    render () {
        return (
            <div className = "Counter">
                <br />
                Counter Page
                <br />
                <br />
                <CounterButton by={1} incmethod = {this.increment}/>
                <CounterButton by={5} incmethod = {this.increment}/>
                <CounterButton by={10} incmethod = {this.increment}/>
                <CounterButton by={15} incmethod = {this.increment}/>
                <CounterButton by={-1} incmethod = {this.increment}/>
                <CounterButton by={-5} incmethod = {this.increment}/>
                <CounterButton by={-10} incmethod = {this.increment}/>
                <CounterButton by={-15} incmethod = {this.increment}/>
                <span className = "counterValue">{this.state.counter}</span>
                <div className = "reset"><button onClick = {this.resetcount}>Reset</button></div>
            </div>
        );
    }

    resetcount () {
        console.log("value is reset");
        this.setState({
            counter : 0
    });
    }

    increment (by) {
        console.log("increment from parent");
        this.setState( 
            (prevState) => {
                if (by === 0){
                    return {counter: 0}    
                } else {
                return {counter: prevState.counter + by}
                }
            }
        ); 
    }
}