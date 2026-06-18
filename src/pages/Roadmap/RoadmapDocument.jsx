export default function RoadmapDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes the purpose and recommended structure of a
          project's <span>roadmap.md</span> file.
        </p>
        <p>
          Its goal is to define and communicate the objectives, improvements,
          and strategic initiatives planned for the future evolution of a
          project.
        </p>
        <p>
          Unlike a task management system, a roadmap should focus on long-term
          direction and significant initiatives rather than daily operational
          activities.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Document the planned evolution of the project.</li>
          <li>Communicate strategic priorities.</li>
          <li>Provide visibility into future improvements.</li>
          <li>Facilitate long-term planning.</li>
          <li>Help collaborators understand project direction.</li>
          <li>Maintain a shared vision for future development.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when there are changes related to:</p>

        <ul>
          <li>Strategic priorities.</li>
          <li>New planned initiatives.</li>
          <li>Changes in initiative status.</li>
          <li>Long-term technical goals.</li>
          <li>Planned improvements to the project.</li>
          <li>Future standards, conventions, or architectural directions.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>

        <ul>
          <li>Daily development tasks.</li>
          <li>Routine maintenance activities.</li>
          <li>Minor bug fixes.</li>
          <li>Small refactors.</li>
          <li>Temporary experiments.</li>
          <li>Changes without long-term strategic impact.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          Roadmap documentation should answer, at minimum, the following
          questions.
        </p>

        <ul>
          <li>
            <p>What initiative is being proposed?</p>
            <p>Example:</p>
            <ul>
              <li>TypeScript Standards.</li>
              <li>Testing Standards.</li>
              <li>CI/CD Integration.</li>
            </ul>
          </li>

          <li>
            <p>Why is this initiative important?</p>
            <p>Example:</p>
            <ul>
              <li>Improve maintainability.</li>
              <li>Increase consistency.</li>
              <li>Reduce operational risk.</li>
            </ul>
          </li>

          <li>
            <p>What objectives should it achieve?</p>
            <p>Example:</p>
            <ul>
              <li>Define standards.</li>
              <li>Document best practices.</li>
              <li>Improve project scalability.</li>
            </ul>
          </li>

          <li>
            <p>What impact is expected?</p>
            <p>Example:</p>
            <ul>
              <li>Better maintainability.</li>
              <li>Improved onboarding.</li>
              <li>Greater consistency across projects.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Roadmap documentation should provide a clear overview of planned
          initiatives while remaining easy to update as priorities evolve.
        </p>

        <pre>
          <code>
            {`
                ## Planned

                ### Initiative Name

                Priority:

                Objectives:

                -

                Expected Impact:

                -

                ## In Progress

                Current strategic initiatives.

                ## Completed

                Finished initiatives.

                ## On Hold

                Temporarily paused initiatives.
            `}
          </code>
        </pre>
      </section>

      <section>
        <h2>Initiative Statuses</h2>

        <p>
          Each roadmap initiative should have a status that reflects its
          current stage.
        </p>

        <ul>
          <li>
            <strong>Planned:</strong> Identified for future implementation.
          </li>
          <li>
            <strong>In Progress:</strong> Currently under active development.
          </li>
          <li>
            <strong>Completed:</strong> Finished and incorporated into the
            project.
          </li>
          <li>
            <strong>On Hold:</strong> Temporarily paused.
          </li>
          <li>
            <strong>Cancelled:</strong> Discarded or replaced by an alternative.
          </li>
        </ul>
      </section>

      <section>
        <h2>Prioritization Guidelines</h2>

        <p>
          Priorities help communicate the relative importance of planned
          initiatives.
        </p>

        <ul>
          <li>
            <strong>High:</strong> Essential improvements for the short-term
            evolution of the project.
          </li>
          <li>
            <strong>Medium:</strong> Important initiatives that do not block
            current progress.
          </li>
          <li>
            <strong>Low:</strong> Desirable improvements with limited urgency
            or impact.
          </li>
        </ul>
      </section>

      <section>
        <h2>Terminology</h2>

        <p>
          The terminology used in this document must remain aligned with the
          definitions established in <span>docs/glossary.md</span>.
        </p>

        <p>
          When new technical, organizational, or strategic concepts require a
          shared interpretation, they should be incorporated into the project's
          official glossary.
        </p>

        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          The roadmap should represent the intended strategic direction of the
          project rather than a fixed commitment to implementation.
        </p>

        <p>
          Priorities, statuses, and initiatives may evolve as the needs of the
          project change.
        </p>

        <p>
          Its main purpose is to provide a shared vision for future development
          while helping maintain consistency, sustainability, and long-term
          planning.
        </p>
      </section>
    </>
  );
};
