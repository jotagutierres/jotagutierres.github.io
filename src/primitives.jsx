/* global React */
const { useEffect, useState } = React;

/* ============ page entrance: headline lines rise out of their masks, then the rest follows ============ */
function useHeroReveal() {
  useEffect(() => {
    const lines = document.querySelectorAll(".mask-line, .enter");
    // two frames so the hidden state paints before the transition starts
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => lines.forEach((el) => el.classList.add("-in")))
    );
    return () => cancelAnimationFrame(id);
  }, []);
}

/* ============ icons ============ */
const ArrowUpRight = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowLeft = ({ size = 14 }) => (
  <svg className="arrow-left" width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M12 7H2M2 7L6.5 2.5M2 7L6.5 11.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function LanguageSwitch() {
  const locale = SiteI18n.useLocale();
  return (
    <div className="lang-switch" role="group" aria-label={locale === "pt" ? "Idioma" : "Language"}>
      {["en", "pt"].map((value) => (
        <button key={value} type="button" lang={value === "pt" ? "pt-BR" : "en"}
          aria-label={value === "pt" ? "Português" : "English"}
          aria-pressed={locale === value}
          onClick={() => SiteI18n.setLocale(value)}>{value.toUpperCase()}</button>
      ))}
    </div>
  );
}

/* nav steps aside while reading down, returns on any scroll up */
function useNavScroll() {
  const [state, setState] = useState({ scrolled: false, hidden: false });
  useEffect(() => {
    let last = window.scrollY, raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const delta = y - last;
      if (Math.abs(delta) < 6) return;
      const next = { scrolled: y > 8, hidden: delta > 0 && y > 160 };
      setState((s) => (s.scrolled === next.scrolled && s.hidden === next.hidden ? s : next));
      last = y;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    // keyboard users reaching the nav should always see it
    const onFocus = (e) => { if (e.target.closest && e.target.closest(".nav")) setState((s) => ({ ...s, hidden: false })); };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("focusin", onFocus);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("focusin", onFocus);
      cancelAnimationFrame(raf);
    };
  }, []);
  return state;
}

/* ============ nav (home tracks the active section; case pages link home) ============ */
function SiteNav({ base = "" }) {
  const locale = SiteI18n.useLocale();
  const [active, setActive] = useState("");
  const { scrolled, hidden } = useNavScroll();
  const home = base ? `${base}index.html` : "";
  const navItems = [
    { id: "work", label: locale === "pt" ? "Projetos" : "Work" },
    { id: "about", label: locale === "pt" ? "Sobre" : "About" },
    { id: "experience", label: locale === "pt" ? "Experiência" : "Experience", optional: true },
  ];

  useEffect(() => {
    if (base) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ["work", "about", "experience", "contact"].forEach((id) => {
      const el = document.getElementById(id); if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [base]);

  return (
    <nav className={`nav${scrolled ? " -scrolled" : ""}${hidden ? " -hidden" : ""}`} aria-label={locale === "pt" ? "Navegação principal" : "Main"}>
      <a href={base ? SiteI18n.link(home) : "#top"} className="nav__brand">
        Carlos Gutierres<span className="nav__role">{locale === "pt" ? "Designer de produto" : "Product designer"}</span>
      </a>
      <div className="nav__links">
        {navItems.map(({ id, label, optional }) => (
          <a
            key={id}
            href={base ? SiteI18n.link(`${home}#${id}`) : `#${id}`}
            className={[active === id ? "-active" : "", optional ? "-optional" : "", id === "about" ? "-hide-narrow" : "", id === "work" ? "-hide-compact" : ""].join(" ").trim() || undefined}
            aria-current={active === id ? "true" : undefined}
          >
            {label}
          </a>
        ))}
        <LanguageSwitch />
        <a href={base ? SiteI18n.link(`${home}#contact`) : "#contact"} className="nav__cta">{locale === "pt" ? "Contato" : "Contact"}</a>
      </div>
    </nav>
  );
}

function SiteFooter() {
  const locale = SiteI18n.useLocale();
  return (
    <footer className="footer">
      <span>© 2026 Carlos Gutierres</span>
      <span>{locale === "pt" ? "Designer de produto em São Paulo" : "Product designer in São Paulo"}</span>
      <a href="#top">{locale === "pt" ? "Voltar ao topo" : "Back to top"}</a>
    </footer>
  );
}

Object.assign(window, { useHeroReveal, ArrowUpRight, ArrowLeft, SiteNav, SiteFooter, LanguageSwitch });
