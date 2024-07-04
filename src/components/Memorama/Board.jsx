export default function Board({children , reset , show, hide }) {


    return (
      <div className={"wrapper"}>
        <div className={"buttons-controls"}>
          <button id={"Memorama-reset"}  onClick={ ()=>{ reset() }}> Reset juego</button>
          <button id={"Memorama-show"} onClick= {()=>{ show()} } > Mostrar cartas </button>
          <button id={"Memorama-hide"} onClick={ ()=>{ hide()}}  > Ocultar cartas </button>
        </div>
  
        <div className={"container-cards"}>{children}</div>
      </div>
    );
  }
  