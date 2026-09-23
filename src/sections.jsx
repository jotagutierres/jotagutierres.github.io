/* global React, PROJECTS, EXPERIENCE, EDUCATION, CLIENTS, ArrowUpRight */

const LINKEDIN = "https://www.linkedin.com/in/carlosgutierres-productdesign-ux/";
const EMAIL = "gutierres7j@outlook.com";

/* ============== HERO ============== */
function Hero() {
  return (
    <header className="hero">
      <h1 className="hero__title">
        <span className="mask-line"><span>Product</span></span>
        <span className="mask-line -indent"><span>
          <span className="hero__face"><img src="images/carlos.jpg" alt="" width="520" height="520" /></span>
          <span className="serif">designer</span>
        </span></span>
        <span className="mask-line"><span>building <span className="serif">calm,</span></span></span>
        <span className="mask-line -indent-sm"><span>useful <span className="accent">interfaces.</span></span></span>
      </h1>

      <div className="hero__lead enter">
        <div className="hero__intro">
          <p className="intro">
            I'm <strong>Carlos Gutierres</strong>, a product designer in São Paulo. For 6+ years I've
            shaped digital products for Ford, Coral and the Silvio Santos Group.{" "}
            <span className="muted">Currently Senior Product Designer at VML Brazil.</span>
          </p>
          <div className="ctas">
            <a href="#work" className="btn -primary">View selected work</a>
            <a href={LINKEDIN} target="_blank" rel="noopener" className="btn">
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </div>

        <a href={PROJECTS[0].href} className="hero__latest">
          <span className="k">Latest case study</span>
          <span className="t">{PROJECTS[0].name} <ArrowUpRight size={18} /></span>
          <span className="m">
            Full modem activation <span className="fig">11.3% → <span className="to">16.5%</span></span>
          </span>
        </a>
      </div>
    </header>
  );
}

/* ============== WORK ============== */
function Work() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section__head">
        <h2 id="work-title" className="section__title">Selected work</h2>
      </div>

      <div className="work">
        {PROJECTS.map((p) => (
          <a
            key={p.id}
            href={p.href}
            className="work__row"
          >
            <span className="thumb" aria-hidden="true">
              <img src={p.image} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="name">{p.name}</span>
            <span className="desc">{p.desc}</span>
            <span className="meta">
              <span>{p.tags.join(" · ")}</span>
              <span className="year">{p.year}</span>
              <ArrowUpRight size={16} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ============== ABOUT ============== */
function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section__head">
        <h2 id="about-title" className="section__title">A designer since 2007</h2>
      </div>

      <div className="about">
        <div className="about__portrait">
          <img
            src="images/carlos.jpg"
            alt="Portrait of Carlos Gutierres"
            width="520" height="520"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="about__copy">
          <p>
            It started in 2006 or 2007, when I was nine or ten. I needed a forum signature for a
            Pokémon championship, so I opened Photoshop for the first time.
          </p>
          <p>
            <span className="muted">I've been designing ever since.</span> Twenty years on, the part
            I enjoy most hasn't changed: taking a vague idea and turning it into something people can use.
          </p>
          <p>
            Today I work in <strong>product design</strong>: interfaces, flows and the systems behind
            them, for products where the complicated parts need to feel obvious.
          </p>

          <dl className="about__facts">
            <div><dt>years in product</dt><dd>6+</dd></div>
            <div><dt>shipped projects</dt><dd>40+</dd></div>
            <div><dt>languages spoken</dt><dd>4</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ============== EXPERIENCE ============== */
function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section__head">
        <h2 id="experience-title" className="section__title">Where I've worked</h2>
      </div>

      <ul className="exp">
        {EXPERIENCE.map((x) => (
          <li key={x.company + x.period} className="exp__row">
            <span className="exp__company">{x.company}</span>
            <span className="exp__role">{x.role}</span>
            <span className="exp__period">{x.period.endsWith("Present") ? <>{x.period.replace("Present", "")}<span className="now">Present</span></> : x.period}</span>
          </li>
        ))}
      </ul>

      <div className="section__head section__sub">
        <h2 className="section__title">Education</h2>
      </div>

      <ul className="edu">
        {EDUCATION.map((e) => (
          <li key={e.school + e.degree} className="edu__row">
            <span className="edu__school">{e.school}</span>
            <span className="edu__degree"><strong>{e.degree}</strong>{e.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ============== CLIENTS ============== */
function Clients() {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <h2 id="clients-title" className="clients__title">Brands I've designed for</h2>
      <ul className="clients__list">
        {CLIENTS.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}

/* ============== CONTACT ============== */
function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        Have an idea?<br/>
        <span className="serif">Let's build it.</span>
      </h2>

      <a href={`mailto:${EMAIL}`} className="contact__mail">
        {EMAIL} <ArrowUpRight size={18} />
      </a>

      <dl className="contact__grid">
        <div>
          <dt>Based in</dt>
          <dd>São Paulo, Brazil</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd className="-status">Open to select projects</dd>
        </div>
        <div>
          <dt>Social</dt>
          <dd><a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn <ArrowUpRight size={12} /></a></dd>
        </div>
        <div>
          <dt>Languages</dt>
          <dd>PT · EN · ES · FR</dd>
        </div>
      </dl>
    </section>
  );
}

Object.assign(window, { Hero, Work, About, Experience, Clients, Contact });
