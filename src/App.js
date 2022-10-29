import React from "react";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Engineers Quotes</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
