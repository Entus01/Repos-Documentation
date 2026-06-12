# Glossary

Estado: Activo

Alcance: Definiciones y terminología utilizada en la documentación y organización de proyectos.

Referencia principal:

https://entus01.github.io/Repos-Structure/

---

# Propósito

Este documento centraliza las definiciones de términos utilizados dentro de la documentación del proyecto.

Su objetivo es reducir ambigüedades, facilitar la comunicación entre colaboradores y mantener un lenguaje consistente entre repositorios.

Cuando un término técnico, organizacional o arquitectónico requiera una interpretación compartida, deberá documentarse en este archivo.

---

## Cuándo Actualizar este Documento

Actualizar cuando:

* Se introduzca nueva terminología relevante.
* Aparezcan conceptos utilizados frecuentemente en la documentación.
* Sea necesario aclarar el significado de un término.
* Se adopten nuevas prácticas, herramientas o patrones arquitectónicos.

---

## Cuándo No Actualizar este Documento

No registrar:

* Definiciones evidentes o universalmente conocidas.
* Detalles específicos de implementación.
* Reglas de desarrollo.
* Decisiones técnicas.
* Información temporal o dependiente de una versión.

---

# Términos

## Arquitectura

Organización conceptual del sistema y relación entre sus principales componentes, módulos y flujos de información.

---

## Atomic Commit

Commit que representa un único cambio lógico, claramente identificable y fácilmente reversible.

---

## Backend

Conjunto de servicios responsables de la lógica de negocio, procesamiento de datos, persistencia y comunicación con sistemas externos.

---

## Build

Proceso mediante el cual el código fuente es transformado en una versión ejecutable o desplegable.

---

## Componente

Unidad reutilizable de interfaz o funcionalidad con una responsabilidad específica.

---

## Deploy

Proceso de publicación de una aplicación en un entorno accesible para usuarios o sistemas externos.

---

## Design Token

Valor reutilizable que representa una decisión de diseño compartida, como colores, tipografías, espaciados o tamaños.

Su objetivo es mantener consistencia visual y centralizar la configuración del sistema de diseño.

---

## Dominio

Área funcional específica dentro de un proyecto.

Ejemplos:

```text
Autenticación
Usuarios
Facturación
Inventario
```

---

## Feature

Funcionalidad o capacidad específica ofrecida por el sistema.

Una feature puede involucrar múltiples componentes, servicios y módulos relacionados.

---

## Frontend

Capa responsable de la interfaz de usuario y de la interacción directa con el sistema.

---

## Fuente de Verdad (Single Source of Truth)

Principio según el cual una información debe mantenerse en una única ubicación oficial dentro del sistema, evitando duplicidad y reduciendo inconsistencias.

Los demás componentes o módulos deben consumir esa información en lugar de mantener copias independientes.

---

## Hook

Función reutilizable que encapsula lógica compartida dentro de una aplicación React.

---

## Infraestructura

Conjunto de servicios, herramientas y recursos necesarios para ejecutar, desplegar y mantener una aplicación.

---

## Módulo

Grupo de elementos relacionados que comparten una responsabilidad o propósito común.

---

## Monorepo

Repositorio que contiene múltiples aplicaciones o paquetes relacionados dentro de una misma base de código.

---

## Página

Vista principal asociada a una ruta o sección específica de una aplicación.

---

## Patrón Arquitectónico

Conjunto de reglas y principios utilizados para organizar la estructura de un sistema.

Ejemplos:

```text
MVC
Repository Pattern
Layered Architecture
Feature Based Architecture
```

---

## Provider

Componente encargado de compartir estado, servicios o configuraciones entre múltiples partes de una aplicación.

---

## Refactor

Modificación interna del código cuyo objetivo es mejorar legibilidad, mantenibilidad o estructura sin alterar el comportamiento funcional.

---

## Repositorio

Proyecto gestionado mediante control de versiones que contiene código, documentación y recursos relacionados.

---

## Responsabilidad

Propósito claramente definido que debe cumplir un archivo, componente, módulo o servicio.

---

## Servicio

Elemento encargado de encapsular lógica de negocio o comunicación con sistemas externos.

---

## Single Page Application (SPA)

Aplicación web que actualiza contenido dinámicamente sin recargar completamente la página.

---

## Sistema

Conjunto completo de componentes, servicios y recursos que conforman una aplicación.

---

## Stakeholder

Persona o grupo con interés directo en el proyecto, su evolución o sus resultados.

---

## Tecnología Base

Herramienta o framework fundamental sobre el cual se construye el proyecto.

Ejemplos:

```text
React
Node.js
Express
Vite
```

---

## Utilidad (Utility)

Función o conjunto de funciones reutilizables destinadas a resolver tareas específicas y repetitivas.

---

## Versionado

Proceso de identificación y control de cambios mediante versiones del software.

---

# Relación con Otros Documentos

### rules.md

Define cómo deben aplicarse las convenciones de desarrollo.

---

### structure.md

Define cómo se organizan los proyectos.

---

### architecture.md

Describe la arquitectura específica del proyecto.

---

### deployment.md

Describe los procesos de construcción y despliegue.

---

### decisions.md

Registra decisiones importantes relacionadas con el proyecto.

---

# Principio Fundamental

La documentación debe utilizar una terminología consistente.

Cuando exista ambigüedad sobre el significado de un término, este documento debe considerarse la referencia oficial para su interpretación dentro del proyecto.
