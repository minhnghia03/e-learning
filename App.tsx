import { StatusBar } from 'expo-status-bar';

import AppNavigation from './navigation/AppNavigation';
import { UserProvider } from './components/UserContext';

import './global.css';

export default function App() {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <AppNavigation />
    </UserProvider>
  );
}
