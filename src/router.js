import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import JobDetailsPage from './pages/JobDetails';
import JobSearchPage from './pages/JobSearch';
import NotFoundPage from './pages/NotFound';

const RouterApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <JobSearchPage />
        </Route>
        <Route path="/details/:id">
          <JobDetailsPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterApp;
