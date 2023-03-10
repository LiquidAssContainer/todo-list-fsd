// Либо использовать @loadable/component, в рамках туториала - некритично
import { lazy, Suspense } from 'react';
// import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';

// const lazy = <T extends Record<string, React.FunctionComponent>>(
//   loader: () => Promise<T>,
//   name: keyof T,
// ) =>
//   React.lazy(async () => {
//     const module = await loader();
//     return { default: module[name] };
//   });

// const TasksPage = lazy(() => import('./tasks'), 'TaskListPage');
const TasksPage = lazy(() => import('./tasks'));
const AddTaskPage = lazy(() => import('./add-task'));
const EditTaskPage = lazy(() => import('./edit-task'));
const AboutPage = lazy(() => import('./about'));
const ContactsPage = lazy(() => import('./contacts'));
const TermsOfSerivcePage = lazy(() => import('./terms-of-service'));

export const Routing = () => {
  return (
    // <Router>
    <Switch>
      <Route exact path="/add" component={AddTaskPage} />
      <Route exact path="/edit/:id" component={EditTaskPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route exact path="/terms-of-service" component={TermsOfSerivcePage} />
      <Route exact path="/" component={TasksPage} />
      <Redirect to="/" />
    </Switch>
  );
};
