# Architecture

Estado: Activo

Alcance: Documentación de la arquitectura actual del proyecto.

Referencia principal:

https://entus01.github.io/Repos-Structure/

---

# Propósito

Este documento describe la arquitectura específica del proyecto.

Su objetivo es proporcionar una visión clara de cómo está construido el sistema, cómo se relacionan sus principales módulos y cuáles son las decisiones arquitectónicas actualmente implementadas.

A diferencia de otros documentos de referencia reutilizables, este documento debe adaptarse a las necesidades particulares de cada proyecto.

---

## Objetivos

* Facilitar la comprensión general del sistema.
* Documentar la arquitectura actualmente implementada.
* Reducir la dependencia del conocimiento implícito.
* Facilitar la incorporación de nuevos colaboradores.
* Servir como referencia para futuras decisiones técnicas.
* Mantener una visión actualizada de la estructura lógica del proyecto.

---

## Cuándo Actualizar este Documento

Actualizar cuando exista algún cambio relevante relacionado con:

* Arquitectura general del sistema.
* Organización de módulos principales.
* Flujos de comunicación.
* Integraciones externas.
* Patrones arquitectónicos utilizados.
* Dependencias estructurales importantes.
* Tecnologías que modifiquen el funcionamiento general del sistema.

---

## Cuándo No Actualizar este Documento

No es necesario actualizar este documento para:

* Correcciones menores.
* Ajustes visuales.
* Refactors internos sin impacto arquitectónico.
* Cambios de contenido.
* Actualizaciones de documentación no relacionadas con arquitectura.

---

## Estructura Recomendada

La documentación arquitectónica debería responder, como mínimo, las siguientes preguntas.

### ¿Qué arquitectura utiliza el proyecto?

Ejemplo:

```text
Single Page Application (SPA)

Client / Server

Monolito

Monorepo

Microservicios
```

---

### ¿Cuáles son los módulos principales?

Ejemplo:

```text
Frontend
Backend
Autenticación
Pagos
Administración
```

---

### ¿Cómo interactúan entre sí?

Ejemplo:

```text
Usuario
   │
   ▼
Frontend
   │
   ▼
API
   │
   ▼
Backend
   │
   ▼
Base de Datos
```

---

### ¿Qué servicios externos utiliza?

Ejemplo:

```text
Firebase
Stripe
OpenAI
AWS
Cloudinary
```

---

### ¿Qué patrones arquitectónicos se utilizan?

Ejemplo:

```text
Feature Based Architecture

MVC

Repository Pattern

Layered Architecture

Domain Driven Design
```

---

## Plantilla Recomendada

```text
# Arquitectura Actual

## Resumen

Descripción general de la arquitectura implementada.

## Tecnologías Principales

Listado de tecnologías relevantes.

## Módulos Principales

Descripción de los módulos que conforman el sistema.

## Flujo General

Representación simplificada del flujo de datos.

## Integraciones Externas

Servicios externos utilizados por el proyecto.

## Dependencias Arquitectónicas

Relaciones importantes entre módulos.

## Consideraciones Técnicas

Aspectos relevantes para el mantenimiento y evolución.
```

---

## Relación con Otros Documentos

### glossary.md

Define la terminología utilizada dentro de la documentación del proyecto.

---

### structure.md

Describe dónde se ubican los elementos del proyecto.

---

### rules.md

Describe cómo deben desarrollarse y mantenerse los elementos del proyecto.

---

### decisions.md

Documenta por qué se tomaron determinadas decisiones arquitectónicas.

---

### roadmap.md

Documenta posibles cambios o evoluciones futuras de la arquitectura.

---

## Terminología

La terminología utilizada en este documento debe mantenerse alineada con las definiciones establecidas en:

```text
docs/glossary.md
```

Cuando se introduzcan nuevos conceptos arquitectónicos, patrones o términos que requieran una interpretación compartida dentro del proyecto, estos deberán registrarse en `glossary.md`.

Este documento debe utilizar la terminología definida oficialmente, evitando duplicar definiciones o mantener glosarios paralelos.

---

## Registro de Cambios Arquitectónicos

Toda modificación arquitectónica relevante debería registrarse también en:

```text
docs/decisions.md
```

cuando implique una decisión técnica significativa.

---

## Principio Fundamental

Este documento debe representar la arquitectura real del proyecto y no una arquitectura idealizada.

Si existe una diferencia entre la documentación y la implementación, la documentación debe actualizarse para reflejar el estado real del sistema.

Su propósito principal es servir como fuente de verdad sobre cómo está construido actualmente el proyecto.


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


# Architecture

Estado: Activo

Alcance: Documentación de la arquitectura actual del proyecto.

Referencia principal:

https://entus01.github.io/Repos-Structure/

---

# Propósito

Este documento describe la arquitectura específica del proyecto.

Su objetivo es proporcionar una visión clara de cómo está construido el sistema, cómo se relacionan sus principales módulos y cuáles son las decisiones arquitectónicas actualmente implementadas.

A diferencia de otros documentos de referencia reutilizables, este documento debe adaptarse a las necesidades particulares de cada proyecto.

---

## Objetivos

* Facilitar la comprensión general del sistema.
* Documentar la arquitectura actualmente implementada.
* Reducir la dependencia del conocimiento implícito.
* Facilitar la incorporación de nuevos colaboradores.
* Servir como referencia para futuras decisiones técnicas.
* Mantener una visión actualizada de la estructura lógica del proyecto.

---

## Arquitectura Actual

### Tipo de Aplicación

```text
Single Page Application (SPA)
```

Construida con:

```text
React
React Router
Vite
```

---

## Resumen Arquitectónico

Repos Structure es una aplicación web orientada a la consulta de documentación.

Su propósito es presentar estándares, convenciones y documentación reutilizable mediante una interfaz que simula una biblioteca documental organizada por categorías.

La aplicación consume contenido estático almacenado dentro del propio repositorio y actualmente no requiere backend ni persistencia externa.

---

## Tecnologías Principales

```text
React
React Router
Vite
JavaScript
CSS
```

---

## Módulos Principales

### App

Responsable de:

* Configurar React Router.
* Definir la estructura general de la aplicación.
* Integrar Header, SideBar y Footer.
* Gestionar el área principal de contenido.

---

### Header

Responsable de:

* Mostrar identidad visual del proyecto.
* Mostrar logotipo.
* Mostrar el nombre del proyecto.

---

### SideBar

Responsable de:

* Mostrar el catálogo documental.
* Organizar documentos por categorías.
* Gestionar la expansión y colapso de categorías.
* Facilitar la navegación entre documentos.

---

### Content Area

Responsable de:

* Mostrar el documento seleccionado.
* Gestionar las rutas definidas mediante React Router.

---

### Footer

Responsable de:

* Mostrar información global del proyecto.
* Proporcionar elementos auxiliares de navegación o referencia.

---

## Modelo de Navegación

La navegación se basa en dos fuentes de datos centralizadas:

```text
CATEGORIES
NAV_ITEMS
```

Definidas dentro de:

```text
src/constants/navigation.js
```

---

### Categorías

Representan las secciones principales de la biblioteca documental.

Ejemplo:

```text
Introduction
Standards
Project Design
Project Management
```

---

### Documentos

Cada documento contiene:

```text
id
name
path
category
```

Estas propiedades permiten generar automáticamente la navegación sin duplicar información dentro de los componentes.

---

## Flujo General

```text
Usuario
   │
   ▼
SideBar
   │
   ▼
React Router
   │
   ▼
Ruta Seleccionada
   │
   ▼
Documento
```

---

## Organización Arquitectónica

Actualmente la aplicación utiliza una arquitectura basada en componentes.

```text
src/
│
├── app/
├── assets/
├── components/
├── constants/
├── styles/
└── pages/
```

### Principios Aplicados

* Separación de responsabilidades.
* Componentes reutilizables.
* Configuración centralizada.
* Navegación declarativa.
* Escalabilidad progresiva.

---

## Dependencias Arquitectónicas

### Header

Depende de:

```text
Logo
Propiedades visuales
```

---

### SideBar

Depende de:

```text
navigation.js
React Router
```

---

### App

Depende de:

```text
Header
SideBar
Footer
React Router
```

---

## Integraciones Externas

Actualmente el proyecto no utiliza:

```text
APIs externas
Bases de datos
Servicios cloud
Servicios de autenticación
```

Toda la información es gestionada localmente dentro del repositorio.

---

## Consideraciones Técnicas

### Navegación Centralizada

La estructura de navegación debe mantenerse en:

```text
src/constants/navigation.js
```

Los componentes consumidores no deben duplicar esta información.

---

### Biblioteca Documental

La organización del contenido debe seguir una estructura similar a una biblioteca:

1. Categorías.
2. Documentos dentro de cada categoría.
3. Orden consistente y predecible.

---

### Escalabilidad

La arquitectura actual permite:

* Agregar nuevas categorías.
* Incorporar nuevos documentos.
* Crear nuevas rutas.
* Reorganizar navegación sin modificar componentes principales.

---

## Relación con Otros Documentos

### glossary.md

Define la terminología utilizada dentro de la documentación del proyecto.

---

### structure.md

Describe dónde se ubican los elementos del proyecto.

---

### rules.md

Describe cómo deben desarrollarse y mantenerse los elementos del proyecto.

---

### decisions.md

Documenta por qué se tomaron determinadas decisiones arquitectónicas.

---

### roadmap.md

Documenta posibles cambios o evoluciones futuras de la arquitectura.

---

## Terminología

La terminología utilizada en este documento debe mantenerse alineada con las definiciones establecidas en:

```text
docs/glossary.md
```

Cuando se introduzcan nuevos conceptos arquitectónicos, patrones o términos que requieran una interpretación compartida dentro del proyecto, estos deberán registrarse en `glossary.md`.

---

## Registro de Cambios Arquitectónicos

Toda modificación arquitectónica relevante debería registrarse también en:

```text
docs/decisions.md
```

cuando implique una decisión técnica significativa.

---

## Principio Fundamental

Este documento debe representar la arquitectura real del proyecto y no una arquitectura idealizada.

Si existe una diferencia entre la documentación y la implementación, la documentación debe actualizarse para reflejar el estado real del sistema.

Su propósito principal es servir como fuente de verdad sobre cómo está construido actualmente el proyecto.
