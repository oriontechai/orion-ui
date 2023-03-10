import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AuthGuard = () => {
    const userId = useSelector( (state: RootState) => state.uid );
    return userId != '' ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.HOME} />;
}

export default AuthGuard;