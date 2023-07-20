import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={<div>loading...</div>}>
        <Header />
      </Suspense>
      <div className="my-10">PDP Page Content ddddd</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
