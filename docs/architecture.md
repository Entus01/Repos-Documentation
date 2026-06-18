# Architecture

Status: Active

Scope: Documentation of the project's current architecture.

Main reference:

https://entus01.github.io/Repos-Structure/

---

## Purpose

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

The application consumes static documentation content stored within the repository and rendered through reusable React components. It currently does not require a backend or external persistence layer.

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

* Configuring the document routes through React Router.
* Resolving document routes generated from the centralized navigation configuration.
* Displaying the content associated with the active route.
* Rendering each selected document component inside a shared document layout.

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
document
```

Each document entry references the React component responsible for rendering its content through the `document` property, allowing routes to be generated from a single centralized configuration.

---

```text
User
   |
   v
SideBar
   |
   v
navigation.js
   |
   v
React Router
   |
   v
Content
   |
   v
Document Component
```

---

## Architectural Organization

The application currently uses an architecture based on components and separated responsibilities.

```text
src/
|
|-- App/
|-- assets/
|-- components/
|-- constants/
|-- pages/
`-- styles/
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
Content
Footer
```

---

### Content Area

Depends on:

```text
navigation.js
React Router
Document page components
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

This centralized configuration acts as the single source of truth for:

* Sidebar navigation.
* Document metadata.
* Route generation.
* Document component resolution.

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
* Generating new routes through centralized configuration.
* Reorganizing navigation without duplicating route or sidebar configuration.
* Reusing the shared document layout defined in the content area.
* Evolving the design system through global styles and tokens.

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
