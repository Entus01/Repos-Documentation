import "./GlossaryDocument.css";

export default function GlossaryDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes the purpose and recommended structure of a
          project's <span>glossary.md</span> file.
        </p>
        <p>
          Its goal is to centralize the definitions of technical,
          organizational, and architectural terms used throughout the project
          documentation.
        </p>
        <p>
          A well-maintained glossary reduces ambiguity, improves communication,
          and helps maintain a consistent language across repositories and
          collaborators.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Centralize shared terminology.</li>
          <li>Reduce ambiguity across documentation.</li>
          <li>Facilitate communication between collaborators.</li>
          <li>Maintain consistency in the language used by the project.</li>
          <li>Provide a common reference for technical concepts.</li>
          <li>Reduce reliance on implicit knowledge.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when:</p>

        <ul>
          <li>New relevant terminology is introduced.</li>
          <li>Frequently used concepts appear in the documentation.</li>
          <li>A term requires additional clarification.</li>
          <li>New practices or architectural patterns are adopted.</li>
          <li>New tools or technologies become part of the project.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to record:</p>

        <ul>
          <li>Obvious or universally known definitions.</li>
          <li>Implementation-specific details.</li>
          <li>Development rules or conventions.</li>
          <li>Technical decisions.</li>
          <li>Temporary or version-dependent information.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          A project glossary should answer, at minimum, the following
          questions.
        </p>

        <ul>
          <li>
            <p>What term is being defined?</p>
            <p>Example:</p>
            <ul>
              <li>Architecture.</li>
              <li>Module.</li>
              <li>Repository.</li>
            </ul>
          </li>

          <li>
            <p>What does the term mean within the project?</p>
            <p>Example:</p>
            <ul>
              <li>Concise definition.</li>
              <li>Shared interpretation.</li>
            </ul>
          </li>

          <li>
            <p>Does the term require additional context?</p>
            <p>Example:</p>
            <ul>
              <li>Usage notes.</li>
              <li>Scope limitations.</li>
              <li>Project-specific interpretation.</li>
            </ul>
          </li>

          <li>
            <p>Would an example improve understanding?</p>
            <p>Example:</p>
            <ul>
              <li>Architectural patterns.</li>
              <li>Technology names.</li>
              <li>Domain examples.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Glossary entries should provide clear and concise definitions while
          avoiding unnecessary implementation details.
        </p>

        <pre>
          <code>
            {`
                ## Term

                Short definition of the concept.

                Additional context when necessary.

                Example:

                Example 1
                Example 2
            `}
          </code>
        </pre>
      </section>

      <section>
        <h2>Writing Guidelines</h2>

        <p>
          Glossary entries should be written using simple and unambiguous
          language.
        </p>

        <ul>
          <li>Keep definitions concise and easy to understand.</li>
          <li>Use terminology consistently across all documents.</li>
          <li>Avoid circular definitions.</li>
          <li>Include examples only when they improve clarity.</li>
          <li>
            Focus on the meaning of the concept rather than its implementation.
          </li>
          <li>
            Update existing definitions instead of creating duplicates for the
            same term.
          </li>
        </ul>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          Documentation should use a consistent and shared terminology.
        </p>

        <p>
          When there is ambiguity about the meaning of a concept, the glossary
          should be considered the official reference for its interpretation
          within the project.
        </p>

        <p>
          Its main purpose is to establish a common language that improves
          communication, reduces misunderstandings, and supports the long-term
          maintainability of the documentation.
        </p>
      </section>
    </>
  );
}
