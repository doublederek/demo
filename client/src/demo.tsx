import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import Error from './routes/Error';

const router = createBrowserRouter([{
  path: '/',
  element: <Root />,
  errorElement: <Error />,
}]);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterProvider router={ router } />);
