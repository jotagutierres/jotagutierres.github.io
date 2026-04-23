/* global React, ReactDOM, Nav, Hero, Work, About, Experience, Trusted, Contact, Footer, useCursor, useReveal */

function App() {
  useCursor();
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Trusted />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
