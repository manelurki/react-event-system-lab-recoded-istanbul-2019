import React,{Component} from 'react'
class Keypad extends Component {
    constructor(){
        super()
    }
        keyUpHandler = () =>{
console.log('Entering password...');
    }
    render(){
return (
<input type="password" onKeyUp={this.keyUpHandler}/>
);
    }






}