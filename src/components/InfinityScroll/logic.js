import { useEffect, useState, useRef } from "react";



let CreateWatcher = function (setItems, Items) {

    let target = document.querySelector("#infinity-scroll");
    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
    };

    let observer = new IntersectionObserver((e) => {
        let onview = e[0].isIntersecting;

        if ( onview ) {        
            let box = Array(10);
            box.fill(Skelento());
            let data = [...Items.current, ...box];
            setItems(data);
            Items.current = data;
            console.log("add content");
        }
    }, options);


    if (target) {

        observer.observe(target);

    }

}

function Skelento() {

    return (
        <div>
            <figure>
                <img src="https://jumpg-assets.tokyo-cdn.com/secure/title/100229/title_thumbnail_portrait_list/312775.jpg?hash=T_4DNR0easALtDfkj3xiYw&expires=2145884400"></img>
            </figure>
            <p>prueba manga</p>
        </div>

    );
}



function Logic() {

    let [items, setItems] = useState([]);
    const container = useRef(items);
    useEffect(() => {
        CreateWatcher(setItems, container);
    }, []);
    return {

        items: items,
    }
}



export {
    Logic
}