import { useState, useRef } from "react";




function AddActionFlip( callback , container , State , Found  ){
    callback.current.push(
        
        {

         reset : ()=>{

            State( true );
            Found( null )
         },

         flip : ( state = true )=>{
            let founded = container.current.dataset.outgame;
            if( !founded ){
                State( state  );
            }
        },

        found : ( state = true )=>{

            Found( state )
        }

        }
        
);
}


function PlayCardFlip(  container , Show, Register , playeds , idKey , found  ){
    let founded = container.current.dataset.outgame;
    let otherPlayed = playeds.current[0] || { key : false };
    let IsTheSameCard = ( otherPlayed.key == idKey );
    if( !founded && !IsTheSameCard  && !window.memoramaShow ){        
       Show( false );       
       Register( [ ...playeds.current , { 
            flip: Show,        
            key : idKey,
            found: found
       } ] )
    }
}


export default function Memo( props ){
    let { download_url , id , register , playeds , callback , idKey } = props;
    let [ show , setShow ] = useState( true );
    let [ found , setFound ] = useState( null  );
    const container = useRef();
    let showImage = ( show ) ? "hide" : "";
    let showBack = ( show ) ? "card-back" : "hide";
    let Selected = ( show ) ? "" : "mark";
    let CardFound = ( found ) ? "founded" : "Nofound";

    AddActionFlip( callback, container, setShow, setFound  );  
    
    
    
    return (
        <div className={ "card-memo " + Selected + " " + CardFound  } ref={ container }  data-outgame={ found }   onClick={ ()=>{  
            
            PlayCardFlip( container , setShow , register , playeds , idKey , setFound );
            
            
        }}>
            <figure>
                <img className={ showImage } src={ download_url }></img>
                <div className={ showBack }></div>
            </figure>

        </div>

    );

}