/* libs */
import React from 'react';

/* hooks */
import { AuthProvider } from './auth';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export { AppProvider };
