/* global React, SiteNav, SiteFooter, ArrowUpRight, ArrowLeft, useHeroReveal */
// Shared case study layout for the project pages in /work

/* paragraphs and list items are authored as small HTML strings in each page */
const Html = ({ as: Tag = "p", html }) => <Tag dangerouslySetInnerHTML={{ __html: html }} />;
const originalPageTitle = document.title;

function CaseHero({ meta, title, lead, leadMuted }) {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <section className="cs-hero">
      <a href={SiteI18n.link("../index.html#work")} className="cs-back"><ArrowLeft /> {pt ? "Todos os projetos" : "All work"}</a>

      <dl className="cs-hero__meta">
        {meta.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <h1 className="cs-hero__title"><span className="mask-line"><span>{title}</span></span></h1>
      <p className="cs-hero__lead enter">{lead}</p>
      {leadMuted && <p className="cs-hero__lead -muted enter">{leadMuted}</p>}
    </section>
  );
}

function CaseNext({ next }) {
  const pt = SiteI18n.useLocale() === "pt";
  return (
    <div className="cs-next">
      <a href={SiteI18n.link(next.href)}>
        <span className="label">{pt ? "Próximo projeto" : "Next project"}</span>
        <span className="t">{next.name} <ArrowUpRight size={48} /></span>
      </a>
    </div>
  );
}

function CaseShell({ children }) {
  useHeroReveal();
  return (
    <>
      <SiteNav base="../" />
      <div className="progress" aria-hidden="true" />
      <main id="top">{children}</main>
      <SiteFooter />
    </>
  );
}

/* --- Case study page template ---
   Pass a `data` object with all the content. One place to edit.
*/
function CaseStudyPage({ data }) {
  const pt = SiteI18n.useLocale() === "pt";
  const slug = window.location.pathname.split("/").pop().replace(/\.html$/, "");
  const content = pt && window.CASE_PT && window.CASE_PT[slug] ? { ...data, ...window.CASE_PT[slug] } : data;
  React.useEffect(() => {
    document.title = pt && content.pageTitle ? content.pageTitle : originalPageTitle;
  }, [pt, content.pageTitle]);
  return (
    <CaseShell>
      <CaseHero
        meta={[[pt ? "Cliente" : "Client", content.client], [pt ? "Função" : "Role", content.role], [pt ? "Ano" : "Year", content.year], [pt ? "Escopo" : "Scope", content.scope]]}
        title={content.title}
        lead={content.lead}
      />

      <div className="cs-cover">
        <div className="cs-cover__inner enter -clip">
          <img src={content.cover} alt={content.coverAlt} />
        </div>
      </div>

      <div className="cs-divider"><h2>{pt ? "Contexto" : "Context"}</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">{pt ? "Cenário" : "Background"}</span>
          <div>{content.context.map((p, i) => <Html key={i} html={p} />)}</div>
        </div>
        <div className="cs__block">
          <span className="label">{pt ? "Desafio" : "Challenge"}</span>
          <div>{content.challenge.map((p, i) => <Html key={i} html={p} />)}</div>
        </div>
      </section>

      <div className="cs-divider"><h2>{pt ? "Processo" : "Process"}</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">{pt ? "Abordagem" : "Approach"}</span>
          <div>
            <h3>{content.approachTitle}</h3>
            {content.approach.map((p, i) => <Html key={i} html={p} />)}
          </div>
        </div>
        <div className="cs__block">
          <span className="label">{pt ? "Decisões principais" : "Key decisions"}</span>
          <ul>{content.decisions.map((d, i) => <Html key={i} as="li" html={d} />)}</ul>
        </div>
      </section>

      <div className="cs-divider"><h2>{pt ? "Resultados" : "Outcome"}</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">{pt ? "Impacto" : "Impact"}</span>
          <div>
            {content.outcome.map((p, i) => <Html key={i} html={p} />)}
            <dl className="cs-figures">
              {content.metrics.map((m) => (
                <div key={m.l}>
                  <dt>{m.l}</dt>
                  <dd>{m.n}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="cs__block">
          <span className="label">{pt ? "Reflexão" : "Reflection"}</span>
          <div>{content.reflection.map((p, i) => <Html key={i} html={p} />)}</div>
        </div>
      </section>

      <CaseNext next={content.next} />
    </CaseShell>
  );
}

Object.assign(window, { CaseStudyPage, CaseShell, CaseHero, CaseNext });
