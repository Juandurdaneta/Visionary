import Login from './src/Login';
import Register from './src/Register';
import Home from './src/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { RequireAuth } from './src/guards/RequireAuth';
import { AuthProvider } from './src/auth';
import FlashMessage from 'react-native-flash-message';

export default function App() {

  return (
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={
                  <RequireAuth>
                        <Home />
                  </RequireAuth>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={ <Register /> } />
        </Routes>
        </AuthProvider>
        <FlashMessage position="bottom" /> 
      </Router>
    );
}

