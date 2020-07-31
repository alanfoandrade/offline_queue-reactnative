import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { AuthProvider } from './auth';
import { store, persistor } from './store';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PersistGate persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  </AuthProvider>
);

export default AppProvider;
