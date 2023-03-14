import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Spinner } from 'shared/ui/components/Spinner';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <Router>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </Router>
  );
