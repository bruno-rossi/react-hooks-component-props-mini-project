import React from "react";
import Article from "./Article";

// ArticleList component should return <main> with an array of Article components (one component for each of the posts passed down as props to ArticleList). Make sure to assign a unique key attribute to each Article

function ArticleList({posts}) {
    
    console.log(posts);

    const articles = posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>
    })

    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList;