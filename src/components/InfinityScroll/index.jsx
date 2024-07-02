"use client"
import "./infinity.css";
import { Logic } from "./logic";

export default function InfinityScroll(){

  let { items } =   Logic();

    return (

        <div>
            <div>
                {  items }
            </div>
            <div id="infinity-scroll"></div>
        </div>
    )
}