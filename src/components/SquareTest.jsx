import React from "react";

class SquareTest extends React.Component {
constructor(props){
    super(props);
    this.state ={
        value : null
    } 
}

render(){
    return(
        <button className="square"
        onClick={()=> this.setState({value:"x"})}></button>
    )
}
}

export default SquareTest;