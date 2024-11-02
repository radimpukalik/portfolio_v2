import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "skills", element: <Skills /> },
      { path: "projects", element: <Projects /> },
      { path: "contactme", element: <ContactMe /> },
    ],
  },
]);

export default router;
