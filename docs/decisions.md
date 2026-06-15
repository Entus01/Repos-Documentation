# Decisions

Status: Active

Scope: Record of technical, organizational, and strategic decisions for the project.

Main reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document records relevant decisions made during the evolution of the project.

Its goal is to preserve the context behind important changes, preventing knowledge loss and facilitating future reviews or refactors.

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

```text
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
```

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

* rules.md → How work is done.
* structure.md → How things are organized.
* changelog.md → What changed.
* roadmap.md → Where the project is heading.
* decisions.md → Why it was decided.
* architecture.md → How the parts of the system relate.
* deployment.md → How the project is built and published.

Related documentation:

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

# Fundamental Principle

Important decisions must be recorded along with their context.

Implementation may change over time, but understanding why a decision was made helps maintain coherence and facilitates project evolution.


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


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

```text
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
````

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

* glossary.md → What the terms used mean.
* rules.md → How work is done.
* structure.md → How things are organized.
* changelog.md → What changed.
* roadmap.md → Where the project is heading.
* decisions.md → Why it was decided.
* architecture.md → How the project is built.
* deployment.md → How the project is built and published.

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

Date: 2026-06-08

Status: Accepted

Title:

Incorporate `glossary.md` as the official source of terminology

Context:

As documentation grows, technical, organizational, and architectural terms begin to repeat across multiple documents.

Without a centralized reference, inconsistent interpretations, duplicated definitions, or differences in meaning between projects may arise.

Options considered:

1. Define terms within each document.
2. Maintain a distributed glossary.
3. Create a single source of terminology.

Decision:

Incorporate `glossary.md` as the official document to centralize definitions and terminology.

Rationale:

Maintain documentation consistency, reduce ambiguities, and facilitate reuse of standards across repositories.

Impact:

* Unified terminology.
* Less duplication of definitions.
* Greater consistency between documents.
* Better onboarding of new contributors.

Consequences:

* Documents should reference `glossary.md` when using specialized terminology.
* Definitions should not be duplicated in other documents.
* `glossary.md` becomes the official source for terminological interpretation.

Related documentation:

* glossary.md
* rules.md
* structure.md
* architecture.md

---

## DEC-005

Date: 2026-06-08

Status: Accepted

Title:

Build a navigable documentation library using React

Context:

Initially, project documentation existed only as Markdown files within the repository.

Although this approach was sufficient for direct consultation from GitHub, it limited navigation, content discovery, and reuse as a public reference.

Options considered:

1. Keep documentation only in Markdown files.
2. Publish documents using an external static site generator.
3. Build a custom interface using React and React Router.

Decision:

Build a React application that allows navigating the documentation as a library organized by categories.

Rationale:

Facilitate access to information, improve the reading experience, and use the project as a practical frontend development exercise.

Impact:

* Centralized document navigation.
* Better consultation experience.
* Foundation for future search and filtering features.
* Greater educational value for project maintenance.

Consequences:

* A category-based navigation structure is incorporated.
* Documents become navigable content within the application.
* Project documentation must be kept in sync with the navigation interface.

Related documentation:

* structure.md
* roadmap.md
* architecture.md
* changelog.md

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

Consequences:

* Navigation components must consume the centralized configuration instead of defining their own data.
* Changes to the documentation structure must be made from the corresponding constants module.
* Architectural and structural documentation must be kept in sync with this decision.

Related documentation:

* architecture.md
* structure.md
* changelog.md


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
