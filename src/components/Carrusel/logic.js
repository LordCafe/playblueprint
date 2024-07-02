import { useEffect, useState, useRef } from "react";

// https://picsum.photos/
let GetImages = async function () {
    return fetch("https://picsum.photos/v2/list?limit=5&page=3").then((respond) => {
        return respond.json();
    }).then((data) => {
        return data;
    })

}


function Controls() {
    let [index, setIndex] = useState(0);
    let [Images, setImages] = useState([]);
    
    useEffect(() => {
        GetImages().then((data) => {
            setImages(data);
        })

    }, []);

    const Max = Images.length - 1 || 0;
    let nextIndex = (Max == index) ? 0 : index + 1;
    let beforeIndex = (index == 0) ? Max : index - 1;
    let stack = Images;

    return {
        index: index,
        CurrentImg: stack[index],
        nextImg: stack[nextIndex],
        beforeImg: stack[beforeIndex],
        nextImage: () => {

            setIndex(nextIndex);

        },

        PreviusImage: () => {

            setIndex(beforeIndex);

        }


    }
}


export { Controls }