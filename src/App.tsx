import { useDispatch } from "react-redux";
import "./App.css";
import { useSelector } from "react-redux";
import { updateUser } from "./slices/userSlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  dispatch(
    updateUser({
      name: "hakan",
    })
  );

  return (
    <>
      <h2 className="font-bold text-3xl text-red-500">{user.name}</h2>
    </>
  );
}

export default App;
