import { React, useState } from "react";

import People from "./People";
import { CoffeeButton } from "./CoffeeButton";

let setNameLet;
let setImageLet;

function Selector() {
    const [title, setTitle] = useState("Selector");

    const [name, setName] = useState("people");
    const [imageLink, setImage] = useState(
        "https://www.w3schools.com/html/img_girl.jpg"
    );

    setNameLet = setName;
    setImageLet = setImage;

    return (
        <div id="selector">
            <h2 id="title-selector">{title}</h2>
            <People name={name} imgLink={imageLink} />
            <CoffeeButton />
        </div>
    );
}

export { Selector, setNameLet, setImageLet };
