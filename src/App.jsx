import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import SchoolList from "./pages/schoolList/SchoolList";
import ASchool from "./pages/school/ASchool";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddSchool from "./pages/addSchool/AddSchool";
import Bookings from "./pages/bookings/Bookings";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MySessions from "./pages/mySessions/MySessions";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          // List of bookings you made (Student / learner / User)
          path: "/mysessions",
          element: <MySessions />,
        },
        {
          // Owner --- Instructor --- Requested by students
          path: "/bookings",
          element: <Bookings />,
        },
        {
          // Inbox ... List of messages
          path: "/messages",
          element: <Messages />,
        },
        {
          // A Single Message (User / Instructor)
          path: "/message/:id",
          element: <Message />,
        },
        {
          // Register A Driving School
          path: "/addschool",
          element: <AddSchool />,
        },
        {
          // A Single Driving School
          path: "/school/:id",
          element: <ASchool />,
        },
        {
          // List of Driving schools
          path: "/schools",
          element: <SchoolList />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
