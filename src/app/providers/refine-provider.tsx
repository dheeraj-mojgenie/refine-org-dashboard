import { Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import routerProvider, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from '@refinedev/react-router';
import dataProvider from '@refinedev/simple-rest';
import { authProvider } from './auth-provider';
import { Toaster } from '@/components/refine-ui/notification/toaster';
import { useNotificationProvider } from '@/components/refine-ui/notification/use-notification-provider';
import { PropsWithChildren } from 'react';

// Dummy data provider (no real API)
const API_URL = 'https://api.fake-rest.refine.dev';

export const RefineProvider = ({ children }: PropsWithChildren) => {
  return (
    <RefineKbarProvider>
      <Refine
        authProvider={authProvider}
        dataProvider={dataProvider(API_URL)}
        notificationProvider={useNotificationProvider()}
        routerProvider={routerProvider}
        resources={[
          {
            name: 'dashboard',
            list: '/admin/dashboard',
            meta: {
              label: 'Dashboard',
            },
          },
          {
            name: 'registrations',
            list: '/admin/registrations',
            meta: {
              label: 'Registrations',
            },
          },
          {
            name: 'events',
            list: '/admin/events',
            meta: {
              label: 'Events',
            },
          },
          {
            name: 'ticketing',
            list: '/admin/ticketing',
            meta: {
              label: 'Ticketing',
            },
          },
          {
            name: 'organization',
            list: '/admin/organization',
            meta: {
              label: 'Organization Chart',
            },
          },
          {
            name: 'kanban',
            list: '/admin/kanban',
            meta: {
              label: 'Kanban Board',
            },
          },
          {
            name: 'scheduler',
            list: '/admin/scheduler',
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
        {children}
        <Toaster />
        <RefineKbar />
        <UnsavedChangesNotifier />
        <DocumentTitleHandler />
      </Refine>
    </RefineKbarProvider>
  );
};
