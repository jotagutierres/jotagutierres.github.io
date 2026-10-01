/* global React, ReactDOM, SiteNav, SiteFooter, Hero, Work, About, Experience, Clients, Contact, useHeroReveal */

function App() {
  useHeroReveal();
  const locale = SiteI18n.useLocale();

  React.useEffect(() => {
    const pt = locale === "pt";
    document.title = pt ? "Carlos Gutierres — Designer de Produto" : "Carlos Gutierres — Product Designer";
    document.querySelector('meta[name="description"]')?.setAttribute("content", pt
      ? "Carlos Gutierres é designer de produto em São Paulo e atualmente designer sênior de produto na VML Brasil."
      : "Carlos Gutierres is a product designer in São Paulo, currently Senior Product Designer at VML Brazil.");
  }, [locale]);

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
