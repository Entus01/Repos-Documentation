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


/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


# Decisions

Estado: Activo

Alcance: Registro de decisiones técnicas, organizativas y estratégicas del proyecto.

Referencia principal:

https://entus01.github.io/Repos-Structure/

---

# Propósito

Este documento registra las decisiones relevantes tomadas durante la evolución del proyecto.

Su objetivo es preservar el contexto detrás de cambios importantes, evitando la pérdida de conocimiento y facilitando futuras revisiones, mantenimientos o refactors.

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
````

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

* glossary.md → Qué significan los términos utilizados.
* rules.md → Cómo se trabaja.
* structure.md → Cómo se organiza.
* changelog.md → Qué cambió.
* roadmap.md → Hacia dónde evoluciona.
* decisions.md → Por qué se decidió.
* architecture.md → Cómo está construido el proyecto.
* deployment.md → Cómo se construye y publica el proyecto.

Documentación relacionada:

* glossary.md
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

## DEC-004

Fecha: 2026-06-08

Estado: Accepted

Título:

Incorporar `glossary.md` como fuente oficial de terminología

Contexto:

A medida que la documentación crece, términos técnicos, organizacionales y arquitectónicos comienzan a repetirse en múltiples documentos.

Sin una referencia centralizada, pueden aparecer interpretaciones inconsistentes, definiciones duplicadas o diferencias de significado entre proyectos.

Opciones consideradas:

1. Definir términos dentro de cada documento.
2. Mantener un glosario distribuido.
3. Crear una fuente única de terminología.

Decisión:

Incorporar `glossary.md` como documento oficial para centralizar definiciones y terminología.

Motivo:

Mantener consistencia documental, reducir ambigüedades y facilitar la reutilización de los estándares entre repositorios.

Impacto:

* Terminología unificada.
* Menor duplicidad de definiciones.
* Mayor consistencia entre documentos.
* Mejor incorporación de nuevos colaboradores.

Consecuencias:

* Los documentos deberán referenciar `glossary.md` cuando utilicen terminología especializada.
* Las definiciones no deberán duplicarse en otros documentos.
* `glossary.md` se convierte en la fuente oficial de interpretación terminológica.

Documentación relacionada:

* glossary.md
* rules.md
* structure.md
* architecture.md

---

## DEC-005

Fecha: 2026-06-08

Estado: Accepted

Título:

Construir una biblioteca documental navegable mediante React

Contexto:

Inicialmente la documentación del proyecto existía únicamente como archivos Markdown dentro del repositorio.

Aunque esta aproximación era suficiente para consulta directa desde GitHub, limitaba la experiencia de navegación, descubrimiento de contenido y reutilización como referencia pública.

Opciones consideradas:

1. Mantener la documentación únicamente en archivos Markdown.
2. Publicar los documentos mediante un generador estático externo.
3. Construir una interfaz propia utilizando React y React Router.

Decisión:

Construir una aplicación React que permita navegar la documentación como una biblioteca organizada por categorías.

Motivo:

Facilitar el acceso a la información, mejorar la experiencia de lectura y utilizar el proyecto como ejercicio práctico de desarrollo frontend.

Impacto:

* Navegación centralizada de documentos.
* Mejor experiencia de consulta.
* Base para futuras funcionalidades de búsqueda y filtrado.
* Mayor valor educativo para el mantenimiento del proyecto.

Consecuencias:

* Se incorpora una estructura de navegación basada en categorías.
* Los documentos pasan a representarse como contenido navegable dentro de la aplicación.
* La documentación del proyecto deberá mantenerse sincronizada con la interfaz de navegación.

Documentación relacionada:

* structure.md
* roadmap.md
* architecture.md
* changelog.md

---

## DEC-006

Fecha: 2026-06-10

Estado: Accepted

Título:

Centralizar la configuración de navegación documental

Contexto:

A medida que la interfaz evolucionó hacia una biblioteca documental organizada por categorías, la información de navegación comenzó a ser utilizada por múltiples componentes.

Mantener rutas, categorías y metadatos distribuidos en la implementación de cada componente incrementaba el riesgo de inconsistencias y dificultaba la incorporación de nuevos documentos.

Opciones consideradas:

1. Mantener la configuración de navegación distribuida entre los componentes.
2. Generar la navegación de forma manual dentro de cada vista.
3. Centralizar toda la configuración de navegación en una única fuente de datos reutilizable.

Decisión:

Centralizar la definición de categorías, documentos y rutas en un archivo de configuración compartido ubicado en `src/constants/navigation.js`.

Motivo:

Reducir la duplicidad de información, facilitar el mantenimiento y permitir que la estructura documental evolucione sin modificar la lógica de los componentes consumidores.

Impacto:

* Configuración de navegación mantenida en una única fuente de verdad.
* Mayor reutilización entre componentes.
* Incorporación simplificada de nuevas categorías y documentos.
* Menor acoplamiento entre la estructura documental y la interfaz.

Consecuencias:

* Los componentes de navegación deberán consumir la configuración centralizada en lugar de definir datos propios.
* Las modificaciones de la estructura documental deberán realizarse desde el módulo de constantes correspondiente.
* La documentación arquitectónica y estructural deberá mantenerse sincronizada con esta decisión.

Documentación relacionada:

* architecture.md
* structure.md
* changelog.md


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

## Relación con Otros Documentos

### changelog.md

Registra los cambios realizados.

decisions.md registra las razones que justifican dichos cambios.

---

### architecture.md

Describe la arquitectura actual del proyecto.

Las decisiones arquitectónicas relevantes deben registrarse en este documento.

---

### deployment.md

Describe el proceso de construcción y despliegue.

Las decisiones relacionadas con infraestructura o publicación deben registrarse aquí antes de implementarse.

---

### structure.md

Describe cómo se organiza el repositorio.

Cuando una decisión modifique la estructura general del proyecto, ambos documentos deben mantenerse sincronizados.

---

### rules.md

Define las convenciones y estándares de desarrollo.

Las decisiones relacionadas con procesos de trabajo, nomenclatura o estándares deben reflejarse también en rules.md cuando corresponda.

---

### roadmap.md

Puede contener iniciativas futuras que eventualmente requieran nuevas decisiones.

---

### glossary.md

Define la terminología utilizada dentro de la documentación.

Los términos utilizados en este documento deben mantenerse alineados con glossary.md.

---

## Terminología

La terminología utilizada en este documento debe mantenerse alineada con:

```text
docs/glossary.md
```

Cuando una decisión introduzca un nuevo término técnico, organizacional o arquitectónico que requiera una interpretación compartida, deberá evaluarse su incorporación al glosario oficial.

---

## Registro Histórico

Las decisiones registradas deben conservarse como parte de la historia del proyecto.

Si una decisión deja de ser válida, no debe eliminarse. En su lugar, deberá registrarse una nueva decisión que la sustituya y actualizar su estado a:

```text
Superseded
```

De esta forma se mantiene la trazabilidad de la evolución técnica y organizativa del proyecto.

---

## Principio Fundamental

Las decisiones importantes deben quedar registradas junto con su contexto.

La implementación puede cambiar con el tiempo, pero comprender por qué se tomó una decisión permite mantener la coherencia, facilitar el mantenimiento y respaldar la evolución del proyecto.

```
```
