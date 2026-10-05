# System Architecture

The project follows a standard multi-tier architecture using React (Frontend), Node.js/Express (Backend), and PostgreSQL (Database). Later, a Python FastMCP Server will be introduced to integrate with an LLM (Claude) via the Model Context Protocol.

## High-Level Architecture Diagram

```mermaid
flowchart TD
    User([Browser / User]) <-->|HTTP/HTTPS| Frontend[React Frontend\nLMS Web Application]
    Frontend <-->|REST API| Backend[Node.js + Express\nBackend API]
    Backend <-->|Prisma ORM| Database[(PostgreSQL Database)]

    subgraph MCP Integration (Phase 8+)
        Claude([Claude / MCP Client]) <-->|MCP| MCPServer[Python FastMCP\nMCP Server]
        MCPServer <-->|REST API| Backend
    end
```

## Components

1. **Frontend**: A React application built with Vite, acting as the user interface for students, instructors, and admins. It communicates with the backend via REST API calls.
2. **Backend API**: A Node.js and Express application that handles business logic, authentication (JWT), and authorization. It exposes RESTful endpoints.
3. **Database**: PostgreSQL, used as the primary data store for users, courses, lessons, and progress. Accessed via Prisma ORM.
4. **MCP Server**: A separate Python FastMCP application that allows Claude to interact with the LMS backend securely via existing REST API endpoints.
