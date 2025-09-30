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

## Adding Components

1. Create your component in `src/components/`
2. Export it from `src/components/index.ts`
3. Create stories in `stories/` directory
4. Run `npm run storybook` to see your component

### Example Component Structure

```
src/components/
├── MyComponent/
│   ├── MyComponent.tsx
│   ├── MyComponent.css
│   └── index.ts
└── index.ts
```

### Example Story

```tsx
// stories/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../src/components/MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Example/MyComponent',
  component: MyComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your props here
  },
};
```

## Storybook

This project uses Storybook to showcase and test components. Run `npm run storybook` to start the development server and explore the component library.

## License

MIT