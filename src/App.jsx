import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      {/* Encasing pages in a parent layout file allows it to be applied to pages you want */}

      <Route index element={ <HomePage /> } />
      <Route path='/jobs' element={ <JobsPage /> } />
      <Route path='/add-job' element={ <AddJobPage /> } />
      <Route path='/jobs/:id' element={ <JobPage /> } loader={ jobLoader } />

      {/* Asterisk sign is a "catch all"; so same error page pops whenever there's error */}
      <Route path='*' element={ <NotFoundPage /> } />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={ router }/>
  )
}

export default App