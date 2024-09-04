import { random } from "node-forge";
import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import data from "./data";
import { setNameLet, setImageLet } from "./Selector";

function randomize() {
    const randomIndex = Math.round(
        Math.random() * (Object.keys(data.call()).length - 1)
    );

    const people = Object.keys(data.call())[randomIndex];
    const imageLink = data.call()[people];

    setImageLet(imageLink);
    setNameLet(people);

    return true;
}

function CoffeeButton() {
    return (
        <button
            className="coffee-button"
            onClick={() => {
                randomize();
                const people = document.getElementById("people");
                people.style = "display='block'";
            }}
        >
            <GiCoffeeCup id="coffee-icon" />
        </button>
    );
}

export { CoffeeButton, randomize };
