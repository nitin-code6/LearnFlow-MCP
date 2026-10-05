# Development Roadmap

This project is built incrementally in phases. Each phase represents a functional checkpoint.

- **Phase 0 — Project Planning**: Architecture, database, API, and project structure documentation.
- **Phase 1 — Basic Project Setup**: Initialize Git repo, frontend (React/Vite), backend (Node/Express), environment configs.
- **Phase 2 — Database Setup**: PostgreSQL and Prisma configuration, schema definition, migrations, and seeding.
- **Phase 3 — Backend REST API**: Implementation of all defined REST API endpoints, JWT auth, and role-based access.
- **Phase 4 — API Testing**: Setup for testing backend APIs locally before proceeding to the frontend.
- **Phase 5 — React Frontend**: Building UI interfaces for public access, students, instructors, and admins.
- **Phase 6 — Dockerization**: Introducing Docker and Docker Compose for running frontend, backend, and PostgreSQL locally.
- **Phase 7 — Production-Like Docker Setup**: Refining Docker configurations with multi-stage builds, health checks, and a production Node image.
- **Phase 8 — MCP Server Creation**: Developing a separate Python FastMCP server that interfaces with the LMS REST API.
- **Phase 9 — MCP Security**: Implementing secure authentication and authorization between the MCP Server and the backend.
- **Phase 10 — MCP Testing**: Testing MCP tools independently using FastMCP CLI and Inspector.
- **Phase 11 — Deployment**: Deploying the complete Dockerized stack (including Nginx) to a Linux VPS.
- **Phase 12 — Final Documentation**: Completing all project documentation for a full portfolio-ready status.
