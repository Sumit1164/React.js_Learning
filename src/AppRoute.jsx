import { Navigate, Route, Routes } from 'react-router'
import HomePage from './HomPage';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import PageNotFound from './PageNotFound';
import CollegeNavBar from './CollegeNavBar';
import CollegeStudent from './CollegeStudent';
import CollegeDepartment from './CollegeDepartment';
import CollegeDetails from './CollegeDetails';
const AppRoute = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/college" element={<CollegeNavBar />}>
          <Route path="student" element={<CollegeStudent />} />
          <Route path="department" element={<CollegeDepartment />} />
          <Route path="details" element={<CollegeDetails />} />
        </Route>

        {/* Always Page not found declear at the end  */}
        {/* <Route path='/*' element={<PageNotFound />} /> */}

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default AppRoute
