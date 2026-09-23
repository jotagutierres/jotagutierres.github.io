/* global React, ReactDOM, CaseShell, CaseHero, CaseNext, ArrowUpRight */
// Ford Connected Vehicle Activation — full custom case study page

const FIGMA_URL = "https://www.figma.com/proto/aHFrQUVyP1RiSescB4EiXd/ford-case?node-id=141-778&viewport=335%2C60%2C0.05&t=ZgZPuq5gECGSujMi-1&scaling=contain&content-scaling=fixed&page-id=1%3A46";

const FINDINGS = [
  { n: "61%", t: "Ford App installed", l: "have the app installed, but 11% had uninstalled it after downloading." },
  { n: "57%", t: "Never received comms", l: "had never received any communication from Ford about connected services." },
  { n: "38%", t: "Didn't activate anything", l: "did not activate any available service, and another 17% didn't know the services existed." },
  { n: "41%", t: "Biggest difficulty", l: "said \"I didn't understand which services applied to my car.\"" },
  { n: "65%", t: "Instructions clarity", l: <>rated in-app instructions as <em>somewhat unclear</em> or <em>confusing</em>.</> },
  { n: "56%", t: "Needed help to activate", l: "went to a dealership or contacted support to complete activation." },
];

const RESULTS = [
  { group: "Account & registration", rows: [
    ["Total registered accounts", "421,384", "472,617", "+12%"],
    ["Accounts with chassis registered, pre-2019", "58,312", "74,891", "+28%"],
    ["Accounts with chassis registered, 2019+", "61,847", "89,340", "+44%"],
  ]},
  { group: "Activation funnel, 2019+", rows: [
    ["Users with account but no chassis", "57.6%", "34.9%", "−22.7pp"],
    ["Chassis activated, no modem", "33.4%", "17.8%", "−15.6pp"],
    ["Full activation (chassis + modem)", "11.3%", "16.5%", "+5.2pp"],
  ]},
  { group: "Support & drop-off", rows: [
    ["Activation-related support requests / month", "9,847", "5,613", "−43%"],
    ["Drop-off rate during activation flow", "66.8%", "37.3%", "−29.5pp"],
    ["Users requiring dealership assistance", "40.7%", "21.3%", "−19.4pp"],
  ]},
  { group: "Engagement", rows: [
    ["App return rate within 30 days of activation", "31.2%", "53.8%", "+22.6pp"],
    ["Connected services usage after activation", "27.9%", "60.4%", "+32.5pp"],
  ]},
];

function PrototypeLink({ end }) {
  return (
    <div className={`cs-figma${end ? " -end" : ""}`}>
      <a href={FIGMA_URL} target="_blank" rel="noopener">
        <span className="t">
          {end
            ? <>The prototype is the best way to review this one. <span className="muted">Every screen, email and flow is in Figma.</span></>
            : <>The full case is an interactive Figma prototype. <span className="muted">All screens, transitions and email flows.</span></>}
        </span>
        <span className="btn -primary">Open prototype <ArrowUpRight /></span>
      </a>
    </div>
  );
}

function FordCase() {
  return (
    <CaseShell>
      <CaseHero
        meta={[
          ["Client", "Ford Motor Company · Brazil"],
          ["Role", "Product Designer · End to end"],
          ["Year", "2024"],
          ["Scope", "Strategy · CRM · UX writing · Push"],
        ]}
        title={<>Driving connected<br/>vehicle <span className="serif">activation</span><br/>in Brazil.</>}
        lead="Two CRM journeys, a push cadence and in-app UX writing, built from scratch to move Ford owners from app download to full modem activation."
        leadMuted="The features were already there. What was missing was anyone telling owners how to turn them on."
      />

      <PrototypeLink />

      <section className="cs-pull">
        <p className="cs-pull__inner">
          <span className="dim">A significant portion of Brazilian owners</span> weren't activating connected services, and no CRM communication existed to guide them.
        </p>
      </section>

      {/* Starting point */}
      <div className="cs-divider"><h2>Starting point</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Signals</span>
          <div>
            <h3>Why activation was failing</h3>
            <p>Internal observations, CRM performance and support patterns all pointed at the same gap.</p>
            <ul>
              <li>Many users downloaded the app but never activated connected services.</li>
              <li>Dealerships were being used as a crutch to complete basic activation steps.</li>
              <li><strong>No dedicated CRM journey existed</strong> for connected vehicle activation.</li>
              <li>Users with less digital familiarity dropped off more often.</li>
              <li>Pre-2019 vehicles support basic services only; 2019+ vehicles need modem activation. No communication explained the difference.</li>
            </ul>
          </div>
        </div>

        <div className="cs__block">
          <span className="label">Diagnosis</span>
          <div>
            <h3>There was no journey to fix, so we built one</h3>
            <p>Without a structured CRM journey, communications were generic and not tied to what each vehicle could do. No channel guided owners from awareness to modem activation, and many connected-vehicle owners didn't know what they could unlock.</p>
            <p className="muted">So the job was to build a dedicated communication strategy from the ground up.</p>
          </div>
        </div>
      </section>

      {/* Research */}
      <div className="cs-divider"><h2>Research</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Audience</span>
          <div>
            <p>Ford Nation is Ford's most engaged owner community, the first to get product updates and invitations to events. If <em>they</em> were struggling with activation, most owners were too.</p>
            <p className="muted">Online survey · 142 respondents · 2 weeks · May 2024</p>
          </div>
        </div>
      </section>

      <ul className="cs-list -findings" aria-label="Survey findings">
        {FINDINGS.map((f) => (
          <li key={f.t}>
            <span className="k">{f.n}</span>
            <div>
              <h4>{f.t}</h4>
              <p>{f.l}</p>
            </div>
          </li>
        ))}
      </ul>

      <section className="cs-pull">
        <p className="cs-pull__inner">
          Activation should walk people through one step at a time. <span className="dim">A checklist leaves them on their own.</span>
        </p>
        <p className="cs-pull__attr">Insight from desk research</p>
      </section>

      {/* Hypotheses */}
      <div className="cs-divider"><h2>Hypotheses</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Three directions</span>
          <div>
            <p>A CSD matrix produced three directions. I tested each against the root problem, that nobody was reaching users after download, and only one addressed it.</p>
          </div>
        </div>
      </section>

      <ul className="cs-list">
        <li className="-rejected">
          <span className="k">H1 · Rejected</span>
          <div>
            <h4>Clearer in-app guidance</h4>
            <p>It would help people who reach the activation screen, but most never got that far.</p>
          </div>
        </li>
        <li className="-rejected">
          <span className="k">H2 · Rejected</span>
          <div>
            <h4>Redesigning the website</h4>
            <p>Good for awareness, but it wouldn't reach people who had already downloaded the app and stalled. Wrong channel for that stage of the funnel.</p>
          </div>
        </li>
        <li>
          <span className="k -accent">H3 · Selected</span>
          <div>
            <h4>A dedicated CRM and push strategy</h4>
            <p>Reaches people after download, where they were getting lost, and ties CRM, push and in-app copy into one activation journey.</p>
          </div>
        </li>
      </ul>

      {/* Solution */}
      <div className="cs-divider"><h2>Solution</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Core idea</span>
          <div>
            <h3>Make the Ford App the place where activation happens, with clear UX writing and guidance for each vehicle</h3>
            <p>Four pieces of work came out of it, all under one system:</p>
            <ul>
              <li><strong>"Minhas Experiências Ford"</strong>: a CRM journey for account activation and first use.</li>
              <li><strong>Modem Activation</strong>: a dedicated CRM journey for 2019+ vehicles.</li>
              <li><strong>Push notification cadence</strong>: triggers on day 3, 7, 15 and 30 for users stuck in the funnel.</li>
              <li><strong>In-app UX writing</strong>: the same terms as the CRM and push messages, so users always know where they are.</li>
            </ul>
          </div>
        </div>
      </section>

      <ul className="cs-list">
        <li>
          <span className="k">Principle 1</span>
          <div>
            <h4>Activation by vehicle</h4>
            <p>Flows follow the vehicle's generation: pre-2019 owners are guided to basic services, 2019+ owners to modem activation.</p>
          </div>
        </li>
        <li>
          <span className="k">Principle 2</span>
          <div>
            <h4>One vocabulary</h4>
            <p>CRM, push and in-app use the same terminology, so owners can tell where they are and what comes next.</p>
          </div>
        </li>
        <li>
          <span className="k">Principle 3</span>
          <div>
            <h4>Help at every step</h4>
            <p>FORDi, Guia 360 and dealership support are linked from inside the communication flow, so no message is a dead end.</p>
          </div>
        </li>
      </ul>

      <div className="cs-flow">
        <h3 className="cs-flow__title">Activation flow for a 2019+ connected vehicle</h3>
        <ol className="cs-flow__steps">
          <li className="cs-flow__step">
            <span className="s">Step 1</span>
            <span className="t">Owner buys a connected vehicle (2019+).</span>
          </li>
          <li className="cs-flow__step -accent">
            <span className="s">CRM trigger</span>
            <span className="t"><em>Minhas Experiências Ford</em>: 3 emails guiding account creation.</span>
          </li>
          <li className="cs-flow__step">
            <span className="s">Step 2</span>
            <span className="t">App download, account registration, chassis activation.</span>
          </li>
          <li className="cs-flow__step -accent">
            <span className="s">CRM + push</span>
            <span className="t">Modem Activation journey (3 emails) plus push on day 3, 7, 15 and 30.</span>
          </li>
          <li className="cs-flow__step">
            <span className="s">Step 3</span>
            <span className="t">Modem activated; all connected services unlocked.</span>
          </li>
        </ol>
      </div>

      {/* Results */}
      <div className="cs-divider"><h2>Results</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">Impact</span>
          <div>
            <p>After rollout, every tracked metric moved in the right direction. Full modem activation, the project's main goal, went from 11.3% to 16.5%.</p>
          </div>
        </div>
      </section>

      <div className="cs-results">
        <table>
          <caption>Key product metrics, before and after rollout</caption>
          <thead>
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">Before</th>
              <th scope="col">After</th>
              <th scope="col">Change</th>
            </tr>
          </thead>
          {RESULTS.map((g) => (
            <tbody key={g.group}>
              <tr className="group"><th scope="rowgroup" colSpan="4">{g.group}</th></tr>
              {g.rows.map(([label, pre, post, delta]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{pre}</td>
                  <td>{post}</td>
                  <td className="-delta">{delta}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>

      {/* Constraints */}
      <div className="cs-divider"><h2>Constraints</h2></div>
      <section className="cs">
        <div className="cs__block">
          <span className="label">What limited the work</span>
          <div>
            <p>Four things got in the way. Next time I'd plan around them from the start.</p>
          </div>
        </div>
      </section>

      <ul className="cs-list">
        <li>
          <span className="k">App ownership</span>
          <div>
            <h4>Limited control over the app itself</h4>
            <p>The Ford App is managed globally. Our scope was the communication layer (in-app messages and push), not the product surface, so we could influence it but not own it.</p>
          </div>
        </li>
        <li>
          <span className="k">Data</span>
          <div>
            <h4>Activation data latency</h4>
            <p>Lists of non-activated users arrived on a schedule, not in real time. Someone who activated on Tuesday could still get a push on Wednesday.</p>
          </div>
        </li>
        <li>
          <span className="k">Email</span>
          <div>
            <h4>Email layout constraints</h4>
            <p>The CRM team works with modular templates. I owned the UX writing and content strategy; the visual layout had to fit existing modules.</p>
          </div>
        </li>
        <li>
          <span className="k">Attribution</span>
          <div>
            <h4>Measuring indirect impact</h4>
            <p>Several initiatives ran in parallel, which makes it hard to isolate the <em>exact</em> contribution of each CRM journey or push to modem activation.</p>
          </div>
        </li>
      </ul>

      {/* Reflection */}
      <div className="cs-divider"><h2>Reflection</h2></div>

      <section className="cs-pull">
        <p className="cs-pull__inner">
          <span className="dim">To get someone to activate a service,</span> reach them at the right moment with one clear next step.
        </p>
      </section>

      <section className="cs">
        <div className="cs__block">
          <span className="label">Takeaways</span>
          <ul>
            <li>Nobody briefed a CRM journey. The diagnosis showed it was the missing piece.</li>
            <li>People stalled because they weren't sure what applied to their car, more than because the steps were hard.</li>
            <li>We couldn't change the app, so we worked in the channels we did control: email, push and in-app copy.</li>
            <li>Most of the useful work happened before any screen was designed: the survey, the diagnosis and choosing between three hypotheses.</li>
          </ul>
        </div>
      </section>

      <PrototypeLink end />

      <CaseNext next={{ name: "FordPass®", href: "fordpass.html" }} />
    </CaseShell>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FordCase />);
