import React from "react";
import "../App.css"

class Board extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
                <div className="moveBoard">
               <div className="grid">
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>
                   <div className="case"></div>

               </div>
               </div>
        )
    }
}

export default Board;