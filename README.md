# DevOps Challenge — CI/CD + Docker + Deploy

API REST construida con Node.js/Express, contenerizada con Docker y desplegada automáticamente mediante GitHub Actions + Railway.

## Stack

- **Runtime**: Node.js 20 + Express
- **Contenedor**: Docker (imagen base `node:20-alpine`)
- **CI/CD**: GitHub Actions
- **Registry**: Docker Hub
- **Deploy**: Railway (auto-deploy en cada push a `main`)

## Correr localmente

### Sin Docker

```bash
npm install
npm start
```

Disponible en: `http://localhost:3000`

### Con Docker

```bash
docker build -t devops-challenge .
docker run -p 3000:3000 devops-challenge
```

Disponible en: `http://localhost:3000`

## Endpoints

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Info de la API |
| GET | `/health` | Estado del servicio |

## Ejecutar tests

```bash
npm test
```

## Pipeline CI/CD

El pipeline se activa automáticamente en cada push a `main` y ejecuta 3 jobs en secuencia:

1. **Install & Test** — instala dependencias y ejecuta tests con Jest
2. **Build & Push** — construye la imagen Docker y la sube a Docker Hub
3. **Deploy** — Railway detecta el push y redespliega automáticamente

### Secrets requeridos en GitHub Actions

| Secret | Descripción |
|--------|-------------|
| `DOCKERHUB_USERNAME` | Usuario de Docker Hub |
| `DOCKERHUB_TOKEN` | Personal Access Token de Docker Hub |

## Deploy

Railway monitorea la rama `main` y redespliega automáticamente al detectar cambios.

**URL producción**: https://devops-challenge-production.up.railway.app

## Estructura del proyecto

```
devops-challenge/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── src/
│   ├── app.js
│   ├── app.test.js
│   └── server.js
├── .dockerignore
├── Dockerfile
├── package.json
└── README.md
```