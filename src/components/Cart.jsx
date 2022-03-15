import React from "react";
import Player from "./Player";

function Cart(props){
    return(
        <div className='cart'>
            <h3>Jeu du morpion</h3>
            <p>
                Le premier joueur a aligner 3 symboles identiques gagne la partie. Attention, le joueur qui débute est toujours avantagé pour gagner. Pensez donc à alterner !
            </p>
            <button className='reset' onClick={props.reset}>Mise a zéro</button>
            
        </div>
    )
}
export default Cart