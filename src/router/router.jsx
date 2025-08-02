import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";
import MyPosatedJobs from "../pages/MyPosatedJobs/MyPosatedJobs";
import ViewApplication from "../pages/ViewApplication/ViewApplication";
import AllJob from "../pages/AllJob/AllJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Page not found</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/jobs',
                element: <AllJob></AllJob>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`https://job-portal-server-seven-mu.vercel.app/jobs/${params.id}`)
            },
            {
                path: '/jonApply/:id',
                element: <PrivateRoute><JobApply></JobApply></PrivateRoute>,
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPosatedJobs></MyPosatedJobs></PrivateRoute>
            },
            {
                path: '/viewApplication/:job_id',
                element: <PrivateRoute><ViewApplication></ViewApplication></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-portal-server-seven-mu.vercel.app/job-application/jobs/${params.job_id}`)
            }
        ]
    },
]);

export default router;