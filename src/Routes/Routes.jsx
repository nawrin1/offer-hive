import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import Error from "../pages/error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../privateroute/PrivateRoute";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyBids from "../pages/MyBids/MyBids";
import Addjobs from "../pages/Addjobs/Addjobs";
import MyPostedJob from "../pages/MyPostedJob/MyPostedJob";
import Updated from "../pages/Updated/Updated";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
          
        },{
          path:'/myBids',
          element:<PrivateRoute><MyBids></MyBids></PrivateRoute>
        },{
          path:'/add',
          element:<PrivateRoute><Addjobs></Addjobs></PrivateRoute>
        },{
          path:'/posted',
          element:<PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
        },{
          path:'/update/:id',
          element:<Updated></Updated>,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        }
      ]
    },
  ]);

export default router;