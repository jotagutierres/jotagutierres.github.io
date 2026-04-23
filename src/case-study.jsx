/* global React, ReactDOM */
// Shared case study layout for all 4 project pages

const { useEffect, useRef, useState, useCallback } = React;

/* custom cursor + reveal (same as main) */
function useCSCursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;
    const dot = cursor.querySelector(".cursor__dot");
    const ring = cursor.querySelector(".cursor__ring");
    if (!dot || !ring) return;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let dx = tx, dy = ty, rx = tx, ry = ty;
    let raf = 0;
    const loop = () => {
      dx += (tx - dx) * 0.6; dy += (ty - dy) * 0.6;
      rx += (tx - rx) * 0.15; ry += (ty - ry) * 0.15;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onMove = (e) => { tx = e.clientX; ty = e.clientY; };
    const onOver = (e) => {
      const t = e.target; if (!(t instanceof Element)) return;
      const hoverEl = t.closest("a, button, [data-cursor='hover']");
      cursor.classList.toggle("-hover", !!hoverEl);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);
}

function useCSReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CSMagnetic({ children, strength = 0.25, className = "", as = "a", href, ...rest }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }, [strength]);
  const onLeave = useCallback(() => {
    const el = ref.current; if (el) el.style.transform = "translate(0,0)";
  }, []);
  const Comp = as;
  return (
    <Comp ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} className={className}
          style={{ transition: "transform .3s cubic-bezier(.2,.8,.2,1)", display: "inline-flex" }} {...rest}>
      {children}
    </Comp>
  );
}

const CSArrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* --- NAV (simpler, always shows 'Back to work') --- */
function CSNav() {
  return (
    <nav className="nav">
      <a href="../index.html" className="nav__brand">
        <span className="dot" />
        <span>CARLOS GUTIERRES ⌁ PRODUCT DESIGNER</span>
      </a>
      <div className="nav__links">
        <a href="../index.html#work">Work</a>
        <a href="../index.html#about">About</a>
        <a href="../index.html#experience">Experience</a>
        <a href="../index.html#contact">Contact</a>
      </div>
      <div className="nav__right">
        <CSMagnetic as="a" href="../index.html" className="btn" strength={0.2}>
          ← All work
        </CSMagnetic>
      </div>
    </nav>
  );
}

/* --- Footer --- */
function CSFooter() {
  return (
    <footer className="footer">
      <span>© 2026 · Carlos Gutierres</span>
      <span>Product Designer · São Paulo</span>
      <a href="#top">↑ Back to top</a>
    </footer>
  );
}

/* --- Case study page template ---
   Pass a `data` object with all the content. Clean, one place to edit.
*/
function CaseStudyPage({ data }) {
  useCSCursor();
  useCSReveal();
  return (
    <>
      <CSNav />
      <main id="top">
        {/* Hero */}
        <section className="cs-hero">
          <a href="../index.html#work" className="cs-back">← Back to work</a>

          <div className="cs-hero__meta">
            <div className="block">
              <span className="l">Client</span>
              <span className="v">{data.client}</span>
            </div>
            <div className="block">
              <span className="l">Role</span>
              <span className="v">{data.role}</span>
            </div>
            <div className="block">
              <span className="l">Year</span>
              <span className="v">{data.year}</span>
            </div>
            <div className="block">
              <span className="l">Scope</span>
              <span className="v">{data.scope}</span>
            </div>
          </div>

          <h1 className="cs-hero__title">
            {data.title}
          </h1>
          <p className="cs-hero__lead">{data.lead}</p>
        </section>

        {/* Cover */}
        <div className="cs-cover">
          <div className="cs-cover__inner">
            <img src={data.cover} alt={data.client} />
          </div>
        </div>

        {/* Overview */}
        <div className="cs-divider">
          <span className="num">01 / Overview</span>
          <h2>The <span className="serif">context.</span></h2>
        </div>
        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Context</span>
            <div>
              {data.context.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}} />)}
            </div>
          </div>

          <div className="cs__block reveal">
            <span className="label">Challenge</span>
            <div>
              <h3>The <span className="serif">challenge.</span></h3>
              {data.challenge.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}} />)}
            </div>
          </div>
        </section>

        {/* Gallery 1 */}
        {data.gallery1 && (
          <div className={`cs-gallery -${data.gallery1.length === 2 ? "two" : "three"}`}>
            {data.gallery1.map((g, i) => (
              <div key={i} className="cs-frame reveal">
                <span className="label">{g}</span>
              </div>
            ))}
          </div>
        )}

        {/* Process */}
        <div className="cs-divider">
          <span className="num">02 / Process</span>
          <h2>How it <span className="serif">came together.</span></h2>
        </div>
        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Approach</span>
            <div>
              <h3>{data.approachTitle}</h3>
              {data.approach.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}} />)}
            </div>
          </div>

          <div className="cs__block reveal">
            <span className="label">Key moves</span>
            <div>
              <h3>Decisions that <span className="serif">mattered.</span></h3>
              <ul>
                {data.decisions.map((d, i) => <li key={i} dangerouslySetInnerHTML={{__html: d}} />)}
              </ul>
            </div>
          </div>
        </section>

        {/* Gallery 2 — wide screenshot */}
        {data.wideLabel && (
          <div className="cs-gallery">
            <div className="cs-frame -wide reveal">
              <span className="label">{data.wideLabel}</span>
            </div>
          </div>
        )}

        {/* Outcome */}
        <div className="cs-divider">
          <span className="num">03 / Outcome</span>
          <h2>The <span className="serif">result.</span></h2>
        </div>
        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Impact</span>
            <div>
              {data.outcome.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}} />)}
              <div className="cs-metrics">
                {data.metrics.map((m, i) => (
                  <div key={i} className="cs-metric">
                    <span className="n" dangerouslySetInnerHTML={{__html: m.n}} />
                    <span className="l">{m.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="cs__block reveal">
            <span className="label">Reflection</span>
            <div>
              <h3>What I <span className="serif">learned.</span></h3>
              {data.reflection.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}} />)}
            </div>
          </div>
        </section>

        {/* Next project */}
        <div className="cs-next">
          <a href={data.next.href}>
            <span className="label">● Next project / {data.next.idx}</span>
            <span className="t">
              {data.next.name} <CSArrow size={48} />
            </span>
          </a>
        </div>
      </main>
      <CSFooter />
    </>
  );
}

window.CaseStudyPage = CaseStudyPage;
