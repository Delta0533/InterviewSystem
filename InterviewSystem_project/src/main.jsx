import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FillScore from './components/fillScore/FillScore.jsx'
import Table from './components/NameTable/table.jsx'
import './index.css'
import './output.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/fillScore",
    element: <FillScore />,
  },
  {
    path: "/table",
    element: <Table />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
