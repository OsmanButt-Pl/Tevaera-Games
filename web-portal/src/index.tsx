/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './assets/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './features/app/App';
import AppProvider from './components/AppProvider';
import * as serviceWorker from './serviceWorker';
import theme from './Theme';
import Landing from './features/app/Landing';
import Privacy from './features/app/Privacy';
import TermsCondition from './features/app/TermsCondition';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Route path="/home" component={Landing}></Route>
      <Route path="/privacy" component={Privacy}></Route>
      <Route path="/termsCondition" component={TermsCondition}></Route>
    </Router>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
