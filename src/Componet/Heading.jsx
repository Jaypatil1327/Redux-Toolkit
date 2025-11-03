import { useSelector } from "react-redux";
function Heading() {
  const count = useSelector((state) => state.count);
  return <h1>Count is {count}</h1>;
}

export default Heading;
