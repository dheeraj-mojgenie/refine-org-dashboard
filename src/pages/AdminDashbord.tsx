import { Suspense } from 'react';
import { DashboardPage } from '@/features/admin-dashboard';
import { PageLoader } from '@/components/custum-ui/PageLoader';

export const AdminDashbord = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <DashboardPage />
    </Suspense>
  );
};
