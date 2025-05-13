import { StatusBar } from 'expo-status-bar';

import AppNavigation from './navigation/AppNavigation';
import { UserProvider } from './components/UserContext';
import { AppSettingsProvider } from './components/AppSettingsContext';

import './global.css';

export default function App() {
  return (
    <AppSettingsProvider>
      <UserProvider>
        <StatusBar style="dark" />
        <AppNavigation />
      </UserProvider>
    </AppSettingsProvider>
  );
}
