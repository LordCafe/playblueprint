import { useEffect, useState, useRef } from "react";


// https://picsum.photos/
let GetImages = async function () {
    return fetch("https://picsum.photos/v2/list?limit=10&page=3").then((respond) => {
        return respond.json();
    }).then((data) => {
        return data;
    })

}

function Skelento( props ) {
    let { download_url , id , register , playeds } = props;
    let [ test , setTest ] = useState( false);
    const container = useRef(null);
    
    


    
    return (
        <div class="card-memo" ref={ container } data-id={ id } data-outgame={ null }   onClick={( e )=>{           
             let founded = container.current.dataset.outgame;
            

             if( !founded ){
                let  card = container.current;
                card.classList.toggle("mark");
                card.querySelector(".card-back").classList.add("hide");
                card.querySelector("img").classList.remove("hide")

                register( [ ...playeds.current , container.current ] )
             }

           



      

        }}>
            <figure>
                <img className="hide" src={ download_url }></img>
                <div className={"card-back"}></div>
            </figure>
            <p>prueba manga</p>
        </div>

    );
}



function  Logic( set,cards ) {

    let [render, setRender] = useState( false);
    const container = useRef([]);



    useEffect(() => {
         GetImages().then( (data)=>{
              
             // Creando componente
             let components = data.map(( c )=>{
                return <Skelento {...c} register = {   set }  playeds={ cards }></Skelento>
             });

             // Duplicando componente para el memorama.
             let all  = [ ...components, ...components ];
             
            // Revolviendo cartas.
            container.current = all.sort( ()=> Math.random( ) - 0.5 );

             //Mandando a pintar.
             setRender( ()=>{ return !render })
        })
        
        
    
    }, []);



    return {

  
        Cards :  container.current,
    }
}



export {
    Logic
}