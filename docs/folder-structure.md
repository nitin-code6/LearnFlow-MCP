# Project Folder Structure

The project will follow this organizational structure:

```text
LearnFlow-MCP/
├── frontend/                  # React + Vite web application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # Route-level components (screens)
│   │   ├── services/          # API integration layer
│   │   ├── hooks/             # Custom React hooks
│   │   └── layouts/           # Structural layouts (e.g., DashboardLayout)
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   # Node.js + Express REST API
│   ├── src/
│   │   ├── controllers/       # Route handlers containing business logic
│   │   ├── routes/            # Express route definitions
│   │   ├── middleware/        # Express middlewares (Auth, Error handling)
│   │   ├── services/          # Reusable business logic (optional)
│   │   ├── prisma/            # Prisma schema and migrations
│   │   └── utils/             # Helper functions and utilities
│   ├── package.json
│   └── .env.example
│
├── mcp-server/                # Python FastMCP server (Added in Phase 8)
│   ├── main.py                # Entry point
│   ├── tools/                 # MCP Tool definitions
│   └── services/              # API clients for LMS backend communication
│
├── docs/                      # Project documentation
│   ├── architecture.md
│   ├── database.md
│   ├── api.md
│   ├── features.md
│   ├── folder-structure.md
│   └── roadmap.md
│
├── docker/                    # Docker specific configurations (optional)
├── docker-compose.yml         # Local orchestration
├── README.md                  # Project root overview
└── .gitignore                 # Root gitignore
```
