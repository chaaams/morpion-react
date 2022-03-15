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

    switchClik=(e)=>{
        if (this.state.isWin ===false){
            
            console.log(e.target.id);
            let grid = [...this.state.grid]
            let id = e.target.id;
            console.log(grid[id]);
            if (grid[id]=== ""){
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
                if(grid[0]===grid[1]&&grid[2]===grid[1] && grid[0] !== ""){
                    this.setState({isWin : true })
                     return alert('win');
                }else if (grid[3]===grid[4]&&grid[5]===grid[3]&& grid[3] !==""){
                    this.setState({isWin : true })
                    return alert("double win")

                }else if (grid[6]===grid[7]&&grid[8]===grid[6]&& grid[6]!==""){
                    this.setState({isWin : true })
                    return alert("triple win")

                }else if (grid[0]===grid[3]&&grid[6]===grid[3]&&grid[3]!==""){
                    this.setState({isWin : true })
                    return alert("ligne 1 vertical")
                }else if (grid[1]===grid[4]&& grid[7]===grid[4]&&grid[4]!==""){
                    this.setState({isWin : true })
                    return alert("ligne 2 vertical")
                }else if (grid[2]===grid[5]&&grid[8]===grid[5]&&grid[5] !==""){
                    this.setState({isWin : true })
                    return alert ("ligne 3 vertical")
                }else if (grid[0]===grid[4]&&grid[8]===grid[4]&&grid[4]!==""){
                    this.setState({isWin : true })
                    return alert("diagonal one")
                }else if (grid[6]===grid[4]&&grid[2]===grid[4]&& grid[4]!==""){
                    this.setState({isWin : true })
                    return alert("diagonal two")
                }

       }

        }
        // console.log(this.state.counter)

    }
    reset=()=>{
        let grid = [...this.state.grid]
        for ( let i=0 ; i < grid.length ; i++ ){
            console.log(grid[i])
            grid[i] = ""
        
        }
            this.setState({
                grid : grid,
                isWin : false
            })
        
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

            <button className='reset' onClick={this.reset}>Reset</button>

        </div>
        )
    }
}
export default Player;