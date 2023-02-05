import { useLocation, Link } from "react-router-dom";

const Goback = () => {
  const location = useLocation();
  return <Link to={location.state?.from ?? "/"}>goBack</Link>;
};

export default Goback;
