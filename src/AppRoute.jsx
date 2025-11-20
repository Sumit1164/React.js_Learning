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
import UserList from './UserList';
import UserDetails from './UserDetails';
const AppRoute = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/users" element={<UserList />} />

          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/users/:id/:name" element={<UserDetails />} />

          {/* //!Route prefix, when user tap login then show URL like this: http://localhost/in/user/login */}
          <Route path="in">
            <Route path="/in/user">
              <Route path="/in/user/login" element={<LoginPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="/college" element={<CollegeNavBar />}>
          <Route index element={<CollegeStudent />} />
          <Route path="department" element={<CollegeDepartment />} />
          <Route path="details" element={<CollegeDetails />} />
        </Route>

        {/* Always Page not found declear at the end  */}
        <Route path="/*" element={<PageNotFound />} />

        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default AppRoute
