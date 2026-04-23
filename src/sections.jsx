/* global React, PROJECTS, EXPERIENCE, EDUCATION, TRUSTED, NAV_LINKS, Magnetic, LiveClock, ArrowUpRight */
const { useState, useRef, useEffect } = React;

/* ============== NAV ============== */
function Nav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.replace("#", ""));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive("#" + e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <nav className="nav">
      <a href="#hero" className="nav__brand">
        <span className="dot" />
        <span>CARLOS GUTIERRES ⌁ PRODUCT DESIGNER</span>
      </a>
      <div className="nav__links">
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href} className={active === l.href ? "-active" : ""}>{l.label}</a>
        ))}
      </div>
      <div className="nav__right">
        <LiveClock />
        <Magnetic as="a" href="#contact" className="btn -primary" strength={0.25}>
          Let's talk <ArrowUpRight />
        </Magnetic>
      </div>
    </nav>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="hero__meta">
        <div className="block">
          <span className="mono">Portfolio / 2026</span>
        </div>
        <div className="block" style={{textAlign: "right"}}>
          <span className="mono">Available for select projects</span>
        </div>
      </div>

      <h1 className="hero__title">
        <span className="mask-line"><span>Product</span></span>
        <span className="mask-line"><span><span className="serif">designer</span></span></span>
        <span className="mask-line"><span>building <span className="serif">calm,</span></span></span>
        <span className="mask-line"><span>useful <span className="accent">interfaces.</span></span></span>
      </h1>

      <div className="hero__lead">
        <p className="intro reveal">
          I'm <strong>Carlos Gutierres</strong> — a São Paulo-based product designer with{" "}
          <span className="muted">6+ years</span> of experience shaping digital products for brands like Ford, Coral and the Silvio Santos Group.{" "}
          <span className="muted">Currently Senior Product Designer at VML Brazil.</span>
        </p>
        <div className="ctas reveal">
          <Magnetic as="a" href="#work" className="btn -primary" strength={0.2}>
            View selected work <ArrowUpRight />
          </Magnetic>
          <Magnetic as="a" href="https://www.linkedin.com/in/carlosgutierres-productdesign-ux/" target="_blank" rel="noopener" className="btn" strength={0.2}>
            LinkedIn <ArrowUpRight />
          </Magnetic>
        </div>
      </div>
    </header>
  );
}

/* ============== WORK ============== */
function Work() {
  const [preview, setPreview] = useState({ on: false, src: "", x: 0, y: 0 });
  const onMove = (e, src) => setPreview({ on: true, src, x: e.clientX, y: e.clientY });
  const onOut = () => setPreview(p => ({ ...p, on: false }));

  return (
    <section id="work" className="section">
      <div className="section__head">
        <span className="section__num">01 / Selected work</span>
        <h2 className="section__title">
          Selected <span className="serif">work</span>
        </h2>
        <span className="section__meta">2021 — 2025 · 05 projects</span>
      </div>

      <div className="work">
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.href}
            className={`work__row reveal ${p.featured ? "-featured" : ""}`}
            onMouseMove={(e) => onMove(e, p.image)}
            onMouseLeave={onOut}
          >
            <span className="idx">{p.idx}</span>
            <span className="name">
              {p.name}
            </span>
            <span className="desc">{p.desc}</span>
            <span className="tags">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              <span className="tag">{p.year}</span>
              <span className="go"><ArrowUpRight size={12} /></span>
            </span>
          </a>
        ))}

        <div
          className={`work__preview ${preview.on ? "-on" : ""}`}
          style={{ left: preview.x, top: preview.y }}
        >
          {preview.src && <img src={preview.src} alt="" />}
        </div>
      </div>
    </section>
  );
}

/* ============== ABOUT ============== */
function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <span className="section__num">02 / About me</span>
        <h2 className="section__title">
          A designer <span className="serif">since 2007.</span>
        </h2>
        <span className="section__meta">São Paulo, BR</span>
      </div>

      <div className="about">
        <div className="about__portrait reveal">
          <img
            src="images/carlos.jpg"
            alt="Carlos Gutierres"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="about__copy">
          <p className="reveal">
            My journey started around <span className="muted">2006/07</span>, when I was nine or ten years old. I needed a forum <span className="serif">signature</span> for a Pokémon championship — so I opened Photoshop for the first time.
          </p>
          <p className="reveal">
            <span className="muted">Since that day, I've been a designer.</span> Two decades later, I'm still chasing the same feeling: turning a vague idea into something people can actually use.
          </p>
          <p className="reveal">
            Today I focus on <strong>product design</strong> — the craft of shaping interfaces, flows and systems that make complex things feel obvious.
          </p>

          <div className="about__stats reveal">
            <div className="about__stat">
              <span className="n">06<span className="serif">+</span></span>
              <span className="l">Years in product</span>
            </div>
            <div className="about__stat">
              <span className="n">40<span className="serif">+</span></span>
              <span className="l">Shipped projects</span>
            </div>
            <div className="about__stat">
              <span className="n">04</span>
              <span className="l">Languages spoken</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== EXPERIENCE ============== */
function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__head">
        <span className="section__num">03 / Experience</span>
        <h2 className="section__title">
          Where I've <span className="serif">worked.</span>
        </h2>
        <span className="section__meta">2017 — Present</span>
      </div>

      <div className="exp">
        {EXPERIENCE.map((x) => (
          <div key={x.company + x.period} className="exp__row reveal">
            <span className="exp__company">{x.company}</span>
            <span className="exp__role">{x.role}</span>
            <span className="exp__period" style={{textAlign:"left"}}>
              {x.note && <span style={{color: "var(--accent)", marginRight: 8}}>● {x.note}</span>}
            </span>
            <span className="exp__period">{x.period}</span>
          </div>
        ))}
      </div>

      <div className="section__head" style={{marginTop: 140}}>
        <span className="section__num">04 / Education</span>
        <h2 className="section__title">
          How I <span className="serif">learned.</span>
        </h2>
        <span className="section__meta">Formal & self-taught</span>
      </div>

      <div className="edu">
        {EDUCATION.map((e) => (
          <div key={e.school + e.degree} className="edu__row reveal">
            <span className="edu__school">{e.school}</span>
            <span className="edu__degree">{e.degree}</span>
            <span className="edu__note">{e.note}</span>
            <span className="exp__period" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============== TRUSTED marquee ============== */
function Trusted() {
  const items = [...TRUSTED, ...TRUSTED];
  return (
    <section className="trusted" aria-label="Trusted by">
      <div className="wrap" style={{marginBottom: 48}}>
        <span className="eyebrow">Trusted by</span>
      </div>
      <div className="marquee">
        {items.map((t, i) => (
          <span key={i} className="marquee__item">{t}</span>
        ))}
      </div>
    </section>
  );
}

/* ============== CONTACT ============== */
function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="eyebrow contact__eyebrow">Let's work together</span>
      <h2 className="contact__title">
        Have an idea?<br/>
        <span className="serif">Let's build it.</span>
      </h2>

      <Magnetic as="a" href="mailto:gutierres7j@outlook.com" className="contact__mail" strength={0.15}>
        gutierres7j@outlook.com <ArrowUpRight size={18} />
      </Magnetic>

      <div className="contact__grid">
        <div className="block">
          <span className="l">Based in</span>
          <span className="v">São Paulo, Brazil</span>
        </div>
        <div className="block">
          <span className="l">Status</span>
          <span className="v" style={{color: "#4ade80"}}>● Open to select projects</span>
        </div>
        <div className="block">
          <span className="l">Social</span>
          <span className="v">
            <a href="https://www.linkedin.com/in/carlosgutierres-productdesign-ux/" target="_blank" rel="noopener">LinkedIn ↗</a>
          </span>
        </div>
        <div className="block">
          <span className="l">Languages</span>
          <span className="v">PT · EN · ES · FR</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© 2026 · Carlos Gutierres</span>
      <span>Product Designer · São Paulo</span>
      <a href="#hero">↑ Back to top</a>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Work, About, Experience, Trusted, Contact, Footer });
