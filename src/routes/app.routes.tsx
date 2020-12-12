import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: '#0d0d0d' },
    }}
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    {console.log('logado')}
  </App.Navigator>
);

export default AppRoutes;