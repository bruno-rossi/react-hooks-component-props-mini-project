
// └── App
//     ├── Header
//     ├── About
//     ├── ArticleList
//     |   └── Article
//     └── Bonus: Minutes to read

import React from "react";
import Header from "./Header";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  )
}

export default App;

