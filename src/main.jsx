import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import './index.css';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Users from './Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path:'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: 'signin',
    element: <SignIn></SignIn>
  },
  {
    path: 'signup',
    element:<SignUp></SignUp>
  },
  {
    path: 'users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/users')
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
