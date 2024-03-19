import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app/app";
import { Dashboard } from "./app/dashboard/dashboard";
import { SignUp } from "./auth/sign-up";
import { SignIn } from "./auth/sign-in";
import { AuthLayout } from "./_layouts/auth/auth";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
        ],
    },
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            { path: '/sign-up', element: <SignUp /> },
            { path: '/sign-in', element: <SignIn /> },
        ],
    }
])