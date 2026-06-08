# Estructura de Proyectos

Estado: Activo

Alcance: Todos los proyectos que adopten los estándares definidos en Repos Structure.

Referencia principal:

https://entus01.github.io/Repos-Structure/

Este documento describe la forma en que organizo mis proyectos y las responsabilidades esperadas para cada nivel de la estructura.

No pretende definir una arquitectura universal, sino documentar las convenciones que utilizo para mantener consistencia entre repositorios.


## 1) Principios de Organización

### Una responsabilidad por carpeta

Cada carpeta debe representar un dominio, responsabilidad o contexto claramente identificable.

Correcto:

auth/
users/
payments/


Incorrecto:

misc/
general/
common/
stuff/


### Una responsabilidad por archivo

Cada archivo debe resolver un único problema o responsabilidad principal.

Correcto:

UserCard.jsx
UserService.js
UserRepository.js


Incorrecto:

helpers.js
everything.js
misc.js



### Escalabilidad progresiva

La estructura debe funcionar tanto para proyectos pequeños como para aplicaciones que crezcan con el tiempo.

La organización inicial debe permitir evolución sin reorganizaciones constantes.


### Organización por dominio

Siempre que sea posible, agrupar elementos relacionados por funcionalidad antes que por tipo de archivo.

Preferido:

users/
├── components/
├── services/
├── hooks/
└── pages/


Menos recomendado:

components/
services/
hooks/
pages/



### Legibilidad antes que complejidad

La estructura debe priorizar claridad y facilidad de navegación antes que patrones complejos o sobreingeniería.


## 2) Estructura Base del Repositorio

Todo proyecto debe mantener una estructura raíz clara, consistente y fácilmente reconocible.

Estructura mínima recomendada:

project-root/
│
├── docs/
│   ├── glossary.md
│   ├── changelog.md
│   ├── roadmap.md
│   ├── rules.md
│   ├── structure.md
│   ├── architecture.md
│   ├── decisions.md
│   └── deployment.md
│
├── public/
├── src/
├── tests/
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
└── README.md


Objetivos:

* Mantener una estructura reconocible entre proyectos.
* Facilitar la navegación del repositorio.
* Centralizar responsabilidades por ubicación.
* Reducir la necesidad de exploración innecesaria.


## 3) Documentación

Toda la documentación interna del proyecto debe centralizarse dentro de la carpeta `docs/`.

Estructura recomendada:

docs/
├── glossary.md
├── changelog.md
├── roadmap.md
├── rules.md
├── structure.md
├── architecture.md
├── decisions.md
└── deployment.md


Objetivos:

* Centralizar el conocimiento del proyecto.
* Mantener responsabilidades documentales separadas.
* Facilitar la incorporación de nuevos colaboradores.
* Evitar documentación dispersa dentro del repositorio.


## 4) Ubicación de Responsabilidades

Cada elemento del proyecto debe ubicarse según su responsabilidad principal.

Ejemplos:

### Código fuente

src/


Contiene la implementación principal de la aplicación.


### Documentación

docs/


Contiene documentación técnica, organizativa y operativa.


### Recursos públicos

public/


Contiene archivos accesibles directamente desde la aplicación.


### Configuración

project-root/


Contiene configuraciones globales del proyecto.


### Pruebas

tests/


Contiene pruebas automatizadas y recursos relacionados.

---

## 5) Archivos de Configuración

Los archivos de configuración global deben ubicarse en la raíz del proyecto.

Ejemplo:

project-root/
│
├── eslint.config.js
├── package.json
├── vite.config.js
├── vite.config.ts
├── tsconfig.json
├── jsconfig.json
├── vercel.json
├── netlify.toml
├── docker-compose.yml
├── Dockerfile
└── README.md


### Regla General

Si una herramienta requiere configuración a nivel de proyecto, su archivo debe ubicarse en la raíz.

### Frontend

vite.config.js
vite.config.ts
tsconfig.json
jsconfig.json


### Calidad de Código

eslint.config.js
.prettierrc
.prettierignore


### Deployment

vercel.json
netlify.toml


### Contenedores

Dockerfile
docker-compose.yml


### Automatización

.github/


### Excepción

Si una herramienta permite configurarse dentro de `package.json`, puede mantenerse allí cuando contribuya a una configuración más simple y legible.


## 6) Frontend (Referencia)

Estructura sugerida:

src/
│
├── app/
├── assets/
├── components/
├── features/
├── hooks/
├── pages/
├── routes/
├── services/
├── styles/
├── utils/
└── constants/


### app/

Configuración principal de la aplicación.

app/
├── App.jsx
├── router.jsx
└── providers.jsx



### assets/

Recursos estáticos.

assets/
├── images/
├── icons/
├── fonts/
└── logos/



### components/

Componentes reutilizables.

components/
├── Button/
├── Modal/
├── Card/
└── Input/



### features/

Organización por dominio o funcionalidad.

features/
├── auth/
├── users/
├── dashboard/
└── settings/



### hooks/

Hooks reutilizables.

hooks/
├── useAuth.js
├── useModal.js
└── useLocalStorage.js



### services/

Comunicación con APIs y lógica externa.

services/
├── authService.js
├── userService.js
└── apiClient.js



### styles/

Estilos globales y configuración visual.

styles/
├── reset.css
├── variables.css
├── globals.css
└── themes/



## 7) Backend (Referencia)

Estructura sugerida:

src/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── repositories/
├── routes/
├── services/
├── validators/
└── utils/


### Responsabilidades comunes

config/        → Configuraciones globales.
controllers/   → Recepción y respuesta de peticiones.
services/      → Lógica de negocio.
repositories/  → Acceso a persistencia.
models/        → Representación de entidades.
validators/    → Validaciones de entrada.
middlewares/   → Procesamiento intermedio.



## 8) Fullstack (Referencia)

Monorepo sugerido:

project-root/
│
├── apps/
│   ├── frontend/
│   └── backend/
│
├── packages/
│
├── docs/
│
├── README.md
└── package.json



## 9) Evolución de la Estructura

La estructura debe evolucionar junto con el proyecto.

Principios:

* Crecer según necesidades reales.
* Mantener coherencia organizativa.
* Evitar complejidad innecesaria.
* Priorizar claridad sobre anticipación.
* Favorecer la mantenibilidad a largo plazo.


## 10) Principio de Organización de la Raíz

La raíz del proyecto debe contener únicamente elementos de primer nivel claramente identificables.

Ejemplo de estructura esperada:

project-root/
│
├── docs/
├── public/
├── src/
├── tests/
├── package.json
├── README.md
└── archivos de configuración


Evitar:

project-root/
│
├── temp/
├── backup/
├── old-files/
├── random/
└── test2/


Todo elemento en la raíz debe tener una responsabilidad claramente identificable.

### Regla Fundamental

La raíz del proyecto debe ser predecible.

Cualquier desarrollador que abra el repositorio debe poder encontrar documentación, configuración y código en ubicaciones consistentes sin necesidad de explorar el proyecto completo.


## 11) Relación con Otros Documentos

### glossary.md

Define la terminología utilizada dentro de la documentación.

Los términos utilizados en este documento deben mantenerse alineados con el glosario oficial.


### rules.md

Define las convenciones y estándares de desarrollo.

Mientras structure.md define dónde se organiza cada elemento, rules.md define cómo debe desarrollarse.


### architecture.md

Describe cómo está construido el sistema.

La estructura del repositorio y la arquitectura del sistema son conceptos relacionados pero independientes.


### deployment.md

Describe cómo se construye y publica el proyecto.

Los cambios organizativos que afecten procesos de despliegue deben mantenerse sincronizados entre ambos documentos.


### decisions.md

Registra el contexto detrás de decisiones organizativas relevantes.

Cuando una modificación estructural tenga impacto significativo, debería registrarse como decisión formal.


### roadmap.md

Puede contener futuras iniciativas relacionadas con la organización del proyecto.


### changelog.md

Registra cambios relevantes en la evolución del repositorio.

Las reorganizaciones importantes deben reflejarse también en el historial del proyecto.


## 12) Terminología

La terminología utilizada en este documento debe mantenerse alineada con:

docs/glossary.md


Cuando se incorporen nuevos conceptos relacionados con organización, estructura o arquitectura documental, deberá evaluarse su inclusión en el glosario oficial.

Este documento debe utilizar terminología consistente con el resto de la documentación del proyecto.


## 13) Objetivo Final

La organización de un proyecto debe permitir que cualquier desarrollador pueda:

* Comprender rápidamente la estructura.
* Localizar funcionalidades fácilmente.
* Incorporarse al proyecto con poca fricción.
* Mantener el código sin depender de conocimiento implícito.
* Escalar el sistema sin reorganizaciones frecuentes.

La estructura existe para facilitar el desarrollo, no para imponer complejidad innecesaria.

Las decisiones relacionadas con organización deben documentarse aquí, mientras que las decisiones arquitectónicas, operativas o estratégicas deben mantenerse en sus respectivos documentos de referencia.
