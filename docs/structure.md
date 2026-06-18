# Project Structure

Status: Active

Scope: All projects that adopt the standards defined in Repos Documentation.

Primary reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document describes how I organize my projects and the expected responsibilities for each level of the structure.

Its purpose is to establish a consistent and predictable organization model that can be reused across repositories, reducing friction when creating, maintaining, or scaling projects.

It is not intended to define a universal architecture, but rather to document the conventions I use to maintain consistency across my development ecosystem.

---

# Objectives

* Maintain a recognizable structure across projects.
* Facilitate repository navigation.
* Centralize responsibilities by location.
* Reduce unnecessary exploration.
* Improve onboarding for new collaborators.
* Support long-term scalability without frequent reorganizations.

---

# Application Principle

The structures described in this document represent general conventions and recommendations.

Not all projects need to adopt every directory, file, or level of organization described here. The structure should be adapted to the scope, complexity, and real needs of each repository.

It is recommended to start with a simple organization and evolve it progressively as the project grows.

---

# When to Update this Document

Update this document when there are relevant changes related to:

* Project organization conventions.
* Recommended folder structures.
* Responsibility allocation between directories.
* Configuration file placement.
* Documentation organization standards.
* New reference structures for frontend, backend, or fullstack projects.

---

# When Not to Update this Document

It is not necessary to update this document for:

* Project-specific architectural decisions.
* Minor repository reorganizations.
* Temporary folders or experimental structures.
* Technology-specific implementation details.
* Functional changes unrelated to project organization.

---

# Organization Principles

## One Responsibility per Folder

Each folder should represent a clearly identifiable domain, responsibility, or context.

Correct:

```text
auth/
users/
payments/
```

Incorrect:

```text
misc/
general/
common/
stuff/
```

### One Responsibility per File

Each file should solve a single problem or primary responsibility.

Correct:

```text
UserCard.jsx
UserService.js
UserRepository.js
```

Incorrect:

```text
helpers.js
everything.js
misc.js
```

### Progressive Scalability

The structure should work for both small projects and applications that grow over time.

The initial organization should allow evolution without constant reorganization.

### Domain-Based Organization

Whenever possible, group related elements by functionality before grouping by file type.

Preferred:

```text
users/
├── components/
├── services/
├── hooks/
└── pages/
```

Less recommended:

```text
components/
services/
hooks/
pages/
```

### Readability over Complexity

The structure should prioritize clarity and ease of navigation over complex patterns or over-engineering.

---

# Recommended Structures

## Base Repository Structure

Every project should maintain a clear, consistent, and easily recognizable root structure.

Recommended base structure:

```text
project-root/
│
├── docs/
│   ├── glossary.md
│   ├── changelog.md
│   ├── roadmap.md
│   ├── rules.md
│   ├── structure.md
│   ├── architecture.md
│   ├── decisions.md
│   └── deployment.md
│
├── public/
├── src/
├── tests/
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── README.md
```

The exact composition will depend on the type and size of the project. Some directories or files may not be necessary in small repositories.

The `tests/` folder is recommended for projects that include automated tests, but it is not a requirement for small repositories or prototypes.

---

## Documentation Structure

All internal documentation that is part of the project should be centralized within the `docs/` folder.

Recommended structure:

```text
docs/
├── glossary.md
├── changelog.md
├── roadmap.md
├── rules.md
├── structure.md
├── architecture.md
├── decisions.md
└── deployment.md
```

Not all projects need to maintain all of these documents. Their adoption will depend on the scope and needs of the repository.

---

## Frontend Reference Structure

This structure represents a reference architecture and not necessarily the exact structure of this repository.

The following organization represents a reference. Each project may adopt only the folders that add value according to its complexity and architecture.

```text
src/
│
├── App/
├── assets/
├── components/
├── features/
├── hooks/
├── pages/
├── routes/
├── services/
├── styles/
├── utils/
└── constants/
```

### App/

Main application configuration.

```text
App/
├── App.jsx
├── router.jsx
└── providers.jsx
```

### assets/

Static resources.

```text
assets/
├── images/
├── icons/
├── fonts/
└── logos/
```

### components/

Reusable components.

```text
components/
├── Button/
├── Modal/
├── Card/
└── Input/
```

### features/

Organization by domain or functionality.

```text
features/
├── auth/
├── users/
├── dashboard/
└── settings/
```

### hooks/

Reusable hooks.

```text
hooks/
├── useAuth.js
├── useModal.js
└── useLocalStorage.js
```

### services/

API communication and external logic.

```text
services/
├── authService.js
├── userService.js
└── apiClient.js
```

### styles/

Global styles and visual configuration.

```text
styles/
├── reset.css
├── variables.css
├── globals.css
└── themes/
```

---

## Backend Reference Structure

Suggested structure:

```text
src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── validators/
└── utils/
```

### Common Responsibilities

```text
config/        → Global configuration.
controllers/   → Request reception and response.
services/      → Business logic.
repositories/  → Persistence access.
models/        → Entity representation.
validators/    → Input validation.
middlewares/   → Intermediate processing.
```

---

## Fullstack Reference Structure

Suggested monorepo:

```text
project-root/
│
├── apps/
│   ├── frontend/
│   └── backend/
│
├── packages/
│
├── docs/
│
├── README.md
└── package.json
```

---

# Responsibility Placement

Each element of the project should be placed according to its primary responsibility.

| Element      | Responsibility                                            |
| ------------ | --------------------------------------------------------- |
| `src/`       | Main application implementation.                          |
| `docs/`      | Technical, organizational, and operational documentation. |
| `public/`    | Files directly accessible from the application.           |
| Project root | Global project configuration.                             |
| `tests/`     | Automated tests and related resources.                    |

---

# Configuration Files

Global configuration files should be placed at the project root.

Example:

```text
project-root/
│
├── eslint.config.js
├── package.json
├── vite.config.js
├── vite.config.ts
├── tsconfig.json
├── jsconfig.json
├── vercel.json
├── netlify.toml
├── docker-compose.yml
├── Dockerfile
└── README.md
```

## General Rule

If a tool requires project-level configuration, its file should be placed at the root.

### Frontend

```text
vite.config.js
vite.config.ts
tsconfig.json
jsconfig.json
```

### Code Quality

```text
eslint.config.js
.prettierrc
.prettierignore
```

### Deployment

```text
vercel.json
netlify.toml
```

### Containers

```text
Dockerfile
docker-compose.yml
```

### Automation

```text
.github/
```

### Exception

If a tool allows configuration within `package.json`, it may remain there when it contributes to a simpler and more readable setup.

---

# Structure Evolution

The structure should evolve alongside the project.

Principles:

* Grow according to real needs.
* Maintain organizational coherence.
* Avoid unnecessary complexity.
* Prioritize clarity over anticipation.
* Favor long-term maintainability.
* Avoid creating folders or levels of organization that do not yet have a real responsibility.

## Root Organization Principle

The project root should contain only clearly identifiable top-level elements.

Expected structure example:

```text
project-root/
│
├── docs/
├── public/
├── src/
├── tests/
├── package.json
├── README.md
└── configuration files
```

Avoid:

```text
project-root/
│
├── temp/
├── backup/
├── old-files/
├── random/
└── test2/
```

Every element at the root should have a clearly identifiable responsibility.

### Fundamental Rule

The project root should be predictable.

Any developer who opens the repository should be able to find documentation, configuration, and code in consistent locations without needing to explore the entire project.

---

# Terminology

The terminology used in this document should remain aligned with:

```text
docs/glossary.md
```

When new concepts related to organization, structure, or documentation architecture are incorporated, their inclusion in the official glossary should be evaluated.

This document should use terminology consistent with the rest of the project documentation.

---

# Fundamental Principle

Project organization should facilitate development, not impose unnecessary complexity.

A well-structured repository should allow any developer to:

* Quickly understand the structure.
* Locate functionality easily.
* Join the project with minimal friction.
* Maintain the code without relying on implicit knowledge.
* Scale the system without frequent reorganizations.

Organization-related conventions belong in this document, while architectural, operational, and strategic decisions should be maintained in their respective reference documents.
