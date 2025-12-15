# Organizational Dashboard - Refine.dev

A professional organizational dashboard built with Refine.dev, Vite, TypeScript, and shadcn/ui. This project demonstrates enterprise-level UI components and architecture patterns.

## Features

- 🔐 **Authentication**: Professional login page with dummy authentication
- 📊 **Dashboard**: KPI cards, charts (line, bar, pie), and real-time statistics
- 📋 **Data Management**: Advanced table with search, filter, sort, pagination, and bulk actions
- 🏢 **Organization Chart**: Interactive hierarchical visualization with zoom controls
- 📅 **Scientific Scheduler**: Time-slot based session management with room allocation
- 📌 **Kanban Board**: Task management with drag-and-drop columns
- 🎨 **Modern UI**: Built with shadcn/ui and Tailwind CSS v4
- 🌙 **Dark Mode**: Full dark mode support

## Tech Stack

- **Framework**: Refine.dev + React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Router**: React Router v7

## Project Structure

```
├── public/
│   ├── assets/
│   └── locales/
├── src/
│   ├── app/
│   │   ├── providers/
│   │   └── router/
│   │
│   ├── features/
│   │   ├── registration/
│   │   ├── ticketing/
│   │   └── scheduler/
│   │
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   ├── custom/
│   │   │   └── ui/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── constants/
│   │
│   ├── pages/
│   │   ├── auth/
│   │   ├── organization-dashboard/
│   │   ├── registration/
│   │   └── ...
│   │
│   └── core/
│       ├── config/
│       ├── models/
│       └── interfaces/
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
cd refine-org-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Default Login

This is a static UI demonstration with dummy authentication. Simply click the "Sign In" button on the login page to access the dashboard.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run refine` - Run Refine CLI commands

## Key Pages

### 1. Login Page (`/login`)
Professional authentication UI with gradient design and social login options.

### 2. Dashboard (`/dashboard`)
- KPI cards with statistics
- Line chart for registration trends
- Bar chart for revenue overview
- Pie chart for event types
- Recent registrations feed

### 3. Registrations (`/registrations`)
Advanced data table featuring:
- Search by name, email, or ID
- Filter by status and ticket type
- Column sorting
- Pagination
- Row actions (view, edit, delete)
- Bulk operations (approve, email, delete)

### 4. Organization Chart (`/organization`)
Interactive org chart with:
- Hierarchical tree structure
- Expandable/collapsible nodes
- Zoom in/out controls
- Employee cards with contact info

### 5. Kanban Board (`/kanban`)
Task management board with:
- Multiple columns (To Do, In Progress, Review, Done)
- Task cards with priority, tags, and assignees
- Visual drag-and-drop interface

### 6. Scheduler (`/scheduler`)
Scientific conference scheduler with:
- Time-slot grid view
- Room allocation
- Color-coded session categories
- Day/week view toggle
- Session details (speaker, time, room)

## Customization

This project showcases various levels of customization available in Refine.dev:

1. **Layout Customization**: Custom sidebar, topbar, and admin layout
2. **Component Customization**: All shadcn/ui components are customizable
3. **Theme Customization**: Tailwind CSS configuration for colors and styles
4. **Data Provider**: Can be easily swapped for real API integration

## Dummy Data

All data in this application is generated using dummy data utilities located in `src/shared/utils/dummy-data.ts`. This includes:

- 100 sample registrations
- Organization hierarchy
- Kanban tasks
- Schedule sessions
- Dashboard statistics

## Future Enhancements

- Real API integration
- Form validation and submission
- Detail pages for each entity
- Advanced filtering options
- Export functionality
- Real-time updates
- User management
- Role-based access control

## License

MIT

## Support

For questions or issues, please refer to the [Refine.dev documentation](https://refine.dev/docs/).
