/* global React, ReactDOM, SiteNav, SiteFooter, Hero, Work, About, Experience, Clients, Contact, useHeroReveal */

function App() {
  useHeroReveal();

  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Experience />
        <Clients />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
