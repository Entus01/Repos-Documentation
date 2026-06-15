# Architecture

Status: Active

Scope: Documentation of the project's current architecture.

Main reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document describes the project-specific architecture.

Its goal is to provide a clear view of how the system is built, how its main modules relate to each other, and which architectural decisions are currently implemented.

Unlike other reusable reference documents, this document should be adapted to the particular needs of each project.

---

## Objectives

* Facilitate general understanding of the system.
* Document the currently implemented architecture.
* Reduce reliance on implicit knowledge.
* Facilitate onboarding of new collaborators.
* Serve as a reference for future technical decisions.
* Maintain an up-to-date view of the project's logical structure.

---

## Current Architecture

### Application Type

```text
Single Page Application (SPA)
```

Built with:

```text
React
React Router
Vite
```

---

## Architectural Summary

Repos Documentation is a web application focused on consulting documentation.

Its purpose is to present standards, conventions, and reusable documentation through an interface that simulates a document library organized by categories.

The application consumes static content stored within the repository itself and currently does not require a backend or external persistence.

---

## Main Technologies

```text
React
React Router
Vite
JavaScript
CSS
```

---

## Main Modules

### App

Responsible for:

* Configuring React Router.
* Defining the general structure of the application.
* Integrating Header, SideBar, and Footer.
* Managing the main content area.

---

### Header

Responsible for:

* Displaying the project's visual identity.
* Displaying the logo and project name.
* Acting as the main point of access and recognition for the application.

---

### SideBar

Responsible for:

* Displaying the document catalog.
* Organizing documents by categories.
* Managing category expansion and collapse.
* Facilitating navigation between documents via React Router.

---

### Content Area

Responsible for:

* Displaying the selected document.
* Managing routes defined via React Router.

---

### Footer

Responsible for:

* Displaying author and project information.
* Providing social links and reference resources.

---

## Navigation Model

Navigation is based on centralized data sources defined in:

```text
src/constants/navigation.js
```

These structures contain the information needed to build the navigation interface without duplicating configurations between components.

---

### Categories

They represent the main sections of the document library.

Example:

```text
Introduction
Standards
Project Design
Project Management
```

---

### Documents

Each document contains the minimum information needed to generate navigation:

```text
id
name
path
category
```

This strategy allows maintaining a single source of truth for the document structure and simplifies the addition of new categories or documents.

---

## General Flow

```text
User
   │
   ▼
SideBar
   │
   ▼
React Router
   │
   ▼
Selected Route
   │
   ▼
Document
```

---

## Architectural Organization

The application currently uses an architecture based on components and separated responsibilities.

```text
src/
│
├── app/
├── assets/
├── components/
├── constants/
├── pages/
└── styles/
```

### Applied Principles

* Separation of responsibilities.
* Reusable components.
* Centralized configuration.
* Declarative navigation.
* Progressive scalability.
* Global style system based on design tokens.

---

## Architectural Dependencies

### Header

Depends on:

```text
Logo
Visual resources
Global styles
```

---

### SideBar

Depends on:

```text
navigation.js
React Router
Internal category expansion state
```

---

### App

Depends on:

```text
Header
SideBar
Footer
React Router
```

---

## External Integrations

The project currently does not use:

```text
External APIs
Databases
Cloud services
Authentication services
```

All information is managed locally within the repository.

---

## Technical Considerations

### Centralized Navigation

The navigation structure must be maintained in:

```text
src/constants/navigation.js
```

Consumer components must not duplicate this information.

---

### Style Architecture

The application uses an organized global style structure decoupled from components.

Shared styles, design variables, and global rules must be centralized within:

```text
src/styles/
```

This organization allows maintaining visual consistency and facilitates the evolution of the design system.

---

### Document Library

Content organization should follow a library-like structure:

1. Categories.
2. Documents within each category.
3. Consistent and predictable order.

---

### Scalability

The current architecture allows:

* Adding new categories.
* Incorporating new documents.
* Creating new routes.
* Reorganizing navigation without modifying the main components.
* Evolving the design system through global styles and tokens.

---

## Relationship with Other Documents

### glossary.md

Defines the terminology used within the project documentation.

---

### structure.md

Describes where project elements are located.

---

### rules.md

Describes how project elements should be developed and maintained.

---

### decisions.md

Documents why certain architectural decisions were made.

---

### roadmap.md

Documents possible future changes or evolutions of the architecture.

---

## Terminology

The terminology used in this document must remain aligned with the definitions established in:

```text
docs/glossary.md
```

When new architectural concepts, patterns, or terms that require a shared interpretation within the project are introduced, they must be registered in `glossary.md`.

---

## Architectural Change Log

Any relevant architectural modification should also be recorded in:

```text
docs/decisions.md
```

when it involves a significant technical decision.

---

## Fundamental Principle

This document must represent the actual architecture of the project and not an idealized architecture.

If there is a difference between the documentation and the implementation, the documentation must be updated to reflect the actual state of the system.

Its main purpose is to serve as the source of truth about how the project is currently built.
