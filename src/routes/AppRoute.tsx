import { useRoutes} from "react-router-dom";
import Home from "../page/Home";


function AppRouter() {
  const routes = useRoutes([
    {path: "/", element:<Home />}
  ])

  return (
    routes
  );
}

export default AppRouter;
