/* global React, ReactDOM, CaseStudyPage */
// Ford Connected Vehicle Activation — full custom case study page

const FIGMA_URL = "https://www.figma.com/proto/aHFrQUVyP1RiSescB4EiXd/ford-case?node-id=141-778&viewport=335%2C60%2C0.05&t=ZgZPuq5gECGSujMi-1&scaling=contain&content-scaling=fixed&page-id=1%3A46";

function FordCase() {
  // reuse the shared cursor + reveal from case-study.jsx by rendering the same nav/footer
  React.useEffect(() => {
    // run cursor
    const cursor = document.getElementById("cursor");
    if (cursor) {
      const dot = cursor.querySelector(".cursor__dot");
      const ring = cursor.querySelector(".cursor__ring");
      let tx = innerWidth / 2, ty = innerHeight / 2;
      let dx = tx, dy = ty, rx = tx, ry = ty, raf = 0;
      const loop = () => {
        dx += (tx - dx) * 0.6; dy += (ty - dy) * 0.6;
        rx += (tx - rx) * 0.15; ry += (ty - ry) * 0.15;
        dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      const onMove = e => { tx = e.clientX; ty = e.clientY; };
      const onOver = e => {
        const t = e.target; if (!(t instanceof Element)) return;
        cursor.classList.toggle("-hover", !!t.closest("a, button, [data-cursor='hover']"));
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseover", onOver, { passive: true });
    }

    // reveal
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
    els.forEach(el => io.observe(el));
  }, []);

  return (
    <>
      {/* NAV — reuse the site nav */}
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
          <a href="../index.html" className="btn">← All work</a>
        </div>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="cs-hero">
          <a href="../index.html#work" className="cs-back">← Back to work</a>

          <div className="cs-hero__meta">
            <div className="block">
              <span className="l">Client</span>
              <span className="v">Ford Motor Company · Brazil</span>
            </div>
            <div className="block">
              <span className="l">Role</span>
              <span className="v">Product Designer · End-to-end</span>
            </div>
            <div className="block">
              <span className="l">Year</span>
              <span className="v">2024</span>
            </div>
            <div className="block">
              <span className="l">Scope</span>
              <span className="v">Strategy · CRM · UX writing · Push</span>
            </div>
          </div>

          <h1 className="cs-hero__title">
            Driving connected<br/>vehicle <span className="serif">activation</span><br/>in Brazil.
          </h1>
          <p className="cs-hero__lead">
            How we built a communication strategy from <em>scratch</em> — two CRM journeys, a push cadence and in-app UX writing — to move users from download to full modem activation.
            <br/><br/>
            <span className="muted">Activation issues weren't caused by missing features. They were caused by missing communication.</span>
          </p>
        </section>

        {/* FIGMA link */}
        <div className="cs-figma reveal">
          <a href={FIGMA_URL} target="_blank" rel="noopener">
            <span className="i">F</span>
            <span className="m">
              <span className="l">● Live prototype</span>
              <span className="t">Walk the full <span className="serif">interactive</span> case on Figma — all screens, transitions and email flows.</span>
            </span>
            <span className="btn -primary">Open prototype ↗</span>
          </a>
        </div>

        {/* PULL 1 — opening line */}
        <section className="cs-pull reveal">
          <div className="cs-pull__inner">
            <span className="dim">A significant portion of Brazilian users</span> weren't activating <span className="serif">connected services</span> — and no structured CRM communication existed to guide them.
          </div>
          <div className="cs-pull__attr">The problem / context</div>
        </section>

        {/* ---- 01 / UNDERSTANDING THE SCENARIO ---- */}
        <div className="cs-divider">
          <span className="num">01 / Understanding</span>
          <h2>The <span className="serif">current scenario.</span></h2>
        </div>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Signals</span>
            <div>
              <h3>Why activation was <span className="serif">failing.</span></h3>
              <p>Based on internal observations, CRM performance and support patterns, a few signals stood out — all pointing at the same gap.</p>
              <ul>
                <li>Many users downloaded the app but never activated connected services.</li>
                <li>Dealerships were being used as a crutch to complete basic activation steps.</li>
                <li><strong>No dedicated CRM journey existed</strong> for connected vehicle activation.</li>
                <li>Users with lower digital familiarity showed higher drop-off.</li>
                <li>Pre-2019 vehicles support basic services only. 2019+ require modem activation — but no communication addressed the difference.</li>
              </ul>
            </div>
          </div>

          <div className="cs__block reveal">
            <span className="label">Diagnosis</span>
            <div>
              <h3>Nothing existed. So we <span className="serif">built it.</span></h3>
              <p>The absence of a structured CRM journey meant generic communications not tied to vehicle capabilities, no channel guiding users from awareness to modem activation, and connected vehicle owners not even knowing what they could unlock.</p>
              <p className="muted">The opportunity was to create a dedicated communication strategy — not adapt a broken one.</p>
            </div>
          </div>
        </section>

        {/* ---- 02 / RESEARCH ---- */}
        <div className="cs-divider">
          <span className="num">02 / Research</span>
          <h2>Listening to <span className="serif">Ford Nation.</span></h2>
        </div>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Audience</span>
            <div>
              <p>Ford Nation is Ford's most engaged brand advocates — first to receive product updates, first to be invited to exclusive events. If <em>even they</em> were struggling with activation, the problem was clearly widespread.</p>
              <p className="muted">Online survey · 142 respondents · 2 weeks · May 2024</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="cs-stats reveal">
          <div className="cs-stat">
            <span className="t">Ford App installed</span>
            <span className="n">61<span className="unit">%</span></span>
            <span className="l">Have the app installed — but 11% had uninstalled it after downloading.</span>
          </div>
          <div className="cs-stat">
            <span className="t">Never received comms</span>
            <span className="n">57<span className="unit">%</span></span>
            <span className="l">Had never received any communication from Ford about connected services.</span>
          </div>
          <div className="cs-stat">
            <span className="t">Didn't activate anything</span>
            <span className="n">38<span className="unit">%</span></span>
            <span className="l">Did not activate any available service — and another 17% didn't know they existed.</span>
          </div>
          <div className="cs-stat">
            <span className="t">Biggest difficulty</span>
            <span className="n">41<span className="unit">%</span></span>
            <span className="l">"I didn't understand which services applied to my car."</span>
          </div>
          <div className="cs-stat">
            <span className="t">Instructions clarity</span>
            <span className="n">65<span className="unit">%</span></span>
            <span className="l">Rated in-app instructions as <em>somewhat unclear</em> or <em>confusing</em>.</span>
          </div>
          <div className="cs-stat">
            <span className="t">Needed help to activate</span>
            <span className="n">56<span className="unit">%</span></span>
            <span className="l">Went to a dealership or contacted support to complete activation.</span>
          </div>
        </div>

        {/* Desk research pull */}
        <section className="cs-pull reveal">
          <div className="cs-pull__inner">
            Activation should be a <span className="serif">guided experience,</span> <span className="dim">not a checklist.</span>
          </div>
          <div className="cs-pull__attr">Desk research insight</div>
        </section>

        {/* ---- 03 / HYPOTHESIS ---- */}
        <div className="cs-divider">
          <span className="num">03 / Hypothesis</span>
          <h2>Three bets. <span className="serif">One winner.</span></h2>
        </div>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Hypotheses</span>
            <div>
              <p>Three possible directions came out of the CSD matrix. I pressure-tested each against the root problem — <em>users weren't being reached after download</em> — and only one actually addressed it.</p>
            </div>
          </div>
        </section>

        <div className="cs-pillars reveal">
          <div className="cs-pillar" style={{opacity: 0.55}}>
            <span className="n">H1 · Rejected</span>
            <h4>Clearer <span className="serif">in-app</span> guidance.</h4>
            <p>Would help users who <em>reach</em> activation — but most users weren't reaching it at all. Solves a symptom, not the cause.</p>
          </div>
          <div className="cs-pillar" style={{opacity: 0.55}}>
            <span className="n">H2 · Rejected</span>
            <h4>Redesigning the <span className="serif">website.</span></h4>
            <p>Supports awareness, but wouldn't reach users who had already downloaded the app and stalled. Wrong channel for the funnel stage.</p>
          </div>
          <div className="cs-pillar">
            <span className="n">H3 · Selected</span>
            <h4>A dedicated <span className="serif">CRM + push</span> strategy.</h4>
            <p>Addresses the real gap: users were not being reached after download. Connects CRM, push and in-app into a single activation journey.</p>
          </div>
        </div>

        {/* ---- 04 / SOLUTION ---- */}
        <div className="cs-divider">
          <span className="num">04 / Solution</span>
          <h2>Built from <span className="serif">scratch.</span></h2>
        </div>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Core idea</span>
            <div>
              <h3>Make the Ford App the <span className="serif">central place</span> for activation — through clear UX writing and contextual guidance.</h3>
              <p>Four products came out of the work, all aligned under one system:</p>
              <ul>
                <li><strong>"Minhas Experiências Ford"</strong> — CRM journey for account activation and first-use guidance.</li>
                <li><strong>Modem Activation</strong> — dedicated CRM journey for 2019+ vehicles.</li>
                <li><strong>Push notification cadence</strong> — Day 3, 7, 15 and 30 triggers for users stuck in the funnel.</li>
                <li><strong>In-app UX writing</strong> — same terminology as CRM and push, so users always know where they are.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pillars — solution */}
        <div className="cs-pillars reveal">
          <div className="cs-pillar">
            <span className="n">Pillar 01</span>
            <h4>Contextual <span className="serif">activation.</span></h4>
            <p>Flows adapt to vehicle generation — pre-2019 toward basic services, 2019+ toward modem activation. No one-size-fits-all.</p>
          </div>
          <div className="cs-pillar">
            <span className="n">Pillar 02</span>
            <h4>Consistent <span className="serif">language.</span></h4>
            <p>Same terminology across CRM, push and in-app. Users always know where they are and what comes next.</p>
          </div>
          <div className="cs-pillar">
            <span className="n">Pillar 03</span>
            <h4>Assisted when <span className="serif">needed.</span></h4>
            <p>FORDi, Guia 360 and dealership support embedded directly in the communication flow — never a dead end.</p>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="cs-flow reveal">
          <div className="cs-flow__title">● Activation flow — 2019+ connected vehicle</div>
          <div className="cs-flow__diagram">
            <div className="cs-flow__step">
              <span className="s">Step 01</span>
              <span className="t">User buys a connected vehicle (2019+).</span>
            </div>
            <div className="cs-flow__step -accent">
              <span className="s">CRM trigger</span>
              <span className="t"><em>Minhas Experiências Ford</em> — 3 emails guiding account creation.</span>
            </div>
            <div className="cs-flow__step">
              <span className="s">Step 02</span>
              <span className="t">App download → account registration → chassis activation.</span>
            </div>
            <div className="cs-flow__step -accent">
              <span className="s">CRM + Push</span>
              <span className="t">Modem Activation journey (3 emails) + push cadence on Day 3, 7, 15, 30.</span>
            </div>
            <div className="cs-flow__step">
              <span className="s">Step 03</span>
              <span className="t">Modem activated → full connected services unlocked.</span>
            </div>
          </div>
        </div>

        {/* ---- 05 / RESULTS ---- */}
        <div className="cs-divider">
          <span className="num">05 / Results</span>
          <h2>Before <span className="serif">&amp; after.</span></h2>
        </div>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Impact</span>
            <div>
              <p>Once the new strategy rolled out, the metrics moved decisively — especially on modem activation, which was the north-star of the project.</p>
            </div>
          </div>
        </section>

        {/* Results table */}
        <div className="cs-results reveal">
          <div className="cs-results__title">● Key product metrics · Pre vs Post rollout</div>

          <div className="cs-results__grid">
            {/* header */}
            <div className="cs-results__cell cs-results__head">Metric</div>
            <div className="cs-results__cell cs-results__head">Pre</div>
            <div className="cs-results__cell cs-results__head">Post</div>
            <div className="cs-results__cell cs-results__head">Change</div>

            <div className="cs-results__group">Account &amp; registration</div>

            <div className="cs-results__cell -label">Total registered accounts</div>
            <div className="cs-results__cell -num">421,384</div>
            <div className="cs-results__cell -num">472,617</div>
            <div className="cs-results__cell -delta">+12%</div>

            <div className="cs-results__cell -label">Accounts with chassis registered — Pre-2019</div>
            <div className="cs-results__cell -num">58,312</div>
            <div className="cs-results__cell -num">74,891</div>
            <div className="cs-results__cell -delta">+28%</div>

            <div className="cs-results__cell -label">Accounts with chassis registered — 2019+</div>
            <div className="cs-results__cell -num">61,847</div>
            <div className="cs-results__cell -num">89,340</div>
            <div className="cs-results__cell -delta">+44%</div>

            <div className="cs-results__group">Activation funnel · 2019+</div>

            <div className="cs-results__cell -label">Users with account but no chassis</div>
            <div className="cs-results__cell -num">57.6%</div>
            <div className="cs-results__cell -num">34.9%</div>
            <div className="cs-results__cell -delta -down">−22.7pp</div>

            <div className="cs-results__cell -label">Chassis activated, no modem</div>
            <div className="cs-results__cell -num">33.4%</div>
            <div className="cs-results__cell -num">17.8%</div>
            <div className="cs-results__cell -delta -down">−15.6pp</div>

            <div className="cs-results__cell -label">Full activation (chassis + modem)</div>
            <div className="cs-results__cell -num">11.3%</div>
            <div className="cs-results__cell -num">16.5%</div>
            <div className="cs-results__cell -delta">+5.2pp</div>

            <div className="cs-results__group">Support &amp; drop-off</div>

            <div className="cs-results__cell -label">Activation-related support requests / month</div>
            <div className="cs-results__cell -num">9,847</div>
            <div className="cs-results__cell -num">5,613</div>
            <div className="cs-results__cell -delta -down">−43%</div>

            <div className="cs-results__cell -label">Drop-off rate during activation flow</div>
            <div className="cs-results__cell -num">66.8%</div>
            <div className="cs-results__cell -num">37.3%</div>
            <div className="cs-results__cell -delta -down">−29.5pp</div>

            <div className="cs-results__cell -label">Users requiring dealership assistance</div>
            <div className="cs-results__cell -num">40.7%</div>
            <div className="cs-results__cell -num">21.3%</div>
            <div className="cs-results__cell -delta -down">−19.4pp</div>

            <div className="cs-results__group">Engagement</div>

            <div className="cs-results__cell -label">App return rate within 30d post-activation</div>
            <div className="cs-results__cell -num">31.2%</div>
            <div className="cs-results__cell -num">53.8%</div>
            <div className="cs-results__cell -delta">+22.6pp</div>

            <div className="cs-results__cell -label">Connected services usage after activation</div>
            <div className="cs-results__cell -num">27.9%</div>
            <div className="cs-results__cell -num">60.4%</div>
            <div className="cs-results__cell -delta">+32.5pp</div>
          </div>
        </div>

        {/* ---- 06 / HONEST ---- */}
        <div className="cs-divider">
          <span className="num">06 / Constraints</span>
          <h2>What didn't <span className="serif">work as expected.</span></h2>
        </div>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Honest notes</span>
            <div>
              <p>No project ships without compromise. These are the edges I'd sand next time.</p>
            </div>
          </div>
        </section>

        <div className="cs-honest reveal">
          <div className="cs-honest__item">
            <h5>Limited control over the app itself</h5>
            <p>The Ford App is managed globally — our scope was the communication layer (in-app messages + push), not the product surface. We could influence, not own.</p>
          </div>
          <div className="cs-honest__item">
            <h5>Activation data latency</h5>
            <p>Non-activated user lists were delivered on a schedule, not in real-time. A user who activated on Tuesday could still get a push on Wednesday.</p>
          </div>
          <div className="cs-honest__item">
            <h5>Email layout constraints</h5>
            <p>The CRM team works with modular templates. I owned the UX writing and content strategy; the visual layout had to work within pre-existing modules.</p>
          </div>
          <div className="cs-honest__item">
            <h5>Measuring indirect impact</h5>
            <p>Several initiatives ran in parallel, making it hard to isolate the <em>exact</em> contribution of each CRM journey or push to modem activation.</p>
          </div>
        </div>

        {/* ---- 07 / REFLECTION ---- */}
        <div className="cs-divider">
          <span className="num">07 / Reflection</span>
          <h2>What this project <span className="serif">taught me.</span></h2>
        </div>

        <section className="cs-pull reveal">
          <div className="cs-pull__inner">
            Activating a service is not <span className="dim">explaining a feature.</span><br/>
            It is <span className="serif">guiding a person,</span> at the right moment, with clarity and confidence.
          </div>
          <div className="cs-pull__attr">What I'm taking with me</div>
        </section>

        <section className="cs">
          <div className="cs__block reveal">
            <span className="label">Takeaways</span>
            <div>
              <ul>
                <li>The best design decisions are sometimes the ones nobody asked for.</li>
                <li>Activation is an <em>emotional</em> journey, not a technical one.</li>
                <li>Constraints are invitations — we couldn't touch the app, so we designed around it.</li>
                <li>The real work starts before the first screen.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Figma CTA — bottom */}
        <div className="cs-figma reveal" style={{marginTop: 80}}>
          <a href={FIGMA_URL} target="_blank" rel="noopener">
            <span className="i">F</span>
            <span className="m">
              <span className="l">● Walk the full case</span>
              <span className="t">All screens, emails and flows live on <span className="serif">Figma</span> — prototype is the best way to review this one.</span>
            </span>
            <span className="btn -primary">Open prototype ↗</span>
          </a>
        </div>

        {/* Next project */}
        <div className="cs-next">
          <a href="fordpass.html">
            <span className="label">● Next project / 02 / 05</span>
            <span className="t">
              FordPass <span className="serif">®</span>
              <svg width="48" height="48" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </main>

      <footer className="footer">
        <span>© 2026 · Carlos Gutierres</span>
        <span>Product Designer · São Paulo</span>
        <a href="#top">↑ Back to top</a>
      </footer>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FordCase />);
