import { React, useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";

function Header() {
    const [title, setTitle] = useState("Coffee Maker");

    return (
        <header>
            <div id="header-center-div">
                <CiCoffeeCup id="coffee-header-icon" />
                <h1 id="title-header">{title}</h1>
            </div>
        </header>
    );
}

export default Header;
