# Decisions

Estado: Activo

Alcance: Registro de decisiones técnicas, organizativas y estratégicas del proyecto.

Referencia principal:

https://entus01.github.io/Repos-Structure/

---

# Propósito

Este documento registra las decisiones relevantes tomadas durante la evolución del proyecto.

Su objetivo es preservar el contexto detrás de cambios importantes, evitando la pérdida de conocimiento y facilitando futuras revisiones o refactors.

Las decisiones registradas deben explicar el motivo de una elección, las alternativas consideradas y el impacto esperado.

---

## Cuándo Registrar una Decisión

Registrar una entrada cuando exista una decisión que afecte:

* Arquitectura.
* Organización del proyecto.
* Estándares de desarrollo.
* Tecnologías utilizadas.
* Estrategias de despliegue.
* Procesos de trabajo.
* Convenciones compartidas entre equipos.
* Cambios con impacto a largo plazo.

---

## Cuándo No Registrar una Decisión

No registrar:

* Correcciones menores.
* Ajustes de estilos.
* Refactors pequeños.
* Cambios temporales.
* Tareas rutinarias.
* Actualizaciones sin impacto relevante.

---

## Formato

```text
## DEC-XXX

Fecha:
Estado:

Título:

Contexto:

Opciones consideradas:

1.
2.
3.

Decisión:

Motivo:

Impacto:

Consecuencias:

Documentación relacionada:
```

---

# Estados

## Proposed

La decisión ha sido planteada pero aún no ha sido adoptada.

---

## Accepted

La decisión ha sido aprobada y forma parte del proyecto.

---

## Superseded

La decisión fue reemplazada por una nueva.

---

## Rejected

La decisión fue descartada.

---

# Registro de Decisiones

## DEC-001

Fecha: 2026-06-07

Estado: Accepted

Título:

Centralizar la documentación del proyecto dentro de `docs/`

Contexto:

La documentación del proyecto podía dispersarse entre diferentes ubicaciones del repositorio, dificultando su mantenimiento y consulta.

Opciones consideradas:

1. Mantener documentación distribuida.
2. Centralizar únicamente documentación técnica.
3. Centralizar toda la documentación interna en una única ubicación.

Decisión:

Centralizar toda la documentación interna dentro de la carpeta `docs/`.

Motivo:

Facilitar la navegación, reducir duplicidad y mantener una estructura consistente entre proyectos.

Impacto:

* Mayor previsibilidad.
* Mejor organización documental.
* Menor esfuerzo de mantenimiento.

Consecuencias:

Todos los proyectos que adopten estos estándares deberán utilizar la carpeta `docs/` como ubicación principal para documentación interna.

Documentación relacionada:

* structure.md
* rules.md

---

## DEC-002

Fecha: 2026-06-07

Estado: Accepted

Título:

Separar responsabilidades entre documentos de referencia

Contexto:

La documentación puede volverse difícil de mantener cuando varios documentos contienen información similar o duplicada.

Opciones consideradas:

1. Mantener documentación general en un único archivo.
2. Dividir documentación por responsabilidad.

Decisión:

Asignar una responsabilidad específica a cada documento principal.

Motivo:

Reducir redundancia y facilitar el mantenimiento.

Impacto:

Cada documento responde a una necesidad concreta.

Consecuencias:

* rules.md → Cómo se trabaja.
* structure.md → Cómo se organiza.
* changelog.md → Qué cambió.
* roadmap.md → Hacia dónde evoluciona.
* decisions.md → Por qué se decidió.
* architecture.md → Cómo se relacionan las partes del sistema.
* deployment.md → Cómo se construye y publica el proyecto.

Documentación relacionada:

* rules.md
* structure.md
* roadmap.md
* changelog.md
* architecture.md
* deployment.md

---

## DEC-003

Fecha: 2026-06-07

Estado: Accepted

Título:

Incorporar documentación especializada para arquitectura y despliegue

Contexto:

A medida que los proyectos crecen, la arquitectura y los procesos de despliegue suelen documentarse de forma dispersa o quedar implícitos dentro del conocimiento del equipo.

Opciones consideradas:

1. Mantener la información distribuida en diferentes documentos.
2. Incorporar secciones de arquitectura y despliegue dentro de otros documentos.
3. Crear documentación especializada para cada responsabilidad.

Decisión:

Crear documentos dedicados para arquitectura y despliegue.

Motivo:

Mantener responsabilidades claramente separadas, facilitar el mantenimiento de la documentación y reducir la dependencia del conocimiento implícito.

Impacto:

* Mayor claridad técnica.
* Mejor incorporación de nuevos colaboradores.
* Documentación más fácil de mantener.
* Mejor trazabilidad de decisiones arquitectónicas y operativas.

Consecuencias:

* architecture.md será responsable de documentar la arquitectura del proyecto.
* deployment.md será responsable de documentar los procesos de construcción y despliegue.
* La información técnica deberá mantenerse en los documentos correspondientes y evitar duplicidad.

Documentación relacionada:

* architecture.md
* deployment.md
* structure.md

---

# Plantilla para Nuevas Decisiones

```text
## DEC-XXX

Fecha:

Estado:

Título:

Contexto:

Opciones consideradas:

1.

Decisión:

Motivo:

Impacto:

Consecuencias:

Documentación relacionada:
```

---

# Numeración

Formato recomendado:

```text
DEC-001
DEC-002
DEC-003
```

Reglas:

* La numeración debe ser secuencial.
* Los identificadores no deben reutilizarse.
* Una decisión reemplazada conserva su identificador original y cambia su estado a Superseded.

---

# Principio Fundamental

Las decisiones importantes deben quedar registradas junto con su contexto.

La implementación puede cambiar con el tiempo, pero comprender por qué se tomó una decisión permite mantener la coherencia y facilitar la evolución del proyecto.
