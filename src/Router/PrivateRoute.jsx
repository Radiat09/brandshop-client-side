import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { ContextData } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ContextData);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <div className="text-center w-full mt-20 mx-auto">
        <span className="loading loading-ring  w-1/2"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
