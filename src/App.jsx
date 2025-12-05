import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import PowerPlantDetails from "./pages/PowerPlantDetails/PowerPlantDetails";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactus/Contactus";
import Services from "./pages/services/Service";
import Projects from "./pages/projects/Project";
import PowerStationProjects from "./pages/projectsSec/ProjectSection";
import Career from "./pages/careers/Career";
import AdminApplications from "./pages/Admin/AdminApplications";
import SignupPage from "./pages/signup/Signup";
import SignInPage from "./pages/signin/SignIn";
import JobManagement from "./pages/publishedJobVacancy/publishedJobs";

function App() {
  const queryClient = new QueryClient();

  // Layout for pages that include Navbar and Footer
  const MainLayout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignupPage />, // login page without navbar/footer
    },
    {
      path: "/signIn",
      element: <SignInPage />, // login page without navbar/footer
    },
    { path: "/admin/applications", element: <AdminApplications /> },
    { path: "/jobmanagement", element: <JobManagement /> },
    {
      path: "/",
      element: <MainLayout />, // main layout for all other pages
      children: [
        { path: "/", element: <Home /> },
        { path: "/plant/:plantId", element: <PowerPlantDetails /> },
        { path: "/contact", element: <ContactUs /> },
        { path: "/aboutus", element: <AboutUs /> },
        { path: "/career", element: <Career /> },
        { path: "/service", element: <Services /> },
        { path: "/project", element: <PowerStationProjects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
