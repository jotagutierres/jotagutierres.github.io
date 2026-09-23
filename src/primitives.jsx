/* global React */
const { useEffect, useState } = React;

/* ============ hero headline reveal ============ */
function useHeroReveal() {
  useEffect(() => {
    const lines = document.querySelectorAll(".mask-line");
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
  { id: "contact", label: "Contact" },
];

/* ============ nav (home tracks the active section; case pages link home) ============ */
function SiteNav({ base = "" }) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (base) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    NAV_ITEMS.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [base]);

  return (
    <nav className="nav" aria-label="Main">
      <a href={base ? `${base}index.html` : "#top"} className="nav__brand">Carlos Gutierres</a>
      <div className="nav__links">
        {NAV_ITEMS.map(({ id, label, optional }) => (
          <a
            key={id}
            href={`${base ? `${base}index.html` : ""}#${id}`}
            className={[active === id ? "-active" : "", optional ? "-optional" : ""].join(" ").trim() || undefined}
            aria-current={active === id ? "true" : undefined}
          >
            {label}
          </a>
        ))}
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
