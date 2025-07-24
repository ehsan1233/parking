# 🛠️ Parking API – Backend

This is the backend server for the Parking Spots application. It provides RESTful APIs for fetching and reporting free parking spots based on geolocation.


Development was speeded up using [**Junie**](https://www.jetbrains.com/junie/), [**Continue.dev**](https://continue.dev/), and [**Ollama**](https://ollama.com/), enabling AI-assisted workflows and local language models directly in the IDE.

- Built with **Node.js** and **Express**
- Uses **Swagger** for API documentation
- CORS support for local frontend development

## 🌱 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/)
- [Tsoa](https://tsoa-community.github.io/docs/introduction.html) – API specification & Swagger documentation
- [tsyringe](https://github.com/microsoft/tsyringe) – Dependency Injection
- [Swagger UI](https://swagger.io/tools/swagger-ui/) – API docs

## 🧰 Setup

```bash
cp .env.dist .env
pnpm install
pnpm dev
```
After starting the server, Swagger UI is available at http://localhost:3000/api-docs




