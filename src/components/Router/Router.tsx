import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import RootLayout from "../Layout/RootLayout";

// pages
import NotFound from "../../pages/NotFound/NotFound";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Trainers from "../../pages/Trainers/Trainers";
import Prices from "../../pages/Prices/Prices";
import Contact from "../../pages/Contact/Contact";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="prices" element={<Prices />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
