import { Navigate, Outlet, useParams } from "react-router-dom";
import { Note } from "../types/Types";

const Layout = ({ notes }: { notes?: Note[] }) => {
  const { id } = useParams();

  const found = notes?.find((note) => note.id === id);

  if (!found) return <Navigate to={"/"} replace />;

  return <Outlet context={found} />;
};

export default Layout;
