export default function DecisionsDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes the purpose and recommended structure of a
          project's <span>decisions.md</span> file.
        </p>
        <p>
          Its goal is to preserve the context behind important technical,
          organizational, and strategic decisions, reducing reliance on
          implicit knowledge.
        </p>
        <p>
          Well-documented decisions help future contributors understand why a
          particular approach was chosen, even when the implementation evolves
          over time.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Document important project decisions.</li>
          <li>Preserve the context behind significant changes.</li>
          <li>Reduce knowledge loss over time.</li>
          <li>Facilitate future reviews and refactors.</li>
          <li>Improve traceability across project evolution.</li>
          <li>Provide historical context for architectural choices.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Record a new entry when there is a decision that affects:</p>

        <ul>
          <li>Architecture.</li>
          <li>Project organization.</li>
          <li>Development standards.</li>
          <li>Technologies used.</li>
          <li>Deployment strategies.</li>
          <li>Work processes.</li>
          <li>Conventions shared across teams.</li>
          <li>Changes with long-term impact.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to record:</p>

        <ul>
          <li>Minor fixes.</li>
          <li>Style adjustments.</li>
          <li>Small refactors.</li>
          <li>Temporary changes.</li>
          <li>Routine tasks.</li>
          <li>Updates without relevant long-term impact.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          A project decision record should answer, at minimum, the following
          questions.
        </p>

        <ul>
          <li>
            <p>What decision is being documented?</p>
            <p>Example:</p>
            <ul>
              <li>Adopt a new architecture.</li>
              <li>Centralize project documentation.</li>
              <li>Replace a core technology.</li>
            </ul>
          </li>

          <li>
            <p>Why was the decision necessary?</p>
            <p>Example:</p>
            <ul>
              <li>Maintenance difficulties.</li>
              <li>Scalability concerns.</li>
              <li>Knowledge fragmentation.</li>
            </ul>
          </li>

          <li>
            <p>What alternatives were considered?</p>
            <p>Example:</p>
            <ul>
              <li>Keep the current approach.</li>
              <li>Partially modify the solution.</li>
              <li>Completely redesign the process.</li>
            </ul>
          </li>

          <li>
            <p>What was the final decision?</p>
            <p>Example:</p>
            <ul>
              <li>Adopt the selected approach.</li>
              <li>Standardize the new convention.</li>
            </ul>
          </li>

          <li>
            <p>What impact or consequences does it have?</p>
            <p>Example:</p>
            <ul>
              <li>Improved maintainability.</li>
              <li>Better onboarding.</li>
              <li>Need to update related documentation.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Decision records should preserve the reasoning behind important
          changes while remaining concise and easy to review.
        </p>

        <pre>
          <code>
            {`
                ## DEC-XXX

                Date:
                Status:

                Title:

                Context:

                Options considered:

                1.
                2.
                3.

                Decision:

                Rationale:

                Impact:

                Consequences:

                Related documentation:
            `}
          </code>
        </pre>
      </section>

      <section>
        <h2>Decision Statuses</h2>

        <p>
          Each decision should include a status that represents its current
          lifecycle within the project.
        </p>

        <dl>
          <dt>Proposed</dt>
          <dd>
            The decision has been identified but has not yet been adopted.
          </dd>

          <dt>Accepted</dt>
          <dd>
            The decision has been approved and is part of the project.
          </dd>

          <dt>Superseded</dt>
          <dd>
            The decision has been replaced by a newer one.
          </dd>

          <dt>Rejected</dt>
          <dd>
            The decision was considered but ultimately discarded.
          </dd>
        </dl>
      </section>

      <section>
        <h2>Decision Numbering</h2>

        <p>
          Decision records should use a simple sequential identifier to improve
          traceability and simplify cross-references.
        </p>

        <pre>
          <code>
            {`DEC-001
            DEC-002
            DEC-003`}
          </code>
        </pre>

        <p>Recommended rules:</p>

        <ul>
          <li>Numbering should remain sequential.</li>
          <li>Identifiers should never be reused.</li>
          <li>
            Replaced decisions should keep their original identifier and update
            their status to <strong>Superseded</strong>.
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
          When new concepts related to architecture, organization, or decision
          management require a shared interpretation, they should be registered
          in <span>glossary.md</span>.
        </p>
        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          Important decisions should be recorded together with the context that
          motivated them.
        </p>

        <p>
          Implementations may change over time, but understanding why a
          decision was made helps preserve consistency and facilitates future
          project evolution.
        </p>

        <p>
          Its main purpose is to capture the reasoning behind long-term choices
          rather than to document implementation details.
        </p>
      </section>
    </>
  );
}
