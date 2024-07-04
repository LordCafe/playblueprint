"use client";
import {useState, useEffect, useRef} from "react";
import Board from "./Board";
import {Logic , MemoramaLogic } from "./logic";
import "./memorama.css";
import { Swanky_and_Moo_Moo } from "next/font/google";




export default function Memorama() {
  let [played, setPlayed] = useState([]);
  let Memory = useRef([]);
  let AllCards = useRef([]);
  let {Cards , Reset , ShowAll , HideAll } = Logic( setPlayed, Memory , AllCards );  

  useEffect(() => {
    Memory.current = played;
    if (played.length >= 2) {
      MemoramaLogic(played, setPlayed );
    }
  }, [played]);

  return (<div >

<Board 
  reset={ Reset } 
  show={ ShowAll }
  hide={ HideAll }  

>{Cards}</Board>
  </div>) 
}
