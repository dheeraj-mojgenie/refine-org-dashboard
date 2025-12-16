import { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { PageLoader } from '@/components/custum-ui/PageLoader';

// Lazy load layouts
const AdminLayout = lazy(() =>
  import('@/shared/layout/AdminLayout').then((module) => ({
    default: module.AdminLayout,
  }))
);

// Lazy load pages
const LoginPage = lazy(() =>
  import('@/features/auth/public/login').then((module) => ({
    default: module.LoginPage,
  }))
);
const SignupPage = lazy(() =>
  import('@/features/auth/public/signup').then((module) => ({
    default: module.SignupPage,
  }))
);
const DashboardPage = lazy(() =>
  import('@/features/admin-dashboard').then((module) => ({
    default: module.DashboardPage,
  }))
);
const SettingsPage = lazy(() =>
  import('@/features/admin-dashboard/pages/SettingsPage').then((module) => ({
    default: module.SettingsPage,
  }))
);
const RegistrationListPage = lazy(() =>
  import('@/features/registration/admin').then((module) => ({
    default: module.RegistrationListPage,
  }))
);
const RegistrationShowPage = lazy(() =>
  import('@/features/registration/admin').then((module) => ({
    default: module.RegistrationShowPage,
  }))
);
const RegistrationPage = lazy(() =>
  import('@/features/registration/public').then((module) => ({
    default: module.RegistrationPage,
  }))
);
const OrganizationChartPage = lazy(() =>
  import('@/features/organization/admin').then((module) => ({
    default: module.OrganizationChartPage,
  }))
);
const KanbanBoardPage = lazy(() =>
  import('@/features/kanban/admin').then((module) => ({
    default: module.KanbanBoardPage,
  }))
);
const ScientificSchedulerPage = lazy(() =>
  import('@/features/scheduler/admin').then((module) => ({
    default: module.ScientificSchedulerPage,
  }))
);
const EventsPage = lazy(() =>
  import('@/features/events/admin').then((module) => ({
    default: module.EventsPage,
  }))
);
const TicketingPage = lazy(() =>
  import('@/features/ticketing/admin').then((module) => ({
    default: module.TicketingPage,
  }))
);

export const routes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <Suspense fallback={<PageLoader />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: '/register',
    element: (
      <Suspense fallback={<PageLoader />}>
        <RegistrationPage />
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<PageLoader />}>
        <SignupPage />
      </Suspense>
    ),
  },
  {
    path: '/admin',
    element: (
      <Suspense fallback={<PageLoader />}>
        <AdminLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<PageLoader />}>
            <DashboardPage />
          </Suspense>
        ),
      },
      {
        path: 'registrations',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <RegistrationListPage />
              </Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<PageLoader />}>
                <RegistrationShowPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'events',
        element: (
          <Suspense fallback={<PageLoader />}>
            <EventsPage />
          </Suspense>
        ),
      },
      {
        path: 'ticketing',
        element: (
          <Suspense fallback={<PageLoader />}>
            <TicketingPage />
          </Suspense>
        ),
      },
      {
        path: 'scheduler',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ScientificSchedulerPage />
          </Suspense>
        ),
      },
      {
        path: 'organization',
        element: (
          <Suspense fallback={<PageLoader />}>
            <OrganizationChartPage />
          </Suspense>
        ),
      },
      {
        path: 'kanban',
        element: (
          <Suspense fallback={<PageLoader />}>
            <KanbanBoardPage />
          </Suspense>
        ),
      },
      {
        path: 'settings',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SettingsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/admin/dashboard" replace />,
  },
];
