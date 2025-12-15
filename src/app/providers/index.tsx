import { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router';
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools';
import { ThemeProvider } from '@/components/refine-ui/theme/theme-provider';
import { RefineProvider } from './refine-provider';

export const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <DevtoolsProvider>
          <RefineProvider>
            {children}
            <DevtoolsPanel />
          </RefineProvider>
        </DevtoolsProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
