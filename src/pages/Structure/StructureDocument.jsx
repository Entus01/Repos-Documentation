export default function StructureDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes how a project's files, folders, and resources
          should be organized.
        </p>
        <p>
          Its goal is to provide a clear and predictable structure that helps
          collaborators locate responsibilities, understand the repository, and
          maintain consistency as the project evolves.
        </p>
        <p>
          Unlike project-specific documents, this document is intended to be
          reused across multiple repositories with little or no modification. It
          defines stable organizational conventions rather than implementation
          details.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Define a clear and consistent repository organization.</li>
          <li>Promote separation of responsibilities.</li>
          <li>Reduce the time required to understand a project.</li>
          <li>Facilitate onboarding of new collaborators.</li>
          <li>Provide a reusable organizational reference.</li>
          <li>Support long-term maintainability and scalability.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when there is any relevant change related to:</p>

        <ul>
          <li>Repository organization.</li>
          <li>Directory responsibilities.</li>
          <li>Location of shared resources.</li>
          <li>Recommended project layouts.</li>
          <li>Documentation organization.</li>
          <li>Adoption of new structural conventions.</li>
          <li>Long-term organizational practices.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>

        <ul>
          <li>Minor implementation details.</li>
          <li>Routine feature additions.</li>
          <li>Temporary project arrangements.</li>
          <li>Architectural decisions unrelated to organization.</li>
          <li>Deployment or infrastructure changes.</li>
          <li>Small refactors that do not affect the documented structure.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          Structure documentation should describe the recommended organization
          of a repository and provide reference examples that can be adapted
          according to the needs of each project.
        </p>

        <ul>
          <li>
            <p>What are the main organizational principles?</p>
            <p>Example:</p>
            <ul>
              <li>One responsibility per folder.</li>
              <li>One responsibility per file.</li>
              <li>Progressive scalability.</li>
              <li>Domain-based organization.</li>
              <li>Readability over complexity.</li>
            </ul>
          </li>

          <li>
            <p>What is the recommended repository structure?</p>
            <p>Example:</p>

            <pre>
              <code>{`project-root/
│
├── docs/
├── public/
├── src/
├── tests/
├── package.json
└── README.md`}</code>
            </pre>
          </li>

          <li>
            <p>How should documentation be organized?</p>
            <p>Example:</p>

            <pre>
              <code>
                {`docs/
                    ├── glossary.md
                    ├── changelog.md
                    ├── roadmap.md
                    ├── rules.md
                    ├── structure.md
                    ├── architecture.md
                    ├── decisions.md
                    └── deployment.md`}
              </code>
            </pre>
          </li>

          <li>
            <p>What reference structures can be provided?</p>
            <p>Example:</p>
            <ul>
              <li>Frontend projects.</li>
              <li>Backend projects.</li>
              <li>Fullstack or monorepo projects.</li>
            </ul>
          </li>

          <li>
            <p>How should the structure evolve over time?</p>
            <p>Example:</p>
            <ul>
              <li>Start simple.</li>
              <li>Grow according to real needs.</li>
              <li>Avoid unnecessary complexity.</li>
              <li>Maintain long-term consistency.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Structure documentation should provide a reusable organizational
          reference that can be adapted to different types of projects while
          maintaining the same general philosophy.
        </p>

        <pre>
          <code>
            {`
              # Organization Principles

              ## Base Repository Structure

              ## Documentation Organization

              ## Responsibility Placement

              ## Configuration Files

              ## Frontend (Reference)

              ## Backend (Reference)

              ## Fullstack (Reference)

              ## Structure Evolution

              ## Root Organization Principle
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
          When new concepts related to repository organization, documentation,
          or structural conventions require a shared interpretation, they should
          be registered in <span>glossary.md</span>.
        </p>

        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Structure Evolution</h2>

        <p>
          Significant changes to repository organization or documentation
          conventions should also be recorded in <span>docs/decisions.md</span>{" "}
          when they represent an important organizational decision.
        </p>

        <p>
          Major reorganizations that affect the evolution of the repository may
          also be reflected in <span>docs/changelog.md</span>.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          Project organization should facilitate development rather than impose
          unnecessary complexity.
        </p>

        <p>
          The documented structure should represent stable and understandable
          conventions that help developers locate information and navigate the
          repository with confidence.
        </p>

        <p>
          This document should remain stable over time and evolve only when the
          underlying organizational philosophy changes. Individual projects
          should adapt their implementation to these standards rather than
          modify the standards themselves.
        </p>
      </section>
    </>
  );
}
