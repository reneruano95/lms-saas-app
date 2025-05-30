<div align="center">
  <div>
    <img src="./public/readme/hero.png" alt="Project Banner">
  </div>

  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-black?style=for-the-badge&logoColor=white&logo=vapi.com&color=green" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="supabase" />
    <img src="https://img.shields.io/badge/-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="clerk" />
  </div>

<h3 align="center">LMS SaaS App - Project Documentation</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 🏗️ [Project Structure](#project-structure)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🧩 [Components](#components)
5. 🔐 [Authentication](#authentication)
6. 💾 [Database](#database)
7. 🎙️ [Voice AI Integration](#voice-ai)
8. 🤸 [Getting Started](#getting-started)

## <a name="introduction">🤖 Introduction</a>

This is a comprehensive Learning Management System (LMS) SaaS application built with Next.js. The platform enables users to take tutoring sessions with AI voice agents specializing in various topics. The application features user authentication, subscription management, tutor creation, and session history tracking.

## <a name="project-structure">🏗️ Project Structure</a>

The project follows a standard Next.js application structure:

- **app/**: Contains the Next.js application pages and routes
  - **page.tsx**: Main landing page
  - **layout.tsx**: Root layout component
  - **[other routes]**: Additional application routes

- **components/**: Reusable UI components
  - **ui/**: Basic UI components (buttons, inputs, etc.)
  - **[feature-specific components]**: Components organized by feature

- **constants/**: Constant values used throughout the application

- **lib/**: Utility functions and libraries
  - **supabase/**: Supabase client configuration
  - **[other utility modules]**: Additional utility functions

- **public/**: Static assets including images and icons
  - **readme/**: Images used in documentation

- **types/**: TypeScript type definitions

## <a name="tech-stack">⚙️ Tech Stack</a>

- **[Next.js](https://nextjs.org/)** is a powerful React framework that enables the development of fast, scalable web applications with features like server-side rendering, static site generation, and API routes for building full-stack applications.

* **[TypeScript](https://www.typescriptlang.org/)** is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers, making it ideal for building large-scale applications.

- **[Clerk](https://clerk.dev/)** is a unified platform for authentication, user management, and billing. It offers embeddable UI components, flexible APIs, and admin dashboards for secure user management.

* **[Supabase](https://supabase.com/)** is an open-source backend-as-a-service platform that provides instant APIs, real-time subscriptions, authentication, storage, and a PostgreSQL database, enabling developers to build scalable and secure applications with ease.

- **[Vapi](https://vapi.ai/)** is a developer-centric voice AI platform that enables the creation of conversational voice agents with low-latency voice interactions, speech-to-text, and text-to-speech capabilities.

* **[Tailwind CSS](https://tailwindcss.com/)** is a utility-first CSS framework that allows developers to design custom user interfaces by applying low-level utility classes directly in HTML, streamlining the design process.

- **[shadcn/ui](https://ui.shadcn.com/)** is a customizable component library built on Radix UI and Tailwind CSS. It offers a modern, accessible design system with pre-built components that are easy to theme and extend.

## <a name="components">🧩 Components</a>

The application uses a component-based architecture with reusable UI components:

👉 **UI Components**: Basic building blocks like buttons, inputs, and cards built with shadcn/ui and Tailwind CSS.

👉 **Layout Components**: Components that define the overall structure of the application, including navigation and footers.

👉 **Feature Components**: Specialized components for specific features like tutor creation, session management, and user profiles.

👉 **Form Components**: Components for handling user input with validation using React Hook Form and Zod.

## <a name="authentication">🔐 Authentication</a>

Authentication is handled by Clerk, which provides:

👉 **User Sign-up and Sign-in**: Secure authentication flows with multiple options.

👉 **Social Authentication**: Integration with providers like Google.

👉 **User Management**: Tools for managing user accounts and permissions.

👉 **Session Management**: Secure handling of user sessions.

## <a name="database">💾 Database</a>

Supabase is used as the database solution, providing:

👉 **PostgreSQL Database**: Powerful relational database for storing application data.

👉 **Real-time Subscriptions**: Live updates for collaborative features.

👉 **Row-level Security**: Fine-grained access control for data.

👉 **API Generation**: Automatically generated APIs for database tables.

## <a name="voice-ai">🎙️ Voice AI Integration</a>

Vapi integration enables:

👉 **AI Voice Agents**: Interactive tutoring sessions with voice-enabled AI.

👉 **Custom Tutor Creation**: Users can create AI tutors with specific subjects and conversation styles.

👉 **Multilingual Support**: Support for conversations in multiple languages.

👉 **Natural Conversations**: Low-latency voice interactions for a seamless experience.

## <a name="getting-started">🤸 Getting Started</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/yourusername/lms-saas-app.git
cd lms-saas-app
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project based on the `.env.local.example` file and add your credentials:

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on: [Clerk](https://clerk.dev/), [Supabase](https://supabase.com/), [Vapi](https://vapi.ai/), [Sentry](https://sentry.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

<img src="./public/readme/hero.png" alt="Project Banner">