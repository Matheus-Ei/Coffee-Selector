import { React, useState } from "react";

function People({ name, imgLink }) {
    let style = {};
    style.display = "none";

    return (
        <div style={style} id="people">
            <img src={imgLink} id="profile-photo" />
            <h3 id="people-name">{name}</h3>
        </div>
    );
}

export default People;
