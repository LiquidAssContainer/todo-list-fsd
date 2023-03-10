import './index.sass';

import { FC, Suspense } from 'react';

import { Routing } from 'pages';
import { withProviders } from './providers';
import { AppFooter } from 'widgets/app-footer';
import { Page } from 'shared/ui/Page';
import { AppHeader } from 'widgets/app-header';
import { ErrorPopup } from 'entities/error';

export const App: FC = withProviders(() => (
  <Page>
    <Page.Header>
      <AppHeader />
    </Page.Header>

    <Page.Content>
      <Routing />
    </Page.Content>

    <Page.Footer>
      <AppFooter />
    </Page.Footer>
    <ErrorPopup />
  </Page>
));
