/*
 Copyright (c) 2021 Christer Johansson of Sweden Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Route, Switch } from 'react-router-dom';
import theme from '../../theme';
import history from '../../util/history';
import GlobalStyle from '../../globalStyle';
import HeaderContainer from '../Header/Container';
import ErrorNotificationContainer from '../ErrorNotification/Container';
import LoginFormContainer from '../LoginForm/Container';
import SignupFormContainer from '../SignupForm/Container';
import CreatePostFormContainer from '../CreatePostForm/Container';
import Home from '../Home';

const App = props => (
  <ThemeProvider theme={theme(props.dark)}>
    <Router history={history}>
      <>
        <GlobalStyle />
        <Route component={HeaderContainer} />
        <Route component={ErrorNotificationContainer} />
        <Switch>
          <Route path='/login' component={LoginFormContainer} />
          <Route path='/signup' component={SignupFormContainer} />
          <Route path='/createpost' component={CreatePostFormContainer} />
          <Route path='/' component={Home} />
        </Switch>
      </>
    </Router>
  </ThemeProvider>
);

export default App;
