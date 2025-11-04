# KiwiPulse: New Zealand Economic Dashboard

[cloudflarebutton]

KiwiPulse is a sophisticated, visually stunning, and responsive web-based economic dashboard designed for the New Zealand Taxpayers' Union. It presents eight key macroeconomic indicators in a clean, modern, and highly interactive interface. Each indicator is displayed in its own dedicated card, featuring the latest data point, a change indicator (up/down), and a historical trend visualized as a compact sparkline chart. The dashboard is built for clarity and accessibility, allowing citizens, policymakers, and stakeholders to understand New Zealand's economic performance at a glance. Interactive elements like tooltips provide deeper context, including data sources and descriptions for each metric. The entire application is designed with a mobile-first approach, ensuring a seamless experience across all devices, from large desktops to smartphones.

## Key Features

-   **Comprehensive Data:** Displays 8 key New Zealand macroeconomic indicators.
-   **Official Sources:** Integrates real data from the Reserve Bank of New Zealand (RBNZ) and Stats NZ.
-   **Interactive Visualizations:** Each indicator features a historical trend sparkline chart powered by Recharts.
-   **Dynamic Filtering:** Users can adjust the time range for all visualized data.
-   **Modern UI/UX:** A sleek, professional dark theme built with Tailwind CSS and shadcn/ui.
-   **Responsive Design:** Flawless experience on desktops, tablets, and mobile devices.
-   **Informative Tooltips:** Hover-activated tooltips provide detailed descriptions and data sources for each metric.
-   **High Performance:** Built on the Cloudflare stack for a fast, globally-available experience.

## Technology Stack

-   **Frontend:** React, Vite, TypeScript
-   **UI Framework:** Tailwind CSS with shadcn/ui components
-   **State Management:** Zustand
-   **Data Visualization:** Recharts
-   **Backend API:** Hono on Cloudflare Workers
-   **Caching:** Cloudflare KV
-   **Deployment:** Cloudflare Pages & Workers
-   **Icons:** Lucide React
-   **Animation:** Framer Motion

## Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) (v1.0 or higher)
-   [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/kiwipulse-dashboard.git
    cd kiwipulse-dashboard
    ```

2.  **Install dependencies:**
    This project uses Bun as the package manager.
    ```sh
    bun install
    ```

## Development

To run the application in development mode, which includes hot-reloading for both the frontend and the backend worker:

```sh
bun run dev
```

This will start the Vite development server, typically available at `http://localhost:3000`.

## Building for Production

To build the application for production:

```sh
bun run build
```

This command bundles the React application and prepares the Cloudflare Worker for deployment. The output will be in the `dist` directory.

## Deployment

This project is optimized for deployment on the Cloudflare network.

### Deploying with Wrangler CLI

1.  **Authenticate with Cloudflare:**
    If this is your first time using Wrangler, you'll need to log in.
    ```sh
    bunx wrangler login
    ```

2.  **Deploy the application:**
    Run the deploy script, which builds the project and deploys it to your Cloudflare account.
    ```sh
    bun run deploy
    ```

### Deploy with the Deploy Button

You can also deploy this project directly to Cloudflare with a single click.

[cloudflarebutton]

## Project Structure

-   `src/`: Contains all the frontend React application code.
    -   `components/`: Reusable UI components, including shadcn/ui elements.
    -   `pages/`: Top-level page components for different routes.
    -   `lib/`: Utility functions and libraries.
    -   `hooks/`: Custom React hooks.
-   `worker/`: Contains the Hono backend API code for the Cloudflare Worker.
-   `wrangler.jsonc`: Configuration file for the Cloudflare Worker.
-   `vite.config.ts`: Configuration for the Vite development server and build process.