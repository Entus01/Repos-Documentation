# Glossary

Status: Active

Scope: Definitions and terminology used in project documentation and organization.

Primary reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document centralizes the definitions of terms used within the project documentation.

Its goal is to reduce ambiguity, facilitate communication among collaborators, and maintain consistent language across repositories.

When a technical, organizational, or architectural term requires a shared interpretation, it should be documented in this file.

---

## When to Update This Document

Update when:

* New relevant terminology is introduced.
* Concepts frequently used in the documentation appear.
* It is necessary to clarify the meaning of a term.
* New practices, tools, or architectural patterns are adopted.

---

## When Not to Update This Document

Do not record:

* Obvious or universally known definitions.
* Implementation-specific details.
* Development rules.
* Technical decisions.
* Temporary or version-dependent information.

---

# Terms

## Architecture

Conceptual organization of the system and the relationship between its main components, modules, and information flows.

---

## Atomic Commit

Commit that represents a single logical change, clearly identifiable and easily reversible.

---

## Backend

Set of services responsible for business logic, data processing, persistence, and communication with external systems.

---

## Build

Process by which source code is transformed into an executable or deployable version.

---

## Component

Reusable unit of interface or functionality with a specific responsibility.

---

## Deploy

Process of publishing an application to an environment accessible to users or external systems.

---

## Design Token

Reusable value that represents a shared design decision, such as colors, typography, spacing, or sizes.

Its goal is to maintain visual consistency and centralize the design system configuration.

---

## Domain

Specific functional area within a project.

Examples:

```text
Authentication
Users
Billing
Inventory
```

---

## Feature

Specific functionality or capability offered by the system.

A feature may involve multiple related components, services, and modules.

---

## Frontend

Layer responsible for the user interface and direct interaction with the system.

---

## Single Source of Truth

Principle according to which information should be maintained in a single official location within the system, avoiding duplication and reducing inconsistencies.

Other components or modules should consume that information instead of maintaining independent copies.

---

## Hook

Reusable function that encapsulates shared logic within a React application.

---

## Infrastructure

Set of services, tools, and resources required to run, deploy, and maintain an application.

---

## Module

Group of related elements that share a common responsibility or purpose.

---

## Monorepo

Repository that contains multiple related applications or packages within the same codebase.

---

## Page

Main view associated with a specific route or section of an application.

---

## Architectural Pattern

Set of rules and principles used to organize the structure of a system.

Examples:

```text
MVC
Repository Pattern
Layered Architecture
Feature Based Architecture
```

---

## Provider

Component responsible for sharing state, services, or configurations across multiple parts of an application.

---

## Refactor

Internal code modification whose goal is to improve readability, maintainability, or structure without altering functional behavior.

---

## Repository

Project managed through version control that contains code, documentation, and related resources.

---

## Responsibility

Clearly defined purpose that a file, component, module, or service must fulfill.

---

## Service

Element responsible for encapsulating business logic or communication with external systems.

---

## Single Page Application (SPA)

Web application that updates content dynamically without fully reloading the page.

---

## System

Complete set of components, services, and resources that make up an application.

---

## Stakeholder

Person or group with a direct interest in the project, its evolution, or its outcomes.

---

## Base Technology

Fundamental tool or framework on which the project is built.

Examples:

```text
React
Node.js
Express
Vite
```

---

## Utility

Function or set of reusable functions intended to solve specific and repetitive tasks.

---

## Versioning

Process of identifying and controlling changes through software versions.

---

# Relationship with Other Documents

### rules.md

Defines how development conventions should be applied.

---

### structure.md

Defines how projects are organized.

---

### architecture.md

Describes the specific architecture of the project.

---

### deployment.md

Describes build and deployment processes.

---

### decisions.md

Records important decisions related to the project.

---

# Fundamental Principle

Documentation should use consistent terminology.

When there is ambiguity about the meaning of a term, this document should be considered the official reference for its interpretation within the project.
