import { Routes as RouteList, Route } from "react-router-dom";
import Home from "screens/home";

const Routes = () => {
  return (
    <RouteList>
      <Route path="/" element={<Home />} />
    </RouteList>
  );
};

export default Routes;
