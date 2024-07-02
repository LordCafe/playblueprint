"use client";


import {useEffect, useState} from "react";
import {Controls} from "./logic";
import "./carrusel.css";



let ImgCarrusel = ({OneImage = {} , turn }) => {
  let { download_url = "/next" , author = "no name" } = OneImage;
  let extension = ".svg";
  if( download_url != "/next"){
    extension = ".jpg";
  }

  return (
    <div className={"card-image flex " + turn }>
      <figure>
        <div>
        <span> { author} </span>
         
        </div>
        <img src={ download_url + extension } />
      </figure>
    </div>
  );
};

export default function Carrusel() {  
  let {PreviusImage, nextImage, CurrentImg } =  Controls();  
  return (
    <div>
      <div className={"images"}>
        <div id={"principalImage"} className={"successfully-saved "}>
        <ImgCarrusel OneImage={CurrentImg}></ImgCarrusel>
        </div>      
      </div>

      <div className={"buttons"}>
        <button onClick={PreviusImage}> anterior</button>
        <button onClick={nextImage}>seguiente</button>
      </div>
    </div>
  );
}
