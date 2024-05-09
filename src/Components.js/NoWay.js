import { useEffect } from "react";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
function NoWay() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <Spinner />;
}
export { NoWay };
