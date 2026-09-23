/* global React, SiteNav, SiteFooter, ArrowUpRight, ArrowLeft, useHeroReveal */
// Shared case study layout for the project pages in /work

/* paragraphs and list items are authored as small HTML strings in each page */
const Html = ({ as: Tag = "p", html }) => <Tag dangerouslySetInnerHTML={{ __html: html }} />;

function CaseHero({ meta, title, lead, leadMuted }) {
  return (
    <section className="cs-hero">
      <a href="../index.html#work" className="cs-back"><ArrowLeft /> All work</a>

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
  return (
    <div className="cs-next">
      <a href={next.href}>
        <span className="label">Next project</span>
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
  return (
    <CaseShell>
      <CaseHero
        meta={[["Client", data.client], ["Role", data.role], ["Year", data.year], ["Scope", data.scope]]}
        title={data.title}
        lead={data.lead}
      />

      <div className="cs-cover">
        <div className="cs-cover__inner enter -clip">
          <img src={data.cover} alt={data.coverAlt} />
        </div>
      </div>

      <div className="cs-divider"><h2>Context</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Background</span>
          <div>{data.context.map((p, i) => <Html key={i} html={p} />)}</div>
        </div>
        <div className="cs__block">
          <span className="label">Challenge</span>
          <div>{data.challenge.map((p, i) => <Html key={i} html={p} />)}</div>
        </div>
      </section>

      <div className="cs-divider"><h2>Process</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Approach</span>
          <div>
            <h3>{data.approachTitle}</h3>
            {data.approach.map((p, i) => <Html key={i} html={p} />)}
          </div>
        </div>
        <div className="cs__block">
          <span className="label">Key decisions</span>
          <ul>{data.decisions.map((d, i) => <Html key={i} as="li" html={d} />)}</ul>
        </div>
      </section>

      <div className="cs-divider"><h2>Outcome</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Impact</span>
          <div>
            {data.outcome.map((p, i) => <Html key={i} html={p} />)}
            <dl className="cs-figures">
              {data.metrics.map((m) => (
                <div key={m.l}>
                  <dt>{m.l}</dt>
                  <dd>{m.n}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="cs__block">
          <span className="label">Reflection</span>
          <div>{data.reflection.map((p, i) => <Html key={i} html={p} />)}</div>
        </div>
      </section>

      <CaseNext next={data.next} />
    </CaseShell>
  );
}

Object.assign(window, { CaseStudyPage, CaseShell, CaseHero, CaseNext });
