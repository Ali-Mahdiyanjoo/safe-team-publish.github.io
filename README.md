# ESN Safe Team

> **Note:** This project is currently in the **UI phase only**. It serves as a fully functional frontend template with form state management, validation, and theme switching, but it is not yet connected to a backend API or database.

## Overview

ESN Safe Team is a modern, responsive web application designed for campus emergency and incident reporting. It provides a user-friendly interface for students to request standard support or trigger urgent alerts directly to on-duty team members.

## Features

- **Dual Reporting Modes**: Seamlessly switch between "Standard Help" and "Urgent Case" reporting.
- **Anonymous Reporting**: Built-in toggle to hide personal identity details for sensitive incidents.
- **Internationalization (i18n)**: Full support for English and French languages, allowing users to switch easily.
- **Modern Theme System**: Includes both Light and Dark modes with custom Material UI (MUI) styling and glassmorphism elements.
- **Responsive Design**: Adapts perfectly to both desktop (split-screen layout) and mobile (collapsible drawer for guidelines).
- **Robust Form Validation**: Uses `react-hook-form` to ensure required fields like location, subject, and description are properly filled.

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Material UI (MUI) v6](https://mui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Translations**: [react-i18next](https://react.i18next.com/)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` by default.

### Building for Production

To build the optimized static files:

```bash
npm run build
```
