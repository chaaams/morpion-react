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
                   <div className="case" id="case1">X</div>
                   <div className="case" id="case2">0</div>
                   <div className="case" id="case3"></div>
                   <div className="case" id="case4"></div>
                   <div className="case" id="case5"></div>
                   <div className="case" id="case6"></div>
                   <div className="case" id="case7"></div>
                   <div className="case" id="case8"></div>
                   <div className="case" id="case9"></div>
               </div>
               </div>
        )
    }
}

export default Board;