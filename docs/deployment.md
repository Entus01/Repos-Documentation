# Deployment

Status: Active

Scope: Documentation of the project's current build, configuration, and deployment process.

Main reference:

https://entus01.github.io/Repos-Structure/

---

# Purpose

This document describes the build, configuration, and deployment process currently used by the project.

Its goal is to provide a clear and up-to-date reference for preparing, publishing, and maintaining a functional version of the application.

Unlike the reusable deployment template documented elsewhere, this document reflects the actual operational process used by the repository.

---

## Objectives

* Document the current deployment workflow.
* Facilitate publishing new versions.
* Reduce operational errors.
* Centralize build and environment information.
* Facilitate onboarding of new collaborators.
* Serve as a reference for future maintenance tasks.

---

## Current Deployment

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

## Deployment Summary

Repos Documentation is a static web application that does not require a backend or external infrastructure services.

The application is built locally using Vite and published as a static site through GitHub Pages.

At the current stage of the project, the deployment process is intentionally simple and does not rely on automated CI/CD pipelines.

---

## Environments

The project currently uses the following environments:

```text
Development
Production
```

### Development

Local environment used during active development.

Runs through the Vite development server:

```bash
npm run dev
```

---

### Production

Static build generated locally and published to GitHub Pages.

The production version is available at:

https://entus01.github.io/Repos-Structure/

---

## Requirements

The following tools are required to build and publish the project:

```text
Node.js
npm
Git
```

A GitHub account with access to the repository is also required to publish updates.

---

## Environment Variables

The project currently does not require custom environment variables for execution or deployment.

If environment-specific configuration becomes necessary in the future, it should be documented here and managed through an appropriate configuration file such as:

```text
.env.example
```

---

## Build Process

The production build is generated using the following commands:

```bash
# Install dependencies
npm install

# Generate production build
npm run build
```

The generated output is placed inside the default Vite build directory:

```text
dist/
```

---

## Vite Configuration

The project currently uses Vite as the build tool.

The active configuration is maintained in:

```text
vite.config.js
```

For GitHub Pages deployments under a repository path, the public base path must be reviewed before publishing.

In this project, the production URL uses the repository path:

```text
/Repos-Structure/
```

If static assets fail to load after deployment, the Vite `base` option should be validated and aligned with the GitHub Pages path before publishing a new version.

---

## Deployment Platform

The project is currently deployed using:

```text
GitHub Pages
```

The repository is configured to publish the generated static files as the production version of the application.

---

## Automation

The deployment process is currently performed manually.

No CI/CD pipeline or automated deployment workflow has been configured at this stage of the project.

Future automation solutions may include:

```text
GitHub Actions
Automatic build validation
Automatic deployment
```

---

## Publishing Procedure

The recommended process for publishing a new version is:

1. Verify that the project builds correctly.
2. Update the relevant documentation.
3. Review and commit pending changes.
4. Generate the production build.
5. Validate the generated build locally when possible.
6. Publish the updated version to GitHub Pages.
7. Verify that the deployed application is working correctly.

---

## Operational Considerations

### Documentation Synchronization

Any relevant change affecting the build or deployment process should be reflected in this document to keep it aligned with the actual operational workflow.

---

### Case-Sensitive Paths

The production environment should be treated as case-sensitive.

Imports, folder names, and file names must match exactly to avoid build or runtime failures in Linux-based environments and static hosting platforms.

This is especially relevant for component folders and route-related modules, where differences such as uppercase and lowercase directory names can work locally on Windows but fail after deployment.

---

### Single Page Application Routing

The application uses React Router and is published as a static site.

When using browser-based routing on GitHub Pages, internal routes should be validated after deployment, including direct navigation and browser refresh on document pages.

If direct access to nested routes fails, the routing or hosting fallback strategy must be reviewed before publishing the next version.

---

### Deployment Changes

Relevant modifications to infrastructure, publishing procedures, or deployment platforms should also be recorded in:

```text
docs/changelog.md
```

and, when they involve an important long-term decision, in:

```text
docs/decisions.md
```

---

## Security Considerations

This document must never include:

* Credentials.
* Tokens.
* Secrets.
* Private keys.
* Sensitive configuration values.

Operational or environment-specific information should always be documented using descriptive placeholders instead of exposing real values.

---

## Fundamental Principle

This document must represent the actual process currently used to build and deploy the project.

If the operational workflow changes, the documentation must be updated to reflect the current implementation rather than an idealized or outdated process.

Its main purpose is to serve as the source of truth for publishing and maintaining the project in operation.
