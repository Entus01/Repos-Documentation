export default function RulesDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document defines the shared development rules and conventions
          applied across the project.
        </p>
        <p>
          Its goal is to establish a common framework that promotes consistency,
          reduces ambiguity, and helps collaborators understand how work should
          be organized and maintained.
        </p>
        <p>
          Unlike project-specific documents, this document is designed to be
          highly reusable and can be adopted with little or no modification
          across different repositories.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Centralize development standards and conventions.</li>
          <li>Promote consistency across projects and repositories.</li>
          <li>Reduce ambiguity during development.</li>
          <li>Facilitate onboarding of new collaborators.</li>
          <li>Serve as a reusable reference document.</li>
          <li>Reduce reliance on implicit knowledge.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when there is any relevant change related to:</p>

        <ul>
          <li>Development conventions.</li>
          <li>Naming standards.</li>
          <li>Repository organization rules.</li>
          <li>Shared workflows.</li>
          <li>Documentation standards.</li>
          <li>General development practices.</li>
          <li>Long-term collaboration guidelines.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>

        <ul>
          <li>Project-specific architectural decisions.</li>
          <li>Deployment or infrastructure changes.</li>
          <li>Temporary implementation details.</li>
          <li>Minor bug fixes.</li>
          <li>Routine development tasks.</li>
          <li>Version history updates.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          The rules documentation should define, at minimum, the following
          areas.
        </p>

        <ul>
          <li>
            <p>What general development principles should be followed?</p>
            <p>Example:</p>
            <ul>
              <li>Single Responsibility Principle.</li>
              <li>DRY.</li>
              <li>KISS.</li>
              <li>YAGNI.</li>
            </ul>
          </li>

          <li>
            <p>How should code and files be organized?</p>
            <p>Example:</p>
            <ul>
              <li>Consistent folder structure.</li>
              <li>Separation of responsibilities.</li>
              <li>Reusable components.</li>
              <li>Centralized configuration.</li>
            </ul>
          </li>

          <li>
            <p>What naming conventions should be used?</p>
            <p>Example:</p>
            <ul>
              <li>Descriptive file names.</li>
              <li>Consistent component naming.</li>
              <li>
                Folder naming conventions based on responsibility (kebab-case
                for features and services, PascalCase for React components and
                UI modules).
              </li>
              <li>Clear variable and function names.</li>
            </ul>
          </li>

          <li>
            <p>What documentation practices should be followed?</p>
            <p>Example:</p>
            <ul>
              <li>Keep documentation synchronized.</li>
              <li>Avoid duplicated information.</li>
              <li>Maintain a single source of truth.</li>
              <li>Document long-term decisions.</li>
            </ul>
          </li>

          <li>
            <p>What maintenance principles should guide the project?</p>
            <p>Example:</p>
            <ul>
              <li>Prefer simplicity over complexity.</li>
              <li>Promote consistency across repositories.</li>
              <li>Encourage reusable solutions.</li>
              <li>Keep standards up to date.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Rules documentation should provide a clear and reusable set of
          conventions that can be shared across multiple projects.
        </p>

        <pre>
          <code>
            {`
                            # Development Principles

                            ## Naming Conventions

                            ## Repository Organization

                            ## Code Style

                            ## Git Workflow

                            ## Documentation Standards

                            ## Maintenance Guidelines
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
          When new technical, organizational, or process-related concepts
          require a shared interpretation, they should be registered in{" "}
          <span>glossary.md</span>.
        </p>

        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Rule Evolution</h2>

        <p>
          Significant modifications to shared standards or long-term conventions
          should also be recorded in <span>docs/decisions.md</span> when they
          represent an important organizational or strategic decision.
        </p>

        <p>
          Relevant changes that affect the evolution of the project may also be
          reflected in <span>docs/changelog.md</span>.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          This document should define stable and reusable conventions rather
          than project-specific implementation details.
        </p>

        <p>
          Rules exist to promote consistency, reduce ambiguity, and facilitate
          collaboration across repositories.
        </p>

        <p>
          Whenever possible, this document should remain generic enough to be
          reused without modification in future projects.
        </p>
      </section>
    </>
  );
}
