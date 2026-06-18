# Glossary

Status: Active

Scope: Official definitions and terminology used throughout the project documentation.

Main reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document centralizes the definitions of terms used across the project's documentation.

Its goal is to reduce ambiguity, facilitate communication between collaborators, and maintain a consistent vocabulary throughout the repository.

When a technical, organizational, or architectural concept requires a shared interpretation, its definition should be maintained here.

---

## Objectives

* Provide a single source of truth for project terminology.
* Reduce ambiguity across documentation.
* Facilitate onboarding of new collaborators.
* Maintain consistency in the language used throughout the repository.
* Clarify project-specific interpretations of technical concepts.
* Support the long-term maintainability of the documentation.

---

## Writing Guidelines

Glossary entries should follow these general principles:

* Keep definitions concise and easy to understand.
* Use consistent terminology across all project documents.
* Avoid circular or ambiguous definitions.
* Include examples only when they improve understanding.
* Focus on the meaning of the concept rather than implementation details.
* Update existing entries instead of creating duplicate definitions.

---

# Terms

## Architecture

The conceptual organization of the application and the relationship between its main modules, components, and information flows.

Within this project, architecture refers to the current implementation documented in `docs/architecture.md`.

---

## Atomic Commit

A commit that represents a single logical change, making it easy to understand, review, and revert if necessary.

---

## Build

The process of transforming the source code into a production-ready static application.

For this project, the build is generated using:

```text
npm run build
```

---

## Component

A reusable user interface unit with a single, clearly defined responsibility.

The application follows a component-based architecture where components are organized according to their role within the system.

---

## Content Area

The main application region responsible for displaying the active documentation content.

Within this project, the Content Area configures document routes from the centralized navigation model and renders the selected document component.

---

## Deploy

The process of publishing the generated application so that it becomes accessible to users.

For this project, deployment is performed through GitHub Pages.

---

## Design Token

A reusable value representing a shared visual decision, such as colors, typography, spacing, or dimensions.

Design tokens are centralized within the global style system to maintain visual consistency.

---

## Document

A reusable piece of project documentation presented through the application interface.

Each document addresses a single responsibility and is organized into categories within the document library.

---

## Document Component

A React component responsible for presenting the reusable guidance, structure, or content associated with a specific documentation page.

Document components are registered in the navigation model and rendered by the Content Area.

---

## Document Library

The application model that organizes documentation as a catalog of categorized documents.

The document library is navigated through the SideBar and rendered through the Content Area.

---

## Feature

A specific functionality or capability provided by the system.

In this repository, features mainly correspond to documentation navigation, rendering, and organization capabilities.

---

## Frontend

The part of the application responsible for rendering the user interface and managing user interaction.

This project consists exclusively of a frontend application.

---

## Module

A group of related components or files that share a common responsibility.

Examples within this project include the Header, SideBar, Footer, and Content Area modules.

---

## Navigation Model

The centralized structure that defines categories, documents, routes, and navigation behavior.

The navigation model is configured through:

```text
src/constants/navigation.js
```

and acts as the single source of truth for the document library.

---

## Page

A top-level view associated with a specific route within the application.

Each documentation file is rendered through a dedicated page component.

---

## Repository

A version-controlled project containing source code, documentation, assets, and configuration files.

This repository acts both as an application and as a centralized documentation reference.

---

## Responsibility

The specific purpose assigned to a file, component, module, or document.

Each element should fulfill a single primary responsibility and avoid overlapping concerns.

---

## Single Page Application (SPA)

A web application that dynamically updates its content without requiring full page reloads.

Repos Documentation is implemented as a Single Page Application using React and React Router.

---

## Single Source of Truth

A principle stating that information should exist in one official location to avoid duplication and inconsistencies.

This principle is applied throughout the project, particularly in navigation configuration and documentation management.

---

## Structure

The logical organization of the repository and its directories.

The project structure and organization rules are documented in `docs/structure.md`.

---

## Terminology

The shared vocabulary officially adopted by the project.

Whenever ambiguity exists regarding the meaning of a concept, this glossary should be considered the authoritative reference.

---

## Versioning

The process of identifying and managing changes through version numbers.

The project follows the `MAJOR.MINOR.PATCH` convention documented in `docs/changelog.md`.

---

## Fundamental Principle

Documentation should use a consistent and shared terminology.

When there is uncertainty about the meaning of a concept, this document should be considered the official reference for its interpretation within the project.

Its main purpose is to establish a common language that improves communication, reduces misunderstandings, and supports the long-term evolution of the repository.
