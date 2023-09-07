import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { GlobalStyles, theme } from 'styles';
import { Global, ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
