import React from "react";


// About component should return an <aside> element with following nested:
// - <img src={image} alt="blog logo"> with src = image, and placeholder = "https://via.placeholder.com/215"
// - <p>{about}</p> element

function About({image = "https://via.placeholder.com/215", about}) {
    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About;