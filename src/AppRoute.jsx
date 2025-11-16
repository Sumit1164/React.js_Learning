import { Route, Routes } from 'react-router'
import HomePage from './HomPage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
const AppRoute = () => {
  return (
      <>
        <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default AppRoute
