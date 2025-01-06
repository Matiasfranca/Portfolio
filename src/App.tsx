import './App.css';
import Bio from './routes/Bio';
import Box from './components/Box';
import Projects from './routes/Projects';
import Info from './routes/Info';
import Contact from './routes/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    Component: Box, children: [
      { path: "/", Component: Bio },
      { path: "Project", Component: Projects },
      { path: "Info", Component: Info },
      { path: "Contact", Component: Contact },
    ]
  },
])

export default function App() {
  return <RouterProvider router={router} />;
}