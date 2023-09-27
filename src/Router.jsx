import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./routes/App";
import Bio from "./routes/Bio";
import Projects from "./routes/Projects";
import Intro from "./routes/Intro";
import ErrorPage from "./Error";
import Contact from "./routes/Contact";


const Router = () => {
    const router = createBrowserRouter([
        
            {
                path: "/",
                element: <Intro />,
                errorElement: <ErrorPage />,
                children: [
                  
                ]
              },
              {
                path: '/1',
                element:<App />,
                children: [
                  {
                    path: '/1/bio',
                    element: <Bio />
                  },
                  {
                    path: '/1/projects',
                    element: <Projects />
                  },
                  {
                    path: '/1/contact',
                    element: <Contact />
                  }
                ]
              },
              
              
       
    ]);
    return (<>
      
      <RouterProvider router={router} />
    </>
    )

}

export default Router