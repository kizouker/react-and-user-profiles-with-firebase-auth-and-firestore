export default App;
import AuthProvider from './providers/AuthProvider';
import FirebaseProviderMine from './providers/FirebaseProviderMine.jsx'
import {RestOfTheApp} from './components/RestOfTheApp';

import './App.css';


export const App = () => {
  return (
    <FirebaseProviderMine>
      <AuthProvider>
        <RestOfTheApp />
      </AuthProvider>
    </FirebaseProviderMine>
  );
};

