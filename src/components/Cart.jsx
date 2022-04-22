import React from "react";
import Player from "./Player";


function Cart(props){


     function renderWin(){
        if(props.isWin===true){
            return(
    
                <p>{props.playerWin} gagne</p>
            )
        }
    }


    return(
        <div className='cart'>
            <h3>Règles</h3>
            <p>
                Le premier joueur a aligner 3 symboles identiques gagne la partie. Attention, le joueur qui débute est toujours avantagé pour gagner. Pensez donc à alterner !
            </p>

             {renderWin()}
            <button className='btn-grad' onClick={props.reset}>Mise a zéro du score</button>
            
        </div>
    )
}
export default Cart