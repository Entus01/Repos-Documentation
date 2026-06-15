import "./ChangelogDocument.css";

export default function ChangelogDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes the purpose and recommended structure of a
          project's <span>changelog.md</span> file.
        </p>
        <p>
          Its goal is to provide a summarized view of the functional,
          structural, and architectural evolution of the repository without
          replacing the Git history.
        </p>
        <p>
          A well-maintained changelog allows collaborators to quickly
          understand how the project has evolved and which changes have had a
          meaningful impact.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Document the significant evolution of the project.</li>
          <li>Provide historical context for important changes.</li>
          <li>Summarize releases without duplicating Git history.</li>
          <li>Facilitate communication between collaborators.</li>
          <li>Improve traceability across project versions.</li>
          <li>Maintain a concise and readable record of progress.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when there are relevant changes related to:</p>

        <ul>
          <li>New features.</li>
          <li>Architectural changes.</li>
          <li>Major project reorganizations.</li>
          <li>Changes to project structure.</li>
          <li>Addition or removal of technologies.</li>
          <li>Changes to deployment processes.</li>
          <li>Modifications to standards or conventions.</li>
          <li>Changes that affect project usage.</li>
          <li>Creation or removal of important documentation.</li>
          <li>Publication of a new project version.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>

        <ul>
          <li>Routine commits.</li>
          <li>Minor fixes.</li>
          <li>Style adjustments.</li>
          <li>Small refactors.</li>
          <li>Minor documentation updates.</li>
          <li>Internal changes with no visible impact.</li>
          <li>Trivial dependency updates.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          A project changelog should answer, at minimum, the following
          questions.
        </p>

        <ul>
          <li>
            <p>What version is being documented?</p>
            <p>Example:</p>
            <ul>
              <li>1.0.0</li>
              <li>1.1.0</li>
              <li>2.0.0</li>
            </ul>
          </li>

          <li>
            <p>When was the version released?</p>
            <p>Example:</p>
            <ul>
              <li>2026-06-07</li>
            </ul>
          </li>

          <li>
            <p>What new functionality was added?</p>
            <p>Example:</p>
            <ul>
              <li>New features.</li>
              <li>New documentation.</li>
              <li>New modules.</li>
            </ul>
          </li>

          <li>
            <p>What existing functionality changed?</p>
            <p>Example:</p>
            <ul>
              <li>Architecture improvements.</li>
              <li>Project reorganizations.</li>
              <li>Updated conventions.</li>
            </ul>
          </li>

          <li>
            <p>What was removed or fixed?</p>
            <p>Example:</p>
            <ul>
              <li>Deprecated features.</li>
              <li>Obsolete documents.</li>
              <li>Important bug fixes.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          The changelog should summarize relevant project evolution while
          keeping individual entries concise and focused on impact.
        </p>

        <pre>
          <code>
            {`
                ## [Version] - YYYY-MM-DD

                ### Added
                - New feature.

                ### Changed
                - Relevant change.

                ### Removed
                - Removed element.

                ### Fixed
                - Important fix.

                ### Notes
                - Additional information.
            `}
          </code>
        </pre>
      </section>

      <section>
        <h2>Versioning Convention</h2>

        <p>
          The project should follow a three-part versioning scheme that helps
          communicate the scope and impact of each release.
        </p>

        <h3>Format</h3>

        <pre>
          <code>{`MAJOR.MINOR.PATCH`}</code>
        </pre>

        <p>Examples:</p>

        <pre>
          <code>
            {`1.0.0
            1.1.0
            1.2.0
            2.0.0`}
          </code>
        </pre>

        <h3>Version Components</h3>

        <dl>
          <dt>MAJOR</dt>
          <dd>
            Represents incompatible changes or significant restructurings that
            directly affect the way the project is used.
          </dd>
          <dd>
            <strong>Examples:</strong>
            <ul>
              <li>Significant architecture change.</li>
              <li>Complete structure reorganization.</li>
              <li>Replacement of main technologies.</li>
              <li>Changes that directly affect project usage.</li>
            </ul>
          </dd>

          <dt>MINOR</dt>
          <dd>
            Represents new functionality or extensions that remain compatible
            with previous versions.
          </dd>
          <dd>
            <strong>Examples:</strong>
            <ul>
              <li>New documents.</li>
              <li>New guides.</li>
              <li>New references.</li>
              <li>New conventions.</li>
            </ul>
          </dd>

          <dt>PATCH</dt>
          <dd>
            Represents small fixes or improvements that do not introduce new
            functionality or break compatibility.
          </dd>
          <dd>
            <strong>Examples:</strong>
            <ul>
              <li>Bug fixes.</li>
              <li>Content adjustments.</li>
              <li>Writing improvements.</li>
              <li>Example or reference corrections.</li>
            </ul>
          </dd>
        </dl>
      </section>

      <section>
        <h2>Relationship with Git</h2>

        <p>
          The changelog complements the Git history by providing context that
          cannot always be inferred from commit messages alone.
        </p>

        <dl>
          <dt>Git answers:</dt>
          <dd>
            <em>What exactly changed?</em>
          </dd>

          <dt>Changelog answers:</dt>
          <dd>
            <em>Why was that change important for the project's evolution?</em>
          </dd>
        </dl>

        <p>
          Both mechanisms should be kept in sync to ensure traceability,
          historical context, and a clear understanding of the project's
          evolution.
        </p>
      </section>

      <section>
        <h2>Terminology</h2>

        <p>
          The terminology used in this document must remain aligned with the
          definitions established in <span>docs/glossary.md</span>.
        </p>
        <p>
          When new concepts related to versioning, releases, or project
          evolution require a shared interpretation, they should be registered
          in <span>glossary.md</span>.
        </p>
        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>The commit history explains the work performed.</p>

        <p>The changelog explains the project's evolution.</p>

        <p>
          For this reason, each entry should focus on the impact of the change
          rather than on specific implementation details.
        </p>

        <p>
          Its main purpose is to provide a clear, concise, and reusable summary
          of the project's history while complementing, not replacing, the
          information available in the version control system.
        </p>
      </section>
    </>
  );
}
