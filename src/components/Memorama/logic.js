import { useEffect, useState, useRef } from "react";
import Memo from "./Memo";
import { Html } from "next/document";


// https://picsum.photos/
let GetImages = async function () {
    return fetch("https://picsum.photos/v2/list?limit=10&page=3").then((respond) => {
        return respond.json();
    }).then((data) => {
        return data;
    })

}



let Revolver = false;


function  Logic( set,cards , referent  ) {
    let [render, setRender] = useState( false);
    let [ reset , setReset ] = useState( false );
    const container = useRef([]);
    useEffect(() => {         
         container.current = [];
         GetImages().then( (data)=>{
            // Duplicando data, para que cada imagen tenga un par.
            let doble = [ ...data, ...data];
              
             // Creando componente
             let components = doble.map(( c ,  )=>{

                let key = Math.random( );
                return <Memo {...c} key={ key}  idKey={ key } register = {   set }  playeds={ cards }  callback={ referent } ></Memo>
             });

             
            // Revolviendo cartas.
            container.current = components.sort( ()=> Math.random( ) - 0.5 );
            //Mandando a pintar.
            setRender( ()=>{ return !render })
        });      
        
    
    }, [  ]);


    useEffect(()=>{

        if( container.current.length > 0 ){

              // Revolviendo cartas.
              container.current = container.current.sort( ()=> Math.random( ) - 0.5 );
              //Mandando a pintar.
              referent.current.forEach( ( { reset } )=>{

                    reset( );

              })
              setRender( ()=>{ return !render })
        }
    


    },[ reset ])



    return {

        Cards :  container.current,
        Reset : ()=>{
            return setReset( ()=>{
                return !reset;
            })
        },

        ShowAll : ()=>{
            window.memoramaShow= true;

            referent.current.forEach(( { flip , found })=>{

                flip( false  );
         

            });

            set( [ ]);


        },

        HideAll : ()=>{

            window.memoramaShow= false;

            referent.current.forEach(( { flip , found } )=>{
         
                flip( true   );
        
              
                
                
            });

            set( [ ]);


        }
    }
}



function MemoramaLogic(Cards, reset) {
    let [one, two] = Cards;  
    let HtmlOne = one.key;
    let HtmlTwo = two.key;
    let actions = "nada";
  
    if (HtmlOne == HtmlTwo) {
      actions = "found";
    }
  
    if (HtmlOne != HtmlTwo) {
      actions = "reset";
    }
  
    switch (actions) {
      case "found":
        Cards.forEach(({found }) => {
          found( true );
          reset([]);
        });
  
        break;
      case "reset":
        reset([]);  
        setTimeout(() => {
          Cards.forEach(({ flip }) => {         
            flip( true );
            
          });
        }, 500);
  
        break;
      default:
    }
  }


export {
    Logic,
    MemoramaLogic
}