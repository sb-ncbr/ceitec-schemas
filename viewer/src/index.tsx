import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Page from './Components/Page';
import App from './App';
import Services from './Pages/Services';
import ServicesRequest from './Pages/ServicesRequest';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    handle: {
      crumb: () => <Link style={{color: "#FFF", textDecoration: "none"}} to="/">Home</Link>
    },
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "projects",
        handle: {
          crumb: () => <Link style={{color: "#FFF", textDecoration: "none"}} to={"/projects"}>Projects</Link>
        },
        children: [
          {
            path: ":projectId",
            element: <Page title="Project with ID" />,
            handle: {
              crumb: (data: any) => <p>{data.title}</p>
            },
            children: [
              {
                path: "edit",
                element: <Page title="Project edit with ID" />
              }
            ]
          },
          {
            path: "new",
            element: <Page title="New Project" />
          },
          {
            element: <Projects />,
            index: true
          },
        ],
      },
      {
        path: "services",
        handle: {
          crumb: () => <Link style={{color: "#FFF", textDecoration: "none"}} to={"/services"}>Marketplace</Link>
        },
        children: [
          {
            path: ":serviceId",
            element: <Page title="Service name" />,
            handle: {
              crumb: (data: any) => <p>{data.title}</p>
            },
            children: [
              {
                path: "view",
                element: <Page title="View service" />
              }
            ]
          },
          {
            path: "new",
            element: <ServicesRequest />
          },
          {
            element: <Services />,
            index: true
          },
        ],
      },
    ]
  }
])
root.render(
  <RouterProvider router={router}/>
  // <BrowserRouter>
  // <Routes>
  //   <Route path="/" element={<App />}>
  //     <Route index element={<Home />} handle={{crumb: () => <Link to="/">My e-INFRA CZ</Link>}} />
  //     <Route path='projects'>
  //       <Route path=':projectId' element={<h2>Project with ID</h2>} />
  //       <Route path=':projectId/edit' element={<h2>Edit Project with ID</h2>} />
  //       <Route path='new' element={<h2>New Project</h2>} />
  //       <Route index element={<Projects />} />
  //     </Route>
  //   </Route>
  // </Routes>
  // </BrowserRouter>
);