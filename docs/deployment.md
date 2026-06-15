# Deployment

Status: Active

Scope: Documentation of project build, configuration, and deployment.

Main reference:

[https://entus01.github.io/Repos-Structure/](https://entus01.github.io/Repos-Structure/)

---

# Purpose

This document describes the project build, configuration, and deployment process.

Its goal is to provide a clear and up-to-date reference on how to prepare, publish, and maintain a functional version of the system across the available environments.

Unlike the project's reusable documents, this document should be adapted to the specific needs of each repository.

---

## Objectives

* Document the current deployment process.
* Facilitate publishing new versions.
* Reduce operational errors.
* Centralize environment-related information.
* Facilitate onboarding of new collaborators.
* Serve as a reference for maintenance tasks.

---

## When to Update this Document

Update when there is any change related to:

* Deployment platforms.
* Build processes.
* Required environment variables.
* Publishing automations.
* Infrastructure configuration.
* External services used during deployment.
* Versioning or release strategies.

---

## When Not to Update this Document

It is not necessary to update this document for:

* Functional changes to the system.
* Visual adjustments.
* Internal refactors.
* Updates that do not affect build or deployment.

---

## Recommended Structure

The deployment documentation should answer, at minimum, the following questions.

### How is the project built?

Example:

```text
npm install

npm run build
```

---

### Where is it deployed?

Example:

```text
GitHub Pages

Vercel

Netlify

AWS

Docker
```

---

### What environments exist?

Example:

```text
Development

Testing

Staging

Production
```

---

### What environment variables does it require?

Example:

```text
VITE_API_URL

DATABASE_URL

JWT_SECRET
```

---

### What automations exist?

Example:

```text
GitHub Actions

CI/CD

Automatic Deploy
```

---

### How to publish a new version?

Example:

```text
1. Run tests.
2. Generate build.
3. Update documentation.
4. Create release.
5. Run deployment.
```

---

## Recommended Template

```text
# Current Deployment

## Summary

General description of the deployment process.

## Environments

List of available environments.

## Requirements

Dependencies needed to build the project.

## Environment Variables

Variables required for execution and deployment.

## Build

Commands used to generate the application.

## Deployment Platform

Services used to publish the project.

## Automation

Available automatic processes.

## Publishing Procedure

Steps required to release a new version.

## Operational Considerations

Important information for maintenance and support.
```

---

## Relationship with Other Documents

### architecture.md

Describes how the system is built.

The architecture may influence decisions related to build, infrastructure, and deployment.

---

### structure.md

Describes how the repository is organized.

The location of files related to infrastructure, automation, and configuration must remain aligned with the documented structure.

---

### rules.md

Describes the rules and conventions used during development.

The processes documented in deployment.md must respect the rules defined by the project.

---

### roadmap.md

May contain future improvements related to infrastructure, automation, or deployment.

---

### decisions.md

Must record relevant decisions related to infrastructure, hosting, or publishing processes.

---

### changelog.md

Must record relevant changes that affect the project's build, configuration, or deployment.

---

### glossary.md

Defines the terminology used within the documentation.

The terms used in this document must remain aligned with glossary.md.

---

## Terminology

The terminology used in this document must remain aligned with:

```text
docs/glossary.md
```

When new concepts related to infrastructure, automation, environments, or deployment are incorporated, their inclusion in the official glossary should be evaluated.

---

## Operational Change Log

Any relevant modification related to:

* Infrastructure.
* Deployment platforms.
* Automations.
* Build processes.
* Publishing processes.

should also be recorded in:

```text
docs/changelog.md
```

and, when it involves a significant technical decision, in:

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
* Sensitive information.

Required variables must be documented using descriptive names and maintained through appropriate configuration files.

Example:

```text
.env.example
```

---

## Fundamental Principle

This document must represent the actual process used to build and deploy the project.

If there is a difference between the documentation and the current operational process, the documentation must be updated to reflect the actual behavior of the system.

Its main purpose is to serve as the source of truth about how to publish and maintain the project in operation.
