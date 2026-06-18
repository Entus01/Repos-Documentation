export default function ReadMeDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes the purpose and recommended structure of a
          project's <span>README.md</span> file.
        </p>
        <p>
          Its goal is to provide a clear and consistent entry point that helps
          readers understand what the project is, why it exists, and how the
          available documentation is organized.
        </p>
        <p>
          The README should provide a high-level overview of the project without
          duplicating the responsibilities of more specialized documents.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Provide a clear introduction to the project.</li>
          <li>Explain the project's purpose and overall scope.</li>
          <li>Facilitate onboarding for new collaborators.</li>
          <li>Act as the main entry point to the documentation.</li>
          <li>Avoid duplication by referencing specialized documents.</li>
          <li>Maintain a concise and accessible project overview.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when there are relevant changes related to:</p>
        <ul>
          <li>The overall purpose of the project.</li>
          <li>The project's scope or objectives.</li>
          <li>The organization of the documentation.</li>
          <li>Main technologies or development approach.</li>
          <li>Installation or local development process.</li>
          <li>The general status or direction of the project.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>
        <ul>
          <li>Minor implementation changes.</li>
          <li>Internal refactors without affecting the project overview.</li>
          <li>Small feature additions that do not alter the project's goals.</li>
          <li>Detailed architectural modifications.</li>
          <li>Routine updates to other documentation files.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          A project README should answer, at minimum, the following questions.
        </p>

        <ul>
          <li>
            <p>What is this project?</p>
            <p>Example:</p>
            <ul>
              <li>Documentation portal.</li>
              <li>REST API.</li>
              <li>Personal portfolio.</li>
              <li>Task management application.</li>
            </ul>
          </li>

          <li>
            <p>Why does this project exist?</p>
            <p>Example:</p>
            <ul>
              <li>Centralize development standards.</li>
              <li>Provide a reusable template.</li>
              <li>Solve a specific business need.</li>
            </ul>
          </li>

          <li>
            <p>What are its main objectives?</p>
            <p>Example:</p>
            <ul>
              <li>Improve consistency.</li>
              <li>Reduce onboarding time.</li>
              <li>Simplify maintenance.</li>
            </ul>
          </li>

          <li>
            <p>How can the project be run locally?</p>
            <p>Example:</p>
            <ul>
              <li>Clone the repository.</li>
              <li>Install dependencies.</li>
              <li>Start the development server.</li>
            </ul>
          </li>

          <li>
            <p>How is the documentation organized?</p>
            <p>Example:</p>
            <ul>
              <li>Glossary.</li>
              <li>Rules.</li>
              <li>Structure.</li>
              <li>Architecture.</li>
              <li>Roadmap.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          The README should present a concise overview of the project while
          delegating detailed information to the appropriate supporting
          documents.
        </p>

        <pre>
          <code>
            {`
                # README

                ## Purpose

                General description of the project.

                ## Objectives

                Main goals and intended outcomes.

                ## Project Summary

                High-level explanation of the project.

                ## Documentation Model

                Overview of how the documentation is organized.

                ## Main Technologies

                List of relevant technologies.

                ## Development Principles

                Main standards and conventions followed.

                ## Installation and Development

                Basic steps to run the project locally.

                ## Documentation Structure

                Summary of the available documents.

                ## Fundamental Principle

                General philosophy and guiding idea.
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
          When new concepts or terms that require a shared interpretation are
          introduced, they should be registered in{" "}
          <span>glossary.md</span>.
        </p>
        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          The README should provide a simple and accurate overview of the
          project without attempting to replace the rest of the documentation.
        </p>
        <p>
          It should introduce the project, explain its purpose, and guide the
          reader toward the appropriate documents for more detailed information.
        </p>
        <p>
          Its main purpose is to serve as the project's primary entry point and
          the first source of context for anyone interacting with the
          repository.
        </p>
      </section>
    </>
  );
}