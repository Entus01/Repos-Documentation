# Reglas de Desarrollo

Estado: Activo

Alcance: Todos los proyectos que adopten los estándares definidos en Repos Structure.

Referencia principal:

[https://entus01.github.io/Repos-Structure/](https://entus01.github.io/Repos-Structure/)

Este documento define las convenciones de desarrollo, documentación, control de versiones y flujo de trabajo utilizadas en mis proyectos.

---

## Principio de Aplicación

Estas reglas representan un conjunto de buenas prácticas generales para el desarrollo y mantenimiento de proyectos de software.

Su adopción debe considerar el contexto, tamaño y complejidad de cada proyecto.

En proyectos pequeños o personales, algunas convenciones pueden aplicarse de forma simplificada para evitar complejidad innecesaria. En proyectos medianos o grandes, se recomienda adoptar el conjunto completo de reglas para favorecer la mantenibilidad, la escalabilidad y la colaboración.

---

## 1) Commits

Formato:

```text
<tipo>(alcance-opcional): descripcion breve
```

Tipos permitidos:

```text
feat
fix
refactor
style
docs
test
chore
build
ci
perf
revert
```

Reglas:

* Mensaje ideal <= 72 caracteres.
* Utilizar un único idioma por commit.
* Todos los commits deben escribirse en inglés.
* Un único cambio lógico por commit.
* Evitar commits masivos o ambiguos.
* Los commits deben ser atómicos y fácilmente reversibles.

Ejemplos correctos:

```text
feat(auth): add login validation

fix(router): resolve protected route redirect

refactor(user): split profile service responsibilities

docs(rules): update commit conventions

style(button): improve spacing and alignment
```

Ejemplos incorrectos:

```text
fix: several project updates

chore: miscellaneous changes

update stuff
```

---

## 2) Comentarios

Formato:

```text
// Etiqueta: descripcion breve y tecnica.
```

Etiquetas permitidas:

* Archivo
* Constante
* Funcion
* Seccion
* TODO
* FIXME

Reglas:

* Los comentarios deben explicar el motivo de una decisión.
* Evitar describir código evidente.
* Evitar comentarios decorativos.
* Evitar comentarios obsoletos.
* El código debe ser entendible sin depender de comentarios extensos.

Ejemplo correcto:

```js
// Funcion: Evita solicitudes duplicadas mientras la petición actual sigue activa.
```

Ejemplo incorrecto:

```js
// Incrementa el contador en uno.
counter++;
```

---

## 3) Documentación

Funciones complejas:

```js
/**
 * Obtiene la información del usuario autenticado.
 * @returns {Promise<User>}
 */
```

Componentes complejos:

```jsx
/**
 * Muestra un resumen visual del perfil del usuario.
 */
```

Archivos estratégicos:

```js
/**
 * Archivo: Gestiona la configuración global de la aplicación.
 */
```

Reglas:

* Documentar únicamente cuando aporte contexto.
* Priorizar JSDoc en funciones, componentes o módulos complejos.
* Documentar responsabilidades importantes.
* Adaptar el nivel de documentación a la complejidad del proyecto.
* Mantener la documentación sincronizada con el código.
* Evitar documentación redundante o desactualizada.

---

## 4) Documentación del Proyecto

Todo proyecto debe mantener actualizados los documentos definidos dentro de `docs/` que formen parte de su documentación adoptada.

Documentación mínima recomendada:

```text
docs/
├── changelog.md
├── roadmap.md
├── rules.md
└── structure.md
```

Documentación recomendada para proyectos medianos o grandes:

```text
docs/
├── glossary.md
├── architecture.md
├── decisions.md
└── deployment.md
```

Reglas:

* Mantener la documentación alineada con el estado real del proyecto.
* Evitar documentación duplicada entre archivos.
* Cada documento debe tener una responsabilidad claramente definida.
* Utilizar `glossary.md` como fuente oficial para definiciones y terminología compartida.
* Adaptar la cantidad de documentación al tamaño y necesidades del proyecto.
* Evitar mantener documentos que no aporten valor al contexto actual.

---

## 5) Convenciones de Nombres

### Componentes

PascalCase

```text
UserCard.jsx
LoginForm.jsx
NavigationMenu.jsx
```

### Hooks

useXxx

```text
useAuth.js
useModal.js
useLocalStorage.js
```

### Variables y funciones

camelCase

```js
currentUser
calculateTotal
validateCredentials
```

### Constantes

UPPER_SNAKE_CASE

```js
MAX_RETRY_ATTEMPTS
DEFAULT_LANGUAGE
```

### Carpetas

kebab-case

```text
user-profile/
authentication-service/
shared-components/
```

### Archivos CSS

kebab-case

```text
public-tabs.css
login-form.css
```

### Clases CSS

Metodología BEM

```css
.card {}
.card__title {}
.card__description {}
.card--active {}
```

Reglas:

* Utilizar nombres descriptivos.

* Evitar nombres genéricos como:

  * data
  * temp
  * helper
  * manager
  * utils
  * common
  * misc

* Mantener consistencia en todo el repositorio.

Nota de despliegue:

El proyecto debe respetar estas convenciones para evitar errores de rutas case-sensitive en Linux, Docker, Vercel y GitHub Pages.

---

## 6) React

Reglas:

* Componentes pequeños y reutilizables.
* Evitar lógica compleja dentro del JSX.
* Mantener props explícitas.
* * Extraer lógica reutilizable a hooks cuando mejore la reutilización o la separación de responsabilidades.
* Evitar componentes con múltiples responsabilidades.

Correcto:

```jsx
const canEdit = user.role === "admin";
```

Incorrecto:

```jsx
{
  user.role === "admin" &&
  user.permissions.includes("edit") &&
  user.active
}
```

---

## 7) CSS

Reglas:

* Utilizar metodología BEM.
* Evitar selectores excesivamente anidados.
* Centralizar colores, tipografías, espaciados y demás valores compartidos mediante variables o design tokens.
* Mantener consistencia visual entre módulos.

Correcto:

```css
.card__title {}
```

Incorrecto:

```css
.card .header .title {}
```

---

## 8) Gestión de Archivos

Orden recomendado de imports:

```text
1. Librerías externas
2. Hooks
3. Servicios
4. Componentes
5. Estilos
6. Assets
```

Reglas:

* Eliminar imports sin utilizar.
* No conservar código muerto comentado.
* Utilizar Git para recuperar versiones anteriores.
* Mantener un orden consistente de imports en todo el proyecto.
* Mantener configuraciones y metadatos compartidos en una única fuente de verdad.
* Evitar duplicar configuraciones o datos estructurales entre múltiples archivos o componentes.

---

## 9) Variables de Entorno

Reglas:

* Nunca subir archivos `.env`.
* Mantener un archivo `.env.example` actualizado cuando el proyecto utilice variables de entorno.
* No exponer credenciales en el código fuente.
* Documentar todas las variables requeridas por el proyecto.

---

## 10) Ramas

Formato recomendado:

```text
feature/description
fix/description
refactor/description
docs/description
```

Ejemplos:

```text
feature/user-authentication

fix/login-validation

refactor/payment-service

docs/update-readme
```

Reglas:

* Utilizar kebab-case.
* Evitar espacios.
* Evitar nombres genéricos.
* El nombre de la rama debe describir claramente el objetivo del trabajo.

---

## 11) Pull Requests

Reglas:

* Un único objetivo por Pull Request.
* Evitar Pull Requests excesivamente grandes.
* Incluir contexto suficiente para revisión.
* Mantener sincronizada la documentación relacionada.
* Resolver observaciones antes de solicitar aprobación final.

En proyectos individuales donde no se utilicen Pull Requests, estas recomendaciones pueden aplicarse al proceso de revisión previo al merge o al push principal.

---

## 12) Sincronización de Documentación

Reglas:

* Los cambios estructurales deben reflejarse en `structure.md`.
* Los cambios de estándares deben reflejarse en `rules.md`.
* Los cambios relevantes deben reflejarse en `changelog.md`.
* Las nuevas iniciativas deben reflejarse en `roadmap.md`.
* Las decisiones técnicas importantes deben reflejarse en `decisions.md`.
* Los cambios en despliegue o infraestructura deben reflejarse en `deployment.md`.
* Los cambios arquitectónicos deben reflejarse en `architecture.md`.
* Los nuevos términos compartidos deben evaluarse para su incorporación en `glossary.md`.
* Toda fuente de verdad centralizada debe mantenerse sincronizada con la documentación correspondiente cuando tenga impacto arquitectónico o funcional.

---

## 13) Terminología

La terminología utilizada en la documentación del proyecto debe mantenerse alineada con:

```text
docs/glossary.md
```

Reglas:

* Evitar duplicar definiciones en múltiples documentos.
* Utilizar terminología consistente entre repositorios.
* Incorporar nuevos términos al glosario cuando requieran una interpretación compartida.
* Considerar `glossary.md` como la fuente oficial de referencia terminológica.

---

## 14) Validación Mínima antes de Integrar Cambios

Validaciones recomendadas:

```bash
npm run lint
npm run build
```

Además:

* Verificar ausencia de errores en consola.
* Validar funcionalidades afectadas.
* Confirmar que la documentación siga siendo válida.
* Revisar que no existan imports sin utilizar.

Estas validaciones se recomiendan antes de abrir un Pull Request en proyectos colaborativos o antes de realizar el merge o push principal en proyectos individuales.

---

## 15) Aprobación

Reglas:

* En proyectos colaborativos, no realizar merge sin revisión previa.
* En proyectos individuales, realizar una revisión propia antes del merge o push final.
* Toda modificación relevante debe poder justificarse mediante commit e historial.

---

## 16) Relación con Otros Documentos

Los siguientes documentos forman parte de la estructura documental recomendada.

Su adopción dependerá del tamaño, complejidad y necesidades de cada proyecto.

### glossary.md

Define la terminología utilizada dentro de la documentación.

Aplicación recomendada: Proyectos medianos y grandes.

---

### structure.md

Describe cómo se organiza el repositorio.

Aplicación recomendada: Todo proyecto.

---

### changelog.md

Registra la evolución relevante del proyecto.

Aplicación recomendada: Todo proyecto.

---

### roadmap.md

Describe objetivos e iniciativas futuras.

Aplicación recomendada: Proyectos medianos y grandes.

---

### decisions.md

Registra el contexto detrás de decisiones importantes.

Aplicación recomendada: Proyectos medianos y grandes.

---

### architecture.md

Describe cómo está construido el sistema.

Aplicación recomendada: Proyectos medianos y grandes.

---

### deployment.md

Describe cómo se construye y publica el proyecto.

Aplicación recomendada: Proyectos medianos y grandes, o proyectos pequeños con procesos de despliegue no triviales.

---

## 17) Evitar

* Archivos excesivamente grandes.
* Componentes con múltiples responsabilidades.
* Comentarios redundantes.
* Código muerto.
* Variables ambiguas.
* Imports sin utilizar.
* Funciones demasiado extensas.
* Commits con múltiples objetivos.
* Refactors mezclados con nuevas funcionalidades.

---

## 18) Principio Fundamental

Toda decisión de desarrollo debe priorizar:

```text
1. Legibilidad
2. Consistencia
3. Mantenibilidad
4. Escalabilidad
5. Optimización
```

Si una optimización perjudica la legibilidad o la mantenibilidad, debe ser reconsiderada.
