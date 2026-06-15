import "./ArchitectureDocument.css";

export default function ArchitectureDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>This document describes the project-specific architecture.</p>
        <p>
          Its goal is to provide a clear view of how the system is built, how
          its main modules relate to each other, and which architectural
          decisions are currently implemented.
        </p>
        <p>
          Unlike other reusable reference documents, this document should be
          adapted to the particular needs of each project.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Facilitate general understanding of the system.</li>
          <li>Document the currently implemented architecture.</li>
          <li>Reduce reliance on implicit knowledge.</li>
          <li>Facilitate onboarding of new collaborators.</li>
          <li>Serve as a reference for future technical decisions.</li>
          <li>
            Maintain an up-to-date view of the project's logical structure.
          </li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>
          Update when there is any relevant change related to:
          <ul>
            <li>General system architecture.</li>
            <li>Organization of main modules.</li>
            <li>Communication flows.</li>
            <li>External integrations.</li>
            <li>Architectural patterns used.</li>
            <li>Important structural dependencies.</li>
            <li>
              Technologies that modify the general functioning of the system.
            </li>
          </ul>
        </p>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>
        <ul>
          <li>Minor fixes.</li>
          <li>Visual adjustments.</li>
          <li>Internal refactors without architectural impact.</li>
          <li>Content changes.</li>
          <li>Documentation updates unrelated to architecture.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          The architectural documentation should answer, at minimum, the
          following questions.
        </p>
        <ul>
          <li>
            <p>What architecture does the project use?</p>
            <p>Example:</p>
            <ul>
              <li>Single Page Application (SPA)</li>
              <li>Client / Server</li>
              <li>Monolith</li>
              <li>Microservices</li>
            </ul>
          </li>
          <li>
            <p>What are the main modules?</p>
            <p>Example:</p>
            <ul>
              <li>Frontend</li>
              <li>Backend</li>
              <li>Authentication</li>
              <li>Payments</li>
              <li>Administration</li>
            </ul>
          </li>
          <li>
            <p>How do they interact with each other?</p>
            <p>Example:</p>
            <ul>
              <li>User</li>
              <li>→</li>
              <li>Frontend</li>
              <li>→</li>
              <li>Backend</li>
              <li>→</li>
              <li>Database</li>
            </ul>
          </li>
          <li>
            <p>What external services does it use?</p>
            <p>Example:</p>
            <ul>
              <li>Firebase</li>
              <li>Stripe</li>
              <li>OpenAI</li>
              <li>AWS</li>
              <li>Cloudinary</li>
            </ul>
          </li>
          <li>
            <p>What architectural patterns are used?</p>
            <p>Example:</p>
            <ul>
              <li>Feature Based Architecture</li>
              <li>MVC</li>
              <li>Repository Pattern</li>
              <li>Layered Architecture</li>
              <li>Domain Driven Design</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Architectural documentation should collaborate with, rather than
          duplicate, the responsibilities of other project documents.
        </p>
        <pre>
          <code>
            {`
                            # Current Architecture

                            ## Summary

                            General description of the implemented architecture.

                            ## Main Technologies

                            List of relevant technologies.

                            ## Main Modules

                            Description of the modules that make up the system.

                            ## General Flow

                            Simplified representation of the data flow.

                            ## External Integrations

                            External services used by the project.

                            ## Architectural Dependencies

                            Important relationships between modules.

                            ## Technical Considerations

                            Relevant aspects for maintenance and evolution.
                        `}
          </code>
        </pre>
      </section>

      <section>
        <h2>Terminology</h2>

        <p>
          The terminology used in this document must remain aligned with the
          definitions established in <span>docs/glossary.md</span>.
        </p>
        <p>
          When new architectural concepts, patterns, or terms that require a
          shared interpretation within the project are introduced, they must be
          registered in <span>glossary.md</span>.
        </p>
        <p>
          This document must use the officially defined terminology, avoiding
          duplicate definitions or maintaining parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Architectural Change Log</h2>

        <p>
          Any relevant architectural modification should also be recorded in{" "}
          <span>docs/decisions.md</span> when it involves a significant
          technical decision.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          This document must represent the actual architecture of the project
          and not an idealized architecture.
        </p>
        <p>
          If there is a difference between the documentation and the
          implementation, the documentation must be updated to reflect the
          actual state of the system.
        </p>
        <p>
          Its main purpose is to serve as the source of truth about how the
          project is currently built.
        </p>
      </section>
    </>
  );
}
