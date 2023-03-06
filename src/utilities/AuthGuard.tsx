import { AppStore } from "../redux/store"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PUBLIC_ROUTES } from "./routes";

const AuthGuard = () => {
    const userState = useSelector((store: AppStore) => store.user);
    // descomentar el true
    return true ? <Outlet /> : <Navigate replace to={PUBLIC_ROUTES.HOME} />;
}

export default AuthGuard;

