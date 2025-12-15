import { Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import dataProvider from '@refinedev/simple-rest';

import './App.css';
import { ThemeProvider } from './components/refine-ui/theme/theme-provider';
import { Toaster } from './components/refine-ui/notification/toaster';
import { useNotificationProvider } from './components/refine-ui/notification/use-notification-provider';

// Pages
import { LoginPage } from './pages/auth/login';
import { AdminLayout } from './shared/components/layout/AdminLayout';
import { DashboardPage } from './pages/organization-dashboard';
import { RegistrationListPage } from './pages/registration/list';
import { OrganizationChart } from './shared/components/custom/OrganizationChart';
import { KanbanBoard } from './shared/components/custom/KanbanBoard';
import { ScientificScheduler } from './shared/components/custom/ScientificScheduler';
import { EventsPage } from './pages/events';
import { TicketingPage } from './pages/ticketing';
import { SettingsPage } from './pages/settings';

// Dummy data provider (no real API)
const API_URL = 'https://api.fake-rest.refine.dev';

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ThemeProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider(API_URL)}
              notificationProvider={useNotificationProvider()}
              routerProvider={routerProvider}
              resources={[
                {
                  name: 'dashboard',
                  list: '/dashboard',
                  meta: {
                    label: 'Dashboard',
                  },
                },
                {
                  name: 'registrations',
                  list: '/registrations',
                  meta: {
                    label: 'Registrations',
                  },
                },
                {
                  name: 'events',
                  list: '/events',
                  meta: {
                    label: 'Events',
                  },
                },
                {
                  name: 'ticketing',
                  list: '/ticketing',
                  meta: {
                    label: 'Ticketing',
                  },
                },
                {
                  name: 'organization',
                  list: '/organization',
                  meta: {
                    label: 'Organization Chart',
                  },
                },
                {
                  name: 'kanban',
                  list: '/kanban',
                  meta: {
                    label: 'Kanban Board',
                  },
                },
                {
                  name: 'scheduler',
                  list: '/scheduler',
                  meta: {
                    label: 'Scheduler',
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: 'qyyoRh-HW3UAy-biytvo',
              }}
            >
              <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />

                {/* Protected Routes */}
                <Route path="/" element={<AdminLayout />}>
                  <Route index element={<Navigate to="/dashboard" replace />} />
                  <Route path="dashboard" element={<DashboardPage />} />
                  <Route
                    path="registrations"
                    element={<RegistrationListPage />}
                  />
                  <Route path="events" element={<EventsPage />} />
                  <Route path="ticketing" element={<TicketingPage />} />
                  <Route path="organization" element={<OrganizationChart />} />
                  <Route path="kanban" element={<KanbanBoard />} />
                  <Route path="scheduler" element={<ScientificScheduler />} />

                  {/* Placeholder routes */}
                  <Route path="settings" element={<SettingsPage />} />
                </Route>

                {/* Catch all - redirect to dashboard */}
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
              </Routes>

              <Toaster />
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ThemeProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
