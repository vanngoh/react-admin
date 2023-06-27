import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Example from '../pages/Example';
import Overview from '../pages/Overview';
import Projects from '../pages/Projects';

const routeMap = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Example />,
      },
      {
        path: 'overview',
        element: <Overview />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'users/*',
        element: <Example />,
      },
      {
        path: 'models/*',
        element: <Example />,
      },
      {
        path: '/settings/*',
        element: <Example />,
      },
    ],
  },
  {
    path: '/login',
    element: <Example />,
  },
];

// const routes = createRoutesFromElements(
//   <Route path="/" element={<MainLayout />}>
//     <Route index element={<App />} />
//     <Route path="/projects" element={<App />} />
//     <Route path="/users/*" element={<App />} />
//     <Route path="/models/*" element={<App />} />
//   </Route>
// );

export const router = createBrowserRouter(routeMap);
