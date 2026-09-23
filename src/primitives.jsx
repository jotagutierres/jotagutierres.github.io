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

const NAV_ITEMS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience", optional: true },
];

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
  const [active, setActive] = useState("");
  const { scrolled, hidden } = useNavScroll();
  const home = base ? `${base}index.html` : "";

  useEffect(() => {
    if (base) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    [...NAV_ITEMS.map((n) => n.id), "contact"].forEach((id) => {
      const el = document.getElementById(id); if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [base]);

  return (
    <nav className={`nav${scrolled ? " -scrolled" : ""}${hidden ? " -hidden" : ""}`} aria-label="Main">
      <a href={home || "#top"} className="nav__brand">
        Carlos Gutierres<span className="nav__role">Product designer</span>
      </a>
      <div className="nav__links">
        {NAV_ITEMS.map(({ id, label, optional }) => (
          <a
            key={id}
            href={`${home}#${id}`}
            className={[active === id ? "-active" : "", optional ? "-optional" : ""].join(" ").trim() || undefined}
            aria-current={active === id ? "true" : undefined}
          >
            {label}
          </a>
        ))}
        <a href={`${home}#contact`} className="nav__cta">Contact</a>
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer className="footer">
      <span>© 2026 Carlos Gutierres</span>
      <span>Product designer in São Paulo</span>
      <a href="#top">Back to top</a>
    </footer>
  );
}

Object.assign(window, { useHeroReveal, ArrowUpRight, ArrowLeft, SiteNav, SiteFooter });
