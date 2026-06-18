# Changelog

Status: Active

Scope: Record of relevant project changes.

Primary reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document records significant changes made to the project over time.

It is not intended to replace the Git history, but to provide a summarized view of the functional, structural, and architectural evolution of the repository.

Its goal is to allow anyone to quickly understand how the project has evolved without needing to review the complete commit history.

---

## Rules

Record only changes with relevant impact.

### Include

* New features.
* Architectural changes.
* Major reorganizations.
* Changes to project structure.
* Addition or removal of technologies.
* Changes to deployment processes.
* Modifications to standards or conventions.
* Changes that affect project usage.
* Creation of new reference documents.
* Removal or replacement of relevant documentation.

### Do not include

* Routine commits.
* Minor fixes.
* Style adjustments.
* Small refactors.
* Minor documentation updates.
* Internal changes with no visible impact.
* Trivial dependency updates.

---

## Versioning Rule

Every new project version must include a corresponding entry in this document before being published.

Published versions should not exist without a changelog record.

---

## Format

```text
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
```

---

## Versioning Convention

Recommended format:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
1.0.0
1.1.0
1.2.0
2.0.0
```

### MAJOR

Incompatible changes or major restructurings.

Examples:

* Significant architecture change.
* Complete structure reorganization.
* Replacement of main technologies.
* Changes that directly affect how the project is used.

---

### MINOR

New features or extensions compatible with previous versions.

Examples:

* New documents.
* New guides.
* New references.
* New conventions.

---

### PATCH

Minor fixes or improvements.

Examples:

* Bug fixes.
* Content adjustments.
* Writing improvements.
* Example or reference corrections.

---

# Template for New Entries

```text
## [X.Y.Z] - YYYY-MM-DD

### Added

-

### Changed

-

### Removed

-

### Fixed

-

### Notes

-
```

---

# Project History

## [1.3.0] - 2026-06-17

### Added

* Addition of dedicated React document components for the main documentation pages.
* Registration of document components in the centralized navigation configuration.
* Implementation of route generation from the navigation model.

### Changed

* Standardization of Markdown documentation and interactive document components.
* Unification of project documentation language to English.
* Integration of document rendering into the Content area through the centralized navigation model.
* Refinement of the library-inspired visual layout for the documentation experience.
* Update of `architecture.md` to reflect the current rendering flow and document navigation model.

### Removed

* Removal of the standalone `DocumentPage` layer after consolidating document rendering inside the Content area.

### Notes

* The documentation library continues to move toward a centralized model where navigation metadata drives both sidebar navigation and route generation.
* The current architecture favors direct rendering of document components from `NAV_ITEMS`, reducing an intermediate layer while preserving a shared document layout.

---

## [1.2.0] - 2026-06-10

### Added

* Implementation of categorized documentation navigation through an interactive SideBar.
* Addition of a sidebar menu with support for expanding and collapsing categories.
* Addition of social links and author information in the Footer.
* Consolidation of a global style architecture based on shared files and design tokens.

### Changed

* Centralization of navigation configuration in reusable constants.
* Simplification of the Header to focus on visual identity and main navigation.
* Reorganization of the style architecture to improve consistency and maintainability.
* Update of architectural and planning documentation to reflect the project's evolution.

### Removed

* Removal of template pages and temporary components that were no longer part of the main experience.
* Removal of the search component from the interface as part of layout simplification.

### Notes

* The interface evolves toward a more organized and scalable documentation library model.
* A structure based on centralized configuration and reusable components is consolidated as the foundation for future extensions.

---

## [1.1.0] - 2026-06-08

### Added

* Addition of `glossary.md` as the official terminology source.
* Initial implementation of documentation navigation through Sidebar.
* Organization of documents into thematic categories.
* Centralization of navigation configuration in reusable constants.

### Changed

* Update of all documentation to incorporate references to `glossary.md`.
* Refinement of responsibilities and relationships between documents.
* Reorganization of the project's main navigation.
* Evolution of the interface toward a documentation library model.

### Removed

* Removal of temporary pages used during the initial development process:

  * `Examples`
  * `Standards`
  * `Templates`

### Notes

* The documentation catalog concept is adopted as the main navigation mechanism.
* The documentation structure is consolidated as the functional core of the project.

---

## [1.0.0] - 2026-06-07

### Added

* Initial creation of the Repos Documentation project.
* Definition of the base documentation structure.
* Creation of the `docs/` folder as the official location for internal documentation.
* Addition of the following documents:

  * `rules.md`
  * `structure.md`
  * `changelog.md`
  * `roadmap.md`
  * `architecture.md`
  * `decisions.md`
  * `deployment.md`

### Changed

* A centralized methodology is established for documenting project organization, conventions, and structure.

### Notes

* First public version of the project.
* Starting point for the future evolution of documented standards.

---

## Relationship with Other Documents

### roadmap.md

Defines the project's future initiatives.

Completed initiatives should subsequently be reflected in the changelog.

---

### decisions.md

Records the context and reasons behind relevant changes.

The changelog records the outcome of those changes.

---

### architecture.md

Important architectural changes should be reflected in both `architecture.md` and this document.

---

### deployment.md

Relevant changes related to build, infrastructure, or deployment should be recorded when they affect the project's evolution.

---

### glossary.md

Defines the terminology used within the documentation.

Terms used in this document should remain aligned with `glossary.md`.

---

## Terminology

The terminology used in this document should remain aligned with:

```text
docs/glossary.md
```

When a new entry introduces a technical, organizational, or architectural term relevant to multiple documents, its inclusion in the official glossary should be evaluated.

---

## Relationship with Git

The changelog complements the Git history.

### Git answers:

```text
What exactly changed?
```

### Changelog answers:

```text
Why was that change important for the project's evolution?
```

Changelog entries represent functional project versions and may group multiple related commits under the same evolution or initiative.

Both mechanisms should be kept in sync to ensure traceability and historical context.

---

## Fundamental Principle

The commit history explains the work performed.

The changelog explains the project's evolution.

For this reason, each entry should focus on the impact of the change and not on specific implementation details, avoiding becoming a copy of the Git history.

This document serves as a historical reference for the project and as a reusable template to maintain consistency across repositories.
