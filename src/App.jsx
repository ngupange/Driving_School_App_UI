import "./App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Sessions from "./pages/sessions/Sessions";
import Session from "./pages/session/Session";
import AddSession from "./pages/addSession/AddSession";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AddSchool from "./pages/addSession/AddSession";
import Bookings from "./pages/bookings/Bookings";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import InstructorSessions from "./pages/instructorSessions/InstructorSessions";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <div className="homeContainer">
          <Outlet />
        </div>
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

        // Sessions endpoints (Admin only / Instructor)
        //**********************************************

        {
          // List of bookings customers made to you (List of all sessions)
          path: "/insessions",
          element: <InstructorSessions />,
        },
        /* We will have something like this in future for each instructor
             
           <Link to="/insessions?instructor=currentuser">

       */

        {
          // A Single Driving School
          path: "/session/:id",
          element: <Session />,
        },
        {
          // List of classes / sessions
          path: "/sessions",
          element: <Sessions />,
        },


        {
          path: "/add",
          element: <AddSession />,
        },

        // Bookings endpoints (Admin / Instructor / User)
        //********************************************** 
        {
          // List of bookings user made
          path: "/bookings",
          element: <Bookings />,
        },


        // Messages endpoints (Admin and authenticated user)
        //**********************************************
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
