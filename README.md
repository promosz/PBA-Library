# PBA Library

A modern React component library built with Storybook, TypeScript, and Vite.

## Features

- 🎨 **Storybook** - Interactive component playground
- ⚡ **Vite** - Fast build tool and dev server
- 🔷 **TypeScript** - Type-safe development
- 📦 **React** - Modern React components

## Getting Started

### Installation

```bash
npm install
```

### Development

Start the Storybook development server:

```bash
npm run storybook
```

This will open Storybook at `http://localhost:6006`

### Build

Build the library:

```bash
npm run build
```

Build Storybook for production:

```bash
npm run build-storybook
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from './src/components';

<Button primary size="large" label="Click me" />
```

## Storybook

This project uses Storybook to showcase and test components. Run `npm run storybook` to start the development server and explore the component library.

## License

MIT
