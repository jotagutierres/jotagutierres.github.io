/* global React, PROJECTS, EXPERIENCE, EDUCATION, CLIENTS, ArrowUpRight */

const LINKEDIN = "https://www.linkedin.com/in/carlosgutierres-productdesign-ux/";
const EMAIL = "gutierres7j@outlook.com";

/* ============== HERO ============== */
function Hero() {
  const pt = SiteI18n.useLocale() === "pt";
  const latest = PROJECTS[0];
  return (
    <header className="hero">
      <h1 className="hero__title">
        {pt ? <>
        <span className="mask-line"><span>Design de</span></span>
        <span className="mask-line -indent"><span><span className="hero__face"><img src="images/carlos.jpg" alt="" width="520" height="520" /></span><span className="serif">produto.</span></span></span>
        <span className="mask-line"><span>Interfaces</span></span>
        <span className="mask-line -indent-sm"><span><span className="serif">calmas</span> e <span className="accent">úteis.</span></span></span>
        </> : <>
        <span className="mask-line"><span>Product</span></span>
        <span className="mask-line -indent"><span>
          <span className="hero__face"><img src="images/carlos.jpg" alt="" width="520" height="520" /></span>
          <span className="serif">designer</span>
        </span></span>
        <span className="mask-line"><span>building <span className="serif">calm,</span></span></span>
        <span className="mask-line -indent-sm"><span>useful <span className="accent">interfaces.</span></span></span>
        </>}
      </h1>

      <div className="hero__lead enter">
        <div className="hero__intro">
          <p className="intro">{pt ? <>
            Sou <strong>Carlos Gutierres</strong>, designer de produto em São Paulo. Há mais de 6 anos crio
            produtos digitais para Ford, Coral e Grupo Silvio Santos.{" "}
            <span className="muted">Atualmente, sou designer sênior de produto na VML Brasil.</span>
          </> : <>
            I'm <strong>Carlos Gutierres</strong>, a product designer in São Paulo. For 6+ years I've
            shaped digital products for Ford, Coral and the Silvio Santos Group.{" "}
            <span className="muted">Currently Senior Product Designer at VML Brazil.</span>
          </>}</p>
          <div className="ctas">
            <a href="#work" className="btn -primary">{pt ? "Ver projetos selecionados" : "View selected work"}</a>
            <a href={LINKEDIN} target="_blank" rel="noopener" className="btn">
              LinkedIn <ArrowUpRight />
            </a>
          </div>
        </div>

        <a href={SiteI18n.link(latest.href)} className="hero__latest">
          <span className="k">{pt ? "Estudo de caso mais recente" : "Latest case study"}</span>
          <span className="t">{latest.name} <ArrowUpRight size={18} /></span>
          <span className="m">
            {pt ? "Ativação completa do modem" : "Full modem activation"} <span className="fig">{pt ? "11,3%" : "11.3%"} → <span className="to">{pt ? "16,5%" : "16.5%"}</span></span>
          </span>
        </a>
      </div>
    </header>
  );
}

/* ============== WORK ============== */
function Work() {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section__head">
        <h2 id="work-title" className="section__title">{pt ? "Projetos selecionados" : "Selected work"}</h2>
      </div>

      <div className="work">
        {PROJECTS.map((project) => { const p = pt ? { ...project, ...project.pt } : project; return (
          <a
            key={p.id}
            href={SiteI18n.link(p.href)}
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
        ); })}
      </div>
    </section>
  );
}

/* ============== ABOUT ============== */
function About() {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section__head">
        <h2 id="about-title" className="section__title">{pt ? "Designer desde 2007" : "A designer since 2007"}</h2>
      </div>

      <div className="about">
        <div className="about__portrait">
          <img
            src="images/carlos.jpg"
            alt={pt ? "Retrato de Carlos Gutierres" : "Portrait of Carlos Gutierres"}
            width="520" height="520"
            loading="lazy"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="about__copy">
          {pt ? <>
          <p>Começou em 2006 ou 2007, quando eu tinha nove ou dez anos. Precisava de uma assinatura para um fórum de campeonato de Pokémon, então abri o Photoshop pela primeira vez.</p>
          <p><span className="muted">Desde então, nunca parei de criar.</span> Vinte anos depois, o que mais gosto continua igual: transformar uma ideia vaga em algo que as pessoas possam usar.</p>
          <p>Hoje trabalho com <strong>design de produto</strong>: interfaces, fluxos e os sistemas por trás deles, em produtos nos quais o complexo precisa parecer simples.</p>
          </> : <>
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
          </>}

          <dl className="about__facts">
            <div><dt>{pt ? "anos em produto" : "years in product"}</dt><dd>6+</dd></div>
            <div><dt>{pt ? "projetos lançados" : "shipped projects"}</dt><dd>40+</dd></div>
            <div><dt>{pt ? "idiomas falados" : "languages spoken"}</dt><dd>4</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ============== EXPERIENCE ============== */
function Experience() {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section__head">
        <h2 id="experience-title" className="section__title">{pt ? "Onde trabalhei" : "Where I've worked"}</h2>
      </div>

      <ul className="exp">
        {EXPERIENCE.map((entry) => { const x = pt ? { ...entry, ...entry.pt } : entry; const present = pt ? "Presente" : "Present"; return (
          <li key={x.company + x.period} className="exp__row">
            <span className="exp__company">{x.company}</span>
            <span className="exp__role">{x.role}</span>
            <span className="exp__period">{x.period.endsWith(present) ? <>{x.period.replace(present, "")}<span className="now">{present}</span></> : x.period}</span>
          </li>
        ); })}
      </ul>

      <div className="section__head section__sub">
        <h2 className="section__title">{pt ? "Formação" : "Education"}</h2>
      </div>

      <ul className="edu">
        {EDUCATION.map((entry) => { const e = pt ? { ...entry, ...entry.pt } : entry; return (
          <li key={e.school + e.degree} className="edu__row">
            <span className="edu__school">{e.school}</span>
            <span className="edu__degree"><strong>{e.degree}</strong>{e.note}</span>
          </li>
        ); })}
      </ul>
    </section>
  );
}

/* ============== CLIENTS ============== */
function Clients() {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <section className="clients" aria-labelledby="clients-title">
      <h2 id="clients-title" className="clients__title">{pt ? "Marcas para as quais criei" : "Brands I've designed for"}</h2>
      <ul className="clients__list">
        {CLIENTS.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </section>
  );
}

/* ============== CONTACT ============== */
function Contact() {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact__title">
        {pt ? "Tem uma ideia?" : "Have an idea?"}<br/>
        <span className="serif">{pt ? "Vamos criar juntos." : "Let's build it."}</span>
      </h2>

      <a href={`mailto:${EMAIL}`} className="contact__mail">
        {EMAIL} <ArrowUpRight size={18} />
      </a>

      <dl className="contact__grid">
        <div>
          <dt>{pt ? "Localização" : "Based in"}</dt>
          <dd>{pt ? "São Paulo, Brasil" : "São Paulo, Brazil"}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd className="-status">{pt ? "Disponível para projetos selecionados" : "Open to select projects"}</dd>
        </div>
        <div>
          <dt>{pt ? "Rede social" : "Social"}</dt>
          <dd><a href={LINKEDIN} target="_blank" rel="noopener">LinkedIn <ArrowUpRight size={12} /></a></dd>
        </div>
        <div>
          <dt>{pt ? "Idiomas" : "Languages"}</dt>
          <dd>PT · EN · ES · FR</dd>
        </div>
      </dl>
    </section>
  );
}

Object.assign(window, { Hero, Work, About, Experience, Clients, Contact });
