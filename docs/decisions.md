# Decisions

Status: Active

Scope: Record of technical, organizational, and strategic decisions for the project.

Main reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document records relevant decisions made during the evolution of the project.

Its goal is to preserve the context behind important changes, preventing knowledge loss and facilitating future reviews, maintenance, or refactors.

Recorded decisions should explain the reason for a choice, the alternatives considered, and the expected impact.

---

## When to Record a Decision

Record an entry when there is a decision that affects:

* Architecture.
* Project organization.
* Development standards.
* Technologies used.
* Deployment strategies.
* Work processes.
* Conventions shared across teams.
* Changes with long-term impact.

---

## When Not to Record a Decision

Do not record:

* Minor fixes.
* Style adjustments.
* Small refactors.
* Temporary changes.
* Routine tasks.
* Updates without relevant impact.

---

## Format


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

---

# Statuses

## Proposed

The decision has been proposed but not yet adopted.

---

## Accepted

The decision has been approved and is part of the project.

---

## Superseded

The decision was replaced by a new one.

---

## Rejected

The decision was discarded.

---

# Decision Log

## DEC-001

Date: 2026-06-07

Status: Accepted

Title:

Centralize project documentation within `docs/`

Context:

Project documentation could become scattered across different locations in the repository, making maintenance and consultation difficult.

Options considered:

1. Keep documentation distributed.
2. Centralize technical documentation only.
3. Centralize all internal documentation in a single location.

Decision:

Centralize all internal documentation within the `docs/` folder.

Rationale:

Facilitate navigation, reduce duplication, and maintain a consistent structure across projects.

Impact:

* Greater predictability.
* Better document organization.
* Lower maintenance effort.

Consequences:

All projects that adopt these standards must use the `docs/` folder as the primary location for internal documentation.

Related documentation:

* structure.md
* rules.md

---

## DEC-002

Date: 2026-06-07

Status: Accepted

Title:

Separate responsibilities between reference documents

Context:

Documentation can become difficult to maintain when multiple documents contain similar or duplicated information.

Options considered:

1. Keep general documentation in a single file.
2. Split documentation by responsibility.

Decision:

Assign a specific responsibility to each main document.

Rationale:

Reduce redundancy and facilitate maintenance.

Impact:

Each document addresses a specific need.

Consequences:

* README.md → General overview of the repository.
* rules.md → Development standards and conventions.
* structure.md → Repository organization.
* glossary.md → Shared terminology.
* architecture.md → Current project architecture.
* deployment.md → Current build and deployment process.
* decisions.md → Historical record of important decisions.
* changelog.md → Summary of significant project changes.
* roadmap.md → Planned future improvements.

Related documentation:

* glossary.md
* rules.md
* structure.md
* roadmap.md
* changelog.md
* architecture.md
* deployment.md

---

## DEC-003

Date: 2026-06-07

Status: Accepted

Title:

Incorporate specialized documentation for architecture and deployment

Context:

As projects grow, architecture and deployment processes are often documented in a scattered way or remain implicit within team knowledge.

Options considered:

1. Keep information distributed across different documents.
2. Include architecture and deployment sections within other documents.
3. Create specialized documentation for each responsibility.

Decision:

Create dedicated documents for architecture and deployment.

Rationale:

Keep responsibilities clearly separated, facilitate documentation maintenance, and reduce reliance on implicit knowledge.

Impact:

* Greater technical clarity.
* Better onboarding of new contributors.
* Documentation that is easier to maintain.
* Better traceability of architectural and operational decisions.

Consequences:

* architecture.md will be responsible for documenting the project architecture.
* deployment.md will be responsible for documenting build and deployment processes.
* Technical information must be kept in the corresponding documents and duplication must be avoided.

Related documentation:

* architecture.md
* deployment.md
* structure.md

---

## DEC-004

Date: 2026-06-15

Status: Accepted

Title:

Separate reusable documentation templates from project documentation

Context:

The repository includes both interactive React documents (*Document.jsx) and Markdown files (*.md). Without a clear separation of responsibilities, both representations could evolve into duplicated versions of the same content.

Options considered:

1. Keep identical content in both formats.
2. Use Markdown files as the only source and render them directly.
3. Separate reusable documentation guidance from project-specific documentation.

Decision:

Use the React document components to explain the purpose, structure, and maintenance guidelines of each document type, while using the Markdown files to document the actual state and information of the current project.

Rationale:

This approach avoids duplication, improves maintainability, and allows the documentation system itself to be reused as a template for future repositories.

Impact:

* Clear separation between reusable and project-specific content.
* Better scalability of the documentation library.
* Reduced maintenance effort.

Consequences:

* *Document.jsx components describe how each document should be structured.
* Markdown files contain the real documentation of the repository.
* Changes to the project should be reflected in the corresponding .md files, not duplicated in the UI templates.

Related documentation:

* README.md
* architecture.md
* deployment.md
* glossary.md

---

## DEC-005

Date: 2026-06-15

Status: Accepted

Title: Use a centralized navigation model for the documentation library

Context:

The application presents documentation through a library-style interface. Defining routes, categories, and document metadata independently inside each component would create duplication and increase maintenance complexity.

Options considered:

1. Define navigation locally in each component.
2. Maintain separate configurations for routes and menus.
3. Centralize navigation metadata in a single configuration file.

Decision:

Maintain the navigation structure in src/constants/navigation.js as the single source of truth for the document library.

Rationale:

Centralized configuration simplifies maintenance, prevents inconsistencies, and makes it easier to add, remove, or reorganize documents.

Impact:

* Simplified navigation management.
* Reduced duplication.
* Improved scalability of the application structure.

Consequences:

All components responsible for rendering navigation should consume the centralized configuration rather than maintaining independent copies.

Related documentation:

* architecture.md
* structure.md

---

## DEC-006

Date: 2026-06-10

Status: Accepted

Title:

Centralize documentation navigation configuration

Context:

As the interface evolved into a documentation library organized by categories, navigation information began to be used by multiple components.

Keeping routes, categories, and metadata distributed across each component's implementation increased the risk of inconsistencies and made it harder to add new documents.

Options considered:

1. Keep navigation configuration distributed across components.
2. Generate navigation manually within each view.
3. Centralize all navigation configuration in a single reusable data source.

Decision:

Centralize the definition of categories, documents, and routes in a shared configuration file located at `src/constants/navigation.js`.

Rationale:

Reduce information duplication, facilitate maintenance, and allow the documentation structure to evolve without modifying consumer component logic.

Impact:

* Navigation configuration maintained in a single source of truth.
* Greater reuse across components.
* Simplified addition of new categories and documents.
* Lower coupling between the documentation structure and the interface.
* Consistent rendering between the navigation system and the document library.

Consequences:

* Navigation components must consume the centralized configuration instead of defining their own data.
* Changes to the documentation structure must be made from the corresponding constants module.
* Architectural and structural documentation must be kept in sync with this decision.
* New documents and categories can be incorporated without modifying the navigation components themselves.

Related documentation:

* architecture.md
* structure.md
* changelog.md

---

## DEC-007

Date: 2026-06-15

Status: Accepted

Title:

Separate reusable documentation templates from project-specific documentation

Context:

As the repository evolved, it began to include two complementary forms of documentation:

* Interactive React components (`*Document.jsx`) rendered by the application.
* Markdown documents (`*.md`) stored inside the `docs/` directory.

Initially, both formats could potentially duplicate the same information, making maintenance more difficult and increasing the risk of inconsistencies.

Options considered:

1. Maintain identical content in both the React components and the Markdown files.
2. Use the React components only as visual renderers for the Markdown documents.
3. Separate reusable documentation guidance from project-specific documentation.

Decision:

Use the React document components to explain the purpose, structure, and maintenance guidelines for each type of document, while using the Markdown files to document the actual state, conventions, and information of the current project.

Rationale:

Separating these responsibilities avoids duplication, improves maintainability, and allows the documentation system itself to be reused as a template for future repositories.

Impact:

* Clear separation between reusable and project-specific content.
* Better scalability of the documentation library.
* Reduced maintenance effort.
* Lower risk of inconsistencies between documentation formats.

Consequences:

* `*Document.jsx` components should describe how each document should be structured and maintained.
* Markdown files should contain the actual documentation for the current project.
* Changes to the repository should be reflected in the corresponding `.md` files rather than duplicated inside the reusable templates.
* The application can serve simultaneously as a documentation viewer and as a reusable documentation reference model.

Related documentation:

* README.md
* architecture.md
* deployment.md
* glossary.md
* structure.md

---

# Template for New Decisions

```text
## DEC-XXX

Date:

Status:

Title:

Context:

Options considered:

1.

Decision:

Rationale:

Impact:

Consequences:

Related documentation:
```

---

# Numbering

Recommended format:

```text
DEC-001
DEC-002
DEC-003
```

Rules:

* Numbering must be sequential.
* Identifiers must not be reused.
* A replaced decision keeps its original identifier and its status changes to Superseded.

---

## Relationship with Other Documents

### changelog.md

Records changes that have been made.

decisions.md records the reasons that justify those changes.

---

### architecture.md

Describes the current project architecture.

Relevant architectural decisions must be recorded in this document.

---

### deployment.md

Describes the build and deployment process.

Decisions related to infrastructure or publishing must be recorded here before implementation.

---

### structure.md

Describes how the repository is organized.

When a decision modifies the overall project structure, both documents must be kept in sync.

---

### rules.md

Defines development conventions and standards.

Decisions related to work processes, naming, or standards should also be reflected in rules.md when applicable.

---

### roadmap.md

May contain future initiatives that eventually require new decisions.

---

### glossary.md

Defines the terminology used within the documentation.

Terms used in this document must remain aligned with glossary.md.

---

## Terminology

The terminology used in this document must remain aligned with:

```text
docs/glossary.md
```

When a decision introduces a new technical, organizational, or architectural term that requires a shared interpretation, its inclusion in the official glossary should be evaluated.

---

## Historical Record

Recorded decisions must be preserved as part of the project history.

If a decision is no longer valid, it must not be deleted. Instead, a new decision that replaces it should be recorded and its status updated to:

```text
Superseded
```

This way, traceability of the project's technical and organizational evolution is maintained.

---

## Fundamental Principle

Important decisions must be recorded along with their context.

Implementation may change over time, but understanding why a decision was made helps maintain coherence, facilitate maintenance, and support project evolution.

```
```
