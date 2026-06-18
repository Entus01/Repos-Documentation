# Development Rules

Status: Active

Scope:

* The rules defined in this document are intended to represent stable and long-term conventions.
* Temporary practices, project-specific decisions, or implementation details should be documented in their corresponding documents instead of being incorporated here.

Primary reference:

https://entus01.github.io/Repos-Structure/

---

## Purpose

This document defines the development, documentation, version control, and workflow conventions used in my projects.

Its purpose is to establish a stable set of practices that improve consistency, maintainability, and collaboration across repositories.

Unlike project-specific documents, the rules defined here are intended to be reusable and applicable across different types of software projects.

---

## Application Principle

These rules represent a set of general best practices for software project development and maintenance.

Their adoption should consider the context, size, and complexity of each project.

In small or personal projects, some conventions may be applied in a simplified form to avoid unnecessary complexity. In medium or large projects, it is recommended to adopt the full set of rules to favor maintainability, scalability, and collaboration.

---

## Commit Conventions

## Format

```text
<type>(optional-scope): brief description
```

### Allowed types

```text
feat
fix
refactor
style
docs
test
chore
build
ci
perf
revert
```

### Rules

* Ideal message <= 72 characters.
* Use a single language per commit.
* All commits must be written in English.
* One logical change per commit.
* Avoid massive or ambiguous commits.
* Commits should be atomic and easily reversible.

### Correct examples

```text
feat(auth): add login validation

fix(router): resolve protected route redirect

refactor(user): split profile service responsibilities

docs(rules): update commit conventions

style(button): improve spacing and alignment
```

### Incorrect examples

```text
fix: several project updates

chore: miscellaneous changes

update stuff
```

---

## Code Comments

## Format

```text
// Tag: brief and technical description.
```

### Allowed tags

* File
* Constant
* Function
* Section
* TODO
* FIXME

### Rules

* Comments should explain the reason for a decision.
* Avoid describing obvious code.
* Avoid decorative comments.
* Avoid obsolete comments.
* Code should be understandable without relying on extensive comments.

### Correct example

```js
// Function: Prevents duplicate requests while the current request is still active.
```

### Incorrect example

```js
// Increments the counter by one.
counter++;
```

---

## Code Documentation

### Complex functions

```js
/**
 * Retrieves the authenticated user's information.
 * @returns {Promise<User>}
 */
```

### Complex components

```jsx
/**
 * Displays a visual summary of the user's profile.
 */
```

### Strategic files

```js
/**
 * File: Manages the application's global configuration.
 */
```

### Rules

* Document only when it adds context.
* Prioritize JSDoc for complex functions, components, or modules.
* Document important responsibilities.
* Adapt the level of documentation to the project's complexity.
* Keep documentation synchronized with the code.
* Avoid redundant or outdated documentation.

---

## Project Documentation

Every project should keep up to date the documents defined within `docs/` that are part of its adopted documentation.

### Minimum recommended documentation

```text
docs/
├── changelog.md
├── roadmap.md
├── rules.md
└── structure.md
```

### Recommended documentation for medium or large projects

```text
docs/
├── glossary.md
├── architecture.md
├── decisions.md
└── deployment.md
```

### Rules

* Keep documentation aligned with the project's actual state.
* Avoid duplicated documentation across files.
* Each document should have a clearly defined responsibility.
* Use `glossary.md` as the official source for shared definitions and terminology.
* Adapt the amount of documentation to the project's size and needs.
* Avoid maintaining documents that do not add value to the current context.

---

## Naming Conventions

### Components

PascalCase

```text
UserCard.jsx
LoginForm.jsx
NavigationMenu.jsx
```

### Hooks

useXxx

```text
useAuth.js
useModal.js
useLocalStorage.js
```

### Variables and functions

camelCase

```js
currentUser
calculateTotal
validateCredentials
```

### Constants

UPPER_SNAKE_CASE

```js
MAX_RETRY_ATTEMPTS
DEFAULT_LANGUAGE
```

### Folders

The naming convention depends on the responsibility of the folder.

Feature, service, utility, and infrastructure folders should generally use kebab-case:

user-profile/
authentication-service/
shared-components/

Folders that represent React components, pages, or UI modules may use PascalCase when the repository follows a component-per-folder organization.

This convention helps maintain visual consistency between folders and the components they contain.

Examples:

Header/
Footer/
SideBar/
Content/
Roadmap/
Architecture/

### CSS files

kebab-case

```text
public-tabs.css
login-form.css
```

### CSS classes

BEM methodology

```css
.card {}
.card__title {}
.card__description {}
.card--active {}
```

### Rules

* Use descriptive names.
* Avoid generic names such as:

  * data
  * temp
  * helper
  * manager
  * utils
  * common
  * misc
* Maintain consistency throughout the repository.

### Deployment note

The project should respect these conventions to avoid case-sensitive path errors on Linux, Docker, Vercel, and GitHub Pages.

---

## React Guidelines

### Rules

* Small and reusable components.
* Avoid complex logic inside JSX.
* Keep props explicit.
* Extract reusable logic into hooks when it improves reusability or separation of responsibilities.
* Avoid components with multiple responsibilities.

### Correct

```jsx
const canEdit = user.role === "admin";
```

### Incorrect

```jsx
{
  user.role === "admin" &&
  user.permissions.includes("edit") &&
  user.active
}
```

---

## CSS Guidelines

### Rules

* Use BEM methodology.
* Avoid excessively nested selectors.
* Centralize colors, typography, spacing, and other shared values through variables or design tokens.
* Maintain visual consistency across modules.

### Correct

```css
.card__title {}
```

### Incorrect

```css
.card .header .title {}
```

---

## File Management

## Recommended import order

```text
1. External libraries
2. Hooks
3. Services
4. Components
5. Styles
6. Assets
```

### Rules

* Remove unused imports.
* Do not keep commented-out dead code.
* Use Git to recover previous versions.
* Maintain a consistent import order throughout the project.
* Keep shared configurations and metadata in a single source of truth.
* Avoid duplicating configurations or structural data across multiple files or components.

---

## Environment Variables

### Rules

* Never commit `.env` files.
* Keep an up-to-date `.env.example` file when the project uses environment variables.
* Do not expose credentials in source code.
* Document all variables required by the project.

---

## Branch Conventions

## Recommended format

```text
feature/description
fix/description
refactor/description
docs/description
```

### Examples

```text
feature/user-authentication

fix/login-validation

refactor/payment-service

docs/update-readme
```

### Rules

* Use kebab-case.
* Avoid spaces.
* Avoid generic names.
* The branch name should clearly describe the goal of the work.

---

## Pull Requests

### Rules

* One objective per Pull Request.
* Avoid excessively large Pull Requests.
* Include sufficient context for review.
* Keep related documentation synchronized.
* Resolve feedback before requesting final approval.

In individual projects where Pull Requests are not used, these recommendations may apply to the review process before merge or to the main push.

---

## Documentation Synchronization

### Rules

* Structural changes should be reflected in `structure.md`.
* Standard changes should be reflected in `rules.md`.
* Relevant changes should be reflected in `changelog.md`.
* New initiatives should be reflected in `roadmap.md`.
* Important technical decisions should be reflected in `decisions.md`.
* Deployment or infrastructure changes should be reflected in `deployment.md`.
* Architectural changes should be reflected in `architecture.md`.
* New shared terms should be evaluated for inclusion in `glossary.md`.
* Every centralized source of truth should be kept synchronized with the corresponding documentation when it has architectural or functional impact.

---

## Minimum Validation Before Integrating Changes

## Recommended validations

```bash
npm run lint
npm run build
```

Additionally:

* Verify absence of console errors.
* Validate affected functionality.
* Confirm that documentation remains valid.
* Check that there are no unused imports.

These validations are recommended before opening a Pull Request in collaborative projects or before performing the main merge or push in individual projects.

---

## Approval

### Rules

* In collaborative projects, do not merge without prior review.
* In individual projects, perform a self-review before the final merge or push.
* Every relevant modification should be justifiable through commit and history.

---

## Avoid

* Excessively large files.
* Components with multiple responsibilities.
* Redundant comments.
* Dead code.
* Ambiguous variables.
* Unused imports.
* Overly long functions.
* Commits with multiple objectives.
* Refactors mixed with new features.

---

## Terminology

The terminology used in project documentation should remain aligned with:

```text
docs/glossary.md
```

## Rules

* Avoid duplicating definitions across multiple documents.
* Use consistent terminology across repositories.
* Add new terms to the glossary when they require a shared interpretation.
* Consider `glossary.md` the official terminological reference source.

---

## Relationship with Other Documents

The following documents complement the conventions described in this file.

### rules.md

Defines the long-term development, documentation, and workflow conventions adopted across projects.

This document serves as the central reference for stable standards and should remain focused on reusable practices rather than project-specific implementation details.

---

### structure.md

Defines how projects and repositories are organized.

While `rules.md` defines how development should be carried out, `structure.md` defines where each responsibility should be located.

---

### architecture.md

Describes how the system is built and how its parts interact.

Architectural changes may require updates to both documents.

---

### deployment.md

Describes build, configuration, and deployment processes.

Operational conventions documented there should remain aligned with the rules defined here.

---

### decisions.md

Records important technical, organizational, or strategic decisions.

Changes to long-term development conventions may justify a formal decision entry.

---

### roadmap.md

Contains future initiatives that may introduce new standards or development practices.

---

### changelog.md

Records relevant changes applied to the project.

Updates to development conventions that affect repository usage should also be reflected there.

---

### glossary.md

Defines the official terminology used across the documentation ecosystem.

The concepts used in this document should remain aligned with the glossary.

---

## Fundamental Principle

Every development decision should prioritize:

```text
1. Readability
2. Consistency
3. Maintainability
4. Scalability
5. Optimization
```

If an optimization harms readability or maintainability, it should be reconsidered.
