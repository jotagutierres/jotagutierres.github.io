/* global React, ReactDOM, SiteNav, SiteFooter, Hero, Work, About, Experience, Clients, Contact, useHeroReveal */

function App() {
  useHeroReveal();

  React.useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const frame = requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant", block: "start" }));
    return () => cancelAnimationFrame(frame);
  }, []);

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
