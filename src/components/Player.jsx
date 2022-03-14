import React from 'react'
import "../App.css"

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state={
            player:"O",
            counter:0 ,
            grid :["","","","","","","","",""],
        }
    
        
    }

    switchClik=(e)=>{
        console.log(e.target.id);
       let grid = [...this.state.grid]
       let id = e.target.id;
       console.log(grid[id]);
       grid[id]= this.state.player
        let count = this.state.counter
        if(this.state.player === "X"){
            this.setState({
                player:"O",
                grid:grid,
            })
        }else{
            this.setState({
                player:"X",
                grid : grid ,
            })
        }
        // console.log(this.state.counter)

    }
    

    
    
    render(){
        return(
        <div>
            <div className="grid" onClick={this.switchClik}>
                    <div className="case" id="0">{this.state.grid[0]}</div>
                    <div className="case" id="1">{this.state.grid[1]}</div>
                    <div className="case" id="2">{this.state.grid[2]}</div>
                    <div className="case" id="3">{this.state.grid[3]}</div>
                    <div className="case" id="4">{this.state.grid[4]}</div>
                    <div className="case" id="5">{this.state.grid[5]}</div>
                    <div className="case" id="6">{this.state.grid[6]}</div>
                    <div className="case" id="7">{this.state.grid[7]}</div>
                    <div className="case" id="8">{this.state.grid[8]}</div>
               </div>
            <button className='reset'>Reset</button>
            <button onClick={this.switchClik}>Play</button>
        </div>
        )
    }
}
export default Player;