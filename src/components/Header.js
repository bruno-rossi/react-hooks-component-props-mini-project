// Header component should return a <header> element with <h1> nested inside with the name of the blog as prop "name"

import React from "react";

function Header({ name }) {
    return (<header>
        <h1>{name}</h1>
    </header>
    )
}

export default Header;