import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "../../home/src/Header";
import Footer from "../../home/src/Footer";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div>Name: pdp</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <Footer/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
