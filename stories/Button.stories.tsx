import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger', 'invisible'],
    },
    color: {
      control: { type: 'select' },
      options: ['on', 'off'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'extra-large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary variant stories - Color On
export const Primary: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: 'medium',
    children: 'Button',
  },
};

export const PrimarySmall: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: 'small',
    children: 'Small Button',
  },
};

export const PrimaryLarge: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: 'large',
    children: 'Large Button',
  },
};

export const PrimaryExtraLarge: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: 'extra-large',
    children: 'Extra Large Button',
  },
};

// Primary variant stories - Color Off (Grey)
export const PrimaryGrey: Story = {
  args: {
    variant: 'primary',
    color: 'off',
    size: 'medium',
    children: 'Grey Button',
  },
};

export const PrimaryGreySmall: Story = {
  args: {
    variant: 'primary',
    color: 'off',
    size: 'small',
    children: 'Grey Small',
  },
};

export const PrimaryGreyLarge: Story = {
  args: {
    variant: 'primary',
    color: 'off',
    size: 'large',
    children: 'Grey Large',
  },
};

// Secondary variant stories - Color On
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    color: 'on',
    size: 'medium',
    children: 'Secondary Button',
  },
};

export const SecondarySmall: Story = {
  args: {
    variant: 'secondary',
    color: 'on',
    size: 'small',
    children: 'Secondary Small',
  },
};

export const SecondaryLarge: Story = {
  args: {
    variant: 'secondary',
    color: 'on',
    size: 'large',
    children: 'Secondary Large',
  },
};

// Secondary variant stories - Color Off (Grey)
export const SecondaryGrey: Story = {
  args: {
    variant: 'secondary',
    color: 'off',
    size: 'medium',
    children: 'Secondary Grey',
  },
};

export const SecondaryGreySmall: Story = {
  args: {
    variant: 'secondary',
    color: 'off',
    size: 'small',
    children: 'Secondary Grey Small',
  },
};

export const SecondaryGreyLarge: Story = {
  args: {
    variant: 'secondary',
    color: 'off',
    size: 'large',
    children: 'Secondary Grey Large',
  },
};

// Tertiary variant stories - Color On
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    color: 'on',
    size: 'medium',
    children: 'Tertiary Button',
  },
};

// Tertiary variant stories - Color Off (Grey)
export const TertiaryGrey: Story = {
  args: {
    variant: 'tertiary',
    color: 'off',
    size: 'medium',
    children: 'Tertiary Grey',
  },
};

// Danger variant stories - Color On
export const Danger: Story = {
  args: {
    variant: 'danger',
    color: 'on',
    size: 'medium',
    children: 'Danger Button',
  },
};

// Danger variant stories - Color Off (Grey)
export const DangerGrey: Story = {
  args: {
    variant: 'danger',
    color: 'off',
    size: 'medium',
    children: 'Danger Grey',
  },
};

// Invisible variant stories - Color On
export const Invisible: Story = {
  args: {
    variant: 'invisible',
    color: 'on',
    size: 'medium',
    children: 'Invisible Button',
  },
};

// Invisible variant stories - Color Off (Grey)
export const InvisibleGrey: Story = {
  args: {
    variant: 'invisible',
    color: 'off',
    size: 'medium',
    children: 'Invisible Grey',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    variant: 'primary',
    color: 'on',
    size: 'medium',
    children: 'Disabled Button',
    disabled: true,
  },
};

export const DisabledGrey: Story = {
  args: {
    variant: 'primary',
    color: 'off',
    size: 'medium',
    children: 'Disabled Grey',
    disabled: true,
  },
};

// All variants showcase - Color On
export const AllVariantsOn: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" color="on">Primary</Button>
      <Button variant="secondary" color="on">Secondary</Button>
      <Button variant="tertiary" color="on">Tertiary</Button>
      <Button variant="danger" color="on">Danger</Button>
      <Button variant="invisible" color="on">Invisible</Button>
    </div>
  ),
};

// All variants showcase - Color Off (Grey)
export const AllVariantsOff: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      <Button variant="primary" color="off">Primary Grey</Button>
      <Button variant="secondary" color="off">Secondary Grey</Button>
      <Button variant="tertiary" color="off">Tertiary Grey</Button>
      <Button variant="danger" color="off">Danger Grey</Button>
      <Button variant="invisible" color="off">Invisible Grey</Button>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" color="on" size="small">Small</Button>
      <Button variant="primary" color="on" size="medium">Medium</Button>
      <Button variant="primary" color="on" size="large">Large</Button>
      <Button variant="primary" color="on" size="extra-large">Extra Large</Button>
    </div>
  ),
};

// All sizes showcase - Grey
export const AllSizesGrey: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" color="off" size="small">Small Grey</Button>
      <Button variant="primary" color="off" size="medium">Medium Grey</Button>
      <Button variant="primary" color="off" size="large">Large Grey</Button>
      <Button variant="primary" color="off" size="extra-large">Extra Large Grey</Button>
    </div>
  ),
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Color On</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" color="on" size="small">Primary S</Button>
          <Button variant="primary" color="on" size="medium">Primary M</Button>
          <Button variant="primary" color="on" size="large">Primary L</Button>
          <Button variant="primary" color="on" size="extra-large">Primary XL</Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Button variant="secondary" color="on" size="medium">Secondary</Button>
          <Button variant="tertiary" color="on" size="medium">Tertiary</Button>
          <Button variant="danger" color="on" size="medium">Danger</Button>
          <Button variant="invisible" color="on" size="medium">Invisible</Button>
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: '600' }}>Color Off (Grey)</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button variant="primary" color="off" size="small">Primary S</Button>
          <Button variant="primary" color="off" size="medium">Primary M</Button>
          <Button variant="primary" color="off" size="large">Primary L</Button>
          <Button variant="primary" color="off" size="extra-large">Primary XL</Button>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Button variant="secondary" color="off" size="medium">Secondary</Button>
          <Button variant="tertiary" color="off" size="medium">Tertiary</Button>
          <Button variant="danger" color="off" size="medium">Danger</Button>
          <Button variant="invisible" color="off" size="medium">Invisible</Button>
        </div>
      </div>
    </div>
  ),
};