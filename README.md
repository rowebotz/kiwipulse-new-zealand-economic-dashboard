# KiwiPulse: New Zealand Economic Dashboard

**Created by [Stephen Rowe](https://www.digitalrowe.com)**

KiwiPulse is a responsive, visually rich web-based economic dashboard designed for the New Zealand Taxpayers' Union. It presents eight key macroeconomic indicators in a clean, modern, and highly interactive interface. Each indicator is displayed in its own dedicated card, featuring the latest data point, a change indicator (up/down), and a historical trend visualized as a compact sparkline chart.

The dashboard is built for clarity and accessibility, allowing citizens, policymakers, and stakeholders to understand New Zealand's economic performance at a glance. Interactive tooltips provide deeper context, including data sources and descriptions for each metric. The application follows a mobile-first design approach, ensuring a seamless experience across all devices, from large desktops to smartphones.

---

## Key Features

- **Comprehensive data:** Displays eight key New Zealand macroeconomic indicators
- **Official sources:** Integrates real data from the Reserve Bank of New Zealand (RBNZ) and Stats NZ
- **Interactive visualizations:** Each indicator features a historical trend sparkline chart powered by Recharts
- **Dynamic filtering:** Users can adjust the time range for all visualized data
- **Modern UI/UX:** A sleek, professional dark theme built with Tailwind CSS and shadcn/ui
- **Responsive design:** Consistent experience on desktops, tablets, and mobile devices
- **Informative tooltips:** Hover-activated tooltips provide detailed descriptions and data sources for each metric

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React, Vite, TypeScript |
| UI Framework | Tailwind CSS with shadcn/ui |
| State Management | Zustand |
| Data Visualization | Recharts |
| Icons | Lucide React |
| Animation | Framer Motion |

---

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

- **Bun** (v1.0 or higher)
- **Git**

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/kiwipulse-dashboard.git
cd kiwipulse-dashboard
```

2. Install dependencies using Bun as the package manager:
```bash
bun install
```

---

## Development

To run the application in development mode with hot-reloading:
```bash
bun run dev
```

This starts the Vite development server, typically available at `http://localhost:3000`.

---

## Building for Production

To build the application for production:
```bash
bun run build
```

This command bundles the React application for deployment. The output will be in the `dist` directory.

---

## Project Structure
```
kiwipulse-dashboard/
├── src/
│   ├── components/     # Reusable UI components, including shadcn/ui elements
│   ├── pages/          # Top-level page components for different routes
│   ├── lib/            # Utility functions and libraries
│   └── hooks/          # Custom React hooks
└── vite.config.ts      # Configuration for the Vite development server and build process
```

---

## About

KiwiPulse was built by [Stephen Rowe](https://www.digitalrowe.com), a developer focused on creating clean, data-driven web applications.
