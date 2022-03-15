import React from "react";
import Player from "./Player";

function Cart(){
    const monsterPrice = 8;
    const lierrePrice = 10;
    const bouquetPrice = 16;
    return(
        <div className='cart'>
            <h3>Jeu du morpion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto quos necessitatibus odit
                 recusandae enim quo vitae fuga ratione officia libero,
                  soluta doloremque iure dolorum veniam omnis aperiam aut.
                   Veniam nisi, eaque provident qui minus consectetur accusantium dicta tempore
                    illo labore, facilis porro ullam dolor? Alias dolorum totam odit maxime!
            </p>
            <button className="reset">reset</button>
            
        </div>
    )
}
export default Cart