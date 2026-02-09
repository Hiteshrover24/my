# Procentrilix Corporate Website

## Overview

Procentrilix is a corporate services website for a company offering IT and non-IT services including accessibility compliance, web development, e-publishing, back-office support, cybersecurity, and international taxation services (USA, UK, UAE). The application is a single-page marketing website with a contact form that persists inquiries to a PostgreSQL database. It follows a monorepo structure with a React frontend, Express backend, and shared schema/route definitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
The project uses a three-directory monorepo pattern:
- **`client/`** — React frontend (Vite-powered SPA)
- **`server/`** — Express 5 backend API
- **`shared/`** — Shared TypeScript types, Zod schemas, and route definitions used by both client and server

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build tool**: Vite with `@vitejs/plugin-react`
- **Routing**: Wouter (lightweight router) — single-page app with hash-based section navigation
- **State management**: TanStack React Query for server state
- **UI components**: shadcn/ui (new-york style) built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS custom properties for theming (corporate palette: deep navy, teal, gold)
- **Animations**: Framer Motion for scroll reveals and page transitions
- **Forms**: React Hook Form with Zod validation via `@hookform/resolvers`
- **Typography**: Outfit (display) and DM Sans (body) fonts via Google Fonts
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Runtime**: tsx for development, esbuild for production bundling
- **API pattern**: A typed route contract in `shared/routes.ts` defines paths, methods, input schemas, and response schemas — both client and server reference the same definitions
- **Single endpoint**: `POST /api/inquiries` — accepts contact form submissions
- **Dev server**: Vite dev server runs as Express middleware in development (via `server/vite.ts`)
- **Production**: Static files served from `dist/public`, server bundled to `dist/index.cjs`

### Database & ORM
- **Database**: PostgreSQL (required, connection via `DATABASE_URL` environment variable)
- **ORM**: Drizzle ORM with `drizzle-zod` for automatic Zod schema generation
- **Schema location**: `shared/schema.ts` — single `inquiries` table with id, name, email, subject, message, createdAt
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization
- **Connection**: `pg` Pool via `server/db.ts`

### Data Flow
1. User fills contact form → React Hook Form validates with Zod schema from `shared/schema.ts`
2. `useCreateInquiry` hook sends POST to `/api/inquiries`
3. Express route validates input with same Zod schema
4. `DatabaseStorage.createInquiry()` inserts into PostgreSQL via Drizzle
5. Response returned and toast notification shown

### Build Process
- `npm run dev` — tsx runs server with Vite HMR middleware
- `npm run build` — Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`
- `npm run start` — Runs production bundle
- `npm run db:push` — Pushes Drizzle schema to database

## External Dependencies

### Database
- **PostgreSQL** — Required. Must have `DATABASE_URL` environment variable set. Used via `pg` Pool and Drizzle ORM.

### Key NPM Packages
- **Express 5** — HTTP server
- **Drizzle ORM + drizzle-zod + drizzle-kit** — Database ORM and schema management
- **Zod** — Runtime validation (shared between client and server)
- **TanStack React Query** — Async state management
- **Framer Motion** — Animations
- **shadcn/ui + Radix UI** — Component library (extensive set of Radix primitives installed)
- **Tailwind CSS** — Utility-first styling
- **Wouter** — Client-side routing
- **Lucide React** — Icon library

### Replit-Specific Plugins
- `@replit/vite-plugin-runtime-error-modal` — Error overlay in development
- `@replit/vite-plugin-cartographer` — Dev tooling (dev only)
- `@replit/vite-plugin-dev-banner` — Dev banner (dev only)

### External Services
- **Google Fonts** — Outfit, DM Sans, Geist Mono, Fira Code, Architects Daughter fonts
- **Unsplash** — Hero section background image loaded via URL
- No authentication system is implemented
- No payment processing
- No email sending service (form submissions are stored in database only)