import { useDispatch } from "react-redux";
import "./App.css";
import { useSelector } from "react-redux";
import { updateUser } from "./slices/userSlice";
import { RootState } from "./store/store";
import SignUpPage from "./pages/Signup";

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
      <SignUpPage />
    </>
  );
}

export default App;
