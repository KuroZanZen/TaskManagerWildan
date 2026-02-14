# Wildan Apps

A multi-functional React application featuring a Task Tracker, Calculator, and Temperature Converter. Built with React, Vite, and Tailwind CSS.

## Features

### 1. Task Tracker

- **Add Tasks**: Easily add new tasks to your list.
- **Track Progress**: Mark tasks as complete or incomplete.
- **Smart Sorting**: Completed tasks are automatically moved to the bottom with a strikethrough style.
- **Delete Tasks**: Remove unwanted tasks.

### 2. Calculator

- **Basic Arithmetic**: Perform addition, subtraction, multiplication, and division.
- **Clean UI**: Simple and responsive design.

### 3. Temperature Converter

- **Two-way Conversion**: Convert between Celsius and Fahrenheit instantly.
- **Real-time Updates**: Type in one field and see the result in the other.

## Technologies Used

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React Router](https://reactrouter.com/) - Navigation

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Navigate to the project directory.
2. Install dependencies:

   ```bash
   npm install
   # or
   pnpm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
pnpm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Navigation

The app now includes a navigation header to easily switch between tools:

- **Task Manager**: The home page.
- **Calculator**: Access via the header link.
- **Temperature Converter**: Access via the header link.

## Building for Production

To create a production build:

```bash
npm run build
# or
pnpm run build
```

The build artifacts will be stored in the `dist/` directory.
