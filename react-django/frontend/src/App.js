import './App.css';
import BasePage from './pages/BasePage/BasePage';
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyDashBoard from './pages/My DashBoard/MyDashBoard';
import MyProfile from './pages/MyProfilePage/MyProfile';
import Signup from './pages/SignupPage/Signup';
import ProfileUpdatePage from './pages/ProfileUpdate/ProfileUpdatePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DocumentUpload from './pages/UploadDocuments/DocumentUpload';
import CreateProject from './pages/CreateProject/CreateProject';
// import Form from './form.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: (<BasePage/>),
  },
  {
    path: "/dashboard",
    element: (<MyDashBoard/>),
  },
  {
    path: "/profile",
    element: (<MyProfile/>),
  },
  {
    path: "/signup",
    element: (<Signup/>),
  },
  {
    path: "/profileupdate",
    element: (<ProfileUpdatePage/>),
  },
  {
    path: "/documentUpload",
    element: (<DocumentUpload/>),
  },
  {
    path: "/createproject",
    element: (<CreateProject/>),
  },
  {
    path: "/*",
    element: (<ErrorPage/>),
  },
  // {
  //   path: "/form",
  //   element: (<Form/>),
  // },
  
]);


function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
