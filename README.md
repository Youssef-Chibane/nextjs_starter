# Next.js Starter Project

A modern Next.js starter template with authentication, database integration, and UI components pre-configured.

## Key Features

- **Next.js 15**: Built with the latest Next.js (v15.3.2) using App Router
- **React 19**: Uses React 19 with modern features
- **Authentication**: Integrated with `better-auth` for authentication flows
- **Database**: Drizzle ORM with PostgreSQL for type-safe database access
- **UI Components**: Built with customizable UI components and Lucide React icons
- **TailwindCSS**: Utility-first CSS framework with custom configuration
- **TypeScript**: Fully typed codebase for better developer experience
- **Docker**: Includes Docker Compose setup for development
- **ESLint**: Configured for code quality and consistency
- **Turbopack**: Fast refresh with Turbopack in development mode

## Project Structure

```
├── app/                 # Next.js App Router directory
│   ├── api/             # API routes
│   ├── dashboard/       # Dashboard pages
│   ├── login/           # Authentication pages
│   ├── globals.css      # Global CSS
│   └── layout.tsx       # Root layout
├── components/          # React components
│   ├── ui/              # UI components
│   ├── sign-in-social.tsx # Social sign-in component
│   └── Signout.tsx      # Sign out component
├── db/                  # Database configuration
│   ├── index.ts         # DB client export
│   └── schema.ts        # Drizzle schema definitions
├── lib/                 # Utility functions and shared logic
│   ├── auth.ts          # Authentication utilities
│   ├── auth-client.ts   # Client-side auth helpers
│   └── utils.ts         # General utilities
├── public/              # Static assets
└── middleware.ts        # Next.js middleware
```

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd nextjs_starter
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file based on example configurations.

4. **Start the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. **Start PostgreSQL with Docker:**
   ```bash
   docker-compose up -d
   ```

## Available Scripts

- `pnpm dev` - Run development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint

## Database

This project uses Drizzle ORM with PostgreSQL. The schema is defined in `db/schema.ts`.

## Authentication

Authentication is implemented using `better-auth` with support for various authentication methods.

## UI Components

The project includes customizable UI components in the `components/ui` directory, built for flexibility and reuse.
