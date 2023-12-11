import React from "react";


// Article component should return <article></article> with following elements:
// <h3>{title}</h3>
// <small>{date}</small> -- default value of "January 1, 1970" should be used if no date is passed as a prop
// <p>{preview}</p>

function addEmoji(minutes) {

        
    // Get the rounded up number of minutes
    // Divide that number by 5 
    // Iterate on the result by adding another emoji 

    let emojis = [];

    if (minutes < 30) {
        for (let i = 0; i < Math.ceil(minutes / 5); i++ ) {
            emojis.push("☕️");
        }
    } else {
        console.log()
        for (let i = 0; i < Math.ceil(minutes / 10); i++) {
            emojis.push("🍱 ");
        }
    }
    return emojis;
}

function Article({title, preview, minutes, date = "January 1, 1970"}) {
    const emojis = addEmoji(minutes);

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} • {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;