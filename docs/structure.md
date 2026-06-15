# Project Structure

Status: Active

Scope: All projects that adopt the standards defined in Repos Documentation.

Primary reference:

https://entus01.github.io/Repos-Structure/

This document describes how I organize my projects and the expected responsibilities for each level of the structure.

It is not intended to define a universal architecture, but rather to document the conventions I use to maintain consistency across repositories.

---

## Application Principle

The structures described in this document represent general conventions and recommendations.

Not all projects need to adopt every directory, file, or level of organization described here. The structure should be adapted to the scope, complexity, and real needs of each repository.

It is recommended to start with a simple organization and evolve it progressively as the project grows.

---

## 1) Organization Principles

### One responsibility per folder

Each folder should represent a clearly identifiable domain, responsibility, or context.

Correct:

auth/
users/
payments/


Incorrect:

misc/
general/
common/
stuff/


### One responsibility per file

Each file should solve a single problem or primary responsibility.

Correct:

UserCard.jsx
UserService.js
UserRepository.js


Incorrect:

helpers.js
everything.js
misc.js



### Progressive scalability

The structure should work for both small projects and applications that grow over time.

The initial organization should allow evolution without constant reorganization.


### Domain-based organization

Whenever possible, group related elements by functionality before grouping by file type.

Preferred:

users/
├── components/
├── services/
├── hooks/
└── pages/


Less recommended:

components/
services/
hooks/
pages/



### Readability over complexity

The structure should prioritize clarity and ease of navigation over complex patterns or over-engineering.


## 2) Base Repository Structure

Every project should maintain a clear, consistent, and easily recognizable root structure.

Recommended base structure:

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

The exact composition will depend on the type and size of the project. Some directories or files may not be necessary in small repositories.
The `tests/` folder is recommended for projects that include automated tests, but it is not a requirement for small repositories or prototypes.

Objectives:

* Maintain a recognizable structure across projects.
* Facilitate repository navigation.
* Centralize responsibilities by location.
* Reduce the need for unnecessary exploration.


## 3) Documentation

All internal documentation that is part of the project should be centralized within the `docs/` folder.

Recommended structure:

docs/
├── glossary.md
├── changelog.md
├── roadmap.md
├── rules.md
├── structure.md
├── architecture.md
├── decisions.md
└── deployment.md

Not all projects need to maintain all of these documents. Their adoption will depend on the scope and needs of the repository.

Objectives:

* Centralize project knowledge.
* Keep documentation responsibilities separate.
* Facilitate onboarding of new collaborators.
* Avoid scattered documentation within the repository.


## 4) Responsibility Placement

Each element of the project should be placed according to its primary responsibility.

Examples:

### Source code

src/


Contains the main application implementation.


### Documentation

docs/


Contains technical, organizational, and operational documentation.


### Public assets

public/


Contains files directly accessible from the application.


### Configuration

project-root/


Contains global project configuration.


### Tests

tests/


Contains automated tests and related resources.

---

## 5) Configuration Files

Global configuration files should be placed at the project root.

Example:

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


### General Rule

If a tool requires project-level configuration, its file should be placed at the root.

### Frontend

vite.config.js
vite.config.ts
tsconfig.json
jsconfig.json


### Code Quality

eslint.config.js
.prettierrc
.prettierignore


### Deployment

vercel.json
netlify.toml


### Containers

Dockerfile
docker-compose.yml


### Automation

.github/


### Exception

If a tool allows configuration within `package.json`, it may remain there when it contributes to a simpler and more readable setup.


## 6) Frontend (Reference)

Suggested structure:

The following organization represents a reference. Each project may adopt only the folders that add value according to its complexity and architecture.

src/
│
├── app/
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


### app/

Main application configuration.

app/
├── App.jsx
├── router.jsx
└── providers.jsx



### assets/

Static resources.

assets/
├── images/
├── icons/
├── fonts/
└── logos/



### components/

Reusable components.

components/
├── Button/
├── Modal/
├── Card/
└── Input/



### features/

Organization by domain or functionality.

features/
├── auth/
├── users/
├── dashboard/
└── settings/



### hooks/

Reusable hooks.

hooks/
├── useAuth.js
├── useModal.js
└── useLocalStorage.js



### services/

API communication and external logic.

services/
├── authService.js
├── userService.js
└── apiClient.js



### styles/

Global styles and visual configuration.

styles/
├── reset.css
├── variables.css
├── globals.css
└── themes/



## 7) Backend (Reference)

Suggested structure:

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


### Common responsibilities

config/        → Global configuration.
controllers/   → Request reception and response.
services/      → Business logic.
repositories/  → Persistence access.
models/        → Entity representation.
validators/    → Input validation.
middlewares/   → Intermediate processing.



## 8) Fullstack (Reference)

Suggested monorepo:

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



## 9) Structure Evolution

The structure should evolve alongside the project.

Principles:

* Grow according to real needs.
* Maintain organizational coherence.
* Avoid unnecessary complexity.
* Prioritize clarity over anticipation.
* Favor long-term maintainability.
* Avoid creating folders or levels of organization that do not yet have a real responsibility.


## 10) Root Organization Principle

The project root should contain only clearly identifiable top-level elements.

Expected structure example:

project-root/
│
├── docs/
├── public/
├── src/
├── tests/
├── package.json
├── README.md
└── configuration files


Avoid:

project-root/
│
├── temp/
├── backup/
├── old-files/
├── random/
└── test2/


Every element at the root should have a clearly identifiable responsibility.


### Fundamental Rule

The project root should be predictable.

Any developer who opens the repository should be able to find documentation, configuration, and code in consistent locations without needing to explore the entire project.


## 11) Relationship with Other Documents

The following documents complement the organization conventions described in this file. Their use will depend on the size, complexity, and needs of each project.

### glossary.md

Defines the terminology used within the documentation.

The terms used in this document should remain aligned with the official glossary.


### rules.md

Defines development conventions and standards.

While structure.md defines where each element is organized, rules.md defines how development should be carried out.


### architecture.md

Describes how the system is built.

Repository structure and system architecture are related but independent concepts.


### deployment.md

Describes how the project is built and published.

Organizational changes that affect deployment processes should be kept synchronized between both documents.


### decisions.md

Records the context behind relevant organizational decisions.

When a structural change has significant impact, it should be recorded as a formal decision.


### roadmap.md

May contain future initiatives related to project organization.


### changelog.md

Records relevant changes in the evolution of the repository.

Important reorganizations should also be reflected in the project history.


## 12) Terminology

The terminology used in this document should remain aligned with:

docs/glossary.md


When new concepts related to organization, structure, or documentation architecture are incorporated, their inclusion in the official glossary should be evaluated.

This document should use terminology consistent with the rest of the project documentation.


## 13) Final Objective

Project organization should allow any developer to:

* Quickly understand the structure.
* Locate functionality easily.
* Join the project with minimal friction.
* Maintain the code without relying on implicit knowledge.
* Scale the system without frequent reorganizations.

Structure exists to facilitate development, not to impose unnecessary complexity.

Organization-related decisions should be documented here, while architectural, operational, or strategic decisions should be kept in their respective reference documents.
