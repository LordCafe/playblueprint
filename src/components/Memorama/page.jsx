"use client"
import { useState , useEffect , useRef } from "react";    
import { Logic } from "./logic"
import "./memorama.css";



function Board( { children  } ) {
    return (   
        
    <div className={"container-cards"}>
        { children }
    </div>)
}


function MemoramaLogic( Cards, reset  ){

    let [ one, two ] = Cards;
    let actions = "nada";

    if( one.dataset.id == two.dataset.id){
        actions = "found";
    }

    if( one.dataset.id != two.dataset.id){
        actions = "reset";
    }

    console.log( actions );
    switch ( actions ) {
        case 'found':
        

          Cards.forEach(element => {
            element.classList.add("founded");
            element.dataset.outgame = true;
            reset([])
         });


          break;
        case 'reset':
          reset( []);

          setTimeout( ()=>{
            
            Cards.forEach(element => {
                element.classList.remove("mark");
                element.querySelector(".card-back").classList.remove("hide");
                element.querySelector("img").classList.add("hide")
             });

          }, 500)



          break;
        default:
         
      }
      

    
      
}


export default function Memorama(){
    let [ played, setPlayed ] = useState( []);
    let Memory = useRef([]);
    let  { Cards } = Logic( setPlayed  , Memory );  
    

    useEffect( ()=>{
        console.log("jugando", played );
        Memory.current = played;

        if( played.length >= 2 ){

            MemoramaLogic( played , setPlayed );
        }


    },[ played ])

    
    return (
    
 

<Board>
    { Cards }
</Board>
    
)

}