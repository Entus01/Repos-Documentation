export default function DeploymentDocument() {
  return (
    <>
      <section>
        <h2>Purpose</h2>

        <p>
          This document describes the purpose and recommended structure of a
          project's <span>deployment.md</span> file.
        </p>
        <p>
          Its goal is to provide a clear and up-to-date reference for building,
          configuring, publishing, and maintaining a functional version of the
          system across the available environments.
        </p>
        <p>
          Unlike reusable reference documents, deployment documentation should
          be adapted to the specific operational requirements of each project.
        </p>
      </section>

      <section>
        <h2>Objectives</h2>

        <ul>
          <li>Document the current deployment process.</li>
          <li>Facilitate publishing new versions.</li>
          <li>Reduce operational errors.</li>
          <li>Centralize environment-related information.</li>
          <li>Facilitate onboarding of new collaborators.</li>
          <li>Serve as a reference for maintenance tasks.</li>
        </ul>
      </section>

      <section>
        <h2>When to Update this Document</h2>

        <p>Update when there is any relevant change related to:</p>

        <ul>
          <li>Deployment platforms.</li>
          <li>Build processes.</li>
          <li>Required environment variables.</li>
          <li>Publishing automations.</li>
          <li>Infrastructure configuration.</li>
          <li>External services used during deployment.</li>
          <li>Versioning or release strategies.</li>
        </ul>
      </section>

      <section>
        <h2>When Not to Update this Document</h2>

        <p>It is not necessary to update this document for:</p>

        <ul>
          <li>Functional changes to the system.</li>
          <li>Visual adjustments.</li>
          <li>Internal refactors.</li>
          <li>Routine documentation updates.</li>
          <li>Changes that do not affect build or deployment.</li>
        </ul>
      </section>

      <section>
        <h2>Recommended Structure</h2>

        <p>
          Deployment documentation should answer, at minimum, the following
          questions.
        </p>

        <ul>
          <li>
            <p>How is the project built?</p>
            <p>Example:</p>
            <ul>
              <li>Install dependencies.</li>
              <li>Generate the production build.</li>
              <li>Run validation steps.</li>
            </ul>
          </li>

          <li>
            <p>Where is the project deployed?</p>
            <p>Example:</p>
            <ul>
              <li>GitHub Pages.</li>
              <li>Vercel.</li>
              <li>Netlify.</li>
              <li>AWS.</li>
              <li>Docker.</li>
            </ul>
          </li>

          <li>
            <p>What environments exist?</p>
            <p>Example:</p>
            <ul>
              <li>Development.</li>
              <li>Testing.</li>
              <li>Staging.</li>
              <li>Production.</li>
            </ul>
          </li>

          <li>
            <p>What configuration or environment variables are required?</p>
            <p>Example:</p>
            <ul>
              <li>VITE_API_URL.</li>
              <li>DATABASE_URL.</li>
              <li>JWT_SECRET.</li>
            </ul>
          </li>

          <li>
            <p>How is a new version published?</p>
            <p>Example:</p>
            <ul>
              <li>Run tests.</li>
              <li>Generate the build.</li>
              <li>Update documentation.</li>
              <li>Create the release.</li>
              <li>Deploy the application.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2>Recommended Template</h2>

        <p>
          Deployment documentation should provide enough operational
          information to reproduce the build and publishing process while
          remaining concise and easy to maintain.
        </p>

        <pre>
          <code>
            {`
                # Current Deployment

                ## Summary

                General description of the deployment process.

                ## Environments

                List of available environments.

                ## Requirements

                Dependencies needed to build the project.

                ## Environment Variables

                Variables required for execution and deployment.

                ## Build

                Commands used to generate the application.

                ## Deployment Platform

                Services used to publish the project.

                ## Automation

                Available automatic processes.

                ## Publishing Procedure

                Steps required to release a new version.

                ## Operational Considerations

                Important information for maintenance and support.
            `}
          </code>
        </pre>
      </section>

      <section>
        <h2>Security Considerations</h2>

        <p>
          Deployment documentation should never include confidential or
          sensitive information.
        </p>

        <p>The following information should never be stored in this document:</p>

        <ul>
          <li>Credentials.</li>
          <li>Tokens.</li>
          <li>Secrets.</li>
          <li>Private keys.</li>
          <li>Sensitive configuration values.</li>
        </ul>

        <p>
          Required variables should be documented using descriptive names and
          managed through appropriate configuration files, such as{" "}
          <span>.env.example</span>.
        </p>
      </section>

      <section>
        <h2>Terminology</h2>

        <p>
          The terminology used in this document must remain aligned with the
          definitions established in <span>docs/glossary.md</span>.
        </p>

        <p>
          When new concepts related to infrastructure, automation,
          environments, or deployment require a shared interpretation, they
          should be registered in <span>glossary.md</span>.
        </p>

        <p>
          This document should use the officially defined terminology, avoiding
          duplicate definitions or parallel glossaries.
        </p>
      </section>

      <section>
        <h2>Fundamental Principle</h2>

        <p>
          This document should represent the actual process used to build and
          deploy the project.
        </p>

        <p>
          If there is a difference between the documented procedure and the
          current operational process, the documentation should be updated to
          reflect the actual state of the system.
        </p>

        <p>
          Its main purpose is to serve as the source of truth for publishing,
          operating, and maintaining the project across its supported
          environments.
        </p>
      </section>
    </>
  );
}
