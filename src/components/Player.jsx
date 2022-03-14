import React from 'react'

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:"O",
        }
    
        
    }

    switchClik=()=>{
        if(this.state.player === "X"){
            this.setState({
                player:"O"
            })
        }else{
            this.setState({
                player:"X"
            })
        }
        
    }
    

    
    
    render(){
        return(
        <div>
            <button onClick={this.switchClik}>test</button>
        </div>
        )
    }
}
export default Player;