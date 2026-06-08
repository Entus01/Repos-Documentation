# Changelog

Estado: Activo

Alcance: Registro de cambios relevantes del proyecto.

Referencia principal:

[https://entus01.github.io/Repos-Structure/](https://entus01.github.io/Repos-Structure/)

---

## Propósito

Este documento registra los cambios significativos realizados en el proyecto a lo largo del tiempo.

No pretende reemplazar el historial de Git, sino proporcionar una visión resumida de la evolución funcional, estructural y arquitectónica del repositorio.

Su objetivo es permitir que cualquier persona pueda comprender rápidamente cómo ha evolucionado el proyecto sin necesidad de revisar el historial completo de commits.

---

## Reglas

Registrar únicamente cambios con impacto relevante.

### Incluir

* Nuevas funcionalidades.
* Cambios arquitectónicos.
* Reorganizaciones importantes.
* Cambios en la estructura del proyecto.
* Incorporación o eliminación de tecnologías.
* Cambios en procesos de despliegue.
* Modificaciones de estándares o convenciones.
* Cambios que afecten el uso del proyecto.
* Creación de nuevos documentos de referencia.
* Eliminación o sustitución de documentación relevante.

### No incluir

* Commits rutinarios.
* Correcciones menores.
* Ajustes de estilos.
* Refactors pequeños.
* Actualizaciones menores de documentación.
* Cambios internos sin impacto visible.
* Actualizaciones triviales de dependencias.

---

## Regla de Versionado

Toda nueva versión del proyecto debe incluir una entrada correspondiente en este documento antes de ser publicada.

No deben existir versiones publicadas sin registro en el changelog.

---

## Formato

```text
## [Versión] - YYYY-MM-DD

### Added
- Nueva funcionalidad.

### Changed
- Cambio relevante.

### Removed
- Elemento eliminado.

### Fixed
- Corrección importante.

### Notes
- Información adicional.
```

---

## Convención de Versionado

Formato recomendado:

```text
MAJOR.MINOR.PATCH
```

Ejemplos:

```text
1.0.0
1.1.0
1.2.0
2.0.0
```

### MAJOR

Cambios incompatibles o reestructuraciones importantes.

Ejemplos:

* Cambio significativo de arquitectura.
* Reorganización completa de la estructura.
* Sustitución de tecnologías principales.
* Cambios que afecten directamente la forma de utilizar el proyecto.

---

### MINOR

Nuevas funcionalidades o ampliaciones compatibles con versiones anteriores.

Ejemplos:

* Nuevos documentos.
* Nuevas guías.
* Nuevas referencias.
* Nuevas convenciones.

---

### PATCH

Correcciones o mejoras menores.

Ejemplos:

* Corrección de errores.
* Ajustes de contenido.
* Mejoras de redacción.
* Correcciones de ejemplos o referencias.

---

# Historial

## [1.0.0] - 2026-06-07

### Added

* Creación inicial del proyecto Repos Structure.
* Definición de la estructura documental base.
* Creación de la carpeta `docs/` como ubicación oficial para la documentación interna.
* Incorporación de los documentos:

  * `rules.md`
  * `structure.md`
  * `changelog.md`
  * `roadmap.md`
  * `architecture.md`
  * `decisions.md`
  * `deployment.md`

### Changed

* Se establece una metodología centralizada para documentar organización, convenciones y estructura de proyectos.

### Notes

* Primera versión pública del proyecto.
* Punto de partida para la evolución futura de los estándares documentados.

---

## Plantilla para Nuevas Entradas

```text
## [X.Y.Z] - YYYY-MM-DD

### Added

-

### Changed

-

### Removed

-

### Fixed

-

### Notes

-
```

---

## Relación con Git

El changelog complementa el historial de Git.

### Git responde:

```text
¿Qué cambió exactamente?
```

### Changelog responde:

```text
¿Por qué ese cambio fue importante para la evolución del proyecto?
```

Ambos mecanismos deben mantenerse sincronizados para garantizar trazabilidad y contexto histórico.

---

## Principio Fundamental

El historial de commits explica el trabajo realizado.

El changelog explica la evolución del proyecto.

Por esta razón, cada entrada debe centrarse en el impacto del cambio y no en los detalles específicos de implementación.

Este documento funciona bien como plantilla reutilizable porque no depende del stack tecnológico, no depende del tamaño del proyecto y puede copiarse tal cual a cualquier repositorio manteniendo la misma filosofía de documentación.
