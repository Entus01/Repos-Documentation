# Roadmap

Status: Active

Scope: Evolution and strategic planning for the project.

Main reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document defines the objectives, improvements, and planned initiatives for the evolution of the project.

Its purpose is to provide a clear view of identified growth areas, current priorities, and future development directions.

Unlike a task management system, this document does not aim to record daily operational activities, but initiatives with strategic impact for project evolution.

---

# Statuses

## Planned

Work identified and considered for future versions.

---

## In Progress

Work currently in development.

---

## Completed

Work finished and incorporated into the project.

---

## On Hold

Work temporarily paused.

---

## Cancelled

Work discarded or replaced by an alternative.

---

# Current Initiatives

## Planned

### TypeScript Standards

Priority: High

Objectives:

* Define conventions for TypeScript projects.
* Establish typing rules.
* Document organization of types and interfaces.
* Define recommended structure for React + TypeScript projects.

Expected impact:

* Greater consistency between JavaScript and TypeScript projects.
* Better maintainability and scalability.

---

### Testing Standards

Priority: High

Objectives:

* Define conventions for unit tests.
* Define conventions for integration tests.
* Document organization of test files.
* Establish minimum validation criteria before publishing.

Expected impact:

* Better software quality.
* Greater confidence during refactors and new features.

---

### Monorepo Standards

Priority: Medium

Objectives:

* Document recommended structures for monorepos.
* Define separation between applications and shared packages.
* Establish criteria for scalable organization.

Expected impact:

* Facilitate management of complex projects.
* Maintain consistency across related applications.

---

### CI/CD Standards

Priority: Medium

Objectives:

* Define conventions for automation.
* Establish minimum validations for continuous integration.
* Document recommended deployment workflows.

Expected impact:

* Better quality control.
* More reliable deployment processes.

---

### Docker Standards

Priority: Medium

Objectives:

* Define base structure for containerized projects.
* Document conventions for Dockerfile and Docker Compose.
* Establish best practices for development and production environments.

Expected impact:

* Greater portability across environments.
* More consistent configurations.

---

### API Standards

Priority: High

Objectives:

* Define recommended organization for backend services.
* Establish conventions for controllers, services, and repositories.
* Document validation patterns and error handling.

Expected impact:

* More maintainable APIs.
* Greater consistency across backend projects.

---

### Scalable Documentation Library

Priority: High

Objectives:

* Facilitate the addition of new documents and categories.
* Maintain consistent navigation based on centralized configuration.
* Improve organization and maintainability of the documentation catalog.
* Prepare the structure for future repository expansions.

Expected impact:

* Greater project scalability.
* Lower effort to maintain and expand documentation.
* Structural consistency across future versions.

---

### Accessibility Standards

Priority: Medium

Objectives:

* Incorporate minimum accessibility criteria.
* Document best practices for web interfaces.
* Establish recommended validations.

Expected impact:

* More inclusive experiences.
* Better overall application quality.

---

## In Progress

### Documentation System Consolidation

Priority: High

Objectives:

* Refine the project's main documents.
* Align interactive documentation components with project-specific Markdown files.
* Consolidate the glossary as the official terminology reference.
* Strengthen consistency and reusability across the documentation ecosystem.
* Validate the separation of responsibilities between reusable templates and project documentation.

Expected impact:

* Greater consistency across all project documents.
* Better maintainability of the documentation library.
* Increased reusability for future repositories.
* Reduced duplication between the interface and the documentation sources.

---

## Completed

### Initial Version

Date: 2026-06-07

Achievements:

* Project creation.
* Definition of general development standards.
* Definition of organization standards.
* Establishment of a centralized documentation structure.
* Creation of base documentation for future iterations.

---

### Official Glossary Incorporation

Date: 2026-06-08

Achievements:

* Creation of `glossary.md`.
* Definition of an official source of terminology.
* Integration of the glossary with all main documents.
* Removal of duplicated definitions across documents.

---

### Centralized Documentation Navigation

Date: 2026-06-08

Achievements:

* Centralization of navigation in shared constants.
* Creation of documentation categories.
* Implementation of the SideBar component.
* Organization of documents by categories.
* Alphabetical sorting within each category.
* Removal of unused example pages.

---

### Documentation Library Construction

Date: 2026-06-10

Achievements:

* Transformation of the application into a navigable documentation library.
* Implementation of structured navigation via SideBar.
* Incorporation of a sidebar menu with expand and collapse support.
* Consolidation of a category-based navigation experience.
* Preparation of a scalable structure for future catalog expansions.

---

## On Hold

There are currently no paused initiatives.

---

## Cancelled

### Documentation Search System

Date: 2026-06-10

Reason:

Project evolution prioritized clear, structured documentation navigation through categories, discarding the incorporation of a search system in the main interface.

The initiative may be reevaluated in the future if the growth of the documentation catalog makes it necessary.

---

# Priorities

## High

Items necessary for the immediate evolution of the project.

---

## Medium

Important improvements that do not block current progress.

---

## Low

Desirable improvements with limited impact or no immediate urgency.

---

# Terminology

The terminology used in this document must remain aligned with:

```text
docs/glossary.md
```

When an initiative introduces new technical, organizational, or architectural concepts that require a shared interpretation, their inclusion in the official glossary should be evaluated.

---

# Scope of Initiatives

Including an initiative in this document does not imply a mandatory commitment to implementation.

Priorities, statuses, and objectives may change as project needs evolve.

The roadmap represents strategic direction, not a fixed plan.

---

# Fundamental Principle

Included initiatives must represent real improvement opportunities for the project.

Each documented item should contribute to the consistency, sustainability, maintainability, or evolution of the documentation and development ecosystem.
