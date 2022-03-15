import React from 'react'
import "../App.css"

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:"O",
            counter:0 ,
            grid :["","","","","","","","",""],
            isWin : false
        }
    
        
    }

   
    

    
    
    render(){
        return(
        <div>
            <div className="grid" onClick={this.props.switchClik}>
                    <div className="case" id="0">{this.props.grid[0]}</div>
                    <div className="case" id="1">{this.props.grid[1]}</div>
                    <div className="case" id="2">{this.props.grid[2]}</div>
                    <div className="case" id="3">{this.props.grid[3]}</div>
                    <div className="case" id="4">{this.props.grid[4]}</div>
                    <div className="case" id="5">{this.props.grid[5]}</div>
                    <div className="case" id="6">{this.props.grid[6]}</div>
                    <div className="case" id="7">{this.props.grid[7]}</div>
                    <div className="case" id="8">{this.props.grid[8]}</div>
               </div>

            

        </div>
        )
    }
}
export default Player;