import { StatusBar } from 'expo-status-bar';

import AppNavigation from './navigation/AppNavigation';

import './global.css';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigation />
    </>
  );
}
