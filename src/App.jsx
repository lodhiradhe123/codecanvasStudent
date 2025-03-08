import "./App.css";
import { Routes, Route, useLocation, Router, Link } from "react-router-dom";
import Login from "./components/login&signup/LoginPage";
import Signup from "./components/login&signup/SignUp";
import AdminDashboard from "./container/dashboard/AdminDashboard";
// import { Layout } from "antd";
import Webinar from "./container/menu/webinars/Webinar";
import Courses from "./container/menu/courses/Courses";
import Test from "./container/menu/tests/Test";
import Layout from "./container/layout/Layout";
import FreeTrial from "./container/menu/freetrial/FreeTrial";
import Certificates from "./container/menu/certificates/Certificates";
import { Breadcrumb } from "antd";
import StudentProfile from "./components/profile/StudentProfile";
import Downloads from "./container/menu/downloadsItems/Downloads";
import Achievements from "./container/menu/achievements/Achievements";
import Forum from "./container/menu/forum/Forum";
const Breadcrumbs = () => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((snippet, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>
            {snippet.charAt(0).toUpperCase() + snippet.slice(1)}
          </Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  return <Breadcrumb className="mb-4">{breadcrumbItems}</Breadcrumb>;
};

function App() {
  return (
    <>
      {/* breadcumb for simple navigation */}
      {/* <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="/dashboard">dashboard</a>,
          },
          {
            title: <a href="/dashboard/test">test</a>,
          },
        ]}
      /> */}

      <div className="">
        {/* <Breadcrumbs /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/studentProfile" element={<StudentProfile />} />
          {/* <Route path="/dashboard" element={<AdminDashboard />} /> */}
          {/* Layout wraps all routes to keep Navbar persistent */}
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="/dashboard/test" element={<Test />} />
            <Route path="/dashboard/webinar" element={<Webinar />} />
            <Route path="/dashboard/courses" element={<Courses />} />
            <Route path="/dashboard/freetrial" element={<FreeTrial />} />
            <Route path="/dashboard/certificates" element={<Certificates />} />
            <Route path="/dashboard/downloads" element={<Downloads />} />
            <Route path="/dashboard/achievements" element={<Achievements />} />
            <Route path="/dashboard/forum" element={<Forum />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
