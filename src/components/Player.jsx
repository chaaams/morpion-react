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
                     return alert('Victory');
                     
                }else if (grid[3]===grid[4]&&grid[5]===grid[3]&& grid[3] !==""){
                    this.setState({isWin : true })
                    return alert("Victory")

                }else if (grid[6]===grid[7]&&grid[8]===grid[6]&& grid[6]!==""){
                    this.setState({isWin : true })
                    return alert("victory")

                }else if (grid[0]===grid[3]&&grid[6]===grid[3]&&grid[3]!==""){
                    this.setState({isWin : true })
                    return alert("Victory")

                }else if (grid[1]===grid[4]&& grid[7]===grid[4]&&grid[4]!==""){
                    this.setState({isWin : true })
                    return alert("Victory")

                }else if (grid[2]===grid[5]&&grid[8]===grid[5]&&grid[5] !==""){
                    this.setState({isWin : true })
                    return alert ("Victory")

                }else if (grid[0]===grid[4]&&grid[8]===grid[4]&&grid[4]!==""){
                    this.setState({isWin : true })
                    return alert("Victory")

                }else if (grid[6]===grid[4]&&grid[2]===grid[4]&& grid[4]!==""){
                    this.setState({isWin : true })
                    return alert("Victory")
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