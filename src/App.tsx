import React from 'react';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { store } from 'redux/store';
import { history } from 'services/history';
import AppRoutes from 'router/Router';

function App() {
  return (
    <Provider store={store}>
      <HistoryRouter history={history as any}>
        <AppRoutes />
      </HistoryRouter>
    </Provider>
  );
}

export default App;
