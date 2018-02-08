import React, { Component } from "react";
import Navbar from "./Navbar";
import "../assetts/styles.css";

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <section className="leading">
          <p className="leading-bigtext">Hero Img Here</p>
        </section>
        <section className="cards">
          <article>
            <img
              className="article-img"
              src="https://source.unsplash.com/random/401x401"
              alt=" "
            />
            <h1 className="article-title">Title of article</h1>
          </article>
          <article>
            <img
              className="article-img"
              src="https://source.unsplash.com/random/402x402"
              alt=" "
            />
            <h1 className="article-title">Title of article</h1>
          </article>
          <article>
            <img
              className="article-img"
              src="https://source.unsplash.com/random/403x403"
              alt=" "
            />
            <h1 className="article-title">Title of article</h1>
          </article>
          <article>
            <img
              className="article-img"
              src="https://source.unsplash.com/random/404x404"
              alt=" "
            />
            <h1 className="article-title">Title of article</h1>
          </article>
          <article>
            <img
              className="article-img"
              src="https://source.unsplash.com/random/405x405"
              alt=" "
            />
            <h1 className="article-title">Title of article</h1>
          </article>
          <article>
            <img
              className="article-img"
              src="https://source.unsplash.com/random/406x406"
              alt=" "
            />
            <h1 className="article-title">Title of article</h1>
          </article>
        </section>
      </div>
    );
  }
}

export default Home;
